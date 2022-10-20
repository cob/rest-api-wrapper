/* eslint-disable */


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
    'type': string;
    /**
     * An object in which the keys are the field names, and the values are the values to be used to fill the fields.
     * @type {any}
     * @memberof IntegrationAddMessage
     */
    'values': any;
    /**
     * A flag that makes the return wait for the record to be available for searching
     * @type {boolean}
     * @memberof IntegrationAddMessage
     */
    'waitForSearchAvailability'?: boolean;
}
