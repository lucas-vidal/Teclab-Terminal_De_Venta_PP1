<<<<<<< HEAD
import { getConnection, sql } from "../database/connection";
import querys from "../database/querys";
=======
import { getConnection, sql } from "../database/connection.js";
import querys from "../database/querys.js";
>>>>>>> d21f8273c2205695484788bc42561078f3fabfea

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
<<<<<<< HEAD

    const { CodigoArticulo, Marca, Descripcion, Precio, Stock, Unidad } = req.body

    if (CodigoArticulo == null || Marca == null || Descripcion == null || Precio == null || Stock == null || Unidad == null) {
=======
    const { code, brand, description, price, quentity, unit } = req.body

    if (code == null || description == null || price == null || quentity == null || unit == null) {
>>>>>>> d21f8273c2205695484788bc42561078f3fabfea
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();
<<<<<<< HEAD

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
=======
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
>>>>>>> d21f8273c2205695484788bc42561078f3fabfea
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
<<<<<<< HEAD

=======
>>>>>>> d21f8273c2205695484788bc42561078f3fabfea
        const result = await pool
            .request()
            .input("code", code)
            .query(querys.getProductByCode);
<<<<<<< HEAD

=======
>>>>>>> d21f8273c2205695484788bc42561078f3fabfea
        res.send(result.recordsets[0]);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Elimina un producto por el codigo
export const deleteProductByCode = async (req, res) => {
    const { code } = req.params;

<<<<<<< HEAD

    if (code == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }
    try {
        const pool = await getConnection();

=======
    if (code == null) {
        return res.status(400).json({ msg: "Complete todos los campos." })
    }

    try {
        const pool = await getConnection();
>>>>>>> d21f8273c2205695484788bc42561078f3fabfea
        const result = await pool
            .request()
            .input("code", code)
            .query(querys.deleteProductByCode);
<<<<<<< HEAD

=======
>>>>>>> d21f8273c2205695484788bc42561078f3fabfea
        res.sendStatus(204);
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Contar cantidad de productos en tabla
export const getTotalProducts = async (req, res) => {
<<<<<<< HEAD
    const pool = await getConnection();
    
    const result = await pool
        .request()
        .query(querys.getTotalProducts);
  console.log(result)

  res.json(result.recordsets);






    try {

=======

    try {
    const pool = await getConnection();
    const result = await pool
        .request()
        .query(querys.getTotalProducts);
    res.json(result.recordsets);
>>>>>>> d21f8273c2205695484788bc42561078f3fabfea
    } catch (error) {
        res.status(500);
        res.status(error.message);
    }
}

//Actualiza un producto
export const updateProductsByCode = async (req, res) => {

<<<<<<< HEAD
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
        
=======
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
>>>>>>> d21f8273c2205695484788bc42561078f3fabfea
        res.status(500);
        res.status(error.message);
    };
}