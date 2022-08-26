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

import { ReportGenerationRequestCallback } from "./report-generation-request-callback"

/**
 *
 * @export
 * @interface ReportGenerationRequest
 */
export interface ReportGenerationRequest {
  /**
   * The report template to use. It can be a path relative to the provided list of directories where the report templates reside
   * @type {string}
   * @memberof ReportGenerationRequest
   */
  report: string
  /**
   * The arguments to use when generating the report
   * @type {{ [key: string]: object; }}
   * @memberof ReportGenerationRequest
   */
  arguments?: { [key: string]: object }
  /**
   *
   * @type {ReportGenerationRequestCallback}
   * @memberof ReportGenerationRequest
   */
  callback?: ReportGenerationRequestCallback
}