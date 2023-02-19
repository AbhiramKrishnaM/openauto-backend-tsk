const { DataTypes } = require("sequelize");

const { sequelize } = require("../config/db.js");

const Form = sequelize.define("Form", {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
  },
});

module.exports = Form;
