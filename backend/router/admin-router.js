const express = require('express')
const adminController = require('../controllers/admin-controllers')
const authMiddlewear = require('../middleweares/auth-middlears')
const adminMiddleware = require('../middleweares/admin-middleware')

const router = express.Router()

router.route('/users').get(authMiddlewear, adminMiddleware, adminController.getAllData)
router.route('/user/:id').get(authMiddlewear, adminMiddleware, adminController.getUserById)
router.route('/user/update/:id').patch(authMiddlewear, adminMiddleware, adminController.updatetUserById)
router.route('/delete/:ids').delete(authMiddlewear, adminMiddleware, adminController.deleteuser)



router.route('/contact').get(authMiddlewear, adminMiddleware, adminController.contact)
router.route('/contact/delete/:ids').delete(authMiddlewear, adminMiddleware, adminController.deleteContactById)



module.exports = router;