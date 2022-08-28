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
    'field'?: string;
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
    'error'?: string;
}

export const FieldErrorErrorTypeEnum = {
    MANDATORY: 'MANDATORY',
    INVALID_FORMAT: 'INVALID_FORMAT',
    FIELD_TO_LONG: 'FIELD_TO_LONG',
    DUPLICATE_DOMAIN_NAME: 'DUPLICATE_DOMAIN_NAME',
    DOMAIN_NAME_NOT_ALLOWED: 'DOMAIN_NAME_NOT_ALLOWED',
    DUPLICATE_DEFINITION_NAME: 'DUPLICATE_DEFINITION_NAME',
    INVALID_FIELD_DEFINITION_NAME: 'INVALID_FIELD_DEFINITION_NAME',
    INVALID_FIELD_DEFINITION_DESCRIPTION: 'INVALID_FIELD_DEFINITION_DESCRIPTION',
    NO_DEFINITION_FOUND: 'NO_DEFINITION_FOUND',
    DEFINITION_NOT_ENABLED: 'DEFINITION_NOT_ENABLED',
    NOT_A_NUMBER: 'NOT_A_NUMBER',
    NOT_A_DATE: 'NOT_A_DATE',
    NOT_AUTHORIZED_TO_EDIT_FIELD: 'NOT_AUTHORIZED_TO_EDIT_FIELD',
    VALUE_NOT_SUPPORTED: 'VALUE_NOT_SUPPORTED',
    INSTANCE_REFERENCED: 'INSTANCE_REFERENCED',
    EXT_REF_INVALID_STATE: 'EXT_REF_INVALID_STATE',
    NOT_DUPLICABLE_FIELD: 'NOT_DUPLICABLE_FIELD',
    WORKM_ERROR: 'WORKM_ERROR',
    NOT_VALID_TASKS_FORMAT: 'NOT_VALID_TASKS_FORMAT',
    NOT_VALID_TASK: 'NOT_VALID_TASK'
} as const;

export type FieldErrorErrorTypeEnum = typeof FieldErrorErrorTypeEnum[keyof typeof FieldErrorErrorTypeEnum];

