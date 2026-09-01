import { getServer } from "./server.js";
import { normalizeAscending } from "./utils/urlHelper.js";
import axios from 'axios';

const QueryURLTemplate =  "/recordm/recordm/domains/search/__DOMAIN_ID__?from=__FROM__&size=__SIZE__&q=__QUERY__"
const ResultsURLTemplate = "#/domain/__DOMAIN_ID__/q=__QUERY__"

const rmDomainSearch = async function (domainId, query="*", from=0, size=0, sort="", ascending=undefined) {
    let queryUrl = QueryURLTemplate
        .replace('__DOMAIN_ID__',encodeURIComponent(domainId))
        .replace('__QUERY__',encodeURIComponent(query))
        .replace('__FROM__',from)
        .replace('__SIZE__',size)

    const asc = normalizeAscending(ascending)
    if(sort) queryUrl += "&sort="+encodeURIComponent(sort)
    if(asc !== undefined) queryUrl += "&ascending="+asc

    return axios.get(getServer() + queryUrl)
      .then(response => {
        //Add resultsUrl to response
        response.data.resultsUrl = ResultsURLTemplate
          .replace('__DOMAIN_ID__', domainId)
          .replace('__QUERY__', encodeURIComponent(query));
        if(typeof document == "undefined") {
          response.data.resultsUrl = getServer() + "/recordm/" + response.data.resultsUrl
        }

        return response.data
      })
      .catch ( e => {
        throw(e)
      })
}

export default rmDomainSearch
