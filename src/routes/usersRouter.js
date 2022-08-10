const router = require('express').Router()
const {
  signup
} = require('../controllers/usersController')

router.get('/', signup)

module.exports = router
