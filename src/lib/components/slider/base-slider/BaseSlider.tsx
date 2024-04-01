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
    length?: string;
    color?: Hex;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleBaseSlider;
} & SliderProps;

export type SBButtonProps = {
    $mr?: TypeMargin;
    $color?: Hex;
    $length?: string;
    $colors: TypeColorScheme;
    $styles: TypeStyleBaseSlider;
    $colorVariant: TypeColorVariant;
    $sizeVariant: TypeVariantSize;
} & SliderProps;

export const SBSliderTrack = styled(Slider.Track)`
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

export const SBSliderRange = styled(Slider.Range)`
    position: absolute;
    border-radius: 9999px;

    &[data-orientation='vertical'] {
        width: 2px;
    }
    &[data-orientation='horizontal'] {
        height: 2px;
    }
`;

export const SBSliderThumb = styled(Slider.Thumb)`
    display: block;
    border-radius: 50%;
`;

const THUMB_SIZE = {
    [VS.L]: (props: TypeSSSlider) => props.thumbSize_L,
    [VS.M]: (props: TypeSSSlider) => props.thumbSize_M,
};

export const SBSliderRoot = styled(Slider.Root)<SBButtonProps>`
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
`;

export const BaseSlider: React.FC<BaseSliderProps> = React.memo(
    ({ mr, color, length, colorVariant = VC.DEFAULT, sizeVariant = VS.L, $colors, $styles, ...rest }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['slider', 'mr']);

        return (
            <SBSliderRoot
                $color={color}
                $mr={mr}
                $length={length}
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
