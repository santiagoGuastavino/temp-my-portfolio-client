const db = require('../database/models')

const usersController = {
  signup: async (req, res, next) => {
    const users = await User.findAll()
    try {
      return res.status(200).json(users)
    } catch (err) {
      next(err)
    }
  }
}

module.exports = usersController
