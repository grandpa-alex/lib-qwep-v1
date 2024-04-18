import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getColor } from '@src/lib/common/getColor';
import { itemRippleEffect } from '@src/lib/common/itemRippleEffect';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSBtn, TypeSSTypography } from '@src/lib/general/styleScheme';
import { TypeVariantSize, VS } from '@src/lib/types/TypeBase';

import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    base: TypeSSBase;
    btn: TypeSSBtn;
    typography: TypeSSTypography;
};

type BaseMenuItemProps = {
    value: string;
    children?: React.ReactNode;
    activeItem?: boolean;
    sizeVariant?: TypeVariantSize;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    color?: Hex;
    blocked?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>;
    _isActiveHover?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type SButtonProps = {
    $color?: Hex;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $sizeVariant: TypeVariantSize;
    $activeItem?: boolean;
    $_isActiveHover: boolean;
    $blocked?: boolean;
};

const BTN_SIZE = {
    [VS.L]: (props: SButtonProps) => css`
        height: ${props.$styles.btn.btnHeight_L};
        padding: ${`${props.$styles.btn.btnPadding_Y_L} ${props.$styles.btn.btnPadding_X_L}`};
    `,
    [VS.M]: (props: SButtonProps) => css`
        height: ${props.$styles.btn.btnHeight_M};
        padding: ${`${props.$styles.btn.btnPadding_Y_M} ${props.$styles.btn.btnPadding_X_M}`};
    `,
};

export const SButton = styled.button<SButtonProps>`
    display: block;
    user-select: none;
    position: relative;
    overflow: hidden;
    line-height: normal;
    outline: 0;
    transition: background-color 400ms;
    background-color: transparent;
    font-size: ${({ $styles }) => $styles.typography.fontSizeItem};
    font-weight: ${(props) => props.$styles.typography.fontWeightGlobal};
    border-radius: ${({ $styles }) => $styles.base.borderRadiusItem};
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    border: 0;
    ${(props) => BTN_SIZE[props.$sizeVariant](props)};
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
    ${(props) => {
        if (props.$activeItem) {
            return css`
                background-color: ${getColor({
                    cs: props.$colors,
                    color: props.$color ?? props.$colors.primaryItem,
                })};
                color: ${props.$colors.textItem};
            `;
        }
    }};

    &:not([disabled]):hover {
        ${(props) =>
            !props.$activeItem &&
            css`
                background-color: ${getColor({
                    cs: props.$colors,
                    color: props.$color ?? props.$colors.primaryItem,
                    opacity: '40',
                })};
            `}
        transition: all 0.3s ease-in-out;
    }
`;

export const BaseMenuItem: React.FC<BaseMenuItemProps> = React.memo(
    ({
        children,
        activeItem,
        color,
        sizeVariant = VS.L,
        onClick,
        $colors,
        $styles,
        blocked,
        _isActiveHover = true,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['base', 'btn', 'typography']);

        const handleClick = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            itemRippleEffect(
                event,
                getColor({
                    cs: colors,
                    color: color ?? colors.textItem,
                    opacity: '40',
                })
            );
            onClick && (await onClick(event));
        };

        return (
            <SButton
                $colors={colors}
                $styles={styles}
                $sizeVariant={sizeVariant}
                $color={color}
                $blocked={blocked}
                $activeItem={activeItem}
                $_isActiveHover={_isActiveHover}
                onClick={handleClick}
                {...rest}
            >
                {children}
            </SButton>
        );
    }
);

//export component
export const SBaseMenuItem = {
    Button: SButton,
};

//export type
export namespace TBaseMenuItem {
    export type Styles = TypeStyles;
    export type Main = BaseMenuItemProps;
    export type SButton = SButtonProps;
}