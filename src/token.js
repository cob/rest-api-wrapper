const { _setUsername } = require("./login")

var _token = []
var _timelessToken = false

var setTimelessToken = function (token) {
  _token = [token]
  _timelessToken = true

  if(typeof cob === 'object' && cob.app && typeof cob.app.getCurrentLoggedInUser === 'function') {
    console.warn('You should only use timeless tokens in backend scripts, not browser');
  }
  _setUsername("timelessToken_"+token.substring(0,4))
}

var _setToken = function (token) {
  // If cob enviroment skip setting token - use browser cookies
  if(typeof document === 'object') return
  
  // Only update if token is not a timeless token
  if(!_timelessToken) {
    _token = [token]
  }
}

var _getToken = function () {
  if(typeof document === 'object') return [document.cookie]
  return _token
}

module.exports = { setTimelessToken, _setToken, _getToken }