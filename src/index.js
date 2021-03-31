import { setServer, getServer } from "./server.js"
import auth from "./auth.js"
import rmDefinitionSearch from "./rmDefinitionSearch.js"
import rmDefinitionAggregation from "./rmDefinitionAggregation.js"
import rmDomainSearch from "./rmDomainSearch.js"
import rmGetInstance from "./rmGetInstance.js"
import rmAddInstance from "./rmAddInstance.js"
import rmDeleteInstance from "./rmDeleteInstance.js"
import umLoggedin from "./umLoggedin.js"

if(window) window.cobRestApiWrapper = {
    auth: auth,
    rmDefinitionSearch: rmDefinitionSearch,
    rmDefinitionAggregation: rmDefinitionAggregation,
    rmDomainSearch: rmDomainSearch,
    rmGetInstance: rmGetInstance,
    rmAddInstance: rmAddInstance,
    rmDeleteInstance: rmDeleteInstance,
    umLoggedin: umLoggedin
}

export { auth, setServer, getServer, rmDefinitionSearch, rmDefinitionAggregation, rmDomainSearch, rmGetInstance, rmAddInstance, rmDeleteInstance, umLoggedin };