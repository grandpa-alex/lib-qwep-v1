import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeMargin } from '@src/lib/types/TypeBase';

export type TypeStyleBaseTitle = {
    typography: TypeSSTypography;
    mr: TypeSSMR;
};

export type BaseTitleProps = {
    children?: React.ReactNode;
    color?: Hex;
    mr?: TypeMargin;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleBaseTitle;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & React.HTMLAttributes<HTMLElement>;

export type SBTitleProps = {
    $mr?: TypeMargin;
    $as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    $colors: TypeColorScheme;
    $styles: TypeStyleBaseTitle;
    $color?: Hex;
};

const SIZE_VARIANT = {
    ['h1']: (props: TypeStyleBaseTitle) => props.typography.h1,
    ['h2']: (props: TypeStyleBaseTitle) => props.typography.h2,
    ['h3']: (props: TypeStyleBaseTitle) => props.typography.h3,
    ['h4']: (props: TypeStyleBaseTitle) => props.typography.h4,
    ['h5']: (props: TypeStyleBaseTitle) => props.typography.h5,
    ['h6']: (props: TypeStyleBaseTitle) => props.typography.h6,
};

export const SBTitle = styled.h1<SBTitleProps>`
    font-size: ${(props) => SIZE_VARIANT[props.$as](props.$styles)};
    font-weight: ${(props) => props.$styles.typography.fontWeightTitle};
    color: ${(props) => props.$color ?? props.$colors.title};
    line-height: normal;
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const BaseTitle: React.FC<BaseTitleProps> = React.memo(
    ({ mr, as = 'h3', children, color, $colors, $styles, ...rest }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['typography', 'mr']);

        return (
            <SBTitle as={as} $as={as} $mr={mr} $colors={colors} $styles={styles} $color={color} {...rest}>
                {children}
            </SBTitle>
        );
    }
);
