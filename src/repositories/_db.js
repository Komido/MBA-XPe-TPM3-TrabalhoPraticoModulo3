import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://hshtargr:f4pyJc6DdsDJDFCtGEZhX-X6QKJdbw1c@baasu.db.elephantsql.com/hshtargr",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
