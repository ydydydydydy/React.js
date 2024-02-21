const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'project-db-campus.smhrd.com',
    user: 'campus_23IS_IoT2_P2_1',
    password: 'smhrd1',
    port: 3307,
    database: 'campus_23IS_IoT2_P2_1'
});

conn.connect();

module.exports = conn;