"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrescriptionModel = exports.DoctorModel = exports.BranchModel = exports.PatientModel = void 0;

var _config = _interopRequireDefault(require("../config"));

var _require = require('sequelize'),
    Sequelize = _require.Sequelize;

var schema = 'public';
var dbName = 'dbprueba';
console.log('config: ', _config["default"]);
var dbUser = _config["default"]["default"].db.user;
var dbPassword = _config["default"]["default"].db.password;
var dialect = _config["default"]["default"].db.dialect;
var sequelize;

if (dialect == 'postgres') {
  sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    host: 'localhost',
    dialect: dialect
  });
} else if (dialect == 'sqlite') {
  var storage = _config["default"]["default"].db.storage;
  schema = '';
  sequelize = new Sequelize(dbName, dbUser, dbPassword, {
    dialect: 'sqlite',
    storage: storage
  });
}

var PatientModelref = require('./patientModel');

var PatientModel = PatientModelref(schema, sequelize, Sequelize);
exports.PatientModel = PatientModel;

var BranchModelref = require('./branchModel');

var BranchModel = BranchModelref(schema, sequelize, Sequelize);
exports.BranchModel = BranchModel;

var DoctorModelref = require('./doctorModel');

var DoctorModel = DoctorModelref(schema, sequelize, Sequelize);
exports.DoctorModel = DoctorModel;

var PrescriptionModelref = require('./prescriptionModel');

var PrescriptionModel = PrescriptionModelref(schema, sequelize, Sequelize);
exports.PrescriptionModel = PrescriptionModel;