/* eslint-disable */

// May contain unused imports in some cases
import { FieldDefinition } from "./field-definition"

/**
 * 
 * @export
 * @interface Definition
 */
export interface Definition {
    /**
     * 
     * @type {number}
     * @memberof Definition
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof Definition
     */
    'name'?: string;
    /**
     * 
     * @type {string}
     * @memberof Definition
     */
    'description'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Definition
     */
    'duplicable'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Definition
     */
    'state'?: DefinitionStateEnum;
    /**
     * 
     * @type {Array<FieldDefinition>}
     * @memberof Definition
     */
    'fieldDefinitions'?: Array<FieldDefinition>;
    /**
     * 
     * @type {number}
     * @memberof Definition
     */
    'version'?: number;
}

export const DefinitionStateEnum = {
    ENABLED: 'enabled',
    DISABLED: 'disabled',
    DELETE_IN_PROGRESS: 'deleteInProgress'
} as const;

export type DefinitionStateEnum = typeof DefinitionStateEnum[keyof typeof DefinitionStateEnum];

