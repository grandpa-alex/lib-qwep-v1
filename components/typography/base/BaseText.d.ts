import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSTypography } from '../../../general/styleScheme';
import { default as React } from '../../../../../node_modules/react';

type TypeStyles = {
    typography: TypeSSTypography;
};
type BaseTextProps = {
    children?: React.ReactNode;
    color?: Hex;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    as?: keyof JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLParagraphElement>;
type STextProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $color?: Hex;
} & React.HTMLAttributes<HTMLParagraphElement>;
export declare const BaseText: React.FC<BaseTextProps>;
export declare const SBaseText: {
    Text: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, STextProps>> & string;
};
export declare namespace TBaseText {
    type Styles = TypeStyles;
    type Main = BaseTextProps;
    type SText = STextProps;
}
export {};
