import { cookieJar, getServer } from "@cob/cobjs-core";
import { umLoggedin } from "./umLoggedin";
import axios from "axios";
import Cookies from "js-cookie";

export const auth = function({ username, password, token }: { username?: string; password?: string; token?: string }) {
  if (username && password) {
    return axios
      .post(getServer() + "/userm/security/auth", {
        username: username,
        password: password,
      })
      .then(() => umLoggedin({ throtle: false }))
      .catch((e) => {
        throw e;
      });

  } else if (token) {
    // Inside a browser.
    if (typeof window !== "undefined") {
      console.warn("You should only use timeless tokens in backend scripts, not browser. Ignoring");
      Cookies.set("cobtoken", token, { secure: true, domain: window.location.hostname });

    } else {
      // Not in a browser
      cookieJar.setCookieSync("cobtoken=" + token + ";", getServer());
    }

    return umLoggedin({ throtle: false });
  }

  return Promise.reject("Specify a username/password OR a token");
};