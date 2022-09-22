const cnx = require('./cnx');
const sql = require('mssql');

async function getEst(){
    try{
        let pool = await sql.connect(cnx);
        let salida = await pool.request().query("select * from Stock");
    }
    catch (err){
        console.log(err);
    }
}
getEst();
module.exports = {
    getEs: getEst
}