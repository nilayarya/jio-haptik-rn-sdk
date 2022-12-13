/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
//  import type {Node} from 'react'; 
 import {SafeAreaView, StyleSheet, View, Button} from 'react-native';
 import {NativeModules} from 'react-native';
 import {InitData,HaptikSDK} from  "react-native-haptik-rn-lib" ;


 /*Init all Data Here before starting Bot Activity*/

 /*NativeModules.HaptikRnLib.setprimaryColor("#420420");
 NativeModules.HaptikRnLib.setenableTypingSuggestion(false);
 NativeModules.HaptikRnLib.sethideComposer(false);
 NativeModules.HaptikRnLib.setnoHeader(true);
 NativeModules.HaptikRnLib.setinitializeLanguage("en");
 NativeModules.HaptikRnLib.setcomposerPlaceholder("Type Message....");
 NativeModules.HaptikRnLib.setSignupData("XYZ","34345","uber");

 NativeModules.HaptikRnLib.setLaunchMessage("this is from js side. HI");
 NativeModules.HaptikRnLib.setSignupData("XYZ","34345","uber");*/


 const App: () => Node = () => {
   const backgroundStyle = {
     backgroundColor: 'white',
   };

   let data = new InitData();

   data.sethideComposer(true)
   data.setPrimaryColor("#420420")

   let SDK = new HaptikSDK();
   SDK.init(data);

   return (
     <SafeAreaView style={backgroundStyle}>
       <View style={styles.buttonContainer}>
          <Button onPress={() => SDK.loadGuestConversation()} title="Start native activity" />
       </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   buttonContainer: {
     height: '100%',
     width: '50%',
     justifyContent: 'space-between',
     alignSelf: 'center',
     marginTop: '50%',
   },
 });
 
 export default App;

