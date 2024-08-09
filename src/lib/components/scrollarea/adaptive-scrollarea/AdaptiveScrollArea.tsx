import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';
import { TypeMargin, TypeOrientationContent } from '@src/lib/types/TypeBase';
import { getMargin } from '@src/lib/common/getMargin';
import { StyledScrollbarItem } from '@src/lib/common-styled-component/StyledBase';
import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { TypeBoxDisplay, TypeBoxGapVariant, TypeBoxPaddingVariant, TypeBoxWidthVariant } from '@src/lib/types/TypeBox';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
};

type TypeSize = {
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
    minWidth?: string;
    minHeight?: string;
};

type AdaptiveScrollAreaProps = {
    mr?: TypeMargin;
    boxWidthVariant?: TypeBoxWidthVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    boxDisplay?: TypeBoxDisplay;
    trumbColor?: Hex;
    orientation?: TypeOrientationContent;
    children?: React.ReactNode;
    size?: TypeSize;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & React.RefAttributes<HTMLDivElement>

type SRootProps = {
    $mr?: TypeMargin;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
    $size?: TypeSize;
    $trumbColor?: Hex;
    $boxWidthVariant?: TypeBoxWidthVariant;
    $boxPaddingVariant?: TypeBoxPaddingVariant;
    $boxGapVariant?: TypeBoxGapVariant;
    $boxDisplay?: TypeBoxDisplay;
} & React.RefAttributes<HTMLDivElement>

const SRoot = styled.div<SRootProps>`
    overflow: auto;
    ${(props) => props.$size}
    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
            $boxDisplay: props.$boxDisplay,
        })};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
    ${(props) =>
        StyledScrollbarItem({
            $colors: props.$colors,
            $color: props.$trumbColor ?? props.$colors.primaryItem,
        })}
`;

export const AdaptiveScrollArea: React.FC<AdaptiveScrollAreaProps> = React.memo(
    ({
        mr,
        children,
        boxWidthVariant,
        boxDisplay,
        boxPaddingVariant,
        boxGapVariant,
        trumbColor,
        size,
        $colors,
        $styles,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['mr', 'box']);

        return (
            <SRoot
                $mr={mr}
                $colors={colors}
                $trumbColor={trumbColor}
                $styles={styles}
                $size={size}
                $boxWidthVariant={boxWidthVariant}
                $boxPaddingVariant={boxPaddingVariant}
                $boxGapVariant={boxGapVariant}
                $boxDisplay={boxDisplay}
                {...rest}
            >
                {children}
            </SRoot>
        );
    }
);

//export component
export const SAdaptiveScrollArea = {
    Root: SRoot,
};

//export type
export namespace TAdaptiveScrollArea {
    export type Styles = TypeStyles;
    export type Main = AdaptiveScrollAreaProps;
    export type SRoot = SRootProps;
}
