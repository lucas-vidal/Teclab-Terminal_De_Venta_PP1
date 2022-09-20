const cnx = require('/conexion');
const sql = require('mssql');

async function getDatos(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query("select * from stock")
    }
    catch (err){
        console.log(err);
    }
};

getDatos();
module.exports = {
    getDatos: getDatos
}
