import React, { useId } from "react";
import { CustomMatcher, FormMessageImplElement, FormMessageImplProps, ScopedProps } from "@/radix/forms/formtypes";
import { Primitive } from '@radix-ui/react-primitive';
import { useComposedRefs } from '@radix-ui/react-compose-refs';

import { useAriaDescriptionContext, useValidationContext } from "@/radix/forms/form";
import { _validityMatchers, DEFAULT_BUILT_IN_MESSAGES,
         DEFAULT_INVALID_MESSAGE, FORM_CONST_ELEMS, ValidityMatcher } from '@/radix/forms/formconst';
import { useFormFieldContext } from "@/radix/forms/form";
import { hasBuiltInError } from "@/radix/forms/formutil";

/**
 * 
 */
export const FormMessageImpl = React.forwardRef<FormMessageImplElement, FormMessageImplProps>(
    (props: ScopedProps<FormMessageImplProps>, forwardedRef) => {
        const { __scopeForm, id: idProp, name, ...messageProps } = props;
        const ariaDescriptionContext = useAriaDescriptionContext(FORM_CONST_ELEMS.MESSAGE_NAME, __scopeForm);
        const _id = useId();
        const id = idProp ?? _id;

        const { onFieldMessageIdAdd, onFieldMessageIdRemove } = ariaDescriptionContext;
        React.useEffect(() => {
            onFieldMessageIdAdd(name, id);
            return () => onFieldMessageIdRemove(name, id);
        }, [name, id, onFieldMessageIdAdd, onFieldMessageIdRemove]);

        return <Primitive.span data-radix-form-message id={id} {...messageProps} ref={forwardedRef} />;
    }
);

export interface FormCustomMessageProps extends React.ComponentPropsWithoutRef<typeof FormMessageImpl> {
    match: CustomMatcher;
    forceMatch?: boolean;
    name: string;
}

export type FormMessageElement = FormMessageImplElement;
interface FormMessageProps extends Omit<FormMessageImplProps, 'name'> {
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

export type FormBuiltInMessageElement = FormMessageImplElement;
export interface FormBuiltInMessageProps extends FormMessageImplProps {
    match: ValidityMatcher;
    forceMatch?: boolean;
    name: string;
}
export type FormCustomMessageElement = React.ComponentRef<typeof FormMessageImpl>;
export interface FormCustomMessageProps extends React.ComponentPropsWithoutRef<typeof FormMessageImpl> {
    match: CustomMatcher;
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
        const matches = forceMatch || (validity && !hasBuiltInError(validity) && hasMatchingCustomError);
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
