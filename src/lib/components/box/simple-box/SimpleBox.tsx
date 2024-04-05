import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeBoxRadiusVariant, TypeBoxShadowVariant } from '@src/lib/types/TypeBox';
import React from 'react';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { CSSSimpleBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { SBaseBox, TBaseBox } from '../base-box/BaseBox';
import { styled } from 'styled-components';

type SimpleBoxProps = {
    bg?: Hex;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxRadiusVariant?: TypeBoxRadiusVariant;
    $colors?: TypeColorScheme;
} & TBaseBox.Main;

type SBoxProps = {
    $colors: TypeColorScheme;
    $bg?: Hex;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TypeBoxShadowVariant;
    $boxRadiusVariant?: TypeBoxRadiusVariant;
} & TBaseBox.SBox;

const SBox = styled(SBaseBox.Box)<SBoxProps>`
    background-color: ${(props) => props.$bg ?? props.$colors.backgroundBox};

    ${(props) =>
        CSSSimpleBox({
            $colors: props.$colors,
            $boxBorderColor: props.$boxBorderColor,
            $boxShadowColor: props.$boxShadowColor,
            $boxShadowVariant: props.$boxShadowVariant,
            $boxRadiusVariant: props.$boxRadiusVariant,
            $styles: props.$styles.box,
        })};
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
            <SBox
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
                {...rest}
            >
                {children}
            </SBox>
        );
    }
);

//export component
export const SSimpleBox = {
    Box: SBox,
};

//export type
export namespace TSimpleBox {
    export type Main = SimpleBoxProps;
    export type SBox = SBoxProps;
}
