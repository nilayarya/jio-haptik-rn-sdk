
class HaptikSDK {

    function init(InitData data) {
        NativeModules.HaptikRnLib.setAllInitData(data.getData());
    }

    function loadGuestConversation() {
        NativeModules.HaptikRnLib.HaptikSDKinit()
    }

    function loadConversation(SignupData data) { 
        NativeModules.HaptikRnLib.setSignupData(data.getData())
        NativeModules.HaptikRnLib.HaptikSDKinit()
    }
}
