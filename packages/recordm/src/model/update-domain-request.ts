/* eslint-disable */

// May contain unused imports in some cases
import { Definition } from "./definition"

/**
 * 
 * @export
 * @interface UpdateDomainRequest
 */
export interface UpdateDomainRequest {
    /**
     * 
     * @type {string}
     * @memberof UpdateDomainRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof UpdateDomainRequest
     */
    'description'?: string;
    /**
     * 
     * @type {Array<Definition>}
     * @memberof UpdateDomainRequest
     */
    'definitions'?: Array<Definition>;
    /**
     * 
     * @type {number}
     * @memberof UpdateDomainRequest
     */
    'version': number;
}
