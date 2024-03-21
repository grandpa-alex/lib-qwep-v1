import { css } from 'styled-components';
import { TypeSSBox } from '../general/styleScheme';
import { Hex, TypeColorScheme } from '../general/colors';

export const BOX_WIDTH_VARIANT = {
    ['w-1']: (props: TypeSSBox) => css`
        width: ${props.boxWidth_1};
    `,
    ['w-2']: (props: TypeSSBox) => css`
        width: ${props.boxWidth_2};
    `,
    ['w-3']: (props: TypeSSBox) => css`
        width: ${props.boxWidth_3};
    `,
    ['w-4']: (props: TypeSSBox) => css`
        width: ${props.boxWidth_4};
    `,
    ['w-5']: (props: TypeSSBox) => css`
        width: ${props.boxWidth_5};
    `,
    ['w-6']: (props: TypeSSBox) => css`
        width: ${props.boxWidth_6};
    `,
};

export const BOX_GAP_VARIANT = {
    ['g-1']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_1};
    `,
    ['g-2']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_2};
    `,
    ['g-3']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_3};
    `,
    ['g-4']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_4};
    `,
    ['g-5']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_5};
    `,
    ['g-6']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_6};
    `,
};

export const BOX_PADDING_VARIANT = {
    ['p-1']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_1};
    `,
    ['p-2']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_2};
    `,
    ['p-3']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_3};
    `,
    ['p-4']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_4};
    `,
    ['p-5']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_5};
    `,
    ['p-6']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_6};
    `,
};

export const BOX_BORDER_RADIUS = {
    ['br-1']: (props: TypeSSBox) => css`
        border-radius: ${props.boxBorderRadius_1};
    `,
    ['br-2']: (props: TypeSSBox) => css`
        border-radius: ${props.boxBorderRadius_2};
    `,
    ['br-3']: (props: TypeSSBox) => css`
        border-radius: ${props.boxBorderRadius_3};
    `,
};

export type TypeStyledBoxShadowVariant = {
    $boxShadowColor?: Hex;
    $colors: TypeColorScheme;
    $box: TypeSSBox;
};

export const BOX_SHADOW_VARIANT = {
    ['shd-1']: (props: TypeStyledBoxShadowVariant) => css`
        box-shadow: ${`${props.$box.boxShadow_1}`} ${props.$boxShadowColor ?? props.$colors.shadowColor};
    `,
    ['shd-2']: (props: TypeStyledBoxShadowVariant) => css`
        box-shadow: ${`${props.$box.boxShadow_2}`} ${props.$boxShadowColor ?? props.$colors.shadowColor};
    `,
    ['shd-3']: (props: TypeStyledBoxShadowVariant) => css`
        box-shadow: ${`${props.$box.boxShadow_3}`} ${props.$boxShadowColor ?? props.$colors.shadowColor};
    `,
};
