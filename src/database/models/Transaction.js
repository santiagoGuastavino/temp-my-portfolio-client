import { Sequelize, DataTypes } from 'sequelize'

const sequelize = new Sequelize('sqlite::memory:')

export const Transaction = sequelize.define('Transaction', {
  id: {
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  accountId: {
    type: DataTypes.INTEGER.UNSIGNED
  },
  categoryId: {
    type: DataTypes.INTEGER.UNSIGNED
  },
  concept: {
    type: DataTypes.STRING,
    allowNull: false
  },
  amount: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false
  },
  type: {
    type: DataTypes.CHAR(3),
    allowNull: false
  }
}, {
  timestamps: true
})

Transaction.belongsTo('accounts', {
  foreignKey: 'accountId'
})

Transaction.belongsTo('categories', {
  foreignKey: 'categoryId'
})
