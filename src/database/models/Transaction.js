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
    categoryId: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: 'category_id'
    },
    transactionTypeId: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: 'transaction_type_id'
    },
    accountId: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: 'account_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
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
    Transaction.belongsTo(model.Category, {
      as: 'category',
      foreignKey: 'category_id'
    })
    Transaction.belongsTo(model.TransactionType, {
      as: 'transactionType',
      foreignKey: 'transaction_type_id'
    })
    Transaction.belongsTo(model.Account, {
      as: 'account',
      foreignKey: 'account_id'
    })
  }

  return Transaction
}
