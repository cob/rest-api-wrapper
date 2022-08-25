let _server = ""

function setServer(server: string): void {
  if (typeof self == "object" && self.self === self && self) {
    console.warn(
      "Attention: setting a diferent server in a browser environment will problably lead to CORS issues.\n" +
        "Specifying the same server is redundant."
    )
  }
  _server = server
}

function getServer(): string {
  if (_server) {
    return _server
  } else if (typeof window == "object" && window.self === self && self) {
    //this means we're in a browser, no need to specify server
    _server = ""
  } else {
    _server = "https://learning.cultofbits.com"
  }
  return _server
}

export { setServer, getServer }
