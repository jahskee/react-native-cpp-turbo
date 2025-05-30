"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
const isTurboModuleEnabled = global.__turboModuleProxy != null;
const CppTurbo = isTurboModuleEnabled ? _reactNative.TurboModuleRegistry.getEnforcing('CppTurbo') : _reactNative.NativeModules.CppTurbo;
var _default = exports.default = CppTurbo;
//# sourceMappingURL=NativeCppTurbo.js.map