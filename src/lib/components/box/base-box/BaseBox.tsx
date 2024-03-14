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

export type StyledBaseBoxProps = {
    $boxWidthVariant?: TypeBoxWidthVariant;
    $boxPaddingVariant?: TypeBoxPaddingVariant;
    $boxGapVariant?: TypeBoxGapVariant;
    $mr?: TypeMargin;
    $styles: TypeStyleBaseBox;
} & React.HTMLAttributes<HTMLDivElement>;

const BOX_WIDTH_VARIANT = {
    ['w-1']: (props: TypeSSBox) => css`
        width: ${props.boxWidth_1};
    `,
    ['w-2']: (props: TypeSSBox) => css`
        width: ${props.boxWidth_2};
    `,
    ['w-3']: (props: TypeSSBox) => css`
        width: ${props.boxWidth_3};
    `,
    ['w-4']: (props: TypeSSBox) => css`
        width: ${props.boxWidth_4};
    `,
    ['w-5']: (props: TypeSSBox) => css`
        width: ${props.boxWidth_5};
    `,
    ['w-6']: (props: TypeSSBox) => css`
        width: ${props.boxWidth_6};
    `,
};

const BOX_GAP_VARIANT = {
    ['g-1']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_1};
    `,
    ['g-2']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_2};
    `,
    ['g-3']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_3};
    `,
    ['g-4']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_4};
    `,
    ['g-5']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_5};
    `,
    ['g-6']: (props: TypeSSBox) => css`
        gap: ${props.boxGap_6};
    `,
};

const BOX_PADDING_VARIANT = {
    ['p-1']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_1};
    `,
    ['p-2']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_2};
    `,
    ['p-3']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_3};
    `,
    ['p-4']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_4};
    `,
    ['p-5']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_5};
    `,
    ['p-6']: (props: TypeSSBox) => css`
        padding: ${props.boxPadding_6};
    `,
};

export const StyledBaseBox = styled.div<StyledBaseBoxProps>`
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
            <StyledBaseBox
                as={Component}
                $styles={styles}
                $mr={mr}
                $boxWidthVariant={boxWidthVariant}
                $boxPaddingVariant={boxPaddingVariant}
                $boxGapVariant={boxGapVariant}
                {...rest}
            >
                {children}
            </StyledBaseBox>
        );
    }
);
