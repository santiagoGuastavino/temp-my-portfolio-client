const db = require('../database/models')
const { responseHandler } = require('../helpers/responseHandler')

const mainController = {
  welcome: async (req, res, next) => {
    const account = await db.Account.findOne({
      where: {
        userId: req.body.userId
      }
    })
    try {
      db.Transaction.findAll({
        where: {
          accountId: account.id
        },
        limit: 10,
        order: [
          ['id', 'DESC']
        ]
      })
        .then((transactions) => {
          const balanceAndTransactions = {
            balance: account.balance,
            transactions
          }
          return res.status(200).json(responseHandler(200, balanceAndTransactions))
        })
    } catch (err) {
      next(err)
    }
  }
}

module.exports = mainController
