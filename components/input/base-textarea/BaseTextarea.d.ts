import { TypeSSBase, TypeSSInp, TypeSSMR, TypeSSTypography } from '../../../general/styleScheme';
import { TypeMargin, TypeVariantColor, TypeVariantSize } from '../../../types/TypeBase';
import { default as React } from '../../../../../node_modules/react';
import { TRootTextarea } from './RootTextarea';
import { Hex, TypeColorScheme } from '../../../general/colors';

type TypeStyles = {
    typography: TypeSSTypography;
    base: TypeSSBase;
    inp: TypeSSInp;
    mr: TypeSSMR;
};
type BaseTextareaProps = {
    mr?: TypeMargin;
    resize?: boolean;
    sizeVariant?: TypeVariantSize;
    colorVariant?: TypeVariantColor;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    color?: Hex;
    _isActiveHover?: boolean;
    blocked?: boolean;
    propsRoot?: React.HTMLAttributes<HTMLDivElement>;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export declare const BaseTextarea: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    mr?: TypeMargin;
    resize?: boolean;
    sizeVariant?: TypeVariantSize;
    colorVariant?: TypeVariantColor;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    color?: Hex;
    _isActiveHover?: boolean;
    blocked?: boolean;
    propsRoot?: React.HTMLAttributes<HTMLDivElement>;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement> & React.RefAttributes<HTMLTextAreaElement>>>;
export declare const SBaseTextarea: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$mr" | "$styles" | keyof React.HTMLAttributes<HTMLDivElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$disabled" | "$_isFocused"> & {
        $styles: {
            base: TypeSSBase;
            inp: TypeSSInp;
            mr: TypeSSMR;
        };
        $colors: TypeColorScheme;
        $mr?: TypeMargin;
        $sizeVariant: TypeVariantSize;
        $colorVariant: TypeVariantColor;
        $disabled?: boolean;
        $color?: Hex;
        $blocked?: boolean;
        $_isActiveHover?: boolean;
        $_isFocused?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, {
        $styles: {
            base: TypeSSBase;
            inp: TypeSSInp;
            mr: TypeSSMR;
        };
        $colors: TypeColorScheme;
        $mr?: TypeMargin;
        $sizeVariant: TypeVariantSize;
        $colorVariant: TypeVariantColor;
        $disabled?: boolean;
        $color?: Hex;
        $blocked?: boolean;
        $_isActiveHover?: boolean;
        $_isFocused?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>>> & string;
    Textarea: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "$styles" | keyof React.TextareaHTMLAttributes<HTMLTextAreaElement> | "$resize"> & {
        $styles: {
            typography: TypeSSTypography;
        };
        $resize?: boolean;
    } & React.TextareaHTMLAttributes<HTMLTextAreaElement>, "ref"> & {
        ref?: ((instance: HTMLTextAreaElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLTextAreaElement> | null | undefined;
    }, {
        $styles: {
            typography: TypeSSTypography;
        };
        $resize?: boolean;
    } & React.TextareaHTMLAttributes<HTMLTextAreaElement>>> & string;
};
export declare namespace TBaseTextarea {
    type Main = BaseTextareaProps;
    type Styles = TypeStyles;
    type SRoot = TRootTextarea.SRoot;
}
export {};
