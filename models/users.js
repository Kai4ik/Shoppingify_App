const db = require("./database");
const { DataTypes } = require("sequelize");

const User = db.define("Users", {
  userEmail: DataTypes.STRING(60),
  userPassword: DataTypes.STRING(200),
  currentListProducts: DataTypes.ARRAY(DataTypes.JSON),
  allUserLists: DataTypes.ARRAY(DataTypes.JSON),
});

module.exports = User;
