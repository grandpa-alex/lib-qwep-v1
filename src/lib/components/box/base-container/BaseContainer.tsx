import { BOX_PADDING_VARIANT } from '@src/lib/common-styled-component/StyledComponentBox';
import { useColorScheme } from '@src/lib/general';
import { TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeBoxPaddingVariant } from '@src/lib/types/TypeBox';
import React from 'react';
import { styled } from 'styled-components';

export type TypeStyleBaseContainer = {
    box: TypeSSBox;
};

export type BaseContainerProps = {
    children?: React.ReactNode;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    as?: string;
    $styles?: TypeStyleBaseContainer;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

export type SBContainerProps = {
    $boxPaddingVariant?: TypeBoxPaddingVariant;
    $styles: TypeStyleBaseContainer;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

export const SBContainer = styled.div<SBContainerProps>`
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
            <SBContainer
                as={Component}
                $styles={styles}
                $colors={colors}
                $boxPaddingVariant={boxPaddingVariant}
                {...rest}
            >
                {children}
            </SBContainer>
        );
    }
);
