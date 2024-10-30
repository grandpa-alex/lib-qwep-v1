import { opacity } from '../../../common/getColor';
import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSBase, TypeSSBtn, TypeSSTypography } from '../../../general/styleScheme';
import { TypeVariantSize } from '../../../types/TypeBase';
import { default as React } from '../../../../../node_modules/react';

type TypeStyles = {
    base: TypeSSBase;
    btn: TypeSSBtn;
    typography: TypeSSTypography;
};
type BaseMenuItemProps = {
    value: string;
    active?: boolean;
    sizeVariant?: TypeVariantSize;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    color?: Hex;
    opacityHover?: opacity;
    opacityActive?: opacity;
    textColor?: Hex;
    textColorActive?: Hex;
    blocked?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>;
    _isActiveHover?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
type SButtonProps = {
    $color?: Hex;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $sizeVariant: TypeVariantSize;
    $opacityHover?: opacity;
    $opacityActive?: opacity;
    $textColor?: Hex;
    $textColorActive?: Hex;
    $active?: boolean;
    $_isActiveHover: boolean;
    $blocked?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export declare const SButton: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, SButtonProps>> & string;
export declare const BaseMenuItem: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    value: string;
    active?: boolean;
    sizeVariant?: TypeVariantSize;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    color?: Hex;
    opacityHover?: opacity;
    opacityActive?: opacity;
    textColor?: Hex;
    textColorActive?: Hex;
    blocked?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>;
    _isActiveHover?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>>;
export declare const SBaseMenuItem: {
    Button: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, SButtonProps>> & string;
};
export declare namespace TBaseMenuItem {
    type Styles = TypeStyles;
    type Main = BaseMenuItemProps;
    type SButton = SButtonProps;
}
export {};
