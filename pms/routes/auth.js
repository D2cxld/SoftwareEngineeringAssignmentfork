const mysql = require('mysql');
const express = require('express');
const authcontroller = require('/Users/davidorji/SoftwareEngineeringAssignmentfork/controllers/auth');

const router =express.Router(); 

router.post('/resetpassword',authcontroller.resetpassword);

module.exports= router; 