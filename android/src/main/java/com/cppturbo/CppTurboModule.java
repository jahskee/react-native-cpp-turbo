package com.cppturbo;

import androidx.annotation.NonNull;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.turbomodule.core.interfaces.TurboModule;

@ReactModule(name = CppTurboModule.NAME)
public class CppTurboModule extends NativeCppTurboSpec {
    public static final String NAME = "CppTurbo";

    static {
        System.loadLibrary("cppturbo");
    }

    public CppTurboModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    private native double nativeAdd(double a, double b);
    private native double nativeMultiply(double a, double b);
    private native double nativePower(double base, double exponent);

    @Override
    public double add(double a, double b) {
        return nativeAdd(a, b);
    }

    @Override
    public double multiply(double a, double b) {
        return nativeMultiply(a, b);
    }

    @Override
    public double power(double base, double exponent) {
        return nativePower(base, exponent);
    }
}