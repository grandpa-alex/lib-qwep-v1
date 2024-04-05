import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme, useColorScheme } from '@src/lib/general';
import { TypeSSBase, TypeSSInp, TypeSSMR } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeMargin, TypeVariantColor, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    base: TypeSSBase;
    inp: TypeSSInp;
    mr: TypeSSMR;
};

type RootTextareaProps = {
    children: React.ReactNode;
    mr?: TypeMargin;
    sizeVariant?: TypeVariantSize;
    colorVariant?: TypeVariantColor;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    color?: Hex;
    disabled?: boolean;
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
    $_isActiveHover?: boolean;
    $_isFocused?: boolean;
};

const SIZE = {
    [VS.L]: (props: TypeSSInp) => css`
        padding: ${props.inpPadding_Y_L} ${props.inpPadding_X_L};
    `,
    [VS.M]: (props: TypeSSInp) => css`
        padding: ${props.inpPadding_Y_M} ${props.inpPadding_X_M};
    `,
};

const SRoot = styled.div<SRootProps>`
    position: relative;
    display: inline-block;
    overflow: hidden;
    background-color: transparent;
    line-height: normal;
    ${(props) => SIZE[props.$sizeVariant](props.$styles.inp)};
    border-radius: ${(props) => props.$styles.base.borderRadiusItem};
    color: ${(props) => props.$colors.prompt};
    border: 1px solid;
    border-color: ${(props) =>
        getColor({
            cs: props.$colors,
            color: props.$color,
            disabled: props.$disabled,
            variant: props.$colorVariant,
        })};
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
    ${(props) => {
        if (!props.$disabled) {
            return css`
                &:hover {
                    transition: all 0.3s ease-in-out;
                    border-color: ${getColor({
                        cs: props.$colors,
                        color: props.$color,
                        variant: props.$colorVariant,
                        hover: props.$_isActiveHover,
                    })};
                }
                ${props.$_isFocused &&
                css`
                    transition: all 0.3s ease-in-out;
                    border-color: ${getColor({
                        cs: props.$colors,
                        color: props.$color,
                        variant: props.$colorVariant,
                        hover: props.$_isActiveHover,
                    })};
                `}
            `;
        }
    }};
`;

export const RootTextarea: React.FC<RootTextareaProps> = React.memo(
    ({
        children,
        mr,
        color,
        disabled,
        sizeVariant = VS.L,
        colorVariant = VC.DEFAULT,
        $colors,
        $styles,
        _isActiveHover = true,
        _isFocused,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['base', 'mr', 'inp']);
        return (
            <SRoot
                $mr={mr}
                $styles={styles}
                $colors={colors}
                $color={color}
                $colorVariant={colorVariant}
                $sizeVariant={sizeVariant}
                $disabled={disabled}
                $_isActiveHover={_isActiveHover}
                $_isFocused={_isFocused}
                {...rest}
            >
                {children}
            </SRoot>
        );
    }
);

//export component
export const SRootTextarea = {
    Root: SRoot,
};

//export type
export namespace TRootTextarea {
    export type Main = RootTextareaProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
