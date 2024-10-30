import { TypeSSIcon, TypeSSMR } from '../general/styleScheme';
import { Hex, TypeColorScheme } from '../general/colors';
import { TypeVariantColor, TypeMargin, TypeVariantSize } from '../types/TypeBase';

export type TypeStyleIconContainer = {
    icon: TypeSSIcon;
    mr: TypeSSMR;
};
export type StyledIconContainerProps = {
    $mr?: TypeMargin;
    $color?: Hex;
    $disabled?: boolean;
    $_importantColor?: boolean;
    $colorVariant?: TypeVariantColor;
    $sizeVariant: TypeVariantSize;
    $colors: TypeColorScheme;
    $styles: TypeStyleIconContainer;
};
export declare const StyledIconContainer: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../node_modules/react').SVGProps<SVGSVGElement>, StyledIconContainerProps>> & string;
