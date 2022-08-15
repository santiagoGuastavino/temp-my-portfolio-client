const router = require('express').Router()
const transactionsController = require('../controllers/transactionsController')

router.get('/', transactionsController.getLastTen)
router.post('/', transactionsController.create)

module.exports = router
