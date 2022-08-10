module.exports = (sequelize, DataTypes) => {
  const alias = 'Account'

  const cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: 'user_id'
    },
    balance: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0
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
    Account.hasOne(model.Transaction, {
      as: 'user',
      foreignKey: 'user_id'
    })
  }

  return Account
}
