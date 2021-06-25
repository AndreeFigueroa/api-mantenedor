"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _patientService = _interopRequireDefault(require("../services/patientService"));

var app = _express["default"].Router();

app.post('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var patient, result, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            patient = req.body;
            _context.next = 4;
            return _patientService["default"].createPatient(patient);

          case 4:
            result = _context.sent;
            return _context.abrupt("return", res.status(201).json(result));

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            data = {
              message: _context.t0.message
            }; //res.json(err);

            return _context.abrupt("return", res.status(400).json(data));

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 8]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.get('/', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var patients, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _patientService["default"].getAllPatients();

          case 3:
            patients = _context2.sent;
            return _context2.abrupt("return", res.status(200).json(patients));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            data = {
              message: _context2.t0.message
            };
            return _context2.abrupt("return", res.status(400).json(data));

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.put('/:id', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var patientId, patient, newpatient, data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            patientId = req.params.id;
            patient = req.body;
            _context3.next = 5;
            return _patientService["default"].updatePatientById(patientId, patient);

          case 5:
            _context3.next = 7;
            return _patientService["default"].getPatientById(patientId);

          case 7:
            newpatient = _context3.sent;
            return _context3.abrupt("return", res.status(200).json(newpatient));

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            data = {
              message: _context3.t0.message
            };
            return _context3.abrupt("return", res.status(400).json(data));

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app.get('/getallpatient', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var patient, patients, data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            patient = {};

            if (req.query.firstname) {
              patient.firstname = req.query.firstname;
              patient.lastname = '';
            } else if (req.query.lastname) {
              patient.lastname = req.query.lastname;
              patient.firstname = '';
            } else {
              patient.lastname = '';
              patient.firstname = '';
            }

            _context4.next = 5;
            return _patientService["default"].getpatientByAttr(patient);

          case 5:
            patients = _context4.sent;
            return _context4.abrupt("return", res.status(200).json(patients));

          case 9:
            _context4.prev = 9;
            _context4.t0 = _context4["catch"](0);
            data = {
              message: _context4.t0.message
            };
            return _context4.abrupt("return", res.status(400).json(data));

          case 14:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 9]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
app.get('/:id', /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var patientId, patients, data;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            patientId = req.params.id;
            _context5.next = 4;
            return _patientService["default"].getPatientById(patientId);

          case 4:
            patients = _context5.sent;
            return _context5.abrupt("return", res.status(200).json(patients));

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](0);
            data = {
              message: _context5.t0.message
            };
            return _context5.abrupt("return", res.status(400).json(data));

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 8]]);
  }));

  return function (_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}());
app["delete"]('/:id', /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var patientId, patients, data;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            patientId = req.params.id;
            _context6.next = 4;
            return _patientService["default"].deletePatientById(patientId);

          case 4:
            patients = _context6.sent;
            return _context6.abrupt("return", res.status(201).json(patients));

          case 8:
            _context6.prev = 8;
            _context6.t0 = _context6["catch"](0);
            data = {
              message: _context6.t0.message
            };
            return _context6.abrupt("return", res.status(401).json(data));

          case 13:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6, null, [[0, 8]]);
  }));

  return function (_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}());
var _default = app;
exports["default"] = _default;