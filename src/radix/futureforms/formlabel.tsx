//src\radix\forms\form.tsx

import * as React from 'react';
import { Label as LabelPrimitive, LabelProps } from '@radix-ui/react-label';
import { FormLabelProps } from '@radix-ui/react-form';

// Import util functions
import {getValidAttribute,getInvalidAttribute } from '@/radix/futureforms/formutil';
import {ScopedProps, FormLabelElement} from '@/radix/futureforms/formtypes';
import { _validityMatchers, FORM_CONST_ELEMS } from '@/radix/futureforms/formconst';
import { useFormFieldContext, useValidationContext } from '@/radix/futureforms/form';


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
                htmlFor={htmlFor} />
        );
    }
);
FormLabel.displayName = FORM_CONST_ELEMS.LABEL_NAME;