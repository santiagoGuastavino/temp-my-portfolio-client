require('dotenv').config()
const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
const mainRouter = require('./routes/main')
const usersRouter = require('./routes/users')
const transactionsRouter = require('./routes/transactions')

app.use('/', mainRouter)
app.use('/users', usersRouter)
app.use('/transactions', transactionsRouter)

app.use((req, res, next) => {
  const err = new Error('Not found.')
  err.code = 404
  next(err)
})

// error handler
app.use((err, req, res, next) => {
  err.code = err.code || 500
  err.message = err.message || 'Internal server error.'
  return res.status(err.code).json({
    status: err.code,
    error: err.message
  })
})

// port set up
const PORT = process.env.PORT || 3001

// application init
const db = require('./database/models')
db.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Serving @ ${PORT}`))
  })
