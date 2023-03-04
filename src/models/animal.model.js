import Sequelize, { Model } from "sequelize";

class Animal extends Model {
  static init(sequelize) {
    super.init(
      {
        animal_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        tipo: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: "animais",
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Proprietario, { foreignKey: "proprietario_id" });
  }
}

export default Animal;
