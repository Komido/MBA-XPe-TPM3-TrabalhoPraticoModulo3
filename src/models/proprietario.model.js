import Sequelize from "sequelize";
import db from "../repositories/_db.js";

import Animal from "./animal.model.js";

const Proprietario = db.define(
  "proprietarios",
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
    underscored: true,
  }
);

export default Proprietario;
