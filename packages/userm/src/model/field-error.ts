/* eslint-disable */


/**
 * 
 * @export
 * @interface FieldError
 */
export interface FieldError {
    /**
     * 
     * @type {string}
     * @memberof FieldError
     */
    'errorType'?: FieldErrorErrorTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof FieldError
     */
    'fieldName'?: string;
    /**
     * 
     * @type {string}
     * @memberof FieldError
     */
    'message'?: string;
}

export const FieldErrorErrorTypeEnum = {
    MANDATORY: 'MANDATORY',
    NON_UNIQUE: 'NON_UNIQUE',
    INVALID_FORMAT: 'INVALID_FORMAT',
    SHORT_DATA: 'SHORT_DATA',
    INVALID_PRODUCT: 'INVALID_PRODUCT',
    DATA_TOO_LONG: 'DATA_TOO_LONG',
    USER_NOT_FOUND: 'USER_NOT_FOUND',
    INVALID_SUBSTITUTE_USER: 'INVALID_SUBSTITUTE_USER',
    NOT_ALLOWED: 'NOT_ALLOWED'
} as const;

export type FieldErrorErrorTypeEnum = typeof FieldErrorErrorTypeEnum[keyof typeof FieldErrorErrorTypeEnum];

