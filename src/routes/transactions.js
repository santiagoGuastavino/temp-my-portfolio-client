const router = require('express').Router()
const transactionsController = require('../controllers/transactionsController')

router.get('/', transactionsController.list)
router.post('/', transactionsController.create)
router.get('/:id', transactionsController.getOne)
router.put('/:id', transactionsController.update)
router.delete('/:id', transactionsController.delete)

module.exports = router
