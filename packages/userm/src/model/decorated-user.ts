/* eslint-disable */

// May contain unused imports in some cases
import { Group } from "./group"
// May contain unused imports in some cases
import { User } from "./user"
// May contain unused imports in some cases
import { UserLinks } from "./user-links"

/**
 * 
 * @export
 * @interface DecoratedUser
 */
export interface DecoratedUser {
    /**
     * 
     * @type {number}
     * @memberof DecoratedUser
     */
    'id': number;
    /**
     * 
     * @type {string}
     * @memberof DecoratedUser
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof DecoratedUser
     */
    'username': string;
    /**
     * 
     * @type {string}
     * @memberof DecoratedUser
     */
    'usernameAD'?: string;
    /**
     * 
     * @type {string}
     * @memberof DecoratedUser
     */
    'email': string;
    /**
     * 
     * @type {string}
     * @memberof DecoratedUser
     */
    'contact'?: string;
    /**
     * 
     * @type {string}
     * @memberof DecoratedUser
     */
    'password'?: string;
    /**
     * 
     * @type {User}
     * @memberof DecoratedUser
     */
    'substitute'?: User;
    /**
     * 
     * @type {number}
     * @memberof DecoratedUser
     */
    'version': number;
    /**
     * 
     * @type {Array<Group>}
     * @memberof DecoratedUser
     */
    'groups'?: Array<Group>;
    /**
     * 
     * @type {string}
     * @memberof DecoratedUser
     */
    'state'?: DecoratedUserStateEnum;
    /**
     * 
     * @type {Array<User>}
     * @memberof DecoratedUser
     */
    'substitutedUsers'?: Array<User>;
    /**
     * 
     * @type {UserLinks}
     * @memberof DecoratedUser
     */
    '_links': UserLinks;
    /**
     * 
     * @type {boolean}
     * @memberof DecoratedUser
     */
    'passwordCleared'?: boolean;
}

export const DecoratedUserStateEnum = {
    ENABLED: 'enabled',
    DISABLED: 'disabled'
} as const;

export type DecoratedUserStateEnum = typeof DecoratedUserStateEnum[keyof typeof DecoratedUserStateEnum];

