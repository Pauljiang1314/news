//配置mysql包
//处理mysql包
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'newssql'
});

connection.connect();

module.exports = connection;