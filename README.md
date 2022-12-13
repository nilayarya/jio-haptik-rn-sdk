# React Native Library for Haptik SDK

The following repo is a library that bridges HaptikSDK to React Native.

## Installation

Use the command below to install the package into your project.

```bash
npm i haptik-sdk-lib
```
## Testing

To test the package, clone the repo and run the command

```bash
yarn example android
```

## Usage

```js
import {InitData,HaptikSDK,SignupData} from  "react-native-haptik-rn-lib"
```

The SDK can be configured in a variety of ways to fit in seamlessly with the overall experience of the parent application. While initializing Haptik SDK, you pass the desired customization according to your need.

#### Settings :

***primaryColor***: String - The primary color used throughout the SDK.

***enableTypingSuggestions***: Boolean - Enables typing suggestions for the bot. Typing suggestions are autocompleting suggestions that show up for users when they type. This gives the user some context around the capabilities of the bot.

***hideComposer***: Boolean - Hides the composer so that the user is not given the option to type anything. This is useful when building actionable and highly directed bots.

***noHeader***: Boolean - Hides the chat window header.

***privacyPolicyUrl***: String - If GDPR is enabled, you can add a URL to your Privacy Policy page through init settings. Users will be redirected to this URL when they click on the link in the GDPR view. If not provided users will be redirected to Haptik's privacy policy page

***initializeLanguage***: String - Code of language you want to open bot with. For eg: en, hi . We support ISO_639-1 language codes.

***composerPlaceholder***: String - The placeholder text for the composer (typing area). This is the text that's shown in the typing area when it's empty.

***customCss***: String - A custom css file can be injected into the SDK, which will allow modifying the styles of the conversation screen. This parameter takes a URL path of the CSS file.

An example has been shown below

```js
# Initializes object of type InitData
let data = new InitData()

# Use the prefix set followed by the name of the setting you would like to change 
data.setprimaryColor("#420420")
data.setenableTypingSuggestion(false)
data.sethideComposer(false)
data.setnoHeader(true)
data.setinitializeLanguage("en")
data.setcomposerPlaceholder("Type Message....")

# Initializes object of type HaptikSDK
let SDK = new HaptikSDK()
SDK.init(data)
```

#### User authentication

##### Guest Signup

SDK creates a new user, without any specific details.

```js
SDK.loadGuestConversation()
```

##### Custom signup

For cases when the client/parent application already has a signup flow in place and wants to link the same user to the SDK. Prepare SignupData object with required data and pass it to Haptik SDK.

```js
let signupdata = new SignupData()
signupdata.setauthCode("YOUR_AUTH_CODE")
signupdata.setauthId("YOUR_AUTH_ID")
signupdata.setsignupType("third_party")

SDK.loadConversation(signupdata)
```


## Steps the republish package
1) In the package directory type the command `npm init` to initialize the package.json file.
2) Create an npm account on npmjs.com and type the command `npm login` and login with your credentials.
3) `npm publish`

## Contributing

Contributions can only be made via invite.

## License

[MIT](https://choosealicense.com/licenses/mit/)
