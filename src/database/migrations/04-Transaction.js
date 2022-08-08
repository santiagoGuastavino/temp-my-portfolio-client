module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      accountId: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        references: {
          model: 'accounts',
          key: 'id'
        }
      },
      categoryId: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      concept: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
      },
      amount: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      },
      type: {
        type: Sequelize.DataTypes.CHAR(3),
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions')
  }
}
