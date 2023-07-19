let _server = ""

if (typeof document !== 'object') {
  global._server = _server
}

const setServer = function(server) {
  if(typeof self == 'object' && self.self === self && self) {
    console.warn("Attention: setting a diferent server in a browser enviromnet will problably lead to CORS issues.\n"
      + "Specifying the same server is redundant.")
  }
  _server = server
}

const getServer = function() {
  if(_server) {
    return _server
  } else if(typeof document !== "undefined") { //this means we're in a browser, no need to specify server
    _server = ""
  } else {
    _server = "https://learning.cultofbits.com"
  }
  return _server
}

export { setServer, getServer }