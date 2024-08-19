import * as Tabs from '@radix-ui/react-tabs';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import { TypeMargin, TypeOrientationContent } from '@src/lib/types/TypeBase';
import React from 'react';
import styled from 'styled-components';
import { TabsListProps, TabsProps } from '@radix-ui/react-tabs';
import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox.ts';
import { TypeBoxPaddingVariant, TypeBoxWidthVariant } from '@src/lib/types/TypeBox.ts';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
};

type Box = {
    boxWidthVariant?: TypeBoxWidthVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    mr?: TypeMargin;
    $styles?: TypeStyles;
};

type BaseTabWrapperProps = {
    tabs: React.ReactNode[];
    tabsListProps?: Box &
        TabsListProps &
        React.RefAttributes<HTMLDivElement> & { orientation?: TypeOrientationContent };
} & Box &
    TabsProps &
    React.RefAttributes<HTMLDivElement>;

type SBox = {
    $mr?: TypeMargin;
    $boxWidthVariant?: TypeBoxWidthVariant;
    $boxPaddingVariant?: TypeBoxPaddingVariant;
    $styles: TypeStyles;
};

type SRootProps = SBox & TabsProps & React.RefAttributes<HTMLDivElement>;
const SRoot = styled(Tabs.Root)<SRootProps>`
    &[data-orientation='vertical'] {
        display: block;
    }

    &[data-orientation='horizontal'] {
        display: flex;
    }

    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $styles: props.$styles.box,
        })};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

type SListProps = {
    $orientation: TypeOrientationContent;
} & SBox &
    TabsListProps &
    React.RefAttributes<HTMLDivElement>;
const SList = styled(Tabs.List)<SListProps>`
    &[data-orientation] {
        display: ${(props) => (props.$orientation === 'vertical' ? 'block' : 'inline-flex')};
    }

    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $styles: props.$styles.box,
        })};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const BaseTabWrapper: React.FC<BaseTabWrapperProps> = React.memo(
    ({ mr, tabs, boxWidthVariant, boxPaddingVariant, tabsListProps, $styles, ...rest }) => {
        const styles = useStyleScheme(['mr', 'box'], $styles);

        return (
            <SRoot
                $mr={mr}
                $styles={styles}
                $boxWidthVariant={boxWidthVariant}
                $boxPaddingVariant={boxPaddingVariant}
                orientation={'vertical'}
                {...rest}
            >
                <SList
                    $mr={mr}
                    $styles={styles}
                    $boxWidthVariant={boxWidthVariant}
                    $boxPaddingVariant={boxPaddingVariant}
                    $orientation={tabsListProps?.orientation ?? 'horizontal'}
                    {...tabsListProps}
                >
                    {...tabs}
                </SList>
                {rest.children}
            </SRoot>
        );
    }
);

//export component
export const SBaseTabWrapper = {
    Root: SRoot,
    List: SList,
};

//export type
export namespace TBaseTabWrapper {
    export type Main = BaseTabWrapperProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
    export type SList = SListProps;
}
