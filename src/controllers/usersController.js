const db = require('../database/models')

const usersController = {
  signUp: async (req, res, next) => {
    // check if email unique
    // hash password
    // store in database

    // create account assign user ID
    // create default categories assign userID

    // return jwt

    const newUser = await db.User.create({
      email: req.body.email,
      password: req.body.password
    })
    try {
      db.Account.create({
        userId: newUser.id
      })
        .then(success => res.status(200).json(success))
        .catch(err => next(err))
    } catch (err) {
      console.log('i am the user creation block')
      next(err)
    }
  },

  signIn: async (req, res, next) => {
    // check if email exists in DB
    // check if passwords hash sync

    // return jwt
    res.send('signin')
  }
}

module.exports = usersController
