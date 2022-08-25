import { getServer, setServer } from "@/server"
import auth from "@/api/userm/helpers/auth"
import rmDefinitionSearch from "@/api/recordm/helpers/rmDefinitionSearch"
import rmDefinitionAggregation from "@/api/recordm/helpers/rmDefinitionAggregation"
import rmDomainSearch from "@/api/recordm/helpers/rmDomainSearch"
import rmGetInstance from "@/api/recordm/helpers/rmGetInstance"
import rmAddInstance from "@/api/recordm/helpers/rmAddInstance"
import rmDeleteInstance from "@/api/recordm/helpers/rmDeleteInstance"
import umLoggedin from "@/api/userm/helpers/umLoggedin"
import dmEquipmentSearch from "@/api/devicem/helpers/dmEquipmentSearch"

export {
  auth,
  setServer,
  getServer,
  rmDefinitionSearch,
  rmDefinitionAggregation,
  rmDomainSearch,
  rmGetInstance,
  rmAddInstance,
  rmDeleteInstance,
  umLoggedin,
  dmEquipmentSearch,
}
