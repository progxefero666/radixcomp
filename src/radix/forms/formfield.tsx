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
import { FormControlProps, FormFieldProps, FormLabelProps, FormProps, FormSubmitProps } from '@radix-ui/react-form';
import { createFormContext, useValidationContext } from './form';


// FormField
// -------------------------------------------------------------------------------------------------
export const [FormFieldProvider, useFormFieldContext] =
    createFormContext<FormFieldContextValue>(FORM_CONST_ELEMS.FIELD_NAME);

const FormField = React.forwardRef<FormFieldElement, FormFieldProps>(
    (props: ScopedProps<FormFieldProps>, forwardedRef) => {
        const { __scopeForm, name, serverInvalid = false, ...fieldProps } = props;
        const validationContext = useValidationContext(FORM_CONST_ELEMS.FIELD_NAME, __scopeForm);
        const validity = validationContext.getFieldValidity(name);
        const id = useId();

        return (
            <FormFieldProvider scope={__scopeForm} id={id} name={name} serverInvalid={serverInvalid}>
                <Primitive.div
                    data-radix-form-field
                    data-valid={getValidAttribute(validity, serverInvalid)}
                    data-invalid={getInvalidAttribute(validity, serverInvalid)}
                    {...fieldProps}
                    ref={forwardedRef}
                />
            </FormFieldProvider>
        );
    }
);
FormField.displayName = FORM_CONST_ELEMS.FIELD_NAME;
