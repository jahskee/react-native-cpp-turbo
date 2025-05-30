"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.multiply = multiply;
exports.power = power;
var _NativeCppTurbo = _interopRequireDefault(require("./NativeCppTurbo"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function add(a, b) {
  return _NativeCppTurbo.default.add(a, b);
}
function multiply(a, b) {
  return _NativeCppTurbo.default.multiply(a, b);
}
function power(base, exponent) {
  return _NativeCppTurbo.default.power(base, exponent);
}
//# sourceMappingURL=index.js.map