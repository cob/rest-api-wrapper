const { setServer, getServer } = require("./server")
const { auth, getUsername } = require("./auth")
const { rmDefinitionSearch } = require("./rmDefinitionSearch")
const { rmGetInstance } = require("./rmGetInstance")
const { rmAddInstance } = require("./rmAddInstance")

module.exports = { auth, getUsername, setServer, getServer, rmDefinitionSearch, rmGetInstance, rmAddInstance };