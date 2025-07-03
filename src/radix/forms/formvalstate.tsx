//src\radix\forms\form.tsx

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

import { _validityMatchers, DEFAULT_BUILT_IN_MESSAGES, DEFAULT_INVALID_MESSAGE, FORM_CONST_ELEMS, ValidityMatcher } from './formconst';
import { FormControlProps, FormFieldProps,  FormLabelProps, FormMessage, FormProps, FormSubmitProps } from '@radix-ui/react-form';
import { FormMessageImpl } from '@/radix/forms/formmsg';
import { FormLabel } from '@/radix/forms/formlabel';
import { useFormFieldContext, useValidationContext } from './form';

export interface FormValidityStateProps {
    children(validity: ValidityState | undefined): React.ReactNode;
    name?: string;
}
export const FormValidityState = (props: ScopedProps<FormValidityStateProps>) => {
    const { __scopeForm, name: nameProp, children } = props;
    const validationContext = useValidationContext(FORM_CONST_ELEMS.VALIDITY_STATE_NAME, __scopeForm);
    const fieldContext = useFormFieldContext(FORM_CONST_ELEMS.VALIDITY_STATE_NAME, __scopeForm);
    const name = nameProp ?? fieldContext.name;
    const validity = validationContext.getFieldValidity(name);
    return <>{children(validity)}</>;
};
FormValidityState.displayName = FORM_CONST_ELEMS.VALIDITY_STATE_NAME;
