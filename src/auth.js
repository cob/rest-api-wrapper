const { getServer } = require("./server")

const axios = require('axios').default;
const tough = require('tough-cookie');
const axiosCookieJarSupport = require('axios-cookiejar-support').default;

axiosCookieJarSupport(axios);

const cookieJar = new tough.CookieJar();
axios.defaults.jar = cookieJar;
axios.defaults.withCredentials = true;


var _username = "anonymous"
if (typeof document !== 'object') {
  global._username = _username
}

var auth = function (username, password) {
  // start by reseting _username, wich signal clients momentarily to way for decision
  _username = "" 

  return axios
    .post(getServer() + "/recordm/security/auth", {
      username: username,
      password: password
    },
    )
    .then( () => {
      _username = username
      return username
    })
    .catch ( e => {
      console.warn("Failed auth")
      _username = "anonymous" 
    })
}

var getUsername = function() {
  if(typeof cob === 'object' && cob.app && typeof cob.app.getCurrentLoggedInUser === 'function') {
    return cob.app.getCurrentLoggedInUser()
  } else {
    return _username
  }
}

var setTimelessToken = function (token) {
  if(typeof cob === 'object' && cob.app && typeof cob.app.getCurrentLoggedInUser === 'function') {
    console.warn('You should only use timeless tokens in backend scripts, not browser. Ignoring');
    return
  }
  //TODO: fix and test
  cookieJar.setCookieSync('cobtoken=' + token + ';', getServer());
  _setUsername("timelessToken_"+token.substring(0,4))
}


var _setUsername = function(username) {
  _username = username
}


module.exports = { auth, setTimelessToken, getUsername, _setUsername }