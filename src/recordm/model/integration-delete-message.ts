/* eslint-disable */


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
