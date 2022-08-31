const db = require('../database/models')
const { responseHandler } = require('../helpers/responseHandler')

const usersController = {
  signUp: async (req, res, next) => {
    const user = await db.User.findOne({
      where: {
        email: req.body.email
      }
    })
    try {
      if (user) {
        return responseHandler(409, 'E-mail already in use.', next)
      } else {
        db.User.create({
          email: req.body.email,
          password: req.body.password
        })
          .then(async (newUser) => {
            db.Account.create({
              userId: newUser.id
            })
              .then(() => res.status(201).json(responseHandler(201)))
              .catch(err => next(err))
          })
          .catch(err => next(err))
      }
    } catch (err) {
      return next(err)
    }
  },

  signIn: async (req, res, next) => {
    const userToLog = await db.User.findOne({
      where: {
        email: req.body.email
      }
    })
    try {
      if (!userToLog) {
        return responseHandler(409, 'E-mail not registered.', next)
      } else {
        return res.status(200).json(responseHandler(200))
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = usersController
