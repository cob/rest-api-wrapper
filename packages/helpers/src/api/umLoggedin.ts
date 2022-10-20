import { getServer } from '@cob/cobjs-core'
import axios from "axios"
import { UmLoggedInResponse } from "../model/index"

let _lastUmLoggedinResponse: UmLoggedInResponse
let _lastUmLoggedinResponseValidity = 0
let _currentPromise: Promise<{ username: string }>

export const umLoggedin = function ({ throtle }: { throtle: boolean } = { throtle: true }): Promise<UmLoggedInResponse> {
  // debugger;
  if (typeof cob !== 'undefined' && cob?.app?.getCurrentLoggedInUser) {
    return Promise.resolve({
      username: cob.app.getCurrentLoggedInUser(),
      groups: cob.app.getGroups()
        ? cob.app.getGroups().map((g: string) => {
            return { name: g } as { name: string }
          })
        : [],
    })
  } else if (throtle && Date.now() < _lastUmLoggedinResponseValidity) {
    _lastUmLoggedinResponse.throtle = true
    return Promise.resolve(_lastUmLoggedinResponse)

  } else if (throtle && _currentPromise && typeof _currentPromise.then === "function") {
    return _currentPromise.then((r) => r)

  } else {
    return (_currentPromise = axios
      .get(getServer() + "/userm/userm/user/loggedin")
      .then((response) => {
        _lastUmLoggedinResponseValidity = Date.now() + 60000
        _lastUmLoggedinResponse = {
          username: response.data.loggedInUser.username,
          groups: (response.data.loggedInUser.groups || []).map((g: any) => g.name),
          throtle: false,
        }
        return _lastUmLoggedinResponse
      })
      .catch((e) => {
        if (e.response.status === 403) {
          return Promise.resolve({ username: "anonymous" })
        } else {
          throw e
        }
      }))
  }
}