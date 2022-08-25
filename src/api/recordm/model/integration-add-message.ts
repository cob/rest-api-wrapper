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
 * @interface IntegrationAddMessage
 */
export interface IntegrationAddMessage {
  /**
   * The name of the Definition where to create the instances.
   * @type {string}
   * @memberof IntegrationAddMessage
   */
  type: string
  /**
   * An object in which the keys are the field names, and the values are the values to be used to fill the fields.
   * @type {object}
   * @memberof IntegrationAddMessage
   */
  values: object
  /**
   * A flag that makes the return wait for the record to be available for searching
   * @type {boolean}
   * @memberof IntegrationAddMessage
   */
  waitForSearchAvailability?: boolean
}
