/* eslint-disable */

// May contain unused imports in some cases
import { Group } from "./group"
// May contain unused imports in some cases
import { UserLinks } from "./user-links"

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'usernameAD'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'contact'?: string;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'password'?: string;
    /**
     * 
     * @type {User}
     * @memberof User
     */
    'substitute'?: User;
    /**
     * 
     * @type {number}
     * @memberof User
     */
    'version': number;
    /**
     * 
     * @type {Array<Group>}
     * @memberof User
     */
    'groups'?: Array<Group>;
    /**
     * 
     * @type {string}
     * @memberof User
     */
    'state'?: UserStateEnum;
    /**
     * 
     * @type {Array<User>}
     * @memberof User
     */
    'substitutedUsers'?: Array<User>;
    /**
     * 
     * @type {UserLinks}
     * @memberof User
     */
    '_links'?: UserLinks;
    /**
     * 
     * @type {boolean}
     * @memberof User
     */
    'passwordCleared'?: boolean;
}

export const UserStateEnum = {
    ENABLED: 'enabled',
    DISABLED: 'disabled'
} as const;

export type UserStateEnum = typeof UserStateEnum[keyof typeof UserStateEnum];

