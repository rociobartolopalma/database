const mysql = require('mysql2');

const config = {
    host: 'localhost',
    port: 3306,
    database: 'backend',
    user: 'root',
    password: '12345'
};

const connection = mysql.createConnection(config);

module.exports = connection;