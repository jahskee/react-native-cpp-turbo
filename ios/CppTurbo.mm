#import "CppTurbo.h"
#import <React/RCTBridge+Private.h>
#import <React/RCTUtils.h>
#import <ReactCommon/RCTTurboModule.h>
#import <jsi/jsi.h>
#import "MathOperations.h"

@interface CppTurbo () <RCTTurboModule>
@end

@implementation CppTurbo

RCT_EXPORT_MODULE()

RCT_EXPORT_SYNCHRONOUS_TYPED_METHOD(NSNumber *, add:(double)a b:(double)b)
{
    return @(addNumbers(a, b));
}

RCT_EXPORT_SYNCHRONOUS_TYPED_METHOD(NSNumber *, multiply:(double)a b:(double)b)
{
    return @(multiplyNumbers(a, b));
}

RCT_EXPORT_SYNCHRONOUS_TYPED_METHOD(NSNumber *, power:(double)base exponent:(double)exponent)
{
    return @(powerNumbers(base, exponent));
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::ObjCTurboModule>(params);
}

@end