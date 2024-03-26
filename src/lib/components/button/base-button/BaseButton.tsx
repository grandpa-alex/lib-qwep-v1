import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { itemRippleEffect } from '@src/lib/common/itemRippleEffect';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSBtn, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { TypeColorVariant, TypeMargin, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import { TypeBtnVariant, VB } from '@src/lib/types/TypeBtn';
import React from 'react';
import styled, { css } from 'styled-components';

export type TypeStyleBaseBtn = {
    base: TypeSSBase;
    btn: TypeSSBtn;
    typography: TypeSSTypography;
    mr: TypeSSMR;
};

export type BaseButtonProps = {
    children: React.ReactNode;
    mr?: TypeMargin;
    sizeVariant?: TypeVariantSize;
    colorVariant?: TypeColorVariant;
    variant?: TypeBtnVariant;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleBaseBtn;
    color?: Hex;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    _isActiveHover?:  boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type SBButtonProps = {
    $mr?: TypeMargin;
    $color?: Hex;
    $colors: TypeColorScheme;
    $styles: TypeStyleBaseBtn;
    $sizeVariant: TypeVariantSize;
    $colorVariant: TypeColorVariant;
    $variant: TypeBtnVariant;
    $_isActiveHover: boolean
};

const BTN_SIZE = {
    [VS.L]: (props: SBButtonProps) => css`
        height: ${props.$styles.btn.btnHeight_L};
        padding: ${`${props.$styles.btn.btnPadding_Y_L} ${props.$styles.btn.btnPadding_X_L}`};
    `,
    [VS.M]: (props: SBButtonProps) => css`
        height: ${props.$styles.btn.btnHeight_M};
        padding: ${`${props.$styles.btn.btnPadding_Y_M} ${props.$styles.btn.btnPadding_X_M}`};
    `,
};

const BTN_VARIANT = {
    [VB.CONTAINED]: (props: SBButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => css`
        color: ${props.$colors.textItem};
        background-color: ${getColor({
            cs: props.$colors,
            disabled: props.disabled,
            color: props.$color,
            variant: props.$colorVariant,
        })};
        border: 0;
        &:not([disabled]):hover {
            transition: all 0.3s ease-in-out;
            background-color: ${getColor({
                cs: props.$colors,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover
            })};
        }
    `,
    [VB.TEXT]: (props: SBButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => css`
        color: ${getColor({
            cs: props.$colors,
            disabled: props.disabled,
            color: props.$color,
            variant: props.$colorVariant,
        })};
        background-color: #00000000;
        border: 0;
        &:not([disabled]):hover {
            transition: all 0.3s ease-in-out;
            color: ${getColor({
                cs: props.$colors,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover
            })};
        }
    `,
    [VB.OUTLINED]: (props: SBButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => css`
        color: ${getColor({
            cs: props.$colors,
            disabled: props.disabled,
            color: props.$color,
            variant: props.$colorVariant,
        })};
        background-color: #00000000;
        border-color: ${getColor({
            cs: props.$colors,
            color: props.$color,
            variant: props.$colorVariant,
        })};
        border-left: 1px solid;
        border-right: 1px solid;
        border-top: 1px solid;
        border-bottom: 1px solid;
        &:not([disabled]):hover {
            transition: all 0.3s ease-in-out;
            color: ${getColor({
                cs: props.$colors,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover
            })};
            border-color: ${getColor({
                cs: props.$colors,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover
            })};
        }
    `,
};

export const SBButton = styled.button<SBButtonProps>`
    display: block;
    user-select: none;
    position: relative;
    overflow: hidden;
    line-height: normal;
    outline: 0;
    transition: background-color 400ms;
    font-size: ${({ $styles }) => $styles.typography.fontSizeItem};
    font-weight: ${(props) => props.$styles.typography.fontWeightItem};
    border-radius: ${({ $styles }) => $styles.base.borderRadiusItem};
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
    ${(props) => BTN_SIZE[props.$sizeVariant](props)};
    ${(props) => BTN_VARIANT[props.$variant](props)};
`;

export const BaseButton: React.FC<BaseButtonProps> = React.memo(
    ({
        children,
        mr,
        color,
        sizeVariant = VS.L,
        colorVariant = VC.DEFAULT,
        variant = VB.CONTAINED,
        onClick,
        $colors,
        $styles,
        _isActiveHover = true,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['base', 'btn', 'typography', 'mr']);

        const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
            itemRippleEffect(
                event,
                getColor({
                    cs: colors,
                    color: variant === VB.CONTAINED ? colors.alpha : color,
                    variant: colorVariant,
                    opacity: '40',
                })
            );
            onClick && (await onClick(event));
        };

        return (
            <SBButton
                $colors={colors}
                $styles={styles}
                $sizeVariant={sizeVariant}
                $mr={mr}
                $color={color}
                $colorVariant={colorVariant}
                $variant={variant}
                onClick={handleClick}
                $_isActiveHover={_isActiveHover}
                {...rest}
            >
                {children}
            </SBButton>
        );
    }
);
