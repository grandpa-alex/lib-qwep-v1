import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckboxProps } from '@radix-ui/react-checkbox';
import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSCheckbox, TypeSSMR } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeVariantColor, TypeMargin, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    base: TypeSSBase;
    checkbox: TypeSSCheckbox;
    mr: TypeSSMR;
};

type BaseCheckboxProps = {
    mr?: TypeMargin;
    colorVariant?: TypeVariantColor;
    sizeVariant?: TypeVariantSize;
    color?: Hex;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isActiveHover?: boolean;
} & CheckboxProps;

type SRootProps = {
    $color?: Hex;
    $mr?: TypeMargin;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TypeVariantColor;
    $sizeVariant: TypeVariantSize;
    $blocked?: boolean;
    $_isActiveHover?: boolean;
} & CheckboxProps;

type SIconProps = {
    $colorVariant: TypeVariantColor;
    $colors: TypeColorScheme;
    $color?: Hex;
    $disabled?: boolean;
};

const SIcon = styled.svg<SIconProps>`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 14px;
    height: 14px;
    fill: none;
    stroke: ${(props) =>
        getColor({
            cs: props.$colors,
            disabled: props.$disabled,
            color: props.$color,
            variant: props.$colorVariant,
        })};
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
`;

const SIZE_CHECKBOX = {
    [VS.L]: (props: TypeSSCheckbox) => css`
        width: ${props.checkboxSize_L};
        height: ${props.checkboxSize_L};
        min-width: ${props.checkboxSize_L};
        min-height: ${props.checkboxSize_L};
    `,
    [VS.M]: (props: TypeSSCheckbox) => css`
        width: ${props.checkboxSize_M};
        height: ${props.checkboxSize_M};
        min-width: ${props.checkboxSize_M};
        min-height: ${props.checkboxSize_M};
    `,
};

const SRoot = styled(Checkbox.Root)<SRootProps>`
    position: relative;
    background-color: transparent;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    border-radius: 4px;
    transition: all 0.3s ease-in-out;
    border: 1px solid;
    border-color: ${(props) =>
        getColor({
            cs: props.$colors,
            disabled: props.disabled,
            color: props.$color,
            variant: props.$colorVariant,
        })};
    &:not([disabled]):hover {
        border-color: ${(props) =>
            getColor({
                cs: props.$colors,
                disabled: props.disabled,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};

        background-color: ${(props) =>
            getColor({
                cs: props.$colors,
                disabled: props.disabled,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
                opacity: '20',
            })};
        ${SIcon} {
            stroke: ${(props) =>
                getColor({
                    cs: props.$colors,
                    disabled: props.disabled,
                    color: props.$color,
                    variant: props.$colorVariant,
                    hover: props.$_isActiveHover,
                })};
        }
    }
    ${(props) => SIZE_CHECKBOX[props.$sizeVariant](props.$styles.checkbox)};
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const BaseCheckbox: React.FC<BaseCheckboxProps> = React.memo(
    ({
        mr,
        color,
        colorVariant = VC.DEFAULT,
        sizeVariant = VS.L,
        blocked,
        $colors,
        $styles,
        _isActiveHover = true,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['base', 'checkbox', 'mr']);

        return (
            <SRoot
                $color={color}
                $mr={mr}
                $colors={colors}
                $blocked={blocked}
                $styles={styles}
                $colorVariant={colorVariant}
                $sizeVariant={sizeVariant}
                $_isActiveHover={_isActiveHover}
                {...rest}
            >
                <Checkbox.Indicator>
                    <SIcon
                        $colors={colors}
                        $colorVariant={colorVariant}
                        $disabled={rest.disabled}
                        $color={color}
                        viewBox="0 0 24 24"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </SIcon>
                </Checkbox.Indicator>
            </SRoot>
        );
    }
);

//export component
export const SBaseCheckbox = {
    Root: SRoot,
    Icon: SIcon,
};

//export type
export namespace TBaseCheckbox {
    export type Styles = TypeStyles;
    export type Main = BaseCheckboxProps;
    export type SRoot = SRootProps;
    export type SIcon = SIconProps;
}
