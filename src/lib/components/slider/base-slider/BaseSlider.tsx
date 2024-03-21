import * as Slider from '@radix-ui/react-slider';
import { SliderProps } from '@radix-ui/react-slider';
import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSMR, TypeSSSlider } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeColorVariant, TypeMargin, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';

import React from 'react';
import styled from 'styled-components';

export type TypeStyleBaseSlider = {
    mr: TypeSSMR;
    slider: TypeSSSlider;
};

export type BaseSliderProps = {
    mr?: TypeMargin;
    colorVariant?: TypeColorVariant;
    sizeVariant?: TypeVariantSize;
    width?: string;
    color?: Hex;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleBaseSlider;
} & SliderProps;

export type SBButtonProps = {
    $mr?: TypeMargin;
    $color?: Hex;
    $width?: string;
    $colors: TypeColorScheme;
    $styles: TypeStyleBaseSlider;
    $colorVariant: TypeColorVariant;
    $sizeVariant: TypeVariantSize;
} & SliderProps;

export const SBSliderTrack = styled(Slider.Track)`
    position: relative;
    flex-grow: 1;
    border-radius: 9999px;
    height: 3px;
`;

export const SBSliderRange = styled(Slider.Range)`
    position: absolute;
    border-radius: 9999px;
    height: 150%;
`;

export const SBSliderThumb = styled(Slider.Thumb)`
    display: block;
    border-radius: 50%;
    transition: all 0.3s ease-in-out;
`;

const THUMB_SIZE = {
    [VS.L]: (props: TypeSSSlider) => props.thumbSize_L,
    [VS.M]: (props: TypeSSSlider) => props.thumbSize_L,
};

export const SBSliderRoot = styled(Slider.Root)<SBButtonProps>`
    position: relative;
    outline: none;
    display: flex;
    align-items: center;
    user-select: none;
    touch-action: none;
    width: ${(props) => props.$width ?? '200px'};
    height: ${(props) => THUMB_SIZE[props.$sizeVariant](props.$styles.slider)};
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
    ${SBSliderTrack} {
        background-color: ${(props) => props.$colors.disabled};
    }
    ${SBSliderRange} {
        background-color: ${(props) =>
            getColor({
                cs: props.$colors,
                disabled: props.disabled,
                color: props.$color,
                variant: props.$colorVariant,
            })};
    }
    ${SBSliderThumb} {
        background-color: ${(props) => props.$colors.textItem};
        box-shadow: 0 1px 3px #555555;
        width: ${(props) => THUMB_SIZE[props.$sizeVariant](props.$styles.slider)};
        height: ${(props) => THUMB_SIZE[props.$sizeVariant](props.$styles.slider)};
        &:focus,
        &:hover {
            outline: none;
            border: none;
            background-color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    disabled: props.disabled,
                    color: props.$color,
                    variant: props.$colorVariant,
                    hover: true,
                })};
        }
    }
`;

export const BaseSlider: React.FC<BaseSliderProps> = React.memo(
    ({ mr, color, width, colorVariant = VC.DEFAULT, sizeVariant = VS.L, $colors, $styles, ...rest }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['slider', 'mr']);

        return (
            <SBSliderRoot
                $color={color}
                $mr={mr}
                $width={width}
                $colors={colors}
                $styles={styles}
                $colorVariant={colorVariant}
                $sizeVariant={sizeVariant}
                {...rest}
            >
                <SBSliderTrack>
                    <SBSliderRange />
                </SBSliderTrack>
                {rest.defaultValue &&
                    rest.defaultValue.map((_, idx) => {
                        return <SBSliderThumb key={idx} />;
                    })}
            </SBSliderRoot>
        );
    }
);
