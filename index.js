import {NativeModules} from 'react-native';

function showSDK () {
   return NativeModules.HaptikRnLib.HaptikSDKinit();
}

module.exports = showSDK