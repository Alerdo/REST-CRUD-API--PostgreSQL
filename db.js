const Pool = require ('pg').Pool //I already installed this "pg libray" 

const pool  = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: "password",
    port: 5432
});


module.exports = pool;
