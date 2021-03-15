const { setServer, getServer } = require("./server")
const { login, getUsername } = require("./login")
const { _setToken, _getToken } = require("./token")

module.exports = { login, getUsername, setServer, getServer, _setToken, _getToken };