import { default as React } from '../../../node_modules/react';
import { TypeStyleIconContainer } from '../common-styled-component/StyledIconContainer';
import { Hex, TypeColorScheme } from '../general/colors';
import { TypeVariantColor, TypeMargin, TypeVariantSize } from '../types/TypeBase';

export type IconSVGContainerProps = {
    children?: React.ReactNode;
    xmlns?: string;
    viewBox?: string;
    sizeVariant?: TypeVariantSize;
    colorVariant?: TypeVariantColor;
    color?: Hex;
    style?: React.CSSProperties;
    mr?: TypeMargin;
    disabled?: boolean;
    _importantColor?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleIconContainer;
} & React.SVGAttributes<SVGSVGElement>;
export declare const IconSVGContainer: React.FC<IconSVGContainerProps>;
