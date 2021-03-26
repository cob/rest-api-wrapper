import { getServer }  from "./server";
import axios from 'axios';

var umLoggedin = function () {
  return axios.get(getServer() + "/userm/userm/user/loggedin")
    .then(response => {
      return response.data.loggedInUser
    })
    .catch ( e => {
      throw (e)
    })
}

export { umLoggedin }