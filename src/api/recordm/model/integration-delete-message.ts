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
 * @interface IntegrationDeleteMessage
 */
export interface IntegrationDeleteMessage {
    /**
     * The name of the Definition of the instances we are deleting.
     * @type {string}
     * @memberof IntegrationDeleteMessage
     */
    'type': string;
    /**
     * A condition to match the instances to delete. Can be either an ES query string, or the special value \"recordmInstanceId:N[@V]\" to match a single instance. If the optional \'@V\' is used, the update will only take place if the instance N is at version V.
     * @type {string}
     * @memberof IntegrationDeleteMessage
     */
    'condition': string;
    /**
     * See the Instance DELETE for details.
     * @type {boolean}
     * @memberof IntegrationDeleteMessage
     */
    'ignoreRefs'?: boolean;
}

