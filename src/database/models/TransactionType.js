module.exports = (sequelize, DataTypes) => {
  const alias = 'TransactionType'

  const cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }

  const config = {
    underscored: true,
    tableName: 'transaction_types',
    timestamps: false,
    paranoid: false,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8mb4_unicode:ci'
    }
  }

  const TransactionType = sequelize.define(
    alias,
    cols,
    config
  )

  TransactionType.associate = (model) => {
    TransactionType.hasOne(model.Transaction, {
      as: 'transaction',
      foreignKey: 'transaction_type_id'
    })
  }

  return TransactionType
}
