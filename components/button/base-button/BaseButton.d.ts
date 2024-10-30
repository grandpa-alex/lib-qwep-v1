import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSBase, TypeSSBtn, TypeSSMR, TypeSSTypography } from '../../../general/styleScheme';
import { TypeVariantColor, TypeMargin, TypeVariantSize } from '../../../types/TypeBase';
import { TypeVariantBtn } from '../../../types/TypeBtn';
import { default as React } from '../../../../../node_modules/react';

type TypeStyles = {
    base: TypeSSBase;
    btn: TypeSSBtn;
    typography: TypeSSTypography;
    mr: TypeSSMR;
};
type BaseButtonProps = {
    mr?: TypeMargin;
    sizeVariant?: TypeVariantSize;
    colorVariant?: TypeVariantColor;
    variant?: TypeVariantBtn;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    color?: Hex;
    blocked?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    _isActiveHover?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
type SButtonProps = {
    $mr?: TypeMargin;
    $color?: Hex;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $sizeVariant: TypeVariantSize;
    $colorVariant: TypeVariantColor;
    $variant: TypeVariantBtn;
    $_isActiveHover: boolean;
    $blocked?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const SButton: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, SButtonProps>> & string;
export declare const BaseButton: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    mr?: TypeMargin;
    sizeVariant?: TypeVariantSize;
    colorVariant?: TypeVariantColor;
    variant?: TypeVariantBtn;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    color?: Hex;
    blocked?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    _isActiveHover?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>>;
export declare const SBaseButton: {
    Button: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, SButtonProps>> & string;
};
export declare namespace TBaseButton {
    type Styles = TypeStyles;
    type Main = BaseButtonProps;
    type SButton = SButtonProps;
}
export {};
