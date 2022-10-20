/* eslint-disable */


/**
 * 
 * @export
 * @interface FieldDefinition
 */
export interface FieldDefinition {
    /**
     * 
     * @type {number}
     * @memberof FieldDefinition
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof FieldDefinition
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof FieldDefinition
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof FieldDefinition
     */
    'condition'?: string;
    /**
     * 
     * @type {string}
     * @memberof FieldDefinition
     */
    'required'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof FieldDefinition
     */
    'duplicable': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof FieldDefinition
     */
    'groupField': boolean;
    /**
     * 
     * @type {number}
     * @memberof FieldDefinition
     */
    'order': number;
    /**
     * 
     * @type {Array<FieldDefinition>}
     * @memberof FieldDefinition
     */
    'fields': Array<FieldDefinition>;
}
