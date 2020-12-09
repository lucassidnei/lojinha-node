const { Pool } = require('pg');

module.exports = new Pool({
    user: 'lucassidnei',
    password: '',
    host: 'localhost',
    port: '5432',
    database: 'db_ecommerce'
});