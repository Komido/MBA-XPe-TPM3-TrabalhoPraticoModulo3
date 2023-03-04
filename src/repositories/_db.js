import Sequelize from "sequelize";

import Proprietario from "../models/proprietario.model.js";
import Animal from "../models/animal.model.js";

const models = [Proprietario, Animal];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(
      "postgres://hshtargr:f4pyJc6DdsDJDFCtGEZhX-X6QKJdbw1c@baasu.db.elephantsql.com/hshtargr",
      {
        dialect: "postgres",
        define: {
          timestamps: false,
        },
      }
    );

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
