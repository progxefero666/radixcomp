//src\radix\forms\formtypes.ts


import * as React from 'react';
import { composeEventHandlers } from '@radix-ui/primitive';
import { useComposedRefs } from '@radix-ui/react-compose-refs';
import { createContextScope } from '@radix-ui/react-context';
import { useId } from '@radix-ui/react-id';
import { Label as LabelPrimitive } from '@radix-ui/react-label';
import { Primitive } from '@radix-ui/react-primitive';

import type { Scope } from '@radix-ui/react-context';

import { _validityMatchers } from "@/radix/futureforms/formconst";


// Base types
export type ScopedProps<P> = P & { __scopeForm?: Scope };
export type ValidityStateKey = keyof ValidityState;
export type ValidityMatcher = (typeof _validityMatchers)[number];

// Custom matcher types
export type SyncCustomMatcher = (value: string, formData: FormData) => boolean;
export type AsyncCustomMatcher = (value: string, formData: FormData) => Promise<boolean>;
export type CustomMatcher = SyncCustomMatcher | AsyncCustomMatcher;
export type CustomMatcherEntry = { id: string; match: CustomMatcher };
export type SyncCustomMatcherEntry = { id: string; match: SyncCustomMatcher };
export type AsyncCustomMatcherEntry = { id: string; match: AsyncCustomMatcher };
export type CustomMatcherArgs = [string, FormData];

// Form state types
export type ValidityMap = { [fieldName: string]: ValidityState | undefined };
export type CustomMatcherEntriesMap = { [fieldName: string]: CustomMatcherEntry[] };
export type CustomErrorsMap = { [fieldName: string]: Record<string, boolean> };
export type MessageIdsMap = { [fieldName: string]: Set<string> };

// Context value types
export type ValidationContextValue = {
  getFieldValidity(fieldName: string): ValidityState | undefined;
  onFieldValidityChange(fieldName: string, validity: ValidityState): void;
  getFieldCustomMatcherEntries(fieldName: string): CustomMatcherEntry[];
  onFieldCustomMatcherEntryAdd(fieldName: string, matcherEntry: CustomMatcherEntry): void;
  onFieldCustomMatcherEntryRemove(fieldName: string, matcherEntryId: string): void;
  getFieldCustomErrors(fieldName: string): Record<string, boolean>;
  onFieldCustomErrorsChange(fieldName: string, errors: Record<string, boolean>): void;
  onFieldValiditionClear(fieldName: string): void;
};

export type AriaDescriptionContextValue = {
  onFieldMessageIdAdd(fieldName: string, id: string): void;
  onFieldMessageIdRemove(fieldName: string, id: string): void;
  getFieldDescription(fieldName: string): string | undefined;
};

export type FormFieldContextValue = {
  id: string;
  name: string;
  serverInvalid: boolean;
};

// Element and primitive component types
export type FormElement = React.ComponentRef<typeof Primitive.form>;
export type PrimitiveFormProps = React.ComponentPropsWithoutRef<typeof Primitive.form>;
export type FormFieldElement = React.ComponentRef<typeof Primitive.div>;
export type PrimitiveDivProps = React.ComponentPropsWithoutRef<typeof Primitive.div>;
export type FormLabelElement = React.ComponentRef<typeof LabelPrimitive>;
export type LabelProps = React.ComponentPropsWithoutRef<typeof LabelPrimitive>;
export type FormControlElement = React.ComponentRef<typeof Primitive.input>;
export type PrimitiveInputProps = React.ComponentPropsWithoutRef<typeof Primitive.input>;
export type FormMessageImplElement = React.ComponentRef<typeof Primitive.span>;
export type PrimitiveSpanProps = React.ComponentPropsWithoutRef<typeof Primitive.span>;
export type FormSubmitElement = React.ComponentRef<typeof Primitive.button>;
export type PrimitiveButtonProps = React.ComponentPropsWithoutRef<typeof Primitive.button>;

export interface FormProps extends PrimitiveFormProps {
    onClearServerErrors?(): void;
}
export interface FormFieldProps extends PrimitiveDivProps {
    name: string;
    serverInvalid?: boolean;
}
export interface FormLabelProps extends LabelProps { }
export interface FormControlProps extends PrimitiveInputProps { }
export interface FormMessageImplProps extends PrimitiveSpanProps {
    name: string;
}
export interface FormMessageProps extends Omit<FormMessageImplProps, 'name'> {
    match?: ValidityMatcher | CustomMatcher;
    forceMatch?: boolean;
    name?: string;
}
export interface FormBuiltInMessageProps extends FormMessageImplProps {
    match: ValidityMatcher;
    forceMatch?: boolean;
    name: string;
}

export interface FormValidityStateProps {
    children(validity: ValidityState | undefined): React.ReactNode;
    name?: string;
}
export interface FormSubmitProps extends PrimitiveButtonProps { }