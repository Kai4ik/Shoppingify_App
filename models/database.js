require("dotenv").config();
const Sequelize = require("sequelize");
const { options } = require("../routes/items");

const db = new Sequelize(
  "d28lu6uo4sv9aa",
  "ghjndwqceedsmd",
  "0650c6172353a5be5ed4e23e9ed9e874bc63ae8076b33b8dc4a9b36e97ad5ccf",
  {
    host: "ec2-54-173-138-144.compute-1.amazonaws.com",
    dialect: "postgres",
    dialectOptions: {
      ssl: true,
    },
  }
);

module.exports = db;
