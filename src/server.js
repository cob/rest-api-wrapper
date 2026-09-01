import { isBrowser } from "./utils/environment.js"

let _server = ""

const setServer = function(server) {
  if(isBrowser()) {
    console.warn("Attention: setting a different server in a browser environment will probably lead to CORS issues.\n"
      + "Specifying the same server is redundant.")
  }
  _server = server
}

const getServer = function() {
  if(!_server && !isBrowser()) { //in a browser there's no need to specify a server
    _server = "https://learning.cultofbits.com"
  }
  return _server
}

export { setServer, getServer }
