//src\radix\forms\formconst.ts
import * as React from 'react';
import { composeEventHandlers } from '@radix-ui/primitive';
import { useComposedRefs } from '@radix-ui/react-compose-refs';
import { createContextScope } from '@radix-ui/react-context';
import { useId } from '@radix-ui/react-id';
import { Label as LabelPrimitive, LabelProps } from '@radix-ui/react-label';
import { Primitive } from '@radix-ui/react-primitive';


// Import util functions
import {
    validityStateToObject,
    isHTMLElement,
    isFormControl,
    isInvalid,
    getFirstInvalidControl,
    isAsyncCustomMatcherEntry,
    isSyncCustomMatcherEntry,
    returnsPromise,
    hasBuiltInError,
    getValidAttribute,
    getInvalidAttribute } from './formutil';

import {
    PrimitiveFormProps, PrimitiveDivProps, PrimitiveInputProps,
    PrimitiveSpanProps, CustomMatcher, PrimitiveButtonProps,
    ValidationContextValue, AriaDescriptionContextValue,
    FormElement, ScopedProps, ValidityMap, CustomMatcherEntriesMap,
    CustomErrorsMap, MessageIdsMap, FormFieldContextValue,
    FormFieldElement, FormLabelElement, FormControlElement,
    CustomMatcherArgs, SyncCustomMatcherEntry, AsyncCustomMatcherEntry,
    FormMessageImplElement, FormSubmitElement,
    FormMessageImplProps} from './formtypes';


import { FormControlProps, FormFieldProps, FormLabelProps, FormProps, FormSubmitProps } from '@radix-ui/react-form';

// Constants
// -------------------------------------------------------------------------------------------------
export enum FORM_CONST_ELEMS {
    FORM_NAME = 'Form',
    FIELD_NAME = 'FormField',
    LABEL_NAME = 'FormLabel',
    CONTROL_NAME = 'FormControl',
    MESSAGE_NAME = 'FormMessage',
    VALIDITY_STATE_NAME = 'FormValidityState',
    SUBMIT_NAME = 'FormSubmit'
}

const [createFormContext, createFormScope] = createContextScope('Form');

const [ValidationProvider, useValidationContext] =
    createFormContext<ValidationContextValue>(FORM_CONST_ELEMS.FORM_NAME);



// Constantes de mensajes por defecto
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