import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeMargin } from '@src/lib/types/TypeBase';
import { TypeBoxDisplay, TypeBoxGapVariant, TypeBoxPaddingVariant, TypeBoxWidthVariant } from '@src/lib/types/TypeBox';
import React from 'react';
import { styled } from 'styled-components';

type TypeStyles = {
    box: TypeSSBox;
    mr: TypeSSMR;
};

type BaseBoxProps = {
    mr?: TypeMargin;
    boxWidthVariant?: TypeBoxWidthVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    boxDisplay?: TypeBoxDisplay;
    as?: keyof JSX.IntrinsicElements;
    $styles?: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

type SBoxProps = {
    $boxWidthVariant?: TypeBoxWidthVariant;
    $boxPaddingVariant?: TypeBoxPaddingVariant;
    $boxGapVariant?: TypeBoxGapVariant;
    $boxDisplay?: TypeBoxDisplay;
    $mr?: TypeMargin;
    $styles: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

const SBox = styled.div<SBoxProps>`
    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
            $boxDisplay: props.$boxDisplay,
        })};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const BaseBox = React.memo(
    React.forwardRef<HTMLDivElement, BaseBoxProps>(
        (
            {
                mr,
                boxWidthVariant,
                boxDisplay,
                boxPaddingVariant,
                boxGapVariant,
                as: Component = 'div',
                $styles,
                ...rest
            },
            ref
        ) => {
            const styles = useStyleScheme(['box', 'mr'], $styles);

            return (
                <SBox
                    ref={ref}
                    as={Component}
                    $styles={styles}
                    $mr={mr}
                    $boxWidthVariant={boxWidthVariant}
                    $boxPaddingVariant={boxPaddingVariant}
                    $boxGapVariant={boxGapVariant}
                    $boxDisplay={boxDisplay}
                    {...rest}
                >
                    {rest.children}
                </SBox>
            );
        }
    )
);

//export component
export const SBaseBox = {
    Box: SBox,
};

//export type
export namespace TBaseBox {
    export type Main = BaseBoxProps;
    export type Styles = TypeStyles;
    export type SBox = SBoxProps;
}
