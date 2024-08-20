import * as Tabs from '@radix-ui/react-tabs';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import { TypeMargin } from '@src/lib/types/TypeBase';
import React from 'react';
import styled from 'styled-components';
import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox.ts';
import { TypeBoxDisplay, TypeBoxPaddingVariant, TypeBoxWidthVariant } from '@src/lib/types/TypeBox.ts';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
};

type BaseTabContentProps = {
    boxWidthVariant?: TypeBoxWidthVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxDisplay?: TypeBoxDisplay;
    mr?: TypeMargin;
    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.ComponentPropsWithRef<typeof Tabs.Content>;

type SRootProps = {
    $mr?: TypeMargin;
    $boxWidthVariant?: TypeBoxWidthVariant;
    $boxPaddingVariant?: TypeBoxPaddingVariant;
    $boxDisplay?: TypeBoxDisplay;
    $styles: TypeStyles;
} & React.ComponentPropsWithRef<typeof Tabs.Content>;

const SRoot = styled(Tabs.Content)<SRootProps>`
    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $styles: props.$styles.box,
            $boxDisplay: props.$boxDisplay,
        })};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const BaseTabContent: React.FC<BaseTabContentProps> = React.memo(
    ({ mr, boxWidthVariant, boxPaddingVariant, boxDisplay, $styles, ...rest }) => {
        const styles = useStyleScheme(['mr', 'box'], $styles);

        return (
            <SRoot
                $mr={mr}
                $styles={styles}
                $boxWidthVariant={boxWidthVariant}
                $boxPaddingVariant={boxPaddingVariant}
                $boxDisplay={boxDisplay}
                {...rest}
            >
                {rest.children}
            </SRoot>
        );
    }
);

//export component
export const SBaseTabContent = {
    Root: SRoot,
};

//export type
export namespace TBaseTabContent {
    export type Main = BaseTabContentProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
