"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _authServices = _interopRequireDefault(require("../auth/services/authServices"));

function auth() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (req, res, next) {
    var token = req.headers['authorization'] || req.headers['Authorization'];
    console.log('Token:', token);

    if (token) {
      var jwt = _authServices["default"].verify(token);

      if (!jwt) {
        return res.status(403).json({
          msg: 'Forbidden'
        });
      }

      next();
    } else {
      res.status(403).json({
        msg: 'Forbidden'
      });
    }
  };
}

var _default = auth;
exports["default"] = _default;