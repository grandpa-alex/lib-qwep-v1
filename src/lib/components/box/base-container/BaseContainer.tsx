import { BOX_PADDING_VARIANT } from '@src/lib/common-styled-component/StyledComponentBox';
import { useColorScheme } from '@src/lib/general';
import { TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeBoxPaddingVariant } from '@src/lib/types/TypeBox';
import React from 'react';
import { styled } from 'styled-components';

type TypeStyles = {
    box: TypeSSBox;
};

type BaseContainerProps = {
    children?: React.ReactNode;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    as?: string;
    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

type SContainerProps = {
    $boxPaddingVariant?: TypeBoxPaddingVariant;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

const SContainer = styled.div<SContainerProps>`
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.$colors.background};
    ${(props) => props.$boxPaddingVariant && BOX_PADDING_VARIANT[props.$boxPaddingVariant](props.$styles.box)};
`;

export const BaseContainer: React.FC<BaseContainerProps> = React.memo(
    ({ children, boxPaddingVariant, as: Component = 'div', $styles, $colors, ...rest }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['box']);

        return (
            <SContainer
                as={Component}
                $styles={styles}
                $colors={colors}
                $boxPaddingVariant={boxPaddingVariant}
                {...rest}
            >
                {children}
            </SContainer>
        );
    }
);

//export component
export const SBaseContainer = {
    Container: SContainer,
};

//export type
export namespace TBaseContainer {
    export type Main = BaseContainerProps;
    export type Styles = TypeStyles;
    export type SContainer = SContainerProps;
}
