"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authServices = _interopRequireDefault(require("../services/authServices"));

var app = _express["default"].Router();

app.get('/', function (req, res) {
  try {
    var token = req.query.access_token;

    var result = _authServices["default"].verify(token);

    return res.status(200).send(result);
  } catch (err) {
    return undefined;
  }
});
app.post('/', function (req, res) {
  var token = _authServices["default"].generateAccessToken();

  res.status(201).send(token);
});
var _default = app;
exports["default"] = _default;