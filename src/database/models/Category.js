module.exports = (sequelize, DataTypes) => {
  const alias = 'Category'

  const cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
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
    Category.hasMany(model.Transaction, {
      as: 'transactions',
      foreignKey: 'category_id'
    })
  }

  return Category
}
