/* tslint:disable */
/* eslint-disable */
/**
 * RecordM API
 * The RecordM REST API<br/><br/> **Note**: To  use the \'Try it out\' buttons, you must be [logged in](/).
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Definition } from "./definition"

/**
 *
 * @export
 * @interface UpdateDomainRequest
 */
export interface UpdateDomainRequest {
  /**
   *
   * @type {string}
   * @memberof UpdateDomainRequest
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof UpdateDomainRequest
   */
  description?: string
  /**
   *
   * @type {Array<Definition>}
   * @memberof UpdateDomainRequest
   */
  definitions?: Array<Definition>
  /**
   *
   * @type {number}
   * @memberof UpdateDomainRequest
   */
  version: number
}
