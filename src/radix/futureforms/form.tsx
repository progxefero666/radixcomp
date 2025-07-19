//src\radix\forms\form.tsx

import * as React from 'react';
import { composeEventHandlers } from '@radix-ui/primitive';
import { useComposedRefs } from '@radix-ui/react-compose-refs';
import { createContextScope } from '@radix-ui/react-context';
import { useId } from '@radix-ui/react-id';
import { Primitive } from '@radix-ui/react-primitive';
import { FormLabel } from '@/radix/futureforms/formlabel';
import { FormControlProps, FormFieldProps,  FormLabelProps, 
         FormMessage, FormProps, FormSubmitProps, FormValidityState } from '@radix-ui/react-form';

// Folder functions
import {validityStateToObject,
        getFirstInvalidControl,isAsyncCustomMatcherEntry,isSyncCustomMatcherEntry,
        hasBuiltInError,getValidAttribute,getInvalidAttribute } from '@/radix/futureforms/formutil';
import { ValidationContextValue,AriaDescriptionContextValue,FormElement,
         ScopedProps, ValidityMap, CustomMatcherEntriesMap, CustomErrorsMap, 
         MessageIdsMap, FormFieldContextValue, FormFieldElement, 
         FormControlElement, CustomMatcherArgs, SyncCustomMatcherEntry,
         AsyncCustomMatcherEntry,  FormSubmitElement} from '@/radix/futureforms/formtypes';

import { _validityMatchers, DEFAULT_INVALID_MESSAGE, FORM_CONST_ELEMS } from '@/radix/futureforms/formconst';


// constants
// -------------------------------------------------------------------------------------------------  
const [createFormScope] = createContextScope('Form');
export const [createFormContext ] = createContextScope('Form');
export const [ValidationProvider, useValidationContext] =
    createFormContext<ValidationContextValue>(FORM_CONST_ELEMS.FORM_NAME);
export const [AriaDescriptionProvider, useAriaDescriptionContext] =
    createFormContext<AriaDescriptionContextValue>(FORM_CONST_ELEMS.FORM_NAME);

// Form
// -------------------------------------------------------------------------------------------------    
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

// -------------------------------------------------------------------------------------------------
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

// -------------------------------------------------------------------------------------------------
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

        const { onFieldValidityChange, 
                onFieldCustomErrorsChange, 
                onFieldValiditionClear } = validationContext;

        const updateControlValidity = React.useCallback(
            async (control: FormControlElement) => {
                // 1. first, if we have built-in errors we stop here
                if (hasBuiltInError(control.validity)) {
                    const controlValidity = validityStateToObject(control.validity);
                    onFieldValidityChange(name, controlValidity);
                    return;
                }
                // 2. then gather the form data to give to custom matchers for cross-comparisons
                const formData = control.form ? new FormData(control.form) : new FormData();
                const matcherArgs: CustomMatcherArgs = [control.value, formData];
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


// FormSubmit
// -------------------------------------------------------------------------------------------------
const FormSubmit = React.forwardRef<FormSubmitElement, FormSubmitProps>(
    (props: ScopedProps<FormSubmitProps>, forwardedRef) => {
        const { __scopeForm, ...submitProps } = props;
        return ( 
            <Primitive.button 
                    data-radix-form-submit
                    type="submit" 
                    {...submitProps} 
                    ref={forwardedRef} />
        );
    }
);
FormSubmit.displayName = FORM_CONST_ELEMS.SUBMIT_NAME;


// exports
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
export type {FormProps,FormFieldProps,FormControlProps,FormSubmitProps};