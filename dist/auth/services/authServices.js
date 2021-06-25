"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../../config"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config();

var jwtConfig = {
  type: 'Bearer',
  azp: 'apiTest',
  iss: '*',
  acr: '1',
  nbf: 0,
  defaultAud: 'apiTest',
  defaultAllowedOrigins: '*'
};

function generateAccessToken() {
  var jwta = {
    jti: "local",
    sub: "local api",
    nbf: jwtConfig.nbf,
    iss: jwtConfig.iss,
    aud: 'apiTest',
    type: jwtConfig.type,
    azp: jwtConfig.azp,
    acr: jwtConfig.acr,
    'allowed-origins': '*',
    iat: 1622753317,
    claims: ''
  };
  var token = process.env.TOKEN_SECRET.toString();
  return _jsonwebtoken["default"].sign(jwta, token, {
    expiresIn: '1h'
  });
}

function verify(accessToken) {
  try {
    var accessTokenTmp = accessToken.toString();

    if (accessTokenTmp.startsWith("".concat(jwtConfig.type, " "))) {
      accessTokenTmp = accessToken.substring(jwtConfig.type.length);
    }

    accessTokenTmp = accessTokenTmp.trim();
    var key = process.env.KEY_SECRET.toString();
    return {
      decoded: _jsonwebtoken["default"].verify(accessTokenTmp, key),
      accessToken: accessToken
    };
  } catch (error) {
    console.error('Error en JWT', "".concat(error));
    return undefined;
  }
}

var _default = {
  generateAccessToken: generateAccessToken,
  verify: verify
};
exports["default"] = _default;