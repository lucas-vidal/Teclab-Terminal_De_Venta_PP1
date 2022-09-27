import sql from 'mssql'
<<<<<<< HEAD
import config from '../config';
=======
import config from '../config.js';
>>>>>>> d21f8273c2205695484788bc42561078f3fabfea

const dbSettings = {
    user : config.dbUser,
    password : config.dbPassword,
    server : config.dbServer,
    database : config.dbDatabase,
    options : {
        encrypt : true,
        trustServerCertificate : true,
    }
};

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        return pool;
    } catch (error) {
        console.log(error);
    } 
}
export { sql };