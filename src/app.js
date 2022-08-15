require('dotenv').config()
const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
const userRouter = require('./routes/users.js')

app.use('/users', userRouter)

// error handler
app.use((err, req, res, next) => {
  res.status(err.status).json({ error: err.message })
})

// port set up
const PORT = process.env.PORT || 3001

// application init
const db = require('./database/models')
db.sequelize.sync()
  .then(() => {
    app.listen(PORT, () => console.log(`Serving @ ${PORT}`))
  })
