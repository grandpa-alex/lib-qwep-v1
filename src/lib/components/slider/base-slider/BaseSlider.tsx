import * as Slider from '@radix-ui/react-slider';
import { SliderProps } from '@radix-ui/react-slider';
import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSMR, TypeSSSlider } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeVariantColor, TypeMargin, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';

type TypeStyles = {
    mr: TypeSSMR;
    slider: TypeSSSlider;
};

type BaseSliderProps = {
    mr?: TypeMargin;
    colorVariant?: TypeVariantColor;
    sizeVariant?: TypeVariantSize;
    length?: string;
    color?: Hex;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & SliderProps;

type SRootProps = {
    $mr?: TypeMargin;
    $color?: Hex;
    $length?: string;
    $blocked?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TypeVariantColor;
    $sizeVariant: TypeVariantSize;
} & SliderProps;

const STrack = styled(Slider.Track)`
    position: relative;
    flex-grow: 1;
    border-radius: 9999px;
    &[data-orientation='vertical'] {
        width: 1px;
    }
    &[data-orientation='horizontal'] {
        height: 1px;
    }
`;

const SRange = styled(Slider.Range)`
    position: absolute;
    border-radius: 9999px;
    &[data-orientation='vertical'] {
        width: 2px;
    }
    &[data-orientation='horizontal'] {
        height: 2px;
    }
`;

const SThumb = styled(Slider.Thumb)`
    display: block;
    border-radius: 50%;
`;

const THUMB_SIZE = {
    [VS.L]: (props: TypeSSSlider) => props.thumbSize_L,
    [VS.M]: (props: TypeSSSlider) => props.thumbSize_M,
};

const SRoot = styled(Slider.Root)<SRootProps>`
    position: relative;
    outline: none;
    display: flex;
    align-items: center;
    user-select: none;
    touch-action: none;
    ${(props) => getMargin(props.$styles?.mr, props.$mr)}
    &[data-orientation='vertical'] {
        flex-direction: column;
        width: ${(props) => THUMB_SIZE[props.$sizeVariant](props.$styles.slider)};
        height: ${(props) => props.$length ?? '200px'};
    }
    &[data-orientation='horizontal'] {
        width: ${(props) => props.$length ?? '200px'};
        height: ${(props) => THUMB_SIZE[props.$sizeVariant](props.$styles.slider)};
    }
    ${STrack} {
        background-color: ${(props) => props.$colors.disabled};
    }
    ${SRange} {
        background-color: ${(props) =>
            getColor({
                cs: props.$colors,
                disabled: props.disabled,
                color: props.$color,
                variant: props.$colorVariant,
            })};
    }
    ${SThumb} {
        background-color: ${(props) => (props.disabled ? props.$colors.disabled : props.$colors.backgroundBox)};
        width: ${(props) => THUMB_SIZE[props.$sizeVariant](props.$styles.slider)};
        height: ${(props) => THUMB_SIZE[props.$sizeVariant](props.$styles.slider)};
        border: 1px solid ${(props) => props.$colors.disabled};
        &:not([disabled]):focus {
            outline: none;
            border: 2px solid;
            border-color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    disabled: props.disabled,
                    color: props.$color,
                    variant: props.$colorVariant,
                    hover: true,
                })};
        }
    }
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const BaseSlider: React.FC<BaseSliderProps> = React.memo(
    ({ mr, color, length, blocked, colorVariant = VC.DEFAULT, sizeVariant = VS.L, $colors, $styles, ...rest }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['slider', 'mr']);

        return (
            <SRoot
                $color={color}
                $mr={mr}
                $length={length}
                $colors={colors}
                $styles={styles}
                $blocked={blocked}
                $colorVariant={colorVariant}
                $sizeVariant={sizeVariant}
                {...rest}
            >
                <STrack>
                    <SRange />
                </STrack>
                {rest.defaultValue &&
                    rest.defaultValue.map((_, idx) => {
                        return <SThumb key={idx} />;
                    })}
            </SRoot>
        );
    }
);

//export component
export const SBaseSlider = {
    Root: SRoot,
    Thumb: SThumb,
    Range: SRange,
    Track: STrack,
};

//export type
export namespace TBaseSlider {
    export type Main = BaseSliderProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
