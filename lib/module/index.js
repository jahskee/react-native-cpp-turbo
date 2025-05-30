import NativeCppTurbo from './NativeCppTurbo';
if (!NativeCppTurbo) {
  throw new Error('The native CppTurbo module is not available. Please check your native build.');
}
export function add(a, b) {
  return NativeCppTurbo.add(a, b);
}
export function multiply(a, b) {
  return NativeCppTurbo.multiply(a, b);
}
export function power(base, exponent) {
  return NativeCppTurbo.power(base, exponent);
}
//# sourceMappingURL=index.js.map