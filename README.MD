# react-native-cpp-turbo

A high-performance React Native Turbo Module that leverages C++ shared libraries for cross-platform native functionality. This package demonstrates how to integrate C++ code with React Native's new architecture for optimal performance on both iOS and Android.

## Features

- ⚡ **Turbo Module Architecture** - Built on React Native's new architecture for better performance
- 🔧 **C++ Shared Library** - Single C++ codebase compiled for both platforms
- 📱 **Cross-Platform** - Works seamlessly on iOS (.dylib) and Android (.so)
- 🎯 **Type Safety** - Full TypeScript support with auto-generated types
- 🚀 **Synchronous Calls** - Direct synchronous native method invocation
- 📦 **Easy Integration** - Simple npm package installation

## Requirements

- React Native 0.79.0 or higher
- iOS 13.0 or higher
- Android minSdkVersion 21 or higher
- CMake 3.13 or higher
- Android NDK (installed with React Native)

## Installation

```bash
npm install react-native-cpp-turbo
# or
yarn add react-native-cpp-turbo
```

### iOS Setup

```bash
cd ios && pod install
```

For iOS, the native module will be automatically linked via CocoaPods.

### Android Setup

Android configuration is automatically handled by the native module's build.gradle. Ensure you have:

1. CMake installed (comes with Android Studio)
2. NDK configured in your project

## Usage

```typescript
import { add, multiply, power } from 'react-native-cpp-turbo';

// Basic math operations
const sum = add(10, 20); // Returns: 30
const product = multiply(5, 6); // Returns: 30
const result = power(2, 8); // Returns: 256

// Example in a React component
import React from 'react';
import { View, Text } from 'react-native';
import { add, multiply, power } from 'react-native-cpp-turbo';

function Calculator() {
  return (
    <View>
      <Text>5 + 3 = {add(5, 3)}</Text>
      <Text>4 × 7 = {multiply(4, 7)}</Text>
      <Text>2^10 = {power(2, 10)}</Text>
    </View>
  );
}
```

## API Reference

### `add(a: number, b: number): number`
Adds two numbers and returns the sum.

### `multiply(a: number, b: number): number`
Multiplies two numbers and returns the product.

### `power(base: number, exponent: number): number`
Calculates base raised to the power of exponent.

## Development Setup

### Prerequisites

1. **Development Environment**
   - Node.js 16 or higher
   - React Native development environment
   - Xcode (for iOS)
   - Android Studio (for Android)

2. **Build Tools**
   - CMake 3.13+
   - Android NDK
   - CocoaPods

### Building from Source

1. Clone the repository:
```bash
git clone https://github.com/jahskee/react-native-cpp-turbo.git
cd react-native-cpp-turbo
```

2. Install dependencies:
```bash
npm install
```

3. Build TypeScript:
```bash
npm run prepare
```

### Testing Locally

1. Link the package:
```bash
npm link
```

2. In your test app:
```bash
npm link react-native-cpp-turbo
cd ios && pod install
```

3. Rebuild your app:
```bash
# iOS
npx react-native run-ios

# Android
npx react-native run-android
```

## Project Structure

```
react-native-cpp-turbo/
├── cpp/                    # Shared C++ source code
│   ├── MathOperations.cpp
│   └── MathOperations.h
├── android/               # Android-specific implementation
│   ├── src/main/cpp/     # JNI adapter
│   └── src/main/java/    # Java/Kotlin bridge
├── ios/                   # iOS-specific implementation
│   ├── CppTurbo.mm       # Objective-C++ bridge
│   └── CppTurbo.h
└── src/                   # TypeScript interface
    ├── index.tsx
    └── NativeCppTurbo.ts
```

## Advanced Integration

### Custom C++ Functions

To add new C++ functions:

1. Add function declaration in `cpp/MathOperations.h`
2. Implement in `cpp/MathOperations.cpp`
3. Add JNI wrapper in `android/src/main/cpp/cpp-adapter.cpp`
4. Add Java method in `CppTurboModule.java`
5. Add Objective-C method in `ios/CppTurbo.mm`
6. Update TypeScript interface in `src/NativeCppTurbo.ts`
7. Export from `src/index.tsx`

### Build Configuration

#### Android
- C++ Standard: C++17
- Supported ABIs: arm64-v8a, armeabi-v7a, x86, x86_64
- CMake flags: `-O2 -frtti -fexceptions`

#### iOS
- C++ Standard: C++17
- C++ Library: libc++
- Deployment Target: iOS 13.0

## Troubleshooting

### Common Issues

**Module not found error**
```bash
# Clear caches and rebuild
cd ios && pod deintegrate && pod install
cd android && ./gradlew clean
npx react-native start --reset-cache
```

**Android build failures**
- Verify NDK is installed: Android Studio → SDK Manager → SDK Tools → NDK
- Check CMake version: `cmake --version`
- Ensure `local.properties` contains `ndk.dir`

**iOS build failures**
- Update pods: `cd ios && pod update`
- Clean build: Xcode → Product → Clean Build Folder
- Check minimum iOS version in Podfile

**TypeScript errors**
```bash
# Regenerate types
npm run prepare
```

### Debug Tips

1. **Android Logs**
```bash
adb logcat | grep -i cppturbo
```

2. **iOS Logs**
- Use Xcode console
- Add `NSLog` statements in `.mm` files

3. **C++ Debugging**
- Add logging with `__android_log_print` (Android)
- Use `NSLog` wrapper (iOS)

## Performance Considerations

- All operations run synchronously on the JS thread
- For heavy computations, consider using async wrappers
- C++ operations are faster than JS equivalents for complex math
- Minimize data marshaling between JS and native

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Publishing

To publish a new version:

```bash
# Update version in package.json
npm version patch|minor|major

# Build and test
npm run prepare
npm test

# Publish
npm publish
```

## License

MIT License - see [LICENSE](LICENSE) file for details

## Support

- 🐛 [Report Issues](https://github.com/jahskee/react-native-cpp-turbo/issues)
- 💬 [Discussions](https://github.com/jahskee/react-native-cpp-turbo/discussions)
- 📧 Contact: jahskee@gmail.com

## Acknowledgments

Built with React Native's Turbo Module architecture and inspired by the React Native community's need for high-performance native modules.