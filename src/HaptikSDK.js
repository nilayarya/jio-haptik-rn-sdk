import { NativeModules } from 'react-native';

export default class HaptikSDK {
  constructor() {}

  init(data) {
    NativeModules.HaptikRnLib.setAllInitData(data.getData());
  }

  loadGuestConversation() {
    NativeModules.HaptikRnLib.HaptikSDKinit();
  }

  loadConversation(data) {
    NativeModules.HaptikRnLib.setSignupData(data.getData());
    NativeModules.HaptikRnLib.HaptikSDKinit();
  }
}
