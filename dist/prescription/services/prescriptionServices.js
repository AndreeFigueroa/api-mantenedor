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

function createPrescription(prescription) {
  console.log('prescription: ', prescription);
  prescription.created_at = Date.now();
  prescription.updated_at = Date.now();
  return _sequelizeconfig.PrescriptionModel.create(prescription);
}

;

function getAllPrescriptions() {
  return _sequelizeconfig.PrescriptionModel.findAll();
}

;

function getPrescriptionById(_x) {
  return _getPrescriptionById.apply(this, arguments);
}

function _getPrescriptionById() {
  _getPrescriptionById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _sequelizeconfig.PrescriptionModel.findByPk(id);

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
  return _getPrescriptionById.apply(this, arguments);
}

;

function updatePrescriptionById(_x2, _x3) {
  return _updatePrescriptionById.apply(this, arguments);
}

function _updatePrescriptionById() {
  _updatePrescriptionById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(prescriptionId, prescription) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            prescription.updated_at = Date.now();

            if (prescription.created_at || !prescription.created_at) {
              delete prescription.created_at;
            }

            return _context2.abrupt("return", _sequelizeconfig.PrescriptionModel.update(prescription, {
              where: {
                id: prescriptionId
              }
            }));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _updatePrescriptionById.apply(this, arguments);
}

function deletePrescriptionById(_x4) {
  return _deletePrescriptionById.apply(this, arguments);
}

function _deletePrescriptionById() {
  _deletePrescriptionById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _sequelizeconfig.PrescriptionModel.destroy({
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
  return _deletePrescriptionById.apply(this, arguments);
}

;
var functionprescription = {
  createPrescription: createPrescription,
  getAllPrescriptions: getAllPrescriptions,
  getPrescriptionById: getPrescriptionById,
  updatePrescriptionById: updatePrescriptionById,
  deletePrescriptionById: deletePrescriptionById
};
var _default = functionprescription;
exports["default"] = _default;