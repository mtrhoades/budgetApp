// dependencies
const Pool = require('pg').Pool; 

// connection
const pool = new Pool ({
    user: 'postgres',
    password: 'Ruckus179',
    host: 'localhost',
    port: 5432,
    database: 'personalbudget'
});

module.exports = pool; // export to use in controller file.