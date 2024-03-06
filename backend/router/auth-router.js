const express = require('express')
const router = express.Router()
const authcontrollers = require('../controllers/auth-controllres')
const authMiddlewear = require('../middleweares/auth-middlears')




router.route('/').get(authcontrollers.home)
router.route('/createuser').post(authcontrollers.createUser)
router.route('/logIn').post(authcontrollers.login)
router.route('/user').get(authMiddlewear, authcontrollers.user)

module.exports = router