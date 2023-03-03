import Sequelize from "sequelize";
import db from "../repositories/_db.js";

import Proprietario from "./proprietario.model.js";

const Animal = db.define(
  "animais",
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
    underscored: true,
  }
);
Animal.belongsTo(Proprietario, {
  foreignKey: "proprietario_id",
});

export default Animal;
