/* eslint-disable */


/**
 * 
 * @export
 * @enum {string}
 */

export const Type = {
    COB: 'COB'
} as const;

export type Type = typeof Type[keyof typeof Type];


