import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSMR, TypeSSTypography } from '../../../general/styleScheme';
import { default as React } from '../../../../../node_modules/react';
import { TypeMargin } from '../../../types/TypeBase';
import { TypeTitleVariant } from '../../../types/TypeText';

type TypeStyles = {
    typography: TypeSSTypography;
    mr: TypeSSMR;
};
type BaseTitleProps = {
    children?: React.ReactNode;
    color?: Hex;
    isEllipsis?: boolean;
    mr?: TypeMargin;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    as?: TypeTitleVariant;
} & React.HTMLAttributes<HTMLElement>;
type STitleProps = {
    $mr?: TypeMargin;
    $isEllipsis?: boolean;
    $as: TypeTitleVariant;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $color?: Hex;
} & React.HTMLAttributes<HTMLElement>;
export declare const BaseTitle: React.FC<BaseTitleProps>;
export declare const SBaseTitle: {
    Title: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, STitleProps>> & string;
};
export declare namespace TBaseTitle {
    type Styles = TypeStyles;
    type Main = BaseTitleProps;
    type STitle = STitleProps;
}
export {};
