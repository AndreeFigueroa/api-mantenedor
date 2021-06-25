"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = exports.server = void 0;

var _express = _interopRequireDefault(require("express"));

var _patientRoutes = _interopRequireDefault(require("./patient/routes/patientRoutes"));

var _authRoutes = _interopRequireDefault(require("./auth/routes/authRoutes"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _config = _interopRequireDefault(require("./config"));

var _middleware = _interopRequireDefault(require("./middleware"));

require('dotenv').config();

var port = _config["default"].env.server_port;
var app = (0, _express["default"])();
exports.app = app;

require('./model/sequelizeconfig');

app.use(_express["default"].json());
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use('/auth', _authRoutes["default"]);
app.use('/patient', _patientRoutes["default"]);
var server = app.listen(port);
exports.server = server;
console.log("Servidor Encendido, en el puerto:", port);