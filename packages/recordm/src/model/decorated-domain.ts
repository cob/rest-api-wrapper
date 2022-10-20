/* eslint-disable */

// May contain unused imports in some cases
import { Definition } from "./definition"
// May contain unused imports in some cases
import { DomainLinks } from "./domain-links"

/**
 * 
 * @export
 * @interface DecoratedDomain
 */
export interface DecoratedDomain {
    /**
     * 
     * @type {number}
     * @memberof DecoratedDomain
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof DecoratedDomain
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof DecoratedDomain
     */
    'description'?: string;
    /**
     * 
     * @type {Array<Definition>}
     * @memberof DecoratedDomain
     */
    'definitions'?: Array<Definition>;
    /**
     * 
     * @type {number}
     * @memberof DecoratedDomain
     */
    'version': number;
    /**
     * 
     * @type {DomainLinks}
     * @memberof DecoratedDomain
     */
    '_links': DomainLinks;
    /**
     * 
     * @type {Array<Definition>}
     * @memberof DecoratedDomain
     */
    'definition': Array<Definition>;
}
