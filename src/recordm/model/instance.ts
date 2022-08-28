/* eslint-disable */

// May contain unused imports in some cases
import { DefinitionInfo } from "./definition-info"
// May contain unused imports in some cases
import { InstanceField } from "./instance-field"

/**
 * 
 * @export
 * @interface Instance
 */
export interface Instance {
    /**
     * 
     * @type {number}
     * @memberof Instance
     */
    'id': number;
    /**
     * The relative path for the Instance\'s attached files. Normally the id of the instance.
     * @type {string}
     * @memberof Instance
     */
    'attachmentPath'?: string;
    /**
     * 
     * @type {number}
     * @memberof Instance
     */
    'version': number;
    /**
     * 
     * @type {Array<string>}
     * @memberof Instance
     */
    'instanceLabel': Array<string>;
    /**
     * 
     * @type {DefinitionInfo}
     * @memberof Instance
     */
    'jsonDefinition': DefinitionInfo;
    /**
     * 
     * @type {Array<InstanceField>}
     * @memberof Instance
     */
    'fields'?: Array<InstanceField>;
}
