import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeVariantColor, TypeVariantSize } from '../../../types/TypeBase';
import { default as React } from '../../../../../node_modules/react';
import { TSimpleTextField } from '../simple-text-field/SimpleTextField';
import { TBaseTextField } from '../base-text-field/BaseTextField';

type SubmitTextFieldProps = {
    isLoading: boolean;
    loadingProps?: React.HTMLAttributes<HTMLSpanElement>;
} & TSimpleTextField.Main;
type SInpProps = {
    $isLoading?: boolean;
} & TSimpleTextField.SInput;
type SLoaderProps = {
    $color?: Hex;
    $isLoading?: boolean;
    $disabled?: boolean;
    $colors: TypeColorScheme;
    $styles: TBaseTextField.Styles;
    $colorVariant: TypeVariantColor;
    $sizeVariant: TypeVariantSize;
} & React.HTMLAttributes<HTMLSpanElement>;
export declare const SubmitTextField: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    isLoading: boolean;
    loadingProps?: React.HTMLAttributes<HTMLSpanElement>;
} & {
    icon?: React.ReactNode;
    iconPosition?: import('../../../types/TypeBase').TypeItemIconPosition;
    iconOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
    iconContainerProps?: React.HTMLAttributes<HTMLDivElement> & React.ButtonHTMLAttributes<HTMLButtonElement>;
} & {
    mr?: import('../../../types/TypeBase').TypeMargin;
    sizeVariant?: TypeVariantSize;
    variant?: import('../../../types/TypeInp').TypeInpVariant;
    colorVariant?: TypeVariantColor;
    color?: Hex;
    blocked?: boolean;
    inputAutofill?: Hex;
    inputAutofillText?: Hex;
    $colors?: TypeColorScheme;
    $styles?: {
        base: import('../../../general/styleScheme').TypeSSBase;
        inp: import('../../../general/styleScheme').TypeSSInp;
        typography: import('../../../general/styleScheme').TypeSSTypography;
        mr: import('../../../general/styleScheme').TypeSSMR;
    };
    _isActiveHover?: boolean;
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
} & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>>;
export declare const SSubmitTextField: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$mr" | "$styles" | keyof React.HTMLAttributes<HTMLDivElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant" | "$disabled" | "$_isFocused"> & {
        $color?: Hex;
        $mr?: import('../../../types/TypeBase').TypeMargin;
        $disabled?: boolean;
        $colors: TypeColorScheme;
        $styles: {
            base: import('../../../general/styleScheme').TypeSSBase;
            inp: import('../../../general/styleScheme').TypeSSInp;
            typography: import('../../../general/styleScheme').TypeSSTypography;
            mr: import('../../../general/styleScheme').TypeSSMR;
        };
        $colorVariant: TypeVariantColor;
        $sizeVariant: TypeVariantSize;
        $variant: import('../../../types/TypeInp').TypeInpVariant;
        $blocked?: boolean;
        $_isFocused?: boolean;
        $_isActiveHover?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "$mr" | "$styles" | keyof React.HTMLAttributes<HTMLDivElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant" | "$disabled" | "$_isFocused"> & {
        $color?: Hex;
        $mr?: import('../../../types/TypeBase').TypeMargin;
        $disabled?: boolean;
        $colors: TypeColorScheme;
        $styles: {
            base: import('../../../general/styleScheme').TypeSSBase;
            inp: import('../../../general/styleScheme').TypeSSInp;
            typography: import('../../../general/styleScheme').TypeSSTypography;
            mr: import('../../../general/styleScheme').TypeSSMR;
        };
        $colorVariant: TypeVariantColor;
        $sizeVariant: TypeVariantSize;
        $variant: import('../../../types/TypeInp').TypeInpVariant;
        $blocked?: boolean;
        $_isFocused?: boolean;
        $_isActiveHover?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>, {
        $color?: Hex;
        $mr?: import('../../../types/TypeBase').TypeMargin;
        $disabled?: boolean;
        $colors: TypeColorScheme;
        $styles: {
            base: import('../../../general/styleScheme').TypeSSBase;
            inp: import('../../../general/styleScheme').TypeSSInp;
            typography: import('../../../general/styleScheme').TypeSSTypography;
            mr: import('../../../general/styleScheme').TypeSSMR;
        };
        $colorVariant: TypeVariantColor;
        $sizeVariant: TypeVariantSize;
        $variant: import('../../../types/TypeInp').TypeInpVariant;
        $blocked?: boolean;
        $_isFocused?: boolean;
        $_isActiveHover?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>>> & string;
    Input: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<import('styled-components').FastOmit<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "$styles" | keyof React.InputHTMLAttributes<HTMLInputElement> | "$colors" | "$inputAutofill" | "$inputAutofillText"> & {
        $styles: {
            typography: import('../../../general/styleScheme').TypeSSTypography;
        };
        $colors: TypeColorScheme;
        $inputAutofill?: Hex;
        $inputAutofillText?: Hex;
    } & React.InputHTMLAttributes<HTMLInputElement>, "ref"> & {
        ref?: ((instance: HTMLInputElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLInputElement> | null | undefined;
    }, "$styles" | keyof React.InputHTMLAttributes<HTMLInputElement> | "$colors" | "$color" | "$colorVariant" | "$inputAutofill" | "$inputAutofillText"> & {
        $color?: Hex;
        $colors: TypeColorScheme;
        $colorVariant: TypeVariantColor;
    } & {
        $styles: {
            typography: import('../../../general/styleScheme').TypeSSTypography;
        };
        $colors: TypeColorScheme;
        $inputAutofill?: Hex;
        $inputAutofillText?: Hex;
    } & React.InputHTMLAttributes<HTMLInputElement>, "$styles" | keyof React.InputHTMLAttributes<HTMLInputElement> | "$colors" | "$color" | "$colorVariant" | "$inputAutofill" | "$inputAutofillText"> & {
        $color?: Hex;
        $colors: TypeColorScheme;
        $colorVariant: TypeVariantColor;
    } & {
        $styles: {
            typography: import('../../../general/styleScheme').TypeSSTypography;
        };
        $colors: TypeColorScheme;
        $inputAutofill?: Hex;
        $inputAutofillText?: Hex;
    } & React.InputHTMLAttributes<HTMLInputElement>, SInpProps>> & string;
    Loading: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, SLoaderProps>> & string;
    IconContainer: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
        $iconPosition: import('../../../types/TypeBase').TypeItemIconPosition;
        $useBtn: boolean;
        $disabled?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>>> & string;
};
export declare namespace TSubmitTextField {
    type Main = SubmitTextFieldProps;
    type SInput = SInpProps;
    type SLoading = SLoaderProps;
    type SRoot = TSimpleTextField.SRoot;
    type SIconContainer = TSimpleTextField.SIconContainer;
}
export {};
