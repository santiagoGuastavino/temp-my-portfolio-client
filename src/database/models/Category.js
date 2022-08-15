module.exports = (sequelize, DataTypes) => {
  const alias = 'Category'

  const cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }

  const config = {
    underscored: true,
    tableName: 'categories',
    timestamps: false,
    paranoid: false,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8mb4_unicode:ci'
    }
  }

  const Category = sequelize.define(
    alias,
    cols,
    config
  )

  Category.associate = (model) => {
    Category.hasOne(model.Transaction, {
      as: 'transaction',
      foreignKey: 'category_id'
    })
    Category.belongsToMany(model.User, {
      as: 'users',
      through: 'category_user',
      foreignKey: 'category_id',
      otherKey: 'user_id',
      timestamps: false
    })
  }

  return Category
}
