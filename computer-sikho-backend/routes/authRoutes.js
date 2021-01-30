const express = require('express');
const router = express.Router();

const AuthCtrl = require('../controllers/auth');

router.post('/register-staff', AuthCtrl.CreateStaff);
router.post('/login-staff', AuthCtrl.LoginStaff);

module.exports = router;
