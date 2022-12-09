class SignupData{

    var data = {};

    function setauthCode(code) 
    {
        data.authCode = code;
    }

    function setauthId(code) 
    {
        data.authId = code;
    }

    function signupType(type) 
    {
        data.signupType = type;
    }

    function getData()
    {
        return data;
    }

}