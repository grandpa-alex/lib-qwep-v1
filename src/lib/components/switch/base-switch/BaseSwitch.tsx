import * as Switch from '@radix-ui/react-switch';
import { SwitchProps } from '@radix-ui/react-switch';
import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSMR, TypeSSSwitch } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeColorVariant, TypeMargin, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';

export type TypeStyleBaseSwitch = {
    switch: TypeSSSwitch;
    mr: TypeSSMR;
};

export type BaseSwitchProps = {
    mr?: TypeMargin;
    colorVariant?: TypeColorVariant;
    sizeVariant?: TypeVariantSize;
    color?: Hex;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleBaseSwitch;
    _isActiveHover?: boolean;
} & SwitchProps;

export type SBRootSwitchProps = {
    $color?: Hex;
    $mr?: TypeMargin;
    $colors: TypeColorScheme;
    $styles: TypeStyleBaseSwitch;
    $colorVariant: TypeColorVariant;
    $sizeVariant: TypeVariantSize;
    $_isActiveHover?: boolean;
} & SwitchProps;

export type SBSwitchThumbProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyleBaseSwitch;
    $sizeVariant: TypeVariantSize;
};

const SWITCH_THUMB_SIZE = {
    [VS.L]: (props: TypeSSSwitch) => css`
        width: ${props.switchThumbSize_L};
        height: ${props.switchThumbSize_L};
    `,
    [VS.M]: (props: TypeSSSwitch) => css`
        width: ${props.switchThumbSize_M};
        height: ${props.switchThumbSize_M};
    `,
};

const SWITCH_THUMB_TRANSLATE = {
    [VS.L]: (props: TypeSSSwitch) => css`
        transform: translateX(${props.switchThumbTranslateX_L});
    `,
    [VS.M]: (props: TypeSSSwitch) => css`
        transform: translateX(${props.switchThumbTranslateX_M});
    `,
};

export const SBSwitchThumb = styled(Switch.Thumb)<SBSwitchThumbProps>`
    display: block;
    background-color: ${(props) => props.$colors.textItem};
    border-radius: 9999px;
    box-shadow: 0 2px 6px #0000004c;
    transition: transform 100ms;
    transform: translateX(1px);
    will-change: transform;
    &[data-state='checked'] {
        ${(props) => SWITCH_THUMB_TRANSLATE[props.$sizeVariant](props.$styles.switch)}
    }
    ${(props) => SWITCH_THUMB_SIZE[props.$sizeVariant](props.$styles.switch)}
`;

const SWITCH_SIZE = {
    [VS.L]: (props: TypeSSSwitch) => css`
        width: ${props.switchSize_X_L};
        height: ${props.switchSize_Y_L};
    `,
    [VS.M]: (props: TypeSSSwitch) => css`
        width: ${props.switchSize_X_M};
        height: ${props.switchSize_Y_M};
    `,
};

export const SBSwitchRoot = styled(Switch.Root)<SBRootSwitchProps>`
    all: unset;
    background-color: ${(props) =>
        getColor({
            cs: props.$colors,
            color: props.$color,
            disabled: props.disabled,
            variant: props.$colorVariant,
        })};
    border-radius: 9999px;
    position: relative;
    &[data-state='checked'] {
        background-color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.disabled,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
    }

    ${(props) => SWITCH_SIZE[props.$sizeVariant](props.$styles.switch)}
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
`;

export const BaseSwitch: React.FC<BaseSwitchProps> = React.memo(
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
        const styles = $styles ?? useStyleScheme(['switch', 'mr']);

        return (
            <SBSwitchRoot
                $color={color}
                $mr={mr}
                $colors={colors}
                $styles={styles}
                $colorVariant={colorVariant}
                $sizeVariant={sizeVariant}
                $_isActiveHover={_isActiveHover}
                {...rest}
            >
                <SBSwitchThumb $colors={colors} $styles={styles} $sizeVariant={sizeVariant} />
            </SBSwitchRoot>
        );
    }
);
