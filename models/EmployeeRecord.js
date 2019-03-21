const Sequelize = require('sequelize');
const db = require('../config/database');

const EmployeeRecord = db.define('EmployeeRecord', {
  /*
  EmployeeRecord Model Sequelize Definition
  */
    ProjectId: Sequelize.INTEGER,
    EmployeeId: Sequelize.INTEGER,
    PeriodNumber: Sequelize.INTEGER,
    WorkDate: Sequelize.DATE,
    RegularHours: Sequelize.FLOAT,
    OverTimeHours: Sequelize.FLOAT,
    SpecialOverTimeHours: Sequelize.FLOAT
})

module.exports = EmployeeRecord;
