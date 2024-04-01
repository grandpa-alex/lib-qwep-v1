import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSTypography } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';

export type TypeStyleBaseText = {
    typography: TypeSSTypography;
};

export type BaseTextProps = {
    children?: React.ReactNode;
    color?: Hex;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleBaseText;
    as?: React.ElementType;
} & React.HTMLAttributes<HTMLElement> &
    React.LabelHTMLAttributes<HTMLLabelElement>;

export type SBTextProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyleBaseText;
    $color?: Hex;
};

export const SBText = styled.p<SBTextProps>`
    font-size: ${(props) => props.$styles.typography.fontSizeGlobal};
    font-weight: ${(props) => props.$styles.typography.fontWeightGlobal};
    color: ${(props) => props.$color ?? props.$colors.text};
    line-height: normal;
`;

export const BaseText: React.FC<BaseTextProps> = React.memo(
    ({ as = 'p', children, color, $colors, $styles, ...rest }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['typography']);

        return (
            <SBText as={as} $colors={colors} $styles={styles} $color={color} {...rest}>
                {children}
            </SBText>
        );
    }
);
