import { NativeModules } from 'react-native';
import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  add(a: number, b: number): number;
  multiply(a: number, b: number): number;
  power(base: number, exponent: number): number;
}

const isTurboModuleEnabled = (global as any).__turboModuleProxy != null;

const CppTurbo = isTurboModuleEnabled
  ? TurboModuleRegistry.getEnforcing<Spec>('CppTurbo')
  : NativeModules.CppTurbo;

export default CppTurbo as Spec;