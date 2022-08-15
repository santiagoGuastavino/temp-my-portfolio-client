module.exports = (sequelize, DataTypes) => {
  const alias = 'CategoryUser'

  const cols = {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    categoryId: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: 'category_id'
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: 'user_id'
    }
  }

  const config = {
    underscored: true,
    tableName: 'category_user',
    timestamps: false,
    paranoid: false,
    charset: 'utf8',
    dialectOptions: {
      collate: 'utf8mb4_unicode:ci'
    },
    freezeTableName: true
  }

  const CategoryUser = sequelize.define(
    alias,
    cols,
    config
  )

  CategoryUser.associate = (model) => {
    CategoryUser.belongsTo(model.Category, {
      foreignKey: 'category_id'
    })
    CategoryUser.belongsTo(model.User, {
      foreignKey: 'user_id'
    })
  }

  return CategoryUser
}
