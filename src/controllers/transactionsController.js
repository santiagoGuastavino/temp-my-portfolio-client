const db = require('../database/models')
const { responseHandler } = require('../helpers/responseHandler')

const transactionsController = {
  list: async (req, res, next) => {
    const account = await db.Account.findOne({
      where: {
        userId: req.body.userId
      }
    })
    try {
      db.Transaction.findAll({
        where: {
          accountId: account.id
        }
      })
        .then(transactions => res.status(200).json(responseHandler(200, transactions)))
    } catch (err) {
      next(err)
    }
  },

  create: async (req, res, next) => {
    console.log(req.body)
    const creation = await db.Transaction.create({
      amount: req.body.amount,
      concept: req.body.concept,
      categoryId: req.body.categoryId,
      transactionTypeId: req.body.transactionTypeId,
      accountId: req.body.accountId
    })
    try {
      // db.Account.
      res.send(creation)
    } catch (err) {
      next(err)
    }
  },

  getOne: async (req, res, next) => {

  },

  update: async (req, res, next) => {

  },

  delete: async (req, res, next) => {

  }
}

module.exports = transactionsController
