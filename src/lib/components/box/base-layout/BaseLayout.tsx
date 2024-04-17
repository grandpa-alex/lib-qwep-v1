import { useColorScheme } from '@src/lib/general';
import { TypeColorScheme } from '@src/lib/general/colors';
import React from 'react';
import { styled } from 'styled-components';

type BaseLayoutProps = {
    children?: React.ReactNode;
    as?: string;
    wrapperStyle?: React.CSSProperties;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

const SWrapper = styled.div`
    margin: 0 auto;
    height: 100%;
    @media screen and (min-width: 1281px) {
        max-width: 1800px;
    }
    @media screen and (max-width: 1280px) {
        max-width: 100%;
    }
`;

type SRootProps = {
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

const SRoot = styled.div<SRootProps>`
    overflow: hidden;
    position: relative;
    width: 100%;
    min-width: 100%;
    background-color: ${(props) => props.$colors.background};
    min-height: 100vh;
    height: 100%;
    padding: 0 30px;
    @media screen and (max-width: 767px) {
        padding: 0 15px;
    }
`;

export const BaseLayout: React.FC<BaseLayoutProps> = React.memo(
    ({ children, as: Component = 'div', wrapperStyle, $colors, ...rest }) => {
        const colors = $colors ?? useColorScheme();

        return (
            <SRoot as={Component} $colors={colors} style={wrapperStyle}>
                <SWrapper {...rest}>{children}</SWrapper>
            </SRoot>
        );
    }
);

//export component
export const SBaseLayout = {
    Root: SRoot,
    Layout: SWrapper,
};

//export type
export namespace TBaseLayout {
    export type Main = BaseLayoutProps;
    export type SRoot = SRootProps;
    export type SWrapper = React.HTMLAttributes<HTMLDivElement>;
}
