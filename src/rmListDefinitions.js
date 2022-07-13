import {getServer} from "./server.js"
import axios from 'axios'

const GetUri = "/recordm/recordm/definitions"

const rmListDefinitions = async function(filter = {includeDisabled: false, name: null}) {
    const queryParams = []

    if (filter) {
        queryParams.push(filter.includeDisabled ? `includeDisabled=true` : null)
        queryParams.push(filter.name ? `name=${filter.name.replace(/\*/g, '%')}` : null)
    }

    return (await axios.get(`${getServer() + GetUri}?${queryParams.filter(it => !!it).join("&")}`)).data
}

export default rmListDefinitions