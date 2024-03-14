import { TypeSSBox } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeBoxRadiusVariant, TypeBoxShadowVariant } from '@src/lib/types/TypeBox';
import React from 'react';
import { css, styled } from 'styled-components';
import { BaseBox } from '..';
import { BaseBoxProps, StyledBaseBoxProps, TypeStyleBaseBox } from '../base-box/BaseBox';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { useColorScheme } from '@src/lib/general/useColorScheme';

export type TypeStyleSimpleBox = {} & TypeStyleBaseBox;

type SimpleBoxProps = {
    bg?: Hex;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxRadiusVariant?: TypeBoxRadiusVariant;
    $colors?: TypeColorScheme;
} & BaseBoxProps;

type StyledSimpleBoxProps = {
    $colors: TypeColorScheme;
    $bg?: Hex;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TypeBoxShadowVariant;
    $boxRadiusVariant?: TypeBoxRadiusVariant;
} & StyledBaseBoxProps;

const BORDER_RADIUS = {
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

const SHADOW_VARIANT = {
    ['shd-1']: (props: StyledSimpleBoxProps) => css`
        box-shadow: ${`${props.$styles.box.boxShadow_1}`} ${props.$boxShadowColor ?? props.$colors.shadowColor};
    `,
    ['shd-2']: (props: StyledSimpleBoxProps) => css`
        box-shadow: ${`${props.$styles.box.boxShadow_2}`} ${props.$boxShadowColor ?? props.$colors.shadowColor};
    `,
    ['shd-3']: (props: StyledSimpleBoxProps) => css`
        box-shadow: ${`${props.$styles.box.boxShadow_3}`} ${props.$boxShadowColor ?? props.$colors.shadowColor};
    `,
};

export const StyledSimpleBox = styled(BaseBox)<StyledSimpleBoxProps>`
    background-color: ${(props) => props.$bg ?? props.$colors.backgroundBox};
    ${(props) => props.$boxRadiusVariant && BORDER_RADIUS[props.$boxRadiusVariant](props.$styles.box)};
    ${(props) => props.$boxRadiusVariant && BORDER_RADIUS[props.$boxRadiusVariant](props.$styles.box)};
    ${(props) => props.$boxShadowVariant && SHADOW_VARIANT[props.$boxShadowVariant](props)}
    ${(props) =>
        props.$boxBorderColor &&
        css`
            border: 1px solid;
            border-color: ${props.$boxBorderColor};
        `}
`;

export const SimpleBox: React.FC<SimpleBoxProps> = React.memo(
    ({
        children,
        bg,
        boxBorderColor,
        boxRadiusVariant,
        boxShadowVariant,
        boxShadowColor,
        mr,
        boxWidthVariant,
        boxPaddingVariant,
        boxGapVariant,
        $styles,
        $colors,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['box', 'mr']);

        return (
            <StyledSimpleBox
                $styles={styles}
                $colors={colors}
                $mr={mr}
                $boxWidthVariant={boxWidthVariant}
                $boxPaddingVariant={boxPaddingVariant}
                $boxGapVariant={boxGapVariant}
                $bg={bg}
                $boxBorderColor={boxBorderColor}
                $boxRadiusVariant={boxRadiusVariant}
                $boxShadowVariant={boxShadowVariant}
                $boxShadowColor={boxShadowColor}
                mr={mr}
                boxWidthVariant={boxWidthVariant}
                boxPaddingVariant={boxPaddingVariant}
                boxGapVariant={boxGapVariant}
                {...rest}
            >
                {children}
            </StyledSimpleBox>
        );
    }
);
