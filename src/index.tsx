import { NativeModules } from 'react-native';

export class InitData {
    constructor() {
        this.data = {};
    }

    setPrimaryColor(color) {
        this.data.primaryColor = color;
    }

    setenableTypingSuggestion(flag) {
        this.data.enableTypingSuggestion = flag;
    }

    sethideComposer(flag) {
        this.data.hideComposer = flag;
    }

    setnoHeader(flag) {
        this.data.noHeader = flag;
    }

    setprivacyPolicyUrl(url) {
        this.data.privacyPolicyUrl = url;
    }

    setinitializeLanguage(lng) {
        this.data.initializeLanguage = lng;
    }

    setcomposerPlaceholder(placeholder) {
        this.data.composerPlaceholder = placeholder;
    }

    setcustomCss(custom) {
        this.data.customCss = custom;
    }

    getData() {
        return this.data;
    }
};

export class HaptikSDK {
    
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
};

  
