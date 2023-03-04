import Sequelize, { Model } from "sequelize";

class Proprietario extends Model {
  static init(sequelize) {
    super.init(
      {
        proprietario_id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        telefone: {
          type: Sequelize.STRING,
          allowNull: false,
        },
      },
      {
        sequelize,
        underscored: true,
        tableName: "proprietarios",
      }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Animal, {
      foreignKey: "proprietario_id",
      as: "animais",
    });
  }
}

export default Proprietario;
