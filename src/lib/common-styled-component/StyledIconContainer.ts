import styled, { css } from 'styled-components';
import { TypeSSIcon, TypeSSMR } from '../general/styleScheme';
import { getMargin } from '../common/getMargin';
import { Hex, TypeColorScheme } from '../general/colors';
import { getColor } from '../common/getColor';
import { TypeVariantColor, TypeMargin, TypeVariantSize, VS } from '../types/TypeBase';

export type TypeStyleIconContainer = {
    icon: TypeSSIcon;
    mr: TypeSSMR;
};

export type StyledIconContainerProps = {
    $mr?: TypeMargin;
    $color?: Hex;
    $disabled?: boolean;
    $_importantColor?: boolean;
    $colorVariant: TypeVariantColor;
    $sizeVariant: TypeVariantSize;
    $colors: TypeColorScheme;
    $styles: TypeStyleIconContainer;
};

const ICON_SIZE = {
    [VS.L]: (props: StyledIconContainerProps) => css`
        width: ${props.$styles.icon.iconSize_L};
        height: ${props.$styles.icon.iconSize_L};
    `,
    [VS.M]: (props: StyledIconContainerProps) => css`
        width: ${props.$styles.icon.iconSize_M};
        height: ${props.$styles.icon.iconSize_M};
    `,
};

export const StyledIconContainer = styled.svg<StyledIconContainerProps>`
    display: block;
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
    transition: all 0.3s ease-in-out;

    color: ${({ $colors, $color, $colorVariant, $disabled, $_importantColor }) =>
        `${getColor({ cs: $colors, color: $color, variant: $colorVariant, disabled: $disabled })} ${$_importantColor ? '!important' : ''}`};

    ${(props) => ICON_SIZE[props.$sizeVariant](props)}
`;
