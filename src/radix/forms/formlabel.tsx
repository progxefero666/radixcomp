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
import { useFormFieldContext, useValidationContext } from './form';

// FormLabel
// -------------------------------------------------------------------------------------------------
export const FormLabel = React.forwardRef<FormLabelElement, FormLabelProps>(
    (props: ScopedProps<FormLabelProps>, forwardedRef) => {
        const { __scopeForm, ...labelProps } = props;
        const validationContext = useValidationContext(FORM_CONST_ELEMS.LABEL_NAME, __scopeForm);
        const fieldContext = useFormFieldContext(FORM_CONST_ELEMS.LABEL_NAME, __scopeForm);
        const htmlFor = labelProps.htmlFor || fieldContext.id;
        const validity = validationContext.getFieldValidity(fieldContext.name);

        return (
            <LabelPrimitive
                data-radix-form-label
                data-valid={getValidAttribute(validity, fieldContext.serverInvalid)}
                data-invalid={getInvalidAttribute(validity, fieldContext.serverInvalid)}
                {...labelProps}
                ref={forwardedRef}
                htmlFor={htmlFor}
            />
        );
    }
);

FormLabel.displayName = FORM_CONST_ELEMS.LABEL_NAME;
