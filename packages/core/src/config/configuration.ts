/* tslint:disable */
/* tslint:disable */

import axios from "axios"
import { CookieJar } from "tough-cookie"
import * as axiosCookieJarSupport from "axios-cookiejar-support"

export const cookieJar = new CookieJar()

// If in node use tough-cookie for axios jar
if (axiosCookieJarSupport?.wrapper) {
  axiosCookieJarSupport.wrapper(axios)
  axios.defaults.jar = cookieJar
}

axios.defaults.withCredentials = true

export interface ConfigurationParameters {
  basePath: string
  baseOptions?: any
  formDataCtor?: new () => any
}

export class Configuration {
  /**
   *  override base path
   *
   * @type {string}
   * @memberof Configuration
   */
  basePath: string
  /**
   * base options for axios calls
   *
   * @type {any}
   * @memberof Configuration
   */
  baseOptions?: any
  /**
   * The FormData constructor that will be used to create multipart form data
   * requests. You can inject this here so that execution environments that
   * do not support the FormData class can still run the generated client.
   *
   * @type {new () => FormData}
   */
  formDataCtor?: new () => any

  constructor(param: ConfigurationParameters = DEFAUULT_CONFIGURATION) {
    this.basePath = param.basePath
    this.baseOptions = param.baseOptions
    this.formDataCtor = param.formDataCtor
  }

  /**
   * Check if the given MIME is a JSON MIME.
   * JSON MIME examples:
   *   application/json
   *   application/json; charset=UTF8
   *   APPLICATION/JSON
   *   application/vnd.company+json
   * @param mime - MIME (Multipurpose Internet Mail Extensions)
   * @return True if the given MIME is JSON, false otherwise.
   */
  public isJsonMime(mime: string): boolean {
    const jsonMime = new RegExp("^(application/json|[^;/ \t]+/[^;/ \t]+[+]json)[ \t]*(;.*)?$", "i")
    return mime !== null && (jsonMime.test(mime) || mime.toLowerCase() === "application/json-patch+json")
  }
}

export const DEFAUULT_CONFIGURATION: Configuration =
  typeof window == "object" && window.self === self && self
    ? new Configuration({ basePath:"" }) //this means we're in a browser, no need to specify server and all endpoints are already realtive to the current server
    : new Configuration({ basePath: "https://learning.cultofbits.com" })
