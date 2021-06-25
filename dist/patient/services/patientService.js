"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _sequelize = require("sequelize");

var _sequelizeconfig = require("../../model/sequelizeconfig");

var _HttpException = require("../../utils/HttpException");

function createPatient(patient) {
  DoValidatePatient(patient);
  patient.created_at = Date.now();
  patient.updated_at = Date.now();
  return _sequelizeconfig.PatientModel.create(patient);
}

;

function getAllPatients() {
  return _sequelizeconfig.PatientModel.findAll();
}

;

function getPatientById(_x) {
  return _getPatientById.apply(this, arguments);
}

function _getPatientById() {
  _getPatientById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _sequelizeconfig.PatientModel.findByPk(id);

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
  return _getPatientById.apply(this, arguments);
}

;

function updatePatientById(_x2, _x3) {
  return _updatePatientById.apply(this, arguments);
}

function _updatePatientById() {
  _updatePatientById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(patientId, patient) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            patient.updated_at = Date.now();

            if (patient.created_at || !patient.created_at) {
              delete patient.created_at;
            }

            return _context2.abrupt("return", _sequelizeconfig.PatientModel.update(patient, {
              where: {
                id: patientId
              }
            }));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _updatePatientById.apply(this, arguments);
}

function DoValidatePatient(patient) {
  if (!patient.firstname) {
    throw new _HttpException.BadRequestException(401, 'patient.firstname value not acceptable');
  }

  if (!patient.lastname) {
    throw new _HttpException.BadRequestException(401, 'patient.lastname value not acceptable');
  }

  if (!patient.email) {
    throw new _HttpException.BadRequestException(401, 'patient.email value not acceptable');
  }

  if (!patient.birthdate) {
    throw new _HttpException.BadRequestException(401, 'patient.birthdate value not acceptable');
  }

  if (!patient.gender) {
    throw new _HttpException.BadRequestException(401, 'patient.gender value not acceptable');
  }

  return true;
}

function getpatientByAttr(_x4) {
  return _getpatientByAttr.apply(this, arguments);
}

function _getpatientByAttr() {
  _getpatientByAttr = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(patient) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _sequelizeconfig.PatientModel.findAll({
              where: (0, _defineProperty2["default"])({}, _sequelize.Op.or, [{
                firstname: patient.firstname
              }, {
                lastname: patient.lastname
              }])
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
  return _getpatientByAttr.apply(this, arguments);
}

function deletePatientById(_x5) {
  return _deletePatientById.apply(this, arguments);
}

function _deletePatientById() {
  _deletePatientById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    var result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _sequelizeconfig.PatientModel.destroy({
              where: {
                id: id
              }
            });

          case 2:
            result = _context4.sent;
            return _context4.abrupt("return", result);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _deletePatientById.apply(this, arguments);
}

;
var functionPatient = {
  createPatient: createPatient,
  getAllPatients: getAllPatients,
  getPatientById: getPatientById,
  updatePatientById: updatePatientById,
  getpatientByAttr: getpatientByAttr,
  deletePatientById: deletePatientById
};
var _default = functionPatient;
exports["default"] = _default;