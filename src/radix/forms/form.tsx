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
import { FormControlProps, FormFieldProps, FormLabelProps, FormMessage, FormProps, FormSubmitProps } from '@radix-ui/react-form';
import { FormMessageImpl } from './formmsg';


// Form
// -------------------------------------------------------------------------------------------------
export const [createFormContext, ] = createContextScope('Form');
const [createFormScope] = createContextScope('Form');
export const [ValidationProvider, useValidationContext] =
    createFormContext<ValidationContextValue>(FORM_CONST_ELEMS.FORM_NAME);

export const [AriaDescriptionProvider, useAriaDescriptionContext] =
    createFormContext<AriaDescriptionContextValue>(FORM_CONST_ELEMS.FORM_NAME);

const Form = React.forwardRef<FormElement, FormProps>(
    (props: ScopedProps<FormProps>, forwardedRef) => {
        const { __scopeForm, onClearServerErrors = () => { }, ...rootProps } = props;
        const formRef = React.useRef<HTMLFormElement>(null);
        const composedFormRef = useComposedRefs(forwardedRef, formRef);

        // native validity per field
        const [validityMap, setValidityMap] = React.useState<ValidityMap>({});
        const getFieldValidity: ValidationContextValue['getFieldValidity'] = React.useCallback(
            (fieldName) => validityMap[fieldName],
            [validityMap]
        );
        const handleFieldValidityChange: ValidationContextValue['onFieldValidityChange'] =
            React.useCallback(
                (fieldName, validity) =>
                    setValidityMap((prevValidityMap) => ({
                        ...prevValidityMap,
                        [fieldName]: { ...(prevValidityMap[fieldName] ?? {}), ...validity },
                    })),
                []
            );
        const handleFieldValiditionClear: ValidationContextValue['onFieldValiditionClear'] =
            React.useCallback((fieldName) => {
                setValidityMap((prevValidityMap) => ({ ...prevValidityMap, [fieldName]: undefined }));
                setCustomErrorsMap((prevCustomErrorsMap) => ({ ...prevCustomErrorsMap, [fieldName]: {} }));
            }, []);

        // custom matcher entries per field
        const [customMatcherEntriesMap, setCustomMatcherEntriesMap] =
            React.useState<CustomMatcherEntriesMap>({});
        const getFieldCustomMatcherEntries: ValidationContextValue['getFieldCustomMatcherEntries'] =
            React.useCallback(
                (fieldName) => customMatcherEntriesMap[fieldName] ?? [],
                [customMatcherEntriesMap]
            );
        const handleFieldCustomMatcherAdd: ValidationContextValue['onFieldCustomMatcherEntryAdd'] =
            React.useCallback((fieldName, matcherEntry) => {
                setCustomMatcherEntriesMap((prevCustomMatcherEntriesMap) => ({
                    ...prevCustomMatcherEntriesMap,
                    [fieldName]: [...(prevCustomMatcherEntriesMap[fieldName] ?? []), matcherEntry],
                }));
            }, []);
        const handleFieldCustomMatcherRemove: ValidationContextValue['onFieldCustomMatcherEntryRemove'] =
            React.useCallback((fieldName, matcherEntryId) => {
                setCustomMatcherEntriesMap((prevCustomMatcherEntriesMap) => ({
                    ...prevCustomMatcherEntriesMap,
                    [fieldName]: (prevCustomMatcherEntriesMap[fieldName] ?? []).filter(
                        (matcherEntry) => matcherEntry.id !== matcherEntryId
                    ),
                }));
            }, []);

        // custom errors per field
        const [customErrorsMap, setCustomErrorsMap] = React.useState<CustomErrorsMap>({});
        const getFieldCustomErrors: ValidationContextValue['getFieldCustomErrors'] = React.useCallback(
            (fieldName) => customErrorsMap[fieldName] ?? {},
            [customErrorsMap]
        );
        const handleFieldCustomErrorsChange: ValidationContextValue['onFieldCustomErrorsChange'] =
            React.useCallback((fieldName, customErrors) => {
                setCustomErrorsMap((prevCustomErrorsMap) => ({
                    ...prevCustomErrorsMap,
                    [fieldName]: { ...(prevCustomErrorsMap[fieldName] ?? {}), ...customErrors },
                }));
            }, []);

        // messageIds per field
        const [messageIdsMap, setMessageIdsMap] = React.useState<MessageIdsMap>({});
        const handleFieldMessageIdAdd: AriaDescriptionContextValue['onFieldMessageIdAdd'] =
            React.useCallback((fieldName, id) => {
                setMessageIdsMap((prevMessageIdsMap) => {
                    const fieldDescriptionIds = new Set(prevMessageIdsMap[fieldName]).add(id);
                    return { ...prevMessageIdsMap, [fieldName]: fieldDescriptionIds };
                });
            }, []);
        const handleFieldMessageIdRemove: AriaDescriptionContextValue['onFieldMessageIdRemove'] =
            React.useCallback((fieldName, id) => {
                setMessageIdsMap((prevMessageIdsMap) => {
                    const fieldDescriptionIds = new Set(prevMessageIdsMap[fieldName]);
                    fieldDescriptionIds.delete(id);
                    return { ...prevMessageIdsMap, [fieldName]: fieldDescriptionIds };
                });
            }, []);
        const getFieldDescription: AriaDescriptionContextValue['getFieldDescription'] =
            React.useCallback(
                (fieldName) => Array.from(messageIdsMap[fieldName] ?? []).join(' ') || undefined,
                [messageIdsMap]
            );

        return (
            <ValidationProvider
                scope={__scopeForm}
                getFieldValidity={getFieldValidity}
                onFieldValidityChange={handleFieldValidityChange}
                getFieldCustomMatcherEntries={getFieldCustomMatcherEntries}
                onFieldCustomMatcherEntryAdd={handleFieldCustomMatcherAdd}
                onFieldCustomMatcherEntryRemove={handleFieldCustomMatcherRemove}
                getFieldCustomErrors={getFieldCustomErrors}
                onFieldCustomErrorsChange={handleFieldCustomErrorsChange}
                onFieldValiditionClear={handleFieldValiditionClear} >

                <AriaDescriptionProvider
                    scope={__scopeForm}
                    onFieldMessageIdAdd={handleFieldMessageIdAdd}
                    onFieldMessageIdRemove={handleFieldMessageIdRemove}
                    getFieldDescription={getFieldDescription} >
                        
                    <Primitive.form
                        {...rootProps}
                        ref={composedFormRef}
                        // focus first invalid control when the form is submitted
                        onInvalid={composeEventHandlers(props.onInvalid, (event) => {
                            const firstInvalidControl = getFirstInvalidControl(event.currentTarget);
                            if (firstInvalidControl === event.target) firstInvalidControl.focus();

                            // prevent default browser UI for form validation
                            event.preventDefault();
                        })}
                        // clear server errors when the form is re-submitted
                        onSubmit={composeEventHandlers(props.onSubmit, onClearServerErrors, {
                            checkForDefaultPrevented: false,
                        })}
                        // clear server errors when the form is reset
                        onReset={composeEventHandlers(props.onReset, onClearServerErrors)}
                    />
                </AriaDescriptionProvider>
            </ValidationProvider>
        );
    }
);
Form.displayName = FORM_CONST_ELEMS.FORM_NAME;


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
                    ref={forwardedRef}  />
            </FormFieldProvider>
        );
    }
);
FormField.displayName = FORM_CONST_ELEMS.FIELD_NAME;

