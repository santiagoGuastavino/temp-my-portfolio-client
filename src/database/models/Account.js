module.exports = (sequelize, DataTypes) => {
  const alias = 'Account'

  const cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    balance: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: 'user_id'
    }
  }

  const config = {
    underscored: true,
    tableName: 'accounts',
    timestamps: false,
    paranoid: false,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8mb4_unicode:ci'
    }
  }

  const Account = sequelize.define(
    alias,
    cols,
    config
  )

  Account.associate = (model) => {
    Account.belongsTo(model.User, {
      as: 'user',
      foreignKey: 'user_id'
    })
    Account.hasMany(model.Transaction, {
      as: 'transactions'
    })
  }

  return Account
}
