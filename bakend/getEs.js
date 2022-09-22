const cnx = require('./cnx');
const sql = require('mssql');

async function getEs(){
    try{
        let pool = await sql.connect(cnx);
        let res = await pool.request().query('select * from Stock');
        return res.recordsets;
    }catch (err){
        console.log(err);
    }
}
getEs();
module.exports = {
    getEs: getEs
}