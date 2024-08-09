import * as ScrollArea from '@radix-ui/react-scroll-area';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSMR } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';
import { OC, TypeMargin, TypeOrientationContent } from '@src/lib/types/TypeBase';
import { SBaseScrollAreaComponent, TBaseScrollAreaComponent } from './BaseScrollAreaComponent';
import { getMargin } from '@src/lib/common/getMargin';
import { getColor } from '@src/lib/common/getColor';

type TypeStyles = {
    mr: TypeSSMR;
};

type BaseScrollAreaProps = {
    mr?: TypeMargin;
    width?: string;
    height?: string;
    bgScrolbar?: Hex;
    trumbColor?: Hex;
    orientation?: TypeOrientationContent;
    children?: React.ReactNode;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & TBaseScrollAreaComponent.SRoot;

type SRootProps = {
    $mr?: TypeMargin;
    $styles: TypeStyles;
    $width?: string;
    $height?: string;
} & TBaseScrollAreaComponent.SRoot;

type SScrollbarProps = {
    $bgScrolbar?: Hex;
    $colors: TypeColorScheme;
} & TBaseScrollAreaComponent.SScrollbar;

type SThumbProps = {
    $colors: TypeColorScheme;
    $trumbColor?: Hex;
} & TBaseScrollAreaComponent.SThumb;

const SRoot = styled(SBaseScrollAreaComponent.Root)<SRootProps>`
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

const SScrollbar = styled(SBaseScrollAreaComponent.Scrollbar)<SScrollbarProps>`
    transition: background 160ms ease-out;
    &:hover {
        background-color: ${(props) =>
            props.$bgScrolbar ??
            getColor({
                cs: props.$colors,
                color: props.$colors.primaryItem,
                opacity: '60',
            })};
    }

    &[data-orientation='vertical'] {
        width: 3px;
    }
    &[data-orientation='horizontal'] {
        flex-direction: column;
        height: 3px;
    }
`;

const SThumb = styled(SBaseScrollAreaComponent.Thumb)<SThumbProps>`
    background-color: ${(props) => props.$trumbColor ?? props.$colors.primaryItemActive};
    border-radius: 2px;
`;

export const BaseScrollArea: React.FC<BaseScrollAreaProps> = React.memo(
    ({ mr, children, orientation = OC.VERTICAL, width, height, bgScrolbar, trumbColor, $colors, $styles, ...rest }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['mr']);

        return (
            <SRoot $mr={mr} $width={width} $height={height} $styles={styles} {...rest}>
                <SBaseScrollAreaComponent.Viewport>{children}</SBaseScrollAreaComponent.Viewport>
                <SScrollbar $colors={colors} $bgScrolbar={bgScrolbar} orientation={orientation}>
                    <SThumb $colors={colors} $trumbColor={trumbColor} />
                </SScrollbar>
                <ScrollArea.Corner />
            </SRoot>
        );
    }
);

//export component
export const SBaseScrollArea = {
    Root: SRoot,
    Scrollbar: SScrollbar,
    Thumb: SThumb,
};

//export type
export namespace TBaseScrollArea {
    export type Styles = TypeStyles;
    export type Main = BaseScrollAreaProps;
    export type SRoot = SRootProps;
    export type SScrollbar = SScrollbarProps;
    export type SThumb = SThumbProps;
}
