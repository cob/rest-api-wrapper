var _token = ""
var _timelessTokenFlag = false

var setTimelessToken = function (token) {
  _token = token
  _timelessTokenFlag = true

  if(typeof cob === 'object' && cob.app && typeof cob.app.getCurrentLoggedInUser === 'function') {
    console.warn('You should only use timeless tokens in backend scripts, not browser');
  }
}

var _setToken = function (token) {
  // If browser enviroment skip setting token - use browser cookies
  if(typeof document === 'object') return
  
  // Only update if token is not a timeless token
  if(!_timelessTokenFlag) {
    if(typeof(token) == "object") {
      _token = ""
      for(key in Object.keys(token)) {
        _token += ";" + token[key]
      }
    } else {
      _token = token
    }
  }
}

var _getToken = function () {
  // If browser enviroment return browser cookies
  if(typeof document === 'object') return document.cookie
  return _token
}

var _isTimelessToken = function () {
  return _timelessTokenFlag
}

module.exports = { setTimelessToken, _setToken, _getToken, _isTimelessToken }