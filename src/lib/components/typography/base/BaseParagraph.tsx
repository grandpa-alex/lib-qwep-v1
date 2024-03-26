import { TypeSSMR } from '@src/lib/general/styleScheme';
import React from 'react';
import { BaseTextProps, SBText, SBTextProps, TypeStyleBaseText } from './BaseText';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import styled from 'styled-components';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeMargin } from '@src/lib/types/TypeBase';

export type TypeStyleParagraph = {
    mr: TypeSSMR;
} & TypeStyleBaseText;

export type ParagraphProps = {
    mr?: TypeMargin;
    $styles?: TypeStyleParagraph;
} & BaseTextProps;

export type SParagraphProps = {
    $mr?: TypeMargin;
    $styles: TypeStyleParagraph;
} & SBTextProps;

export const SParagraph = styled(SBText)<SParagraphProps>`
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const BaseParagraph: React.FC<ParagraphProps> = React.memo(
    ({ as = 'p', children, mr, color, $colors, $styles, ...rest }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['typography', 'mr']);

        return (
            <SParagraph $mr={mr} as={as} $colors={colors} $styles={styles} $color={color} {...rest}>
                {children}
            </SParagraph>
        );
    }
);
