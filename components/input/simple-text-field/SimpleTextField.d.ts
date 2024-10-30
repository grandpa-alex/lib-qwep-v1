import { TypeItemIconPosition } from '../../../types/TypeBase';
import { default as React } from '../../../../../node_modules/react';
import { TBaseTextField } from '../base-text-field/BaseTextField';

type SimpleTextFieldProps = {
    icon?: React.ReactNode;
    iconPosition?: TypeItemIconPosition;
    iconOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
    iconContainerProps?: React.HTMLAttributes<HTMLDivElement> & React.ButtonHTMLAttributes<HTMLButtonElement>;
} & TBaseTextField.Main;
type SIconContProps = {
    $iconPosition: TypeItemIconPosition;
    $useBtn: boolean;
    $disabled?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const SIconContainer: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SIconContProps>> & string;
export declare const SRoot: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$mr" | "$styles" | keyof React.HTMLAttributes<HTMLDivElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant" | "$disabled" | "$_isFocused"> & {
    $color?: import('../../../general/colors').Hex;
    $mr?: import('../../../types/TypeBase').TypeMargin;
    $disabled?: boolean;
    $colors: import('../../../general/colors').TypeColorScheme;
    $styles: {
        base: import('../../../general/styleScheme').TypeSSBase;
        inp: import('../../../general/styleScheme').TypeSSInp;
        typography: import('../../../general/styleScheme').TypeSSTypography;
        mr: import('../../../general/styleScheme').TypeSSMR;
    };
    $colorVariant: import('../../../types/TypeBase').TypeVariantColor;
    $sizeVariant: import('../../../types/TypeBase').TypeVariantSize;
    $variant: import('../../../types/TypeInp').TypeInpVariant;
    $blocked?: boolean;
    $_isFocused?: boolean;
    $_isActiveHover?: boolean;
} & React.HTMLAttributes<HTMLDivElement>, "ref"> & {
    ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
}, "$mr" | "$styles" | keyof React.HTMLAttributes<HTMLDivElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant" | "$disabled" | "$_isFocused"> & {
    $color?: import('../../../general/colors').Hex;
    $mr?: import('../../../types/TypeBase').TypeMargin;
    $disabled?: boolean;
    $colors: import('../../../general/colors').TypeColorScheme;
    $styles: {
        base: import('../../../general/styleScheme').TypeSSBase;
        inp: import('../../../general/styleScheme').TypeSSInp;
        typography: import('../../../general/styleScheme').TypeSSTypography;
        mr: import('../../../general/styleScheme').TypeSSMR;
    };
    $colorVariant: import('../../../types/TypeBase').TypeVariantColor;
    $sizeVariant: import('../../../types/TypeBase').TypeVariantSize;
    $variant: import('../../../types/TypeInp').TypeInpVariant;
    $blocked?: boolean;
    $_isFocused?: boolean;
    $_isActiveHover?: boolean;
} & React.HTMLAttributes<HTMLDivElement>, {
    $color?: import('../../../general/colors').Hex;
    $mr?: import('../../../types/TypeBase').TypeMargin;
    $disabled?: boolean;
    $colors: import('../../../general/colors').TypeColorScheme;
    $styles: {
        base: import('../../../general/styleScheme').TypeSSBase;
        inp: import('../../../general/styleScheme').TypeSSInp;
        typography: import('../../../general/styleScheme').TypeSSTypography;
        mr: import('../../../general/styleScheme').TypeSSMR;
    };
    $colorVariant: import('../../../types/TypeBase').TypeVariantColor;
    $sizeVariant: import('../../../types/TypeBase').TypeVariantSize;
    $variant: import('../../../types/TypeInp').TypeInpVariant;
    $blocked?: boolean;
    $_isFocused?: boolean;
    $_isActiveHover?: boolean;
} & React.HTMLAttributes<HTMLDivElement>>> & string;
export declare const SInput: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "$styles" | keyof React.InputHTMLAttributes<HTMLInputElement> | "$colors" | "$inputAutofill" | "$inputAutofillText"> & {
    $styles: {
        typography: import('../../../general/styleScheme').TypeSSTypography;
    };
    $colors: import('../../../general/colors').TypeColorScheme;
    $inputAutofill?: import('../../../general/colors').Hex;
    $inputAutofillText?: import('../../../general/colors').Hex;
} & React.InputHTMLAttributes<HTMLInputElement>, "ref"> & {
    ref?: ((instance: HTMLInputElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLInputElement> | null | undefined;
}, "$styles" | keyof React.InputHTMLAttributes<HTMLInputElement> | "$colors" | "$color" | "$colorVariant" | "$inputAutofill" | "$inputAutofillText"> & {
    $color?: import('../../../general/colors').Hex;
    $colors: import('../../../general/colors').TypeColorScheme;
    $colorVariant: import('../../../types/TypeBase').TypeVariantColor;
} & {
    $styles: {
        typography: import('../../../general/styleScheme').TypeSSTypography;
    };
    $colors: import('../../../general/colors').TypeColorScheme;
    $inputAutofill?: import('../../../general/colors').Hex;
    $inputAutofillText?: import('../../../general/colors').Hex;
} & React.InputHTMLAttributes<HTMLInputElement>, {
    $color?: import('../../../general/colors').Hex;
    $colors: import('../../../general/colors').TypeColorScheme;
    $colorVariant: import('../../../types/TypeBase').TypeVariantColor;
} & {
    $styles: {
        typography: import('../../../general/styleScheme').TypeSSTypography;
    };
    $colors: import('../../../general/colors').TypeColorScheme;
    $inputAutofill?: import('../../../general/colors').Hex;
    $inputAutofillText?: import('../../../general/colors').Hex;
} & React.InputHTMLAttributes<HTMLInputElement>>> & string;
export declare const SimpleTextField: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    icon?: React.ReactNode;
    iconPosition?: TypeItemIconPosition;
    iconOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
    iconContainerProps?: React.HTMLAttributes<HTMLDivElement> & React.ButtonHTMLAttributes<HTMLButtonElement>;
} & {
    mr?: import('../../../types/TypeBase').TypeMargin;
    sizeVariant?: import('../../../types/TypeBase').TypeVariantSize;
    variant?: import('../../../types/TypeInp').TypeInpVariant;
    colorVariant?: import('../../../types/TypeBase').TypeVariantColor;
    color?: import('../../../general/colors').Hex;
    blocked?: boolean;
    inputAutofill?: import('../../../general/colors').Hex;
    inputAutofillText?: import('../../../general/colors').Hex;
    $colors?: import('../../../general/colors').TypeColorScheme;
    $styles?: {
        base: import('../../../general/styleScheme').TypeSSBase;
        inp: import('../../../general/styleScheme').TypeSSInp;
        typography: import('../../../general/styleScheme').TypeSSTypography;
        mr: import('../../../general/styleScheme').TypeSSMR;
    };
    _isActiveHover?: boolean;
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
} & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>>;
export declare const SSimpleTextField: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$mr" | "$styles" | keyof React.HTMLAttributes<HTMLDivElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant" | "$disabled" | "$_isFocused"> & {
        $color?: import('../../../general/colors').Hex;
        $mr?: import('../../../types/TypeBase').TypeMargin;
        $disabled?: boolean;
        $colors: import('../../../general/colors').TypeColorScheme;
        $styles: {
            base: import('../../../general/styleScheme').TypeSSBase;
            inp: import('../../../general/styleScheme').TypeSSInp;
            typography: import('../../../general/styleScheme').TypeSSTypography;
            mr: import('../../../general/styleScheme').TypeSSMR;
        };
        $colorVariant: import('../../../types/TypeBase').TypeVariantColor;
        $sizeVariant: import('../../../types/TypeBase').TypeVariantSize;
        $variant: import('../../../types/TypeInp').TypeInpVariant;
        $blocked?: boolean;
        $_isFocused?: boolean;
        $_isActiveHover?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "$mr" | "$styles" | keyof React.HTMLAttributes<HTMLDivElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant" | "$disabled" | "$_isFocused"> & {
        $color?: import('../../../general/colors').Hex;
        $mr?: import('../../../types/TypeBase').TypeMargin;
        $disabled?: boolean;
        $colors: import('../../../general/colors').TypeColorScheme;
        $styles: {
            base: import('../../../general/styleScheme').TypeSSBase;
            inp: import('../../../general/styleScheme').TypeSSInp;
            typography: import('../../../general/styleScheme').TypeSSTypography;
            mr: import('../../../general/styleScheme').TypeSSMR;
        };
        $colorVariant: import('../../../types/TypeBase').TypeVariantColor;
        $sizeVariant: import('../../../types/TypeBase').TypeVariantSize;
        $variant: import('../../../types/TypeInp').TypeInpVariant;
        $blocked?: boolean;
        $_isFocused?: boolean;
        $_isActiveHover?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>, {
        $color?: import('../../../general/colors').Hex;
        $mr?: import('../../../types/TypeBase').TypeMargin;
        $disabled?: boolean;
        $colors: import('../../../general/colors').TypeColorScheme;
        $styles: {
            base: import('../../../general/styleScheme').TypeSSBase;
            inp: import('../../../general/styleScheme').TypeSSInp;
            typography: import('../../../general/styleScheme').TypeSSTypography;
            mr: import('../../../general/styleScheme').TypeSSMR;
        };
        $colorVariant: import('../../../types/TypeBase').TypeVariantColor;
        $sizeVariant: import('../../../types/TypeBase').TypeVariantSize;
        $variant: import('../../../types/TypeInp').TypeInpVariant;
        $blocked?: boolean;
        $_isFocused?: boolean;
        $_isActiveHover?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>>> & string;
    IconContainer: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SIconContProps>> & string;
    Input: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "$styles" | keyof React.InputHTMLAttributes<HTMLInputElement> | "$colors" | "$inputAutofill" | "$inputAutofillText"> & {
        $styles: {
            typography: import('../../../general/styleScheme').TypeSSTypography;
        };
        $colors: import('../../../general/colors').TypeColorScheme;
        $inputAutofill?: import('../../../general/colors').Hex;
        $inputAutofillText?: import('../../../general/colors').Hex;
    } & React.InputHTMLAttributes<HTMLInputElement>, "ref"> & {
        ref?: ((instance: HTMLInputElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLInputElement> | null | undefined;
    }, "$styles" | keyof React.InputHTMLAttributes<HTMLInputElement> | "$colors" | "$color" | "$colorVariant" | "$inputAutofill" | "$inputAutofillText"> & {
        $color?: import('../../../general/colors').Hex;
        $colors: import('../../../general/colors').TypeColorScheme;
        $colorVariant: import('../../../types/TypeBase').TypeVariantColor;
    } & {
        $styles: {
            typography: import('../../../general/styleScheme').TypeSSTypography;
        };
        $colors: import('../../../general/colors').TypeColorScheme;
        $inputAutofill?: import('../../../general/colors').Hex;
        $inputAutofillText?: import('../../../general/colors').Hex;
    } & React.InputHTMLAttributes<HTMLInputElement>, {
        $color?: import('../../../general/colors').Hex;
        $colors: import('../../../general/colors').TypeColorScheme;
        $colorVariant: import('../../../types/TypeBase').TypeVariantColor;
    } & {
        $styles: {
            typography: import('../../../general/styleScheme').TypeSSTypography;
        };
        $colors: import('../../../general/colors').TypeColorScheme;
        $inputAutofill?: import('../../../general/colors').Hex;
        $inputAutofillText?: import('../../../general/colors').Hex;
    } & React.InputHTMLAttributes<HTMLInputElement>>> & string;
};
export declare namespace TSimpleTextField {
    type Main = SimpleTextFieldProps;
    type SIconContainer = SIconContProps;
    type SInput = TBaseTextField.SInput;
    type SRoot = TBaseTextField.SRoot;
}
export {};
