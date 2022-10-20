import { DEFAUULT_CONFIGURATION } from "./configuration"

const _configuration = DEFAUULT_CONFIGURATION

function setServer(server: string): void {
  if (typeof self == "object" && self.self === self && self) {
    console.warn(
      "Attention: setting a diferent server in a browser environment will probably lead to CORS issues.\n" +
        "Specifying the same server is redundant."
    )
  }
  _configuration.basePath = server
}

function getServer(): string {
  return _configuration.basePath
}

export { setServer, getServer }
