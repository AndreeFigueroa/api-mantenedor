"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = exports.server = void 0;

var _express = _interopRequireDefault(require("express"));

var _patientRoutes = _interopRequireDefault(require("./patient/routes/patientRoutes"));

var _branchRoutes = _interopRequireDefault(require("./branch/routes/branchRoutes"));

var _doctorRoutes = _interopRequireDefault(require("./doctor/routes/doctorRoutes"));

var _prescriptionRoutes = _interopRequireDefault(require("./prescription/routes/prescriptionRoutes"));

var _authRoutes = _interopRequireDefault(require("./auth/routes/authRoutes"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _config = _interopRequireDefault(require("./config"));

var _auth = _interopRequireDefault(require("./middleware/auth"));

var _cors = _interopRequireDefault(require("./middleware/cors"));

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
var corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: 'Authorization, X-API-KEY, Origin, Content-Type, Accept',
  creadentials: true
};
app.use((0, _cors["default"])(corsOptions)); //recibe config
//routes

app.use('/auth', _authRoutes["default"]);
app.use('/patient', (0, _auth["default"])(), _patientRoutes["default"]);
app.use('/branch', (0, _auth["default"])(), _branchRoutes["default"]);
app.use('/doctor', (0, _auth["default"])(), _doctorRoutes["default"]);
app.use('/prescription', (0, _auth["default"])(), _prescriptionRoutes["default"]);
var server = app.listen(port);
exports.server = server;
console.log("Servidor Encendido, en el puerto:", port);