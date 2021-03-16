const { setServer, getServer } = require("./server")
const { auth, getUsername } = require("./auth")
const { rmDefinitionSearch } = require("./rmDefinitionSearch")
const { rmGetInstance } = require("./rmGetInstance")
const { rmAddInstance } = require("./rmAddInstance")
const { rmDeleteInstance } = require("./rmDeleteInstance")
const { umLoggedin } = require("./umLoggedin")

module.exports = { auth, getUsername, setServer, getServer, rmDefinitionSearch, rmGetInstance, rmAddInstance, rmDeleteInstance, umLoggedin };