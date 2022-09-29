const cnx = require('./cnx');
const sql = require('mssql');

async function getEs(){
    try{
        const pool = await sql.connect(cnx);
        const salida = await pool.request().query("select 1");
        console.log(salida.recordsets);
    }
    catch (err){
        console.log(err); 
    }
}
getEs();
module.exports = {
    getEs: getEs
}