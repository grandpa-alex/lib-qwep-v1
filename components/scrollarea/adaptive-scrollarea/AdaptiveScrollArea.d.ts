import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSBox, TypeSSMR } from '../../../general/styleScheme';
import { default as React } from '../../../../../node_modules/react';
import { TypeMargin, TypeOrientationContent } from '../../../types/TypeBase';
import { TypeBoxDisplay, TypeBoxGapVariant, TypeBoxPaddingVariant, TypeBoxWidthVariant } from '../../../types/TypeBox';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
};
type TypeSize = {
    width?: string;
    height?: string;
    maxWidth?: string;
    maxHeight?: string;
    minWidth?: string;
    minHeight?: string;
};
type AdaptiveScrollAreaProps = {
    mr?: TypeMargin;
    boxWidthVariant?: TypeBoxWidthVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    boxDisplay?: TypeBoxDisplay;
    thumbColor?: Hex;
    orientation?: TypeOrientationContent;
    children?: React.ReactNode;
    size?: TypeSize;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;
type SRootProps = {
    $mr?: TypeMargin;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
    $size?: TypeSize;
    $thumbColor?: Hex;
    $boxWidthVariant?: TypeBoxWidthVariant;
    $boxPaddingVariant?: TypeBoxPaddingVariant;
    $boxGapVariant?: TypeBoxGapVariant;
    $boxDisplay?: TypeBoxDisplay;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const AdaptiveScrollArea: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    mr?: TypeMargin;
    boxWidthVariant?: TypeBoxWidthVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    boxDisplay?: TypeBoxDisplay;
    thumbColor?: Hex;
    orientation?: TypeOrientationContent;
    children?: React.ReactNode;
    size?: TypeSize;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>>;
export declare const SAdaptiveScrollArea: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SRootProps>> & string;
};
export declare namespace TAdaptiveScrollArea {
    type Styles = TypeStyles;
    type Main = AdaptiveScrollAreaProps;
    type SRoot = SRootProps;
}
export {};
