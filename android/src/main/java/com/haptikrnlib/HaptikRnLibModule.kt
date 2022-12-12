package com.haptikrnlib

import ai.haptik.android.wrapper.sdk.HaptikSDK
import ai.haptik.android.wrapper.sdk.model.InitData
import ai.haptik.android.wrapper.sdk.model.SignupData
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import org.json.JSONObject


class HaptikRnLibModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return "HaptikRnLib"
  }

  val initData = InitData()

  @ReactMethod
  fun setAllInitData(obj : ReadableMap) {
    if(obj.hasKey("primaryColor")) initData.primaryColor = obj.getString("primaryColor").toString()
    if(obj.hasKey("enableTypingSuggestions")) initData.enableTypingSuggestions = obj.getBoolean("enableTypingSuggestions")
    if(obj.hasKey("hideComposer")) initData.hideComposer = obj.getBoolean("hideComposer")
    if(obj.hasKey("noHeader")) initData.noHeader = obj.getBoolean("noHeader")
    if(obj.hasKey("privacyPolicyUrl")) initData.privacyPolicyUrl = obj.getString("privacyPolicyUrl").toString();
    if(obj.hasKey("initializeLanguage")) initData.initializeLanguage = obj.getString("initializeLanguage").toString();
    if(obj.hasKey("composerPlaceholder")) initData.composerPlaceholder = obj.getString("composerPlaceholder").toString();
    if(obj.hasKey("customCss")) initData.customCss = obj.getString("customCss").toString();
  }

  var isLaunchMessage = false;
  var msg = "";
  @ReactMethod
  fun setLaunchMessage(msg_ : String){
    isLaunchMessage = true
    msg = msg_
  }

  var isCustomSignup = false
  val signupData = SignupData()
  @ReactMethod
  fun setSignupData(obj : ReadableMap) {
      isCustomSignup = true
      signupData.authCode = obj.getString("authCode").toString()
      signupData.authId = obj.getString("authId").toString()
      signupData.signupType = obj.getString("signupType").toString()
      signupData.customData = JSONObject().apply {
        put("custom-data-one", "date-one")
        put("custom-data-two", "data-two")
      }
  }

  @ReactMethod
  fun HaptikSDKinit() {
    val context = reactApplicationContext
    HaptikSDK.init(context, initData)
    HaptikSDK.init(context, initData)
    if(isLaunchMessage==true) { HaptikSDK.setLaunchMessage(msg) }
    if(!isCustomSignup) { HaptikSDK.loadGuestConversation() }
    else { HaptikSDK.loadConversation(signupData) }
  }
  
  @ReactMethod
  fun HaptikSDKlogout() {
    val context = reactApplicationContext
    HaptikSDK.logout(context)
  }

}



