const { setServer, getServer } = require("./server")
const { login, getUsername } = require("./login")
const { rmDefinitionSearch } = require("./rmDefinitionSearch")

module.exports = { login, getUsername, setServer, getServer, rmDefinitionSearch };