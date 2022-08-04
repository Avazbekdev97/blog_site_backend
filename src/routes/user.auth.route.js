const express = require('express')
const { userLogin, userRegister } = require('../controllers/user.auth.controller')
const router = express.Router()

// register route
router.post('/', userRegister)
// login route  
router.post('/login', userLogin)

module.exports = router