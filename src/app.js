require('dotenv').config()
const express = require('express')

const app = express()

// routes
const userRouter = require('./routes/usersRouter.js')

app.use('/users', userRouter)

// error handler
app.use((err, req, res, next) => {
  res.status(err.status).json({ error: err.message })
})

// port set up
const PORT = process.env.PORT | 3001

// application init
const db = require('./database/models')
async function start () {
  await db.sequelize.sync()
  try {
    app.listen(PORT, () => console.log(`Serving @ ${PORT}`))
  } catch (err) {
    console.log(err)
  }
}

start()
