const Pool = require ('pg').Pool //I already installed this "pg libray" 

const pool  = new Pool({
    user: "postgres",
    host: "localhost",
    database: "students",
    password: "Haxhiballabani11",
    port: 5432
});


module.exports = pool;