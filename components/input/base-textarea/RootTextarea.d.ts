import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSBase, TypeSSInp, TypeSSMR } from '../../../general/styleScheme';
import { TypeMargin, TypeVariantColor, TypeVariantSize } from '../../../types/TypeBase';
import { default as React } from '../../../../../node_modules/react';

type TypeStyles = {
    base: TypeSSBase;
    inp: TypeSSInp;
    mr: TypeSSMR;
};
type RootTextareaProps = {
    mr?: TypeMargin;
    sizeVariant?: TypeVariantSize;
    colorVariant?: TypeVariantColor;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    color?: Hex;
    disabled?: boolean;
    blocked?: boolean;
    _isActiveHover?: boolean;
    _isFocused?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
type SRootProps = {
    $styles: TypeStyles;
    $colors: TypeColorScheme;
    $mr?: TypeMargin;
    $sizeVariant: TypeVariantSize;
    $colorVariant: TypeVariantColor;
    $disabled?: boolean;
    $color?: Hex;
    $blocked?: boolean;
    $_isActiveHover?: boolean;
    $_isFocused?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const RootTextarea: React.FC<RootTextareaProps>;
export declare const SRootTextarea: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SRootProps>> & string;
};
export declare namespace TRootTextarea {
    type Main = RootTextareaProps;
    type Styles = TypeStyles;
    type SRoot = SRootProps;
}
export {};
