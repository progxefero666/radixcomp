import React, { useId } from "react";
import { FORM_CONST_ELEMS } from "./formconst";
import { CustomMatcher, FormMessageImplElement, FormMessageImplProps, ScopedProps } from "./formtypes";
import { Primitive } from '@radix-ui/react-primitive';
import { useAriaDescriptionContext } from "./form";

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
