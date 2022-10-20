/* eslint-disable */

// May contain unused imports in some cases
import { DefinitionLinks } from "./definition-links"
// May contain unused imports in some cases
import { FieldDefinition } from "./field-definition"

/**
 * 
 * @export
 * @interface DecoratedDefinition
 */
export interface DecoratedDefinition {
    /**
     * 
     * @type {number}
     * @memberof DecoratedDefinition
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof DecoratedDefinition
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof DecoratedDefinition
     */
    'description'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof DecoratedDefinition
     */
    'duplicable'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof DecoratedDefinition
     */
    'state': DecoratedDefinitionStateEnum;
    /**
     * 
     * @type {Array<FieldDefinition>}
     * @memberof DecoratedDefinition
     */
    'fieldDefinitions': Array<FieldDefinition>;
    /**
     * 
     * @type {number}
     * @memberof DecoratedDefinition
     */
    'version': number;
    /**
     * 
     * @type {DefinitionLinks}
     * @memberof DecoratedDefinition
     */
    '_links': DefinitionLinks;
}

export const DecoratedDefinitionStateEnum = {
    ENABLED: 'enabled',
    DISABLED: 'disabled',
    DELETE_IN_PROGRESS: 'deleteInProgress'
} as const;

export type DecoratedDefinitionStateEnum = typeof DecoratedDefinitionStateEnum[keyof typeof DecoratedDefinitionStateEnum];

