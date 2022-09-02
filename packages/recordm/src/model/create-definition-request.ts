/* eslint-disable */

// May contain unused imports in some cases
import { FieldDefinition } from "./field-definition"

/**
 * 
 * @export
 * @interface CreateDefinitionRequest
 */
export interface CreateDefinitionRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateDefinitionRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof CreateDefinitionRequest
     */
    'description'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateDefinitionRequest
     */
    'duplicable'?: boolean;
    /**
     * 
     * @type {Array<FieldDefinition>}
     * @memberof CreateDefinitionRequest
     */
    'fieldDefinitions'?: Array<FieldDefinition>;
}