// FormLabel
// -------------------------------------------------------------------------------------------------
const FormLabel = React.forwardRef<FormLabelElement, FormLabelProps>(
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


// FormControl
// -------------------------------------------------------------------------------------------------
const FormControl = React.forwardRef<FormControlElement, FormControlProps>(
    (props: ScopedProps<FormControlProps>, forwardedRef) => {
        const { __scopeForm, ...controlProps } = props;

        const validationContext = useValidationContext(FORM_CONST_ELEMS.CONTROL_NAME, __scopeForm);
        const fieldContext = useFormFieldContext(FORM_CONST_ELEMS.CONTROL_NAME, __scopeForm);
        const ariaDescriptionContext = useAriaDescriptionContext(FORM_CONST_ELEMS.CONTROL_NAME, __scopeForm);

        const ref = React.useRef<FormControlElement>(null);
        const composedRef = useComposedRefs(forwardedRef, ref);
        const name = controlProps.name || fieldContext.name;
        const id = controlProps.id || fieldContext.id;
        const customMatcherEntries = validationContext.getFieldCustomMatcherEntries(name);

        const { onFieldValidityChange, onFieldCustomErrorsChange, onFieldValiditionClear } =
            validationContext;
        const updateControlValidity = React.useCallback(
            async (control: FormControlElement) => {
                //------------------------------------------------------------------------------------------
                // 1. first, if we have built-in errors we stop here

                if (hasBuiltInError(control.validity)) {
                    const controlValidity = validityStateToObject(control.validity);
                    onFieldValidityChange(name, controlValidity);
                    return;
                }

                //------------------------------------------------------------------------------------------
                // 2. then gather the form data to give to custom matchers for cross-comparisons

                const formData = control.form ? new FormData(control.form) : new FormData();
                const matcherArgs: CustomMatcherArgs = [control.value, formData];

                //------------------------------------------------------------------------------------------
                // 3. split sync and async custom matcher entries

                const syncCustomMatcherEntries: Array<SyncCustomMatcherEntry> = [];
                const ayncCustomMatcherEntries: Array<AsyncCustomMatcherEntry> = [];
                customMatcherEntries.forEach((customMatcherEntry) => {
                    if (isAsyncCustomMatcherEntry(customMatcherEntry, matcherArgs)) {
                        ayncCustomMatcherEntries.push(customMatcherEntry);
                    } else if (isSyncCustomMatcherEntry(customMatcherEntry)) {
                        syncCustomMatcherEntries.push(customMatcherEntry);
                    }
                });

                //------------------------------------------------------------------------------------------
                // 4. run sync custom matchers and update control validity / internal validity + errors

                const syncCustomErrors = syncCustomMatcherEntries.map(({ id, match }) => {
                    return [id, match(...matcherArgs)] as const;
                });
                const syncCustomErrorsById = Object.fromEntries(syncCustomErrors);
                const hasSyncCustomErrors = Object.values(syncCustomErrorsById).some(Boolean);
                const hasCustomError = hasSyncCustomErrors;
                control.setCustomValidity(hasCustomError ? DEFAULT_INVALID_MESSAGE : '');
                const controlValidity = validityStateToObject(control.validity);
                onFieldValidityChange(name, controlValidity);
                onFieldCustomErrorsChange(name, syncCustomErrorsById);

                //------------------------------------------------------------------------------------------
                // 5. run async custom matchers and update control validity / internal validity + errors

                if (!hasSyncCustomErrors && ayncCustomMatcherEntries.length > 0) {
                    const promisedCustomErrors = ayncCustomMatcherEntries.map(({ id, match }) =>
                        match(...matcherArgs).then((matches) => [id, matches] as const)
                    );
                    const asyncCustomErrors = await Promise.all(promisedCustomErrors);
                    const asyncCustomErrorsById = Object.fromEntries(asyncCustomErrors);
                    const hasAsyncCustomErrors = Object.values(asyncCustomErrorsById).some(Boolean);
                    const hasCustomError = hasAsyncCustomErrors;
                    control.setCustomValidity(hasCustomError ? DEFAULT_INVALID_MESSAGE : '');
                    const controlValidity = validityStateToObject(control.validity);
                    onFieldValidityChange(name, controlValidity);
                    onFieldCustomErrorsChange(name, asyncCustomErrorsById);
                }
            },
            [customMatcherEntries, name, onFieldCustomErrorsChange, onFieldValidityChange]
        );

        React.useEffect(() => {
            const control = ref.current;
            if (control) {
                // We only want validate on change (native `change` event, not React's `onChange`). This is primarily
                // a UX decision, we don't want to validate on every keystroke and React's `onChange` is the `input` event.
                const handleChange = () => updateControlValidity(control);
                control.addEventListener('change', handleChange);
                return () => control.removeEventListener('change', handleChange);
            }
        }, [updateControlValidity]);

        const resetControlValidity = React.useCallback(() => {
            const control = ref.current;
            if (control) {
                control.setCustomValidity('');
                onFieldValiditionClear(name);
            }
        }, [name, onFieldValiditionClear]);

        // reset validity and errors when the form is reset
        React.useEffect(() => {
            const form = ref.current?.form;
            if (form) {
                form.addEventListener('reset', resetControlValidity);
                return () => form.removeEventListener('reset', resetControlValidity);
            }
        }, [resetControlValidity]);

        // focus first invalid control when fields are set as invalid by server
        React.useEffect(() => {
            const control = ref.current;
            const form = control?.closest('form');
            if (form && fieldContext.serverInvalid) {
                const firstInvalidControl = getFirstInvalidControl(form);
                if (firstInvalidControl === control) firstInvalidControl.focus();
            }
        }, [fieldContext.serverInvalid]);

        const validity = validationContext.getFieldValidity(name);

        return (
            <Primitive.input
                data-radix-form-control
                data-valid={getValidAttribute(validity, fieldContext.serverInvalid)}
                data-invalid={getInvalidAttribute(validity, fieldContext.serverInvalid)}
                aria-invalid={fieldContext.serverInvalid ? true : undefined}
                aria-describedby={ariaDescriptionContext.getFieldDescription(name)}
                // disable default browser behaviour of showing built-in error message on hover
                title=""
                {...controlProps}
                ref={composedRef}
                id={id}
                name={name}
                onInvalid={composeEventHandlers(props.onInvalid, (event) => {
                    const control = event.currentTarget;
                    updateControlValidity(control);
                })}
                onChange={composeEventHandlers(props.onChange, (_event) => {
                    // reset validity when user changes value
                    resetControlValidity();
                })}
            />
        );
    }
);

FormControl.displayName = FORM_CONST_ELEMS.CONTROL_NAME;


// Form Message functionality
// -------------------------------------------------------------------------------------------------=
/*
export type FormMessageElement = FormMessageImplElement;
export interface FormMessageProps extends Omit<FormMessageImplProps, 'name'> {
    match?: ValidityMatcher | CustomMatcher;
    forceMatch?: boolean;
    name?: string;
}
export const FormMessage = React.forwardRef<FormMessageElement, FormMessageProps>(
    (props: ScopedProps<FormMessageProps>, forwardedRef) => {
        const { match, name: nameProp, ...messageProps } = props;
        const fieldContext = useFormFieldContext(FORM_CONST_ELEMS.MESSAGE_NAME, props.__scopeForm);
        const name = nameProp ?? fieldContext.name;

        if (match === undefined) {
            return (
                <FormMessageImpl {...messageProps} ref={forwardedRef} name={name}>
                    {props.children || DEFAULT_INVALID_MESSAGE}
                </FormMessageImpl>
            );
        } else if (typeof match === 'function') {
            return <FormCustomMessage match={match} {...messageProps} ref={forwardedRef} name={name} />;
        } else {
            return <FormBuiltInMessage match={match} {...messageProps} ref={forwardedRef} name={name} />;
        }
    }
);
FormMessage.displayName = FORM_CONST_ELEMS.MESSAGE_NAME;
*/

export type FormBuiltInMessageElement = FormMessageImplElement;
export interface FormBuiltInMessageProps extends FormMessageImplProps {
    match: ValidityMatcher;
    forceMatch?: boolean;
    name: string;
}
export const FormBuiltInMessage = React.forwardRef<FormBuiltInMessageElement, FormBuiltInMessageProps>(
    (props: ScopedProps<FormBuiltInMessageProps>, forwardedRef) => {
        const { match, forceMatch = false, name, children, ...messageProps } = props;
        const validationContext = useValidationContext(FORM_CONST_ELEMS.MESSAGE_NAME, messageProps.__scopeForm);
        const validity = validationContext.getFieldValidity(name);
        const matches = forceMatch || validity?.[match];

        if (matches) {
            return (
                <FormMessageImpl ref={forwardedRef} {...messageProps} name={name}>
                    {children ?? DEFAULT_BUILT_IN_MESSAGES[match]}
                </FormMessageImpl>
            );
        }

        return null;
    }
);

type FormCustomMessageElement = React.ComponentRef<typeof FormMessageImpl>;
interface FormCustomMessageProps extends React.ComponentPropsWithoutRef<typeof FormMessageImpl> {
    match: CustomMatcher;
    forceMatch?: boolean;
    name: string;
}

export const FormCustomMessage = React.forwardRef<FormCustomMessageElement, FormCustomMessageProps>(
    (props: ScopedProps<FormCustomMessageProps>, forwardedRef) => {
        const { match, forceMatch = false, name, id: idProp, children, ...messageProps } = props;
        const validationContext = useValidationContext(FORM_CONST_ELEMS.MESSAGE_NAME, messageProps.__scopeForm);
        const ref = React.useRef<FormCustomMessageElement>(null);
        const composedRef = useComposedRefs(forwardedRef, ref);
        const _id = useId();
        const id = idProp ?? _id;

        const customMatcherEntry = React.useMemo(() => ({ id, match }), [id, match]);
        const { onFieldCustomMatcherEntryAdd, onFieldCustomMatcherEntryRemove } = validationContext;
        React.useEffect(() => {
            onFieldCustomMatcherEntryAdd(name, customMatcherEntry);
            return () => onFieldCustomMatcherEntryRemove(name, customMatcherEntry.id);
        }, [customMatcherEntry, name, onFieldCustomMatcherEntryAdd, onFieldCustomMatcherEntryRemove]);

        const validity = validationContext.getFieldValidity(name);
        const customErrors = validationContext.getFieldCustomErrors(name);
        const hasMatchingCustomError = customErrors[id];
        const matches =
            forceMatch || (validity && !hasBuiltInError(validity) && hasMatchingCustomError);

        if (matches) {
            return (
                <FormMessageImpl id={id} ref={composedRef} {...messageProps} name={name}>
                    {children ?? DEFAULT_INVALID_MESSAGE}
                </FormMessageImpl>
            );
        }

        return null;
    }
);


// FormValidityState
// -------------------------------------------------------------------------------------------------
interface FormValidityStateProps {
    children(validity: ValidityState | undefined): React.ReactNode;
    name?: string;
}
const FormValidityState = (props: ScopedProps<FormValidityStateProps>) => {
    const { __scopeForm, name: nameProp, children } = props;
    const validationContext = useValidationContext(FORM_CONST_ELEMS.VALIDITY_STATE_NAME, __scopeForm);
    const fieldContext = useFormFieldContext(FORM_CONST_ELEMS.VALIDITY_STATE_NAME, __scopeForm);
    const name = nameProp ?? fieldContext.name;
    const validity = validationContext.getFieldValidity(name);
    return <>{children(validity)}</>;
};

FormValidityState.displayName = FORM_CONST_ELEMS.VALIDITY_STATE_NAME;


// FormSubmit
// -------------------------------------------------------------------------------------------------
const FormSubmit = React.forwardRef<FormSubmitElement, FormSubmitProps>(
    (props: ScopedProps<FormSubmitProps>, forwardedRef) => {
        const { __scopeForm, ...submitProps } = props;
        return <Primitive.button data-radix-form-submit
            type="submit" {...submitProps} ref={forwardedRef} />;
    }
);
FormSubmit.displayName = FORM_CONST_ELEMS.SUBMIT_NAME;


// -------------------------------------------------------------------------------------------------
const Root = Form;
const Field = FormField;
const Label = FormLabel;
const Control = FormControl;
const Message = FormMessage;
const ValidityState = FormValidityState;
const Submit = FormSubmit;

export {
    createFormScope, Form, FormField, FormControl,
    FormLabel,  FormValidityState,
    FormSubmit, Root, Field, Label, Control, Message,
    ValidityState, Submit,
};

export type {
    FormProps,
    FormFieldProps,
    FormLabelProps,
    FormControlProps,
    FormValidityStateProps,
    FormSubmitProps,
};