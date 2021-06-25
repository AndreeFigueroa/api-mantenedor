"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var profile = process.env.PROFILE || "local";
var port = process.env.SERVER_PORT || 3000; //console.log("Cargando configuraciones para ambiente: ", profile);

var data = require("./config-".concat(profile, ".js"));

data.env = {
  profile: profile,
  server_port: port
};
var _default = data;
exports["default"] = _default;