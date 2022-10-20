/* eslint-disable */


/**
 * 
 * @export
 * @interface IntegrationUpdateMessage
 */
export interface IntegrationUpdateMessage {
    /**
     * The name of the Definition of the instances we are updating.
     * @type {string}
     * @memberof IntegrationUpdateMessage
     */
    'type': string;
    /**
     * A condition to match the instances to update. Can be either an ES query string, or the special value \"recordmInstanceId:N[@V]\" to match a single instance. If the optional \'@V\' is used, the update will only take place if the instance N is at version V.
     * @type {string}
     * @memberof IntegrationUpdateMessage
     */
    'condition': string;
    /**
     * An object in which the keys are the field IDs or field paths, and the values are the values to be used to fill the fields.
     * @type {any}
     * @memberof IntegrationUpdateMessage
     */
    'values': any;
}
