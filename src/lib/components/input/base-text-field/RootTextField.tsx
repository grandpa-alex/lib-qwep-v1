import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSInp, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeVariantColor, TypeMargin, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import { TypeInpVariant, VI } from '@src/lib/types/TypeInp';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    base: TypeSSBase;
    inp: TypeSSInp;
    typography: TypeSSTypography;
    mr: TypeSSMR;
};

type RootTextFieldProps = {
    children: React.ReactNode;
    mr?: TypeMargin;
    variant?: TypeInpVariant;
    colorVariant?: TypeVariantColor;
    sizeVariant?: TypeVariantSize;
    color?: Hex;
    disabled?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isFocused?: boolean;
    _isActiveHover?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootTextFieldProps = {
    $color?: Hex;
    $mr?: TypeMargin;
    $disabled?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TypeVariantColor;
    $sizeVariant: TypeVariantSize;
    $variant: TypeInpVariant;
    $_isFocused?: boolean;
    $_isActiveHover?: boolean;
};

const INPUT_SIZE = {
    [VS.L]: (props: SRootTextFieldProps) => css`
        height: ${props.$styles.inp.inpHeight_L};
        padding: ${`${props.$styles.inp.inpPadding_Y_L} ${props.$styles.inp.inpPadding_X_L}`};
    `,
    [VS.M]: (props: SRootTextFieldProps) => css`
        height: ${props.$styles.inp.inpHeight_M};
        padding: ${`${props.$styles.inp.inpPadding_Y_M} ${props.$styles.inp.inpPadding_X_M}`};
    `,
};

const INP_VARIANT = {
    [VI.OUTLINED]: (props: SRootTextFieldProps) => css`
        color: ${props.$colors.prompt};
        background-color: transparent;
        border: 1px solid;
        border-color: ${getColor({
            cs: props.$colors,
            color: props.$color,
            disabled: props.$disabled,
            variant: props.$colorVariant,
        })};
        ${() => {
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
    `,
};

const SRoot = styled.div<SRootTextFieldProps>`
    display: inline-block;
    position: relative;
    overflow: hidden;

    font-size: ${({ $styles }) => $styles.typography.fontSizeItem};
    border-radius: ${({ $styles }) => $styles.base.borderRadiusItem};

    ${(props) => INP_VARIANT[props.$variant](props)}
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
    ${(props) => INPUT_SIZE[props.$sizeVariant](props)};
`;

export const RootTextField: React.FC<RootTextFieldProps> = React.memo(
    ({
        children,
        mr,
        color,
        variant = VI.OUTLINED,
        colorVariant = VC.DEFAULT,
        sizeVariant = VS.L,
        _isActiveHover = true,
        disabled,
        $colors,
        $styles,
        _isFocused,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['base', 'inp', 'typography', 'mr']);

        return (
            <SRoot
                $mr={mr}
                $colors={colors}
                $styles={styles}
                $color={color}
                $disabled={disabled}
                $colorVariant={colorVariant}
                $sizeVariant={sizeVariant}
                $variant={variant}
                $_isFocused={_isFocused}
                $_isActiveHover={_isActiveHover}
                {...rest}
            >
                {children}
            </SRoot>
        );
    }
);

//export component
export const SRootTextField = {
    Root: SRoot,
};

//export type
export namespace TRootTextField {
    export type Main = RootTextFieldProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootTextFieldProps;
}
