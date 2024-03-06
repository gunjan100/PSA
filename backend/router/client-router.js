const express = require('express')
const authMiddlewear = require('../middleweares/auth-middlears')
const adminMiddleware = require('../middleweares/admin-middleware')
const clientController = require('../controllers/client-controllers')

const router = express.Router()


router.route('/clientrecord').post(clientController.searchByCertNo)
router.route('/client').post(authMiddlewear, adminMiddleware, clientController.registerClient)
router.route('/viewclient').get(authMiddlewear, adminMiddleware, clientController.viewClient)
router.route('/delete/client/:ide').delete(authMiddlewear, adminMiddleware, clientController.deleteClient)
router.route('/client/:id').get(authMiddlewear, adminMiddleware, clientController.getClientByID)
router.route('/client/update/:id').patch(authMiddlewear, adminMiddleware, clientController.updateClientByID)
router.route('/client/exp').post(authMiddlewear, adminMiddleware, clientController.searchByExpDate)

router.route('/client/application').post(clientController.clientApplication)

module.exports = router