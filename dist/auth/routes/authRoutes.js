"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _config = _interopRequireDefault(require("../../config"));

var _jsonwebtoken = _interopRequireWildcard(require("jsonwebtoken"));

var _authServices = _interopRequireDefault(require("../services/authServices"));

var _HttpException = require("../../utils/HttpException");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var app = _express["default"].Router();

var secret = 'defaultSecret'; //config.secret || 

app.get('/', function (req, res) {
  try {
    var token = req.query.access_token;

    var result = _authServices["default"].verify(token);

    console.log('result: ', result);
    return res.status(200).send(result);
  } catch (err) {
    console.log(err);
    return undefined;
  }
});
app.post('/', function (req, res) {
  var token = _authServices["default"].generateAccessToken();

  res.status(201).send(token);
});
var _default = app;
exports["default"] = _default;