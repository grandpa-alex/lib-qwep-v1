import * as RadioGroup from '@radix-ui/react-radio-group';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getColor } from '@src/lib/common/getColor';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSMR, TypeSSRadio } from '@src/lib/general/styleScheme';
import React from 'react';
import styled, { css } from 'styled-components';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeVariantColor, TypeMargin, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';

type TypeStyles = {
    mr: TypeSSMR;
    radio: TypeSSRadio;
};

type BaseRadioItemProps = {
    mr?: TypeMargin;
    colorVariant?: TypeVariantColor;
    sizeVariant?: TypeVariantSize;
    color?: Hex;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isActiveHover?: boolean;
    indicatorProps?: React.ComponentPropsWithRef<typeof RadioGroup.Indicator>;
} & React.ComponentPropsWithRef<typeof RadioGroup.Item>;

type SItemProps = {
    $color?: Hex;
    $mr?: TypeMargin;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TypeVariantColor;
    $sizeVariant: TypeVariantSize;
    $blocked?: boolean;
    $_isActiveHover?: boolean;
} & React.ComponentPropsWithRef<typeof RadioGroup.Item>;

const SIZE_RADIO = {
    [VS.L]: (props: TypeSSRadio) => css`
        width: ${props.radioSize_L};
        height: ${props.radioSize_L};
    `,
    [VS.M]: (props: TypeSSRadio) => css`
        width: ${props.radioSize_M};
        height: ${props.radioSize_M};
    `,
};

const SIZE_RADIO_INDICATOR = {
    [VS.L]: (props: TypeSSRadio) => css`
        width: ${props.radioSizeIndicator_L};
        height: ${props.radioSizeIndicator_L};
    `,
    [VS.M]: (props: TypeSSRadio) => css`
        width: ${props.radioSizeIndicator_M};
        height: ${props.radioSizeIndicator_M};
    `,
};

type SIndicatorProps = {
    $styles: TypeStyles;
    $sizeVariant: TypeVariantSize;
} & React.ComponentPropsWithRef<typeof RadioGroup.Indicator>;

const SIndicator = styled(RadioGroup.Indicator)<SIndicatorProps>`
    &::after {
        position: absolute;
        content: '';
        display: block;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
        ${(props) => SIZE_RADIO_INDICATOR[props.$sizeVariant](props.$styles.radio)};
    }
`;

const SItem = styled(RadioGroup.Item)<SItemProps>`
    position: relative;
    background-color: transparent;
    outline: none;
    border-radius: 100%;
    border: 1px solid
        ${(props) =>
            getColor({
                cs: props.$colors,
                disabled: props.disabled,
                color: props.$color,
                variant: props.$colorVariant,
            })};
    transition: all 0.3s ease-in-out;
    ${SIndicator} {
        &::after {
            background-color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    disabled: props.disabled,
                    color: props.$color,
                    variant: props.$colorVariant,
                })};
        }
    }
    &:not([disabled]):hover {
        border-color: ${(props) =>
            getColor({
                cs: props.$colors,
                disabled: props.disabled,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
        ${SIndicator} {
            &::after {
                transition: all 0.3s ease-in-out;
                background-color: ${(props) =>
                    getColor({
                        cs: props.$colors,
                        disabled: props.disabled,
                        color: props.$color,
                        variant: props.$colorVariant,
                        hover: props.$_isActiveHover,
                    })};
            }
        }
    }
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    ${(props) => SIZE_RADIO[props.$sizeVariant](props.$styles.radio)};
    ${(props) => getMargin(props.$styles.mr, props.$mr)}
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const BaseRadioItem = React.memo(
    React.forwardRef<HTMLButtonElement, BaseRadioItemProps>(
        (
            {
                colorVariant = VC.DEFAULT,
                sizeVariant = VS.L,
                mr,
                color,
                blocked,
                $colors,
                $styles,
                _isActiveHover = true,
                indicatorProps,
                ...rest
            },
            ref
        ) => {
            const colors = useColorScheme($colors);
            const styles = useStyleScheme(['mr', 'radio'], $styles);

            return (
                <SItem
                    ref={ref}
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
                    <SIndicator $sizeVariant={sizeVariant} $styles={styles} {...indicatorProps} />
                </SItem>
            );
        }
    )
);

//export component
export const SBaseRadioItem = {
    Item: SItem,
    Indicator: SIndicator,
};

//export type
export namespace TBaseRadioItem {
    export type Styles = TypeStyles;
    export type Main = BaseRadioItemProps;
    export type SItem = SItemProps;
    export type SIndicator = SIndicatorProps;
}
