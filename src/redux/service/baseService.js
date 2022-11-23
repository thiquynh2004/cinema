import Axios from "axios";
import { DOMAIN, TOKEN, TokenCybersoft } from "../../utils/config";
// import { DOMAIN, TOKEN, TokenCybersoft } from "../utils/config";

export class baseService {
  constructor() {
    this.https = Axios.create({
      baseURL: DOMAIN,
      timeout: 30000,
    });
    this.https.interceptors.request.use(
      (config) => {
        config.headers = {
          ...config.headers,
          accept: "application/json",
          TokenCyberSoft: TokenCybersoft,
          Authorization: `${
            localStorage.getItem(TOKEN)
              ? "Bearer " + localStorage.getItem(TOKEN)
              : ""
          }`, //Token mà người dùng đăng nhập
        };
        return config;
      },
      (errors) => {
        return Promise.reject(errors);
      }
    );
  }
  get = (url) => {
    return this.https.get(url);
  };
  post = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "POST",
      data: model,
      headers: {
        TokenCybersoft,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };
  put = (url, model) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "PUT",
      data: model,
      headers: { Authorization: "Bearer " + localStorage.getItem(TOKEN) },
    });
  };
  delete = (url) => {
    return Axios({
      url: `${DOMAIN}${url}`,
      method: "DELETE",
      headers: {
        TokenCybersoft,
        Authorization: "Bearer " + localStorage.getItem(TOKEN),
      },
    });
  };
}
