import {getServer} from "./server.js"
import axios from 'axios'

const GetUri = "/recordm/recordm/definitions/__ID__"

const rmListDefinitionFields = async function(definitionId) {
    const url = getServer() + GetUri.replace('__ID__', definitionId)
    return (await axios.get(url)).data
}

export default rmListDefinitionFields