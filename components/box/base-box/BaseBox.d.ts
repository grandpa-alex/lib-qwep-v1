import { TypeSSBox, TypeSSMR } from '../../../general/styleScheme';
import { TypeMargin } from '../../../types/TypeBase';
import { TypeBoxDisplay, TypeBoxGapVariant, TypeBoxPaddingVariant, TypeBoxWidthVariant } from '../../../types/TypeBox';
import { default as React } from '../../../../../node_modules/react';

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
export declare const BaseBox: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    mr?: TypeMargin;
    boxWidthVariant?: TypeBoxWidthVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    boxDisplay?: TypeBoxDisplay;
    as?: keyof JSX.IntrinsicElements;
    $styles?: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>>;
export declare const SBaseBox: {
    Box: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SBoxProps>> & string;
};
export declare namespace TBaseBox {
    type Main = BaseBoxProps;
    type Styles = TypeStyles;
    type SBox = SBoxProps;
}
export {};
