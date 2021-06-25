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

function createDoctor(doctor) {
  doctor.created_at = Date.now();
  doctor.updated_at = Date.now();
  return _sequelizeconfig.DoctorModel.create(doctor);
}

;

function getAllDoctors() {
  return _sequelizeconfig.DoctorModel.findAll();
}

;

function getDoctorById(_x) {
  return _getDoctorById.apply(this, arguments);
}

function _getDoctorById() {
  _getDoctorById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
    var result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _sequelizeconfig.DoctorModel.findByPk(id);

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
  return _getDoctorById.apply(this, arguments);
}

;

function updateDoctorById(_x2, _x3) {
  return _updateDoctorById.apply(this, arguments);
}

function _updateDoctorById() {
  _updateDoctorById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(doctorId, doctor) {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            doctor.updated_at = Date.now();

            if (doctor.created_at || !doctor.created_at) {
              delete doctor.created_at;
            }

            return _context2.abrupt("return", _sequelizeconfig.DoctorModel.update(doctor, {
              where: {
                id: doctorId
              }
            }));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _updateDoctorById.apply(this, arguments);
}

function deleteDoctorById(_x4) {
  return _deleteDoctorById.apply(this, arguments);
}

function _deleteDoctorById() {
  _deleteDoctorById = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    var result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _sequelizeconfig.DoctorModel.destroy({
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
  return _deleteDoctorById.apply(this, arguments);
}

;
var functionDoctor = {
  createDoctor: createDoctor,
  getAllDoctors: getAllDoctors,
  getDoctorById: getDoctorById,
  updateDoctorById: updateDoctorById,
  deleteDoctorById: deleteDoctorById
};
var _default = functionDoctor;
exports["default"] = _default;