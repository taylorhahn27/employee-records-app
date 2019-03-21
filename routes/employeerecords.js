const express = require('express');
const router = express.Router();
const db = require('../config/database');
const EmployeeRecord = require('../models/EmployeeRecord');

// Employee Record API Endpoints

router.get('/', (req, res) =>  // GET defaults to returning all records
    EmployeeRecord.findAll()
    .then(records => {
        console.log(records);
        res.sendStatus(200);
    })
    .catch(err => console.log(err)));

router.post('/', (req, res) => {
    let {
      ProjectId,
      EmployeeId,
      PeriodNumber,
      WorkDate,
      RegularHours,
      OverTimeHours,
      SpecialOverTimeHours } = req.body;
    EmployeeRecord.create({
        ProjectId,
        EmployeeId,
        PeriodNumber,
        WorkDate,
        RegularHours,
        OverTimeHours,
        SpecialOverTimeHours
    })
    .then(record => res.sendStatus(200))
    .catch(err => console.log(err));
});

module.exports = router;
