"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function cors() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return function (req, res, next) {
    console.log('Header::::::', req.headers);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', config.allowedHeaders || 'Content-Type,Origin,Accept');
    res.header('Access-Control-Allow-Methods', config.methods || 'GET,HEAD,OPTIONS');
    res.header('Allow', config.methods || 'GET,HEAD,OPTIONS');
    res.status(config.optionsSuccessStatus || 204);

    if (req.method === 'OPTIONS') {
      return res.end();
    } else {
      return next();
    }
  };
}

var _default = cors;
exports["default"] = _default;