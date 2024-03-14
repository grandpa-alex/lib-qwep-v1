import * as Checkbox from '@radix-ui/react-checkbox';
import { CheckboxProps } from '@radix-ui/react-checkbox';
import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSCheckbox, TypeSSMR } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeColorVariant, TypeMargin, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';

export type TypeStyleBaseCheckbox = {
    base: TypeSSBase;
    checkbox: TypeSSCheckbox;
    mr: TypeSSMR;
};

export type BaseCheckboxProps = {
    mr?: TypeMargin;
    colorVariant?: TypeColorVariant;
    sizeVariant?: TypeVariantSize;
    color?: Hex;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleBaseCheckbox;
    _isActiveHover?: boolean;
} & CheckboxProps;

export type StyledRootCheckboxProps = {
    $color?: Hex;
    $mr?: TypeMargin;
    $colors: TypeColorScheme;
    $styles: TypeStyleBaseCheckbox;
    $colorVariant: TypeColorVariant;
    $sizeVariant: TypeVariantSize;
    $_isActiveHover?: boolean;
} & CheckboxProps;

export type StyledBaseCheckboxIconProps = {
    $colorVariant: TypeColorVariant;
    $colors: TypeColorScheme;
    $color?: Hex;
    $disabled?: boolean;
};

export const StyledBaseCheckboxIndicator = styled(Checkbox.Indicator)``;

export const StyledBaseCheckboxIcon = styled.svg<StyledBaseCheckboxIconProps>`
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
    `,
    [VS.M]: (props: TypeSSCheckbox) => css`
        width: ${props.checkboxSize_M};
        height: ${props.checkboxSize_M};
    `,
};

export const StyledBaseCheckboxRoot = styled(Checkbox.Root)<StyledRootCheckboxProps>`
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
        ${StyledBaseCheckboxIcon} {
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
`;

export const BaseCheckbox: React.FC<BaseCheckboxProps> = React.memo(
    ({
        mr,
        color,
        colorVariant = VC.DEFAULT,
        sizeVariant = VS.L,

        $colors,
        $styles,
        _isActiveHover = true,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['base', 'checkbox', 'mr']);

        return (
            <StyledBaseCheckboxRoot
                $color={color}
                $mr={mr}
                $colors={colors}
                $styles={styles}
                $colorVariant={colorVariant}
                $sizeVariant={sizeVariant}
                $_isActiveHover={_isActiveHover}
                {...rest}
            >
                <StyledBaseCheckboxIndicator>
                    <StyledBaseCheckboxIcon
                        $colors={colors}
                        $colorVariant={colorVariant}
                        $disabled={rest.disabled}
                        $color={color}
                        viewBox="0 0 24 24"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </StyledBaseCheckboxIcon>
                </StyledBaseCheckboxIndicator>
            </StyledBaseCheckboxRoot>
        );
    }
);
