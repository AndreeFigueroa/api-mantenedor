"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _prescriptionModel = _interopRequireDefault(require("./prescriptionModel"));

module.exports = function (schema, sequelize, sequelizeDefinition) {
  return sequelize.define('doctor', {
    id: {
      type: sequelizeDefinition.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    firstname: {
      type: sequelizeDefinition.STRING
    },
    lastname: {
      type: sequelizeDefinition.STRING
    },
    email: {
      type: sequelizeDefinition.STRING
    },
    address: {
      type: sequelizeDefinition.STRING
    },
    gender: {
      type: sequelizeDefinition.STRING
    },
    specialty: {
      type: sequelizeDefinition.STRING
    },
    birthdate: {
      type: sequelizeDefinition.STRING
    },
    password: {
      type: sequelizeDefinition.STRING
    },
    created_at: {
      type: sequelizeDefinition.DATE
    },
    updated_at: {
      type: sequelizeDefinition.DATE
    }
  }, {
    timestamps: false,
    tableName: 'doctor',
    schema: schema
  });
};