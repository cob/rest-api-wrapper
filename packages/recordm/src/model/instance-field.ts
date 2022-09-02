/* eslint-disable */

// May contain unused imports in some cases
import { FieldDefinition } from "./field-definition"
// May contain unused imports in some cases
import { Task } from "./task"

/**
 * 
 * @export
 * @interface InstanceField
 */
export interface InstanceField {
    /**
     * 
     * @type {number}
     * @memberof InstanceField
     */
    'id': number;
    /**
     * 
     * @type {number}
     * @memberof InstanceField
     */
    'parent'?: number;
    /**
     * 
     * @type {FieldDefinition}
     * @memberof InstanceField
     */
    'fieldDefinition': FieldDefinition;
    /**
     * 
     * @type {string}
     * @memberof InstanceField
     */
    'value'?: string;
    /**
     * 
     * @type {string}
     * @memberof InstanceField
     */
    'label': string;
    /**
     * 
     * @type {Array<Task>}
     * @memberof InstanceField
     */
    'tasks'?: Array<Task>;
    /**
     * 
     * @type {{ [key: string]: boolean; }}
     * @memberof InstanceField
     */
    'permissions'?: { [key: string]: boolean; };
    /**
     * 
     * @type {boolean}
     * @memberof InstanceField
     */
    'duplicate': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof InstanceField
     */
    'off': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof InstanceField
     */
    'upToDate': boolean;
}
