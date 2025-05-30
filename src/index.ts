import NativeCppTurbo from './NativeCppTurbo';

export function add(a: number, b: number): number {
  return NativeCppTurbo.add(a, b);
}

export function multiply(a: number, b: number): number {
  return NativeCppTurbo.multiply(a, b);
}

export function power(base: number, exponent: number): number {
  return NativeCppTurbo.power(base, exponent);
}