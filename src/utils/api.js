import axios from "axios";

export default class API {
  constructor({ configuration }) {
    this._fcUrl = configuration.FC_URL;
    this._fsUrl = configuration.FS_URL;
    this._callbackUrl = configuration.CALLBACK_FS_PATH;
    this._clientId = configuration.CLIENT_ID;
    this._scopes = configuration.SCOPES;
    this._authPath = configuration.AUTHORIZATION_FC_PATH;
    this._tokenPath = configuration.TOKEN_FC_PATH;
    this._clientSecret = configuration.CLIENT_SECRET;
    this._userInfoEndpoints = configuration.USERINFO_FC_PATH;

    this._responseType = "code";
    this._acrValues = "eidas1";
  }

  createUrlAuthorize_V1() {
    const state = this._generateRandomString();
    const nonce = this._generateRandomString();

    return (
      `${this._fcUrl}${this._authPath}?response_type=${
        this._responseType
      }&client_id=${this._clientId}&acr_values=${this._acrValues}` +
      `&redirect_uri=${this._fsUrl}${this._callbackUrl}&scope=openid ${
        this._scopes
      }&state=${state}&nonce=${nonce}
        `
    );
  }

  _generateRandomString() {
    return Math.random()
      .toString()
      .replace("0", "");
  }

  createCallTokenEndpoint_V1(code) {
    return new Promise((resolve, reject) => {
      if (!code) {
        reject(new Error());
      }

      try {
        const token = axios.post(`${this._fcUrl}${this._tokenPath}`, {
          grant_type: "authorization_code",
          redirect_uri: `${this._fsUrl}${this._callbackUrl}`,
          client_id: `${this._clientId}`,
          client_secret: `${this._clientSecret}`,
          code: code
        });
        resolve(token);
      } catch (error) {
        reject(error);
      }
    });
  }

  getUserInfo_V1(token) {
    return new Promise((resolve, reject) => {
      if (!token) {
        reject(new Error());
      }
      console.log("token", token, this._fcUrl, this._userInfoEndpoints);
      try {
        const userinfo = axios.get(
          `${this._fcUrl}${this._userInfoEndpoints}?schema=openid`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        resolve(userinfo);
      } catch (error) {
        reject(error);
      }
    });
  }
}
