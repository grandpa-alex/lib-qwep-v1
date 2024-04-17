import { useColorScheme } from '@src/lib/general';
import { TypeColorScheme } from '@src/lib/general/colors';
import React from 'react';
import { styled } from 'styled-components';

type BaseContainerProps = {
    children?: React.ReactNode;
    as?: string;

    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

type SContainerProps = {
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

const SContainer = styled.div<SContainerProps>`
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    min-width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.$colors.background};
`;

export const BaseContainer: React.FC<BaseContainerProps> = React.memo(
    ({ children, as: Component = 'div', $colors, ...rest }) => {
        const colors = $colors ?? useColorScheme();

        return (
            <SContainer as={Component} $colors={colors} {...rest}>
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
    export type SContainer = SContainerProps;
}
