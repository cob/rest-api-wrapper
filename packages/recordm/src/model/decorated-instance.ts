/* eslint-disable */

// May contain unused imports in some cases
import { DefinitionInfo } from "./definition-info"
// May contain unused imports in some cases
import { InstanceField } from "./instance-field"
// May contain unused imports in some cases
import { InstanceLinks } from "./instance-links"

/**
 * 
 * @export
 * @interface DecoratedInstance
 */
export interface DecoratedInstance {
    /**
     * 
     * @type {number}
     * @memberof DecoratedInstance
     */
    'id': number;
    /**
     * The relative path for the Instance\'s attached files. Normally the id of the instance.
     * @type {string}
     * @memberof DecoratedInstance
     */
    'attachmentPath'?: string;
    /**
     * 
     * @type {number}
     * @memberof DecoratedInstance
     */
    'version': number;
    /**
     * 
     * @type {Array<string>}
     * @memberof DecoratedInstance
     */
    'instanceLabel': Array<string>;
    /**
     * 
     * @type {DefinitionInfo}
     * @memberof DecoratedInstance
     */
    'jsonDefinition': DefinitionInfo;
    /**
     * 
     * @type {Array<InstanceField>}
     * @memberof DecoratedInstance
     */
    'fields'?: Array<InstanceField>;
    /**
     * 
     * @type {InstanceLinks}
     * @memberof DecoratedInstance
     */
    '_links': InstanceLinks;
}
