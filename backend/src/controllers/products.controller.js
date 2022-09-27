import { getConnection, sql } from "../database/connection";
import querys from "../database/querys";

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

    const { CodigoArticulo, Marca, Descripcion, Precio, Stock, Unidad } = req.body

    if (CodigoArticulo == null || Marca == null || Descripcion == null || Precio == null || Stock == null || Unidad == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

        await pool
            .request()
            .input("CodigoArticulo", sql.Int, CodigoArticulo)
            .input("Marca", sql.VarChar, Marca)
            .input("Descripcion", sql.Text, Descripcion)
            .input("Precio", sql.Float, Precio)
            .input("Stock", sql.Int, Stock)
            .input("Unidad", sql.VarChar, Unidad)
            .query(querys.addNewProduct);
        res.json({ CodigoArticulo, Marca, Descripcion, Precio, Stock, Unidad });
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
    const pool = await getConnection();
    
    const result = await pool
        .request()
        .query(querys.getTotalProducts);
  console.log(result)

  res.json(result.recordsets);






    try {

    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Actualiza un producto
export const updateProductsByCode = async (req, res) => {

    const { Marca, Descripcion, Precio, Stock, Unidad } = req.body;
    const { code } = req.params;
    console.log("111", Marca, Descripcion, Precio, Stock, Unidad)
    if (Marca == null || Descripcion == null || Precio == null || Stock == null || Unidad == null) {
        console.log("333", Marca, Descripcion, Precio, Stock, Unidad)
        return res.status(400).json({ msg: "Complete todos los campos." })
        
    }
            const pool = await getConnection();

        await pool
            .request()
            .input("Marca", sql.VarChar, Marca)
            .input("Descripcion", sql.Text, Descripcion)
            .input("Precio", sql.Float, Precio)
            .input("Stock", sql.Int, Stock)
            .input("Unidad", sql.VarChar, Unidad)
            .input("code", sql.Int, code)
            .query(querys.updateProductsByCode);
        res.json({ Marca, Descripcion, Precio, Stock, Unidad });
    try {


        console.log("222", Marca, Descripcion, Precio, Stock, Unidad)
    } catch (error) {
        
        res.status(500);
        res.status(error.message);
    };
}