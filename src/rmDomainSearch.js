import { getServer } from "./server.js";
import axios from 'axios';

const QueryURLTemplate =  "/recordm/recordm/domains/search/__DOMAIN_ID__?from=0&size=0&q=__QUERY__"
const ResultsURLTemplate = "#/domain/__DOMAIN_ID__/q=__QUERY__"

const rmDomainSearch = async function (domainId, query="*", from=0, size=0,sort="", ascending=false) {
    let queryUrl = QueryURLTemplate
        .replace('__DOMAIN_ID__',domainId)
        .replace('__QUERY__',encodeURIComponent(query))
        .replace('__FROM__',from)
        .replace('__SIZE__',size)

    if(sort) queryUrl += "&sort="+sort
    if(ascending) queryUrl += "&ascending="+ascending
  
    return axios.get(getServer() + queryUrl)
      .then(response => {
        //Add resultsUrl to response
        response.data.resultsUrl = ResultsURLTemplate
          .replace('__DOMAIN_ID__', domainId)
          .replace('__QUERY__', query);
        if(typeof window == "undefined") {
          response.data.resultsUrl = getServer() + "/recordm/" + response.data.resultsUrl
        }
  
        return response.data
      })
      .catch ( e => {
        throw(e)
      })
}

export default rmDomainSearch