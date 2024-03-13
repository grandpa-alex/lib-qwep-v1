import React from 'react';
import { StyledIconContainer, TypeStyleIconContainer } from '../common-styled-component/StyledIconContainer';
import { Hex, TypeColorScheme } from '../general/colors';
import { useColorScheme } from '../general/useColorScheme';
import { useStyleScheme } from '../general/useStyleScheme';
import { TypeColorVariant, TypeMargin, TypeVariantSize, VC, VS } from '../types/TypeBase';

export type IconSVGContainerProps = {
    children?: React.ReactNode;
    xmlns?: string;
    viewBox?: string;
    sizeVariant?: TypeVariantSize;
    colorVariant?: TypeColorVariant;
    color?: Hex;
    style?: React.CSSProperties;
    mr?: TypeMargin;
    disabled?: boolean;
    _importantColor?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleIconContainer;
} & React.SVGAttributes<SVGSVGElement>;

export const IconSVGContainer: React.FC<IconSVGContainerProps> = ({
    children,
    xmlns,
    viewBox,
    sizeVariant = VS.L,
    colorVariant = VC.DEFAULT,
    color,
    style,
    mr,
    disabled,
    _importantColor,
    $colors,
    $styles,
    ...rest
}) => {
    const colors = $colors ?? useColorScheme();
    const styles = $styles ?? useStyleScheme(['mr', 'icon']);

    return (
        <StyledIconContainer
            viewBox={viewBox}
            xmlns={xmlns}
            fill="none"
            $mr={mr}
            $color={color}
            $colors={colors}
            $styles={styles}
            $colorVariant={colorVariant}
            $sizeVariant={sizeVariant}
            $disabled={disabled}
            $_importantColor={_importantColor}
            style={style}
            {...rest}
        >
            {children}
        </StyledIconContainer>
    );
};
