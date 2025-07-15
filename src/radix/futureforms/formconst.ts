//src\radix\forms\formconst.ts

// Constants
// ------------------------------------------------------------------------------------
export enum FORM_CONST_ELEMS {
    FORM_NAME = 'Form',
    FIELD_NAME = 'FormField',
    LABEL_NAME = 'FormLabel',
    CONTROL_NAME = 'FormControl',
    MESSAGE_NAME = 'FormMessage',
    VALIDITY_STATE_NAME = 'FormValidityState',
    SUBMIT_NAME = 'FormSubmit'
}


// Messages
// ------------------------------------------------------------------------------------
export const DEFAULT_INVALID_MESSAGE = 'This value is not valid';

export const DEFAULT_BUILT_IN_MESSAGES: Record<ValidityMatcher, string | undefined> = {
    badInput: DEFAULT_INVALID_MESSAGE,
    patternMismatch: 'This value does not match the required pattern',
    rangeOverflow: 'This value is too large',
    rangeUnderflow: 'This value is too small',
    stepMismatch: 'This value does not match the required step',
    tooLong: 'This value is too long',
    tooShort: 'This value is too short',
    typeMismatch: 'This value does not match the required type',
    valid: undefined,
    valueMissing: 'This value is missing',
};

// Type definition for ValidityMatcher
// ------------------------------------------------------------------------------------
export const _validityMatchers = [
    'badInput',
    'patternMismatch',
    'rangeOverflow',
    'rangeUnderflow',
    'stepMismatch',
    'tooLong',
    'tooShort',
    'typeMismatch',
    'valid',
    'valueMissing',
] as const;
export type ValidityMatcher = (typeof _validityMatchers)[number];