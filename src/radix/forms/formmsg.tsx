import React, { useId } from "react";
import { CustomMatcher, FormMessageImplElement, FormMessageImplProps, ScopedProps } from "./formtypes";
import { Primitive } from '@radix-ui/react-primitive';
import { FormBuiltInMessage, FormCustomMessage, useAriaDescriptionContext } from "./form";
import { _validityMatchers, DEFAULT_BUILT_IN_MESSAGES, DEFAULT_INVALID_MESSAGE, FORM_CONST_ELEMS, ValidityMatcher } from './formconst';
import { Scope } from "@radix-ui/react-context";

import { useFormFieldContext } from "@/radix/forms/form";

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

