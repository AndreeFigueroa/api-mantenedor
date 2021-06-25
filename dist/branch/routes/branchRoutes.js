"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _express = _interopRequireDefault(require("express"));

var _branchServices = _interopRequireDefault(require("../services/branchServices"));

var app = _express["default"].Router();

app.get('/', function () {
  try {
    var branches = _branchServices["default"].getAllBranchs();

    return res.status(200).json(branches);
  } catch (err) {
    var data = {
      message: err.message
    };
    return res.status(400).json(data);
    ;
  }
});
app.put('/:id', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var branchId, branch, newpatient, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            branchId = req.params.id;
            branch = req.body;
            _context.next = 5;
            return _branchServices["default"].updateBranchById(branchId, branch);

          case 5:
            _context.next = 7;
            return _branchServices["default"].getPatientById(branchId);

          case 7:
            newpatient = _context.sent;
            return _context.abrupt("return", res.status(200).json(newpatient));

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            data = {
              message: _context.t0.message
            };
            return _context.abrupt("return", res.status(400).json(data));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
app.get('/:id', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var branchId, branch, data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            branchId = req.params.id;
            _context2.next = 4;
            return _branchServices["default"].getBranchById(branchId);

          case 4:
            branch = _context2.sent;
            return _context2.abrupt("return", res.status(200).json(branch));

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](0);
            data = {
              message: _context2.t0.message
            };
            return _context2.abrupt("return", res.status(400).json(data));

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 8]]);
  }));

  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}());
app.post('/', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var branch, result, data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            branch = req.body;
            _context3.next = 4;
            return _branchServices["default"].createBranch(branch);

          case 4:
            result = _context3.sent;
            return _context3.abrupt("return", res.status(201).json(result));

          case 8:
            _context3.prev = 8;
            _context3.t0 = _context3["catch"](0);
            data = {
              message: _context3.t0.message
            }; //res.json(err);

            return _context3.abrupt("return", res.status(400).json(data));

          case 12:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 8]]);
  }));

  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}());
app["delete"]('/:id', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var branchId, branch, data;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            branchId = req.params.id;
            _context4.next = 4;
            return _branchServices["default"].deleteBranchByI(branchId);

          case 4:
            branch = _context4.sent;
            return _context4.abrupt("return", res.status(201).json(branch));

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](0);
            data = {
              message: _context4.t0.message
            };
            return _context4.abrupt("return", res.status(401).json(data));

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 8]]);
  }));

  return function (_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}());
var _default = app;
exports["default"] = _default;