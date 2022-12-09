export default class SignupData {
  constructor() {
    this.data = {};
  }

  setauthCode(code) {
    this.data.authCode = code;
  }

  setauthId(code) {
    this.data.authId = code;
  }

  signupType(type) {
    this.data.signupType = type;
  }

  getData() {
    return this.data;
  }
}
