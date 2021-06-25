"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var key = process.env.KEY_SECRET;
console.log('[authService], _key_ ', key);
var jwtConfig = {
  type: 'Bearer',
  azp: 'apiTest',
  iss: 'http://localhost:3000/',
  acr: '1',
  nbf: 0,
  defaultAud: 'apiTest',
  defaultAllowedOrigins: '*'
};

function generateAccessToken() {
  var secondsSinceEpoch = Math.round(Date.now() / 1000);
  var expireTime = secondsSinceEpoch + 3600 * 12; //+ 12hras

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
    iat: secondsSinceEpoch,
    exp: expireTime,
    claims: ''
  };
  var token = {
    access_token: _jsonwebtoken["default"].sign(jwta, key),
    expire: expireTime
  };
  return token;
}

function verify(accessToken) {
  try {
    var accessTokenTmp = accessToken.toString();

    if (accessTokenTmp.startsWith("".concat(jwtConfig.type, " "))) {
      accessTokenTmp = accessToken.substring(jwtConfig.type.length);
    }

    accessTokenTmp = accessTokenTmp.trim();
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