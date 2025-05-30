import { NativeModules } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
const isTurboModuleEnabled = global.__turboModuleProxy != null;
const CppTurbo = isTurboModuleEnabled ? TurboModuleRegistry.getEnforcing('CppTurbo') : NativeModules.CppTurbo;
export default CppTurbo;
//# sourceMappingURL=NativeCppTurbo.js.map