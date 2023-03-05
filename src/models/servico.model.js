import Sequelize from "sequelize";
import db from "../repositories/_db.js";

import Animal from "./animal.model.js";

const Servico = db.define(
  "servicos",
  {
    servico_id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

Servico.belongsTo(Animal, { foreignKey: "animal_id" });
Animal.hasMany(Servico, { foreignKey: "animal_id" });

export default Servico;
