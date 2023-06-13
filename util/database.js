const Sequelize = require("sequelize");

const sequelize = new Sequelize("app", "root", "praabindhp", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
