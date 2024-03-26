import {
    BOX_GAP_VARIANT,
    BOX_PADDING_VARIANT,
    BOX_WIDTH_VARIANT,
} from '@src/lib/common-styled-component/StyledComponentBox';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeMargin } from '@src/lib/types/TypeBase';
import { TypeBoxGapVariant, TypeBoxPaddingVariant, TypeBoxWidthVariant } from '@src/lib/types/TypeBox';
import React from 'react';
import { css, styled } from 'styled-components';

export type TypeStyleBaseBox = {
    box: TypeSSBox;
    mr: TypeSSMR;
};

export type BaseBoxProps = {
    children?: React.ReactNode;
    mr?: TypeMargin;
    boxWidthVariant?: TypeBoxWidthVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    as?: string;
    $styles?: TypeStyleBaseBox;
} & React.HTMLAttributes<HTMLDivElement>;

export type SBBoxProps = {
    $boxWidthVariant?: TypeBoxWidthVariant;
    $boxPaddingVariant?: TypeBoxPaddingVariant;
    $boxGapVariant?: TypeBoxGapVariant;
    $mr?: TypeMargin;
    $styles: TypeStyleBaseBox;
} & React.HTMLAttributes<HTMLDivElement>;

export const SBBox = styled.div<SBBoxProps>`
    ${(props) => {
        if (props.$boxGapVariant) {
            return css`
                display: grid;
                ${BOX_GAP_VARIANT[props.$boxGapVariant](props.$styles.box)};
            `;
        }
    }}
    ${(props) => props.$boxPaddingVariant && BOX_PADDING_VARIANT[props.$boxPaddingVariant](props.$styles.box)};
    ${(props) => props.$boxWidthVariant && BOX_WIDTH_VARIANT[props.$boxWidthVariant](props.$styles.box)};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const BaseBox: React.FC<BaseBoxProps> = React.memo(
    ({ children, mr, boxWidthVariant, boxPaddingVariant, boxGapVariant, as: Component = 'div', $styles, ...rest }) => {
        const styles = $styles ?? useStyleScheme(['box', 'mr']);

        return (
            <SBBox
                as={Component}
                $styles={styles}
                $mr={mr}
                $boxWidthVariant={boxWidthVariant}
                $boxPaddingVariant={boxPaddingVariant}
                $boxGapVariant={boxGapVariant}
                {...rest}
            >
                {children}
            </SBBox>
        );
    }
);
