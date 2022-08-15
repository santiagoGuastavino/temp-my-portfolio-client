module.exports = (sequelize, DataTypes) => {
  const alias = 'Transaction'

  const cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    concept: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.CHAR(3),
      allowNull: false
    },
    accountId: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: 'account_id'
    },
    categoryId: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: 'category_id'
    }
  }

  const config = {
    underscored: true,
    tableName: 'transactions',
    timestamps: true,
    paranoid: false,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8mb4_unicode:ci'
    }
  }

  const Transaction = sequelize.define(
    alias,
    cols,
    config
  )

  Transaction.associate = (model) => {
    Transaction.belongsTo(model.Account, {
      as: 'account',
      foreignKey: 'account_id'
    })
    Transaction.belongsTo(model.Category, {
      as: 'category',
      foreignKey: 'category_id'
    })
  }

  return Transaction
}
