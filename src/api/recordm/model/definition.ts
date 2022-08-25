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

/**
 *
 * @export
 * @interface Definition
 */
export interface Definition {
  /**
   *
   * @type {number}
   * @memberof Definition
   */
  id: number
  /**
   *
   * @type {string}
   * @memberof Definition
   */
  name: string
  /**
   *
   * @type {string}
   * @memberof Definition
   */
  description?: string
  /**
   *
   * @type {boolean}
   * @memberof Definition
   */
  duplicable?: boolean
  /**
   *
   * @type {string}
   * @memberof Definition
   */
  state: string
  /**
   *
   * @type {number}
   * @memberof Definition
   */
  version: number
}
