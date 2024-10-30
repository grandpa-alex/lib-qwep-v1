import { TypeSSBox, TypeSSBtn, TypeSSMR, TypeSSTypography } from '../../../general/styleScheme';
import { default as React } from '../../../../../node_modules/react';
import { TypeMargin, TypeOrientationContent, TypeVariantSize } from '../../../types/TypeBase';
import { TypeBoxGapVariant, TypeBoxPaddingVariant, TypeBoxRadiusVariant, TypeBoxShadowVariant, TypeBoxWidthVariant } from '../../../types/TypeBox';
import { Hex, TypeColorScheme } from '../../../general/colors';
import { opacity } from '../../../common/getColor';
import { TBaseMenuItem } from './BaseMenuItem.tsx';

type TypeStyles = {
    box: TypeSSBox;
    mr: TypeSSMR;
    btn: TypeSSBtn;
    typography: TypeSSTypography;
};
type BaseMenuGroupProps = {
    mr?: TypeMargin;
    orientation?: TypeOrientationContent;
    boxWidthVariant?: TypeBoxWidthVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    bg?: Hex;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxRadiusVariant?: TypeBoxRadiusVariant;
    onChangeActiveItem?: (value: string) => void | Promise<void>;
    activeItem?: string;
    itemSizeVariant?: TypeVariantSize;
    itemColor?: Hex;
    itemOpacityHover?: opacity;
    itemOpacityActive?: opacity;
    itemTextColor?: Hex;
    itemTextColorActive?: Hex;
    menuItemProps?: TBaseMenuItem.Main;
    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;
type SRootProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $bg?: Hex;
    $orientation: TypeOrientationContent;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TypeBoxShadowVariant;
    $boxRadiusVariant?: TypeBoxRadiusVariant;
    $boxWidthVariant?: TypeBoxWidthVariant;
    $boxPaddingVariant?: TypeBoxPaddingVariant;
    $boxGapVariant?: TypeBoxGapVariant;
    $mr?: TypeMargin;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const BaseMenuGroup: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    mr?: TypeMargin;
    orientation?: TypeOrientationContent;
    boxWidthVariant?: TypeBoxWidthVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    bg?: Hex;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxRadiusVariant?: TypeBoxRadiusVariant;
    onChangeActiveItem?: (value: string) => void | Promise<void>;
    activeItem?: string;
    itemSizeVariant?: TypeVariantSize;
    itemColor?: Hex;
    itemOpacityHover?: opacity;
    itemOpacityActive?: opacity;
    itemTextColor?: Hex;
    itemTextColorActive?: Hex;
    menuItemProps?: TBaseMenuItem.Main;
    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>>;
export declare const SBaseMenuGroup: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SRootProps>> & string;
};
export declare namespace TBaseMenuGroup {
    type Main = BaseMenuGroupProps;
    type Styles = TypeStyles;
    type SRoot = SRootProps;
}
export {};
