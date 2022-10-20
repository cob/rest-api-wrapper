import {getServer} from '@cob/cobjs-core'
import axios from "axios"

export const logout = async function () {
    return await axios.get(getServer() + "/userm/security/auth/logout")
}