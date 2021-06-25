"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _prescriptionServices = _interopRequireDefault(require("../services/prescriptionServices"));

var app = _express["default"].Router();

app.post('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var doctor, result, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            doctor = req.body;
            _context.next = 4;
            return _prescriptionServices["default"].createPrescription(doctor);

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
    var doctors, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _prescriptionServices["default"].getAllPrescriptions();

          case 3:
            doctors = _context2.sent;
            return _context2.abrupt("return", res.status(200).json(doctors));

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
    var doctorId, doctor, newdoctor, data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            doctorId = req.params.id;
            doctor = req.body;
            _context3.next = 5;
            return _prescriptionServices["default"].updatePrescriptionById(doctorId, doctor);

          case 5:
            _context3.next = 7;
            return _prescriptionServices["default"].getPrescriptionById(doctorId);

          case 7:
            newdoctor = _context3.sent;
            return _context3.abrupt("return", res.status(200).json(newdoctor));

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
var _default = app;
exports["default"] = _default;