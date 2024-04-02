import { BaseInput, BaseInputProps, SBInput, SBInputProps, TypeStyleBaseInput } from './base-text-field/BaseInput';
import {
    RootTextField,
    RootTextFieldProps,
    SRootTextFieldProps,
    TypeStyleTextField,
    STextFieldRoot,
} from './base-text-field/RootTextField';
import {
    BaseTextField,
    BaseTextFieldProps,
    SBTextFieldInput,
    SBTextFieldInputProps,
    SBTextFieldRoot,
    SBTextFieldRootProps,
} from './base-text-field/BaseTextField';
import {
    SSTextFieldIconContainer,
    SSTextFieldIconContainerProps,
    SSTextFieldInput,
    SSTextFieldRoot,
    SimpleTextField,
    SimpleTextFieldProps,
} from './simple-text-field/SimpleTextField';
import {
    SSUBTextFieldIconContainer,
    SSUBTextFieldInput,
    SSUBTextFieldInputProps,
    SSUBTextFieldLoading,
    SSUBTextFieldLoadingProps,
    SSUBTextFieldRootProps,
    SubmitTextField,
    SubmitTextFieldProps,
} from './submit-text-field/SubmitTextField';
import {
    SWrapperTextFieldMessage,
    SWrapperTextFieldMessageProps,
    SWrapperTextFieldRoot,
    SWrapperTextFieldRootProps,
    TypeStyleWrapperTextField,
    WrapperTextField,
    WrapperTextFieldProps,
} from './wrapper-text-field/WrapperTextField';

export { BaseInput, RootTextField, BaseTextField, SimpleTextField, SubmitTextField, WrapperTextField };

export const InputStyledComponent = {
    BaseInput: {
        SBInput,
    },
    RootTextField: {
        STextFieldRoot,
    },
    BaseTextField: {
        SBTextFieldInput,
        SBTextFieldRoot,
    },
    SimpleTextField: {
        SSTextFieldIconContainer,
        SSTextFieldRoot,
        SSTextFieldInput,
    },
    SubmitTextField: {
        SSUBTextFieldIconContainer,
        SSUBTextFieldInput,
        SSUBTextFieldLoading,
    },
    WrapperTextField: {
        SWrapperTextFieldRoot,
        SWrapperTextFieldMessage,
    },
};

export type InputType = {
    BaseInput: {
        TypeStyleBaseInput: TypeStyleBaseInput;
        BaseInputProps: BaseInputProps;
        SBInputProps: SBInputProps;
    };
    RootTextField: {
        TypeStyleTextField: TypeStyleTextField;
        RootTextFieldProps: RootTextFieldProps;
        SRootTextFieldProps: SRootTextFieldProps;
    };
    BaseTextField: {
        BaseTextFieldProps: BaseTextFieldProps;
        SBTextFieldInputProps: SBTextFieldInputProps;
        SBTextFieldRootProps: SBTextFieldRootProps;
    };
    SimpleTextField: {
        SimpleTextFieldProps: SimpleTextFieldProps;
        SSTextFieldIconContainerProps: SSTextFieldIconContainerProps;
    };
    SubmitTextField: {
        SubmitTextFieldProps: SubmitTextFieldProps;
        SSUBTextFieldInputProps: SSUBTextFieldInputProps;
        SSUBTextFieldRootProps: SSUBTextFieldRootProps;
        SSUBTextFieldLoadingProps: SSUBTextFieldLoadingProps;
    };
    WrapperTextField: {
        TypeStyleWrapperTextField: TypeStyleWrapperTextField;
        WrapperTextFieldProps: WrapperTextFieldProps;
        SWrapperTextFieldMessageProps: SWrapperTextFieldMessageProps;
        SWrapperTextFieldRootProps: SWrapperTextFieldRootProps;
    };
};
