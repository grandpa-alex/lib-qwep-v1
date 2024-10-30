import * as Switch from '@radix-ui/react-switch';
import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSMR, TypeSSSwitch } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeVariantColor, TypeMargin, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    switch: TypeSSSwitch;
    mr: TypeSSMR;
};

type BaseSwitchProps = {
    mr?: TypeMargin;
    colorVariant?: TypeVariantColor;
    sizeVariant?: TypeVariantSize;
    color?: Hex;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isActiveHover?: boolean;
    thumbProps?: React.ComponentPropsWithRef<typeof Switch.Thumb>;
} & React.ComponentPropsWithRef<typeof Switch.Root>;

export type SRootProps = {
    $color?: Hex;
    $mr?: TypeMargin;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TypeVariantColor;
    $sizeVariant: TypeVariantSize;
    $blocked?: boolean;
    $_isActiveHover?: boolean;
} & React.ComponentPropsWithRef<typeof Switch.Root>;

export type SThumbProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $sizeVariant: TypeVariantSize;
} & React.ComponentPropsWithoutRef<typeof Switch.Thumb>;

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

const SThumb = styled(Switch.Thumb)<SThumbProps>`
    display: block;
    background-color: ${(props) => props.$colors.textItem};
    border-radius: 9999px;
    transition: transform 100ms;
    transform: translateX(1px);
    will-change: transform;
    &[data-state='checked'] {
        ${(props) => SWITCH_THUMB_TRANSLATE[props.$sizeVariant](props.$styles.switch)}
    }
    ${(props) => SWITCH_THUMB_SIZE[props.$sizeVariant](props.$styles.switch)}
`;

const SRoot = styled(Switch.Root)<SRootProps>`
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
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const BaseSwitch: React.FC<BaseSwitchProps> = React.memo(
    React.forwardRef<HTMLButtonElement, BaseSwitchProps>(
        (
            {
                mr,
                color,
                colorVariant = VC.DEFAULT,
                sizeVariant = VS.L,
                blocked,
                $colors,
                $styles,
                _isActiveHover = true,
                thumbProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['switch', 'mr'], $styles);

            return (
                <SRoot
                    ref={ref}
                    $color={color}
                    $mr={mr}
                    $blocked={blocked}
                    $colors={colors}
                    $styles={styles}
                    $colorVariant={colorVariant}
                    $sizeVariant={sizeVariant}
                    $_isActiveHover={_isActiveHover}
                    {...rest}
                >
                    <SThumb $colors={colors} $styles={styles} $sizeVariant={sizeVariant} {...thumbProps} />
                </SRoot>
            );
        }
    )
);

//export component
export const SBaseSwitch = {
    Root: SRoot,
    Thumb: SThumb,
};

//export type
export namespace TBaseSwitch {
    export type Main = BaseSwitchProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
    export type SThumb = SThumbProps;
}
