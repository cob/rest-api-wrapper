/* tslint:disable */
/* eslint-disable */
/**
 * ReportM API
 * The ReportM REST API<br/><br/> **Note**: To  use the \'Try it out\' buttons, you must be [logged in](/).
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ReportCallbackAuth } from "./report-callback-auth"

/**
 *
 * @export
 * @interface ReportCallback
 */
export interface ReportCallback {
  /**
   * The callback url
   * @type {string}
   * @memberof ReportCallback
   */
  url: string
  /**
   *
   * @type {ReportCallbackAuth}
   * @memberof ReportCallback
   */
  auth?: ReportCallbackAuth
}
