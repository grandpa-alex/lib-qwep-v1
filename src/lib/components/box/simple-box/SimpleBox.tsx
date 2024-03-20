import { TypeSSBox } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeBoxRadiusVariant, TypeBoxShadowVariant } from '@src/lib/types/TypeBox';
import React from 'react';
import { css, styled } from 'styled-components';
import { BaseBox } from '..';
import { BaseBoxProps, StyledBaseBoxProps, TypeStyleBaseBox } from '../base-box/BaseBox';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { BOX_BORDER_RADIUS, BOX_SHADOW_VARIANT } from '@src/lib/common-styled-component/StuledComponentBox';

export type TypeStyleSimpleBox = {} & TypeStyleBaseBox;

export type SimpleBoxProps = {
    bg?: Hex;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxRadiusVariant?: TypeBoxRadiusVariant;
    $colors?: TypeColorScheme;
} & BaseBoxProps;

export type StyledSimpleBoxProps = {
    $colors: TypeColorScheme;
    $bg?: Hex;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TypeBoxShadowVariant;
    $boxRadiusVariant?: TypeBoxRadiusVariant;
} & StyledBaseBoxProps;


export const StyledSimpleBox = styled(BaseBox)<StyledSimpleBoxProps>`
    background-color: ${(props) => props.$bg ?? props.$colors.backgroundBox};
    ${(props) => props.$boxRadiusVariant && BOX_BORDER_RADIUS[props.$boxRadiusVariant](props.$styles.box)};
    ${(props) => props.$boxShadowVariant && BOX_SHADOW_VARIANT[props.$boxShadowVariant]({$box: props.$styles.box, $colors: props.$colors, $boxShadowColor: props.$boxShadowColor})}
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
