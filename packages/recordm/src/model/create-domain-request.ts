/* eslint-disable */

// May contain unused imports in some cases
import { Definition } from "./definition"

/**
 * 
 * @export
 * @interface CreateDomainRequest
 */
export interface CreateDomainRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateDomainRequest
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof CreateDomainRequest
     */
    'description'?: string;
    /**
     * 
     * @type {Array<Definition>}
     * @memberof CreateDomainRequest
     */
    'definitions'?: Array<Definition>;
}
