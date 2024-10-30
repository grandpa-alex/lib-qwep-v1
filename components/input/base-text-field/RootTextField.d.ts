import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSBase, TypeSSInp, TypeSSMR, TypeSSTypography } from '../../../general/styleScheme';
import { TypeVariantColor, TypeMargin, TypeVariantSize } from '../../../types/TypeBase';
import { TypeInpVariant } from '../../../types/TypeInp';
import { default as React } from '../../../../../node_modules/react';

type TypeStyles = {
    base: TypeSSBase;
    inp: TypeSSInp;
    typography: TypeSSTypography;
    mr: TypeSSMR;
};
type RootTextFieldProps = {
    mr?: TypeMargin;
    variant?: TypeInpVariant;
    colorVariant?: TypeVariantColor;
    sizeVariant?: TypeVariantSize;
    color?: Hex;
    disabled?: boolean;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isFocused?: boolean;
    _isActiveHover?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
type SRootProps = {
    $color?: Hex;
    $mr?: TypeMargin;
    $disabled?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TypeVariantColor;
    $sizeVariant: TypeVariantSize;
    $variant: TypeInpVariant;
    $blocked?: boolean;
    $_isFocused?: boolean;
    $_isActiveHover?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const RootTextField: React.FC<RootTextFieldProps>;
export declare const SRootTextField: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SRootProps>> & string;
};
export declare namespace TRootTextField {
    type Main = RootTextFieldProps;
    type Styles = TypeStyles;
    type SRoot = SRootProps;
}
export {};
