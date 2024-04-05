import { TypeSSMR } from '@src/lib/general/styleScheme';
import React from 'react';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import styled from 'styled-components';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeMargin } from '@src/lib/types/TypeBase';
import { SBaseText, TBaseText } from './BaseText';

type TypeStyles = {
    mr: TypeSSMR;
} & TBaseText.Styles;

type BaseParagraphProps = {
    mr?: TypeMargin;
    $styles?: TypeStyles;
} & TBaseText.Main;

type SParagraphProps = {
    $mr?: TypeMargin;
    $styles: TypeStyles;
} & TBaseText.SText;

const SParagraph = styled(SBaseText.Text)<SParagraphProps>`
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const BaseParagraph: React.FC<BaseParagraphProps> = React.memo(
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

//export component
export const SBaseParagraph = {
    Paragraph: SParagraph,
};

//export type
export namespace TBaseParagraph {
    export type Styles = TypeStyles;
    export type Main = BaseParagraphProps;
    export type SParagraph = SParagraphProps;
}
