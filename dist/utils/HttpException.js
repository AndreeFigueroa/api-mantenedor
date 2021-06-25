"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BadGatewayException = exports.InternalErrorException = exports.UnprocessableEntityException = exports.NotFoundException = exports.ForbiddenException = exports.BadRequestException = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var HttpException = /*#__PURE__*/function (_Error) {
  (0, _inherits2["default"])(HttpException, _Error);

  var _super = _createSuper(HttpException);

  function HttpException(httpStatus, code, message) {
    var _this;

    (0, _classCallCheck2["default"])(this, HttpException);
    _this = _super.call(this, message);
    _this.httpStatus = httpStatus;
    _this.exception = {
      code: code ? code.toString() : '',
      message: message || '',
      details: undefined
    };
    return _this;
  }

  (0, _createClass2["default"])(HttpException, [{
    key: "addDetail",
    value: function addDetail(field, value) {
      if (this.exception.details === undefined) {
        this.exception.details = [];
      }

      this.exception.details.push({
        field: field,
        value: value
      });
      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      if (this.exception.details === undefined) {
        return "".concat(this.httpStatus, " - ").concat(this.exception.message);
      } else {
        var data = [];

        var _iterator = _createForOfIteratorHelper(this.exception.details),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var d = _step.value;
            data.push("".concat(d.field, ": ").concat(d.value));
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return "".concat(this.httpStatus, " - ").concat(this.exception.message, ", details: ").concat(data.join(', '));
      }
    }
  }]);
  return HttpException;
}( /*#__PURE__*/(0, _wrapNativeSuper2["default"])(Error));

var BadRequestException = /*#__PURE__*/function (_HttpException) {
  (0, _inherits2["default"])(BadRequestException, _HttpException);

  var _super2 = _createSuper(BadRequestException);

  function BadRequestException(code, message) {
    (0, _classCallCheck2["default"])(this, BadRequestException);
    return _super2.call(this, 400, code, message);
  }

  return BadRequestException;
}(HttpException);

exports.BadRequestException = BadRequestException;

var ForbiddenException = /*#__PURE__*/function (_HttpException2) {
  (0, _inherits2["default"])(ForbiddenException, _HttpException2);

  var _super3 = _createSuper(ForbiddenException);

  function ForbiddenException(code, message) {
    (0, _classCallCheck2["default"])(this, ForbiddenException);
    return _super3.call(this, 403, code, message);
  }

  return ForbiddenException;
}(HttpException);

exports.ForbiddenException = ForbiddenException;

var NotFoundException = /*#__PURE__*/function (_HttpException3) {
  (0, _inherits2["default"])(NotFoundException, _HttpException3);

  var _super4 = _createSuper(NotFoundException);

  function NotFoundException(code, message) {
    (0, _classCallCheck2["default"])(this, NotFoundException);
    return _super4.call(this, 404, code, message);
  }

  return NotFoundException;
}(HttpException);

exports.NotFoundException = NotFoundException;

var UnprocessableEntityException = /*#__PURE__*/function (_HttpException4) {
  (0, _inherits2["default"])(UnprocessableEntityException, _HttpException4);

  var _super5 = _createSuper(UnprocessableEntityException);

  function UnprocessableEntityException(code, message) {
    (0, _classCallCheck2["default"])(this, UnprocessableEntityException);
    return _super5.call(this, 422, code, message);
  }

  return UnprocessableEntityException;
}(HttpException);

exports.UnprocessableEntityException = UnprocessableEntityException;

var InternalErrorException = /*#__PURE__*/function (_HttpException5) {
  (0, _inherits2["default"])(InternalErrorException, _HttpException5);

  var _super6 = _createSuper(InternalErrorException);

  function InternalErrorException(code, message) {
    (0, _classCallCheck2["default"])(this, InternalErrorException);
    return _super6.call(this, 500, code, message);
  }

  return InternalErrorException;
}(HttpException);

exports.InternalErrorException = InternalErrorException;

var BadGatewayException = /*#__PURE__*/function (_HttpException6) {
  (0, _inherits2["default"])(BadGatewayException, _HttpException6);

  var _super7 = _createSuper(BadGatewayException);

  function BadGatewayException(code, message) {
    (0, _classCallCheck2["default"])(this, BadGatewayException);
    return _super7.call(this, 502, code, message);
  }

  return BadGatewayException;
}(HttpException);

exports.BadGatewayException = BadGatewayException;