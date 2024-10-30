import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeVariantColor, TypeMargin, TypeVariantSize } from '../../../types/TypeBase';
import { TypeInpVariant } from '../../../types/TypeInp';
import { default as React } from '../../../../../node_modules/react';
import { TBaseInput } from './BaseInput';
import { TRootTextField } from './RootTextField';
import { TypeSSBase, TypeSSInp, TypeSSMR, TypeSSTypography } from '../../../general/styleScheme';

type TypeStyles = {
    base: TypeSSBase;
    inp: TypeSSInp;
    typography: TypeSSTypography;
    mr: TypeSSMR;
};
type BaseTextFieldProps = {
    mr?: TypeMargin;
    sizeVariant?: TypeVariantSize;
    variant?: TypeInpVariant;
    colorVariant?: TypeVariantColor;
    color?: Hex;
    blocked?: boolean;
    inputAutofill?: Hex;
    inputAutofillText?: Hex;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isActiveHover?: boolean;
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;
type SInputProps = {
    $color?: Hex;
    $colors: TypeColorScheme;
    $colorVariant: TypeVariantColor;
} & TBaseInput.SInput;
export declare const BaseTextField: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    mr?: TypeMargin;
    sizeVariant?: TypeVariantSize;
    variant?: TypeInpVariant;
    colorVariant?: TypeVariantColor;
    color?: Hex;
    blocked?: boolean;
    inputAutofill?: Hex;
    inputAutofillText?: Hex;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isActiveHover?: boolean;
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
} & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>>;
export declare const SBaseTextField: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$mr" | "$styles" | keyof React.HTMLAttributes<HTMLDivElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant" | "$disabled" | "$_isFocused"> & {
        $color?: Hex;
        $mr?: TypeMargin;
        $disabled?: boolean;
        $colors: TypeColorScheme;
        $styles: {
            base: TypeSSBase;
            inp: TypeSSInp;
            typography: TypeSSTypography;
            mr: TypeSSMR;
        };
        $colorVariant: TypeVariantColor;
        $sizeVariant: TypeVariantSize;
        $variant: TypeInpVariant;
        $blocked?: boolean;
        $_isFocused?: boolean;
        $_isActiveHover?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, {
        $color?: Hex;
        $mr?: TypeMargin;
        $disabled?: boolean;
        $colors: TypeColorScheme;
        $styles: {
            base: TypeSSBase;
            inp: TypeSSInp;
            typography: TypeSSTypography;
            mr: TypeSSMR;
        };
        $colorVariant: TypeVariantColor;
        $sizeVariant: TypeVariantSize;
        $variant: TypeInpVariant;
        $blocked?: boolean;
        $_isFocused?: boolean;
        $_isActiveHover?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>>> & string;
    Input: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "$styles" | keyof React.InputHTMLAttributes<HTMLInputElement> | "$colors" | "$inputAutofill" | "$inputAutofillText"> & {
        $styles: {
            typography: TypeSSTypography;
        };
        $colors: TypeColorScheme;
        $inputAutofill?: Hex;
        $inputAutofillText?: Hex;
    } & React.InputHTMLAttributes<HTMLInputElement>, "ref"> & {
        ref?: ((instance: HTMLInputElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLInputElement> | null | undefined;
    }, SInputProps>> & string;
};
export declare namespace TBaseTextField {
    type Styles = TypeStyles;
    type Main = BaseTextFieldProps;
    type SInput = SInputProps;
    type SRoot = TRootTextField.SRoot;
}
export {};
