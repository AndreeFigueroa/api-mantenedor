"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _sequelize = require("sequelize");

var _sequelizeconfig = require("../../model/sequelizeconfig");

var _HttpException = require("../../utils/HttpException");

function createBranch(branch) {
  branch.created_at = Date.now();
  branch.updated_at = Date.now();

  _sequelizeconfig.BranchModel.create(branch);
}

function getAllBranchs() {
  return _sequelizeconfig.BranchModel.findAll();
}

;

function getBranchById(_x) {
  return _getBranchById.apply(this, arguments);
}

function _getBranchById() {
  _getBranchById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _sequelizeconfig.BranchModel.findByPk(id);

          case 2:
            result = _context.sent;
            return _context.abrupt("return", result.dataValues);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getBranchById.apply(this, arguments);
}

;

function updateBranchById(_x2, _x3) {
  return _updateBranchById.apply(this, arguments);
}

function _updateBranchById() {
  _updateBranchById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(branchId, branch) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            branch.updated_at = Date.now();

            if (branch.created_at || !branch.created_at) {
              delete patient.created_at;
            }

            return _context2.abrupt("return", _sequelizeconfig.BranchModel.update(branch, {
              where: {
                id: branchId
              }
            }));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _updateBranchById.apply(this, arguments);
}

function deleteBranchById(_x4) {
  return _deleteBranchById.apply(this, arguments);
}

function _deleteBranchById() {
  _deleteBranchById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _sequelizeconfig.BranchModel.destroy({
              where: {
                id: id
              }
            });

          case 2:
            result = _context3.sent;
            return _context3.abrupt("return", result);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _deleteBranchById.apply(this, arguments);
}

;
var functionBranch = {
  createBranch: createBranch,
  getAllBranchs: getAllBranchs,
  getBranchById: getBranchById,
  updateBranchById: updateBranchById,
  deleteBranchById: deleteBranchById
};
var _default = functionBranch;
exports["default"] = _default;