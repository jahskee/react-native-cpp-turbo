#include <jni.h>
#include "MathOperations.h"

extern "C" JNIEXPORT jdouble JNICALL
Java_com_cppturbo_CppTurboModule_nativeAdd(
    JNIEnv* env,
    jobject /* this */,
    jdouble a,
    jdouble b) {
    return addNumbers(a, b);
}

extern "C" JNIEXPORT jdouble JNICALL
Java_com_cppturbo_CppTurboModule_nativeMultiply(
    JNIEnv* env,
    jobject /* this */,
    jdouble a,
    jdouble b) {
    return multiplyNumbers(a, b);
}

extern "C" JNIEXPORT jdouble JNICALL
Java_com_cppturbo_CppTurboModule_nativePower(
    JNIEnv* env,
    jobject /* this */,
    jdouble base,
    jdouble exponent) {
    return powerNumbers(base, exponent);
}
