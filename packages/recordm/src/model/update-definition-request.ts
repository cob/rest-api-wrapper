/* eslint-disable */

// May contain unused imports in some cases
import { FieldDefinition } from "./field-definition"

/**
 * 
 * @export
 * @interface UpdateDefinitionRequest
 */
export interface UpdateDefinitionRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateDefinitionRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof UpdateDefinitionRequest
     */
    'description'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof UpdateDefinitionRequest
     */
    'duplicable'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof UpdateDefinitionRequest
     */
    'state'?: UpdateDefinitionRequestStateEnum;
    /**
     * 
     * @type {Array<FieldDefinition>}
     * @memberof UpdateDefinitionRequest
     */
    'fieldDefinitions'?: Array<FieldDefinition>;
    /**
     * 
     * @type {number}
     * @memberof UpdateDefinitionRequest
     */
    'version': number;
}

export const UpdateDefinitionRequestStateEnum = {
    ENABLED: 'enabled',
    DISABLED: 'disabled',
    DELETE_IN_PROGRESS: 'deleteInProgress'
} as const;

export type UpdateDefinitionRequestStateEnum = typeof UpdateDefinitionRequestStateEnum[keyof typeof UpdateDefinitionRequestStateEnum];

