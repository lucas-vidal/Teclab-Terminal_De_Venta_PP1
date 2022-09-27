import { getConnection, sql } from "../database/connection.js";
import querys from "../database/querys.js";

//Consulta la tabla de STOCK
export const getProducts = async (req, res) => {
    try {
        const pool = await getConnection();
        const result = await pool.request().query(querys.getAllProducts)
        res.json(result.recordsets)
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Crea nuevo producto
export const createNewProducts = async (req, res) => {
    const { code, brand, description, price, quentity, unit } = req.body

    if (code == null || description == null || price == null || quentity == null || unit == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();
        await pool
            .request()
            .input("code", sql.Int, code)
            .input("brand", sql.VarChar, brand)
            .input("description", sql.Text, description)
            .input("price", sql.Int, price)
            .input("quentity", sql.Int, quentity)
            .input("unit", sql.VarChar, unit)
            .query(querys.addNewProduct);
        res.json({ code, brand, description, price, quentity, unit });
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Consulta un producto por el codigo
export const getProductByCode = async (req, res) => {
    const { code } = req.params;

    if (code == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("code", code)
            .query(querys.getProductByCode);
        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Elimina un producto por el codigo
export const deleteProductByCode = async (req, res) => {
    const { code } = req.params;

    if (code == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }

    try {
        const pool = await getConnection();
        const result = await pool
            .request()
            .input("code", code)
            .query(querys.deleteProductByCode);
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Contar cantidad de productos en tabla
export const getTotalProducts = async (req, res) => {

    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(querys.getTotalProducts);
    res.json(result.recordsets);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Actualiza un producto
export const updateProductsByCode = async (req, res) => {

    const { brand, description, price, quentity, unit  } = req.body;
    const { code } = req.params;

    if (brand == null || description == null || price == null || quentity == null || unit == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
       
    try {
 const pool = await getConnection();
        await pool
            .request()
            .input("brand", sql.VarChar, brand)
            .input("description", sql.Text, description)
            .input("price", sql.Int, price)
            .input("quentity", sql.Int, quentity)
            .input("unit", sql.VarChar, unit)
            .input("code", sql.Int, code)
            .query(querys.updateProductsByCode);
        res.json({ brand, description, price, quentity, unit });
    } catch (error) {
        res.status(500);
        res.status(error.message);
    };
}