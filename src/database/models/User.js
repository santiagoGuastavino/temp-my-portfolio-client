module.exports = (sequelize, DataTypes) => {
  const alias = 'User'

  const cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    email: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }

  const config = {
    underscored: true,
    tableName: 'users',
    timestamps: false,
    paranoid: false,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8mb4_unicode:ci'
    }
  }

  const User = sequelize.define(
    alias,
    cols,
    config
  )

  User.associate = (model) => {
    User.hasOne(model.Account, {
      as: 'account',
      foreignKey: 'user_id'
    })
  }

  return User
}
