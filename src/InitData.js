class InitData {

    var data = {};

    function setPrimaryColor(color) 
    {
        data.primaryColor = color;
    }

    function setenableTypingSuggestion(flag) 
    {
        data.enableTypingSuggestion = flag;
    }

    function sethideComposer(flag) 
    {
        data.hideComposer = flag;
    }

    function setnoHeader(flag) 
    {
        data.noHeader = flag;
    }

    function setprivacyPolicyUrl(url) 
    {
        data.privacyPolicyUrl = url;
    }

    function setinitializeLanguage(lng) 
    {
        data.initializeLanguage= lng;
    }

    function setcomposerPlaceholder(placeholder) 
    {
        data.composerPlaceholder = placeholder;
    }

    function setcustomCss(custom)
    {
        data.customCss = custom;
    }

    function getData()
    {
        return data;
    }

}
