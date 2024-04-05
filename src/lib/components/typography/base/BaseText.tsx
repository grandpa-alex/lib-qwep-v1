import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSTypography } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';

type TypeStyles = {
    typography: TypeSSTypography;
};

type BaseTextProps = {
    children?: React.ReactNode;
    color?: Hex;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    as?: React.ElementType;
} & React.HTMLAttributes<HTMLElement> &
    React.LabelHTMLAttributes<HTMLLabelElement>;

type STextProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $color?: Hex;
};

const SText = styled.p<STextProps>`
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
            <SText as={as} $colors={colors} $styles={styles} $color={color} {...rest}>
                {children}
            </SText>
        );
    }
);

//export component
export const SBaseText = {
    Text: SText,
};

//export type
export namespace TBaseText {
    export type Styles = TypeStyles;
    export type Main = BaseTextProps;
    export type SText = STextProps;
}
