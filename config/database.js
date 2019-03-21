const Sequelize = require('sequelize');

let db_name = 'employeez';
    user = 'dev';
    pw = null;

console.log("Connecting to database...")
module.exports = new Sequelize(db_name, user, pw, {
    host:'127.0.0.1',
    dialect: 'postgres',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        aquire: 30000,
        idle: 10000
    },

});
console.log("Connected to database.")
