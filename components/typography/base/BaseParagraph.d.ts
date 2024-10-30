import { TypeSSMR } from '../../../general/styleScheme';
import { default as React } from '../../../../../node_modules/react';
import { TypeMargin } from '../../../types/TypeBase';
import { TBaseText } from './BaseText';

type TypeStyles = {
    mr: TypeSSMR;
} & TBaseText.Styles;
type BaseParagraphProps = {
    mr?: TypeMargin;
    isEllipsis?: boolean;
    $styles?: TypeStyles;
} & TBaseText.Main;
type SParagraphProps = {
    $mr?: TypeMargin;
    $styles: TypeStyles;
    $isEllipsis?: boolean;
} & TBaseText.SText;
export declare const BaseParagraph: React.FC<BaseParagraphProps>;
export declare const SBaseParagraph: {
    Paragraph: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "$styles" | keyof React.HTMLAttributes<HTMLParagraphElement> | "$colors" | "$color"> & {
        $colors: import('../../../general/colors').TypeColorScheme;
        $styles: {
            typography: import('../../../general/styleScheme').TypeSSTypography;
        };
        $color?: import('../../../general/colors').Hex;
    } & React.HTMLAttributes<HTMLParagraphElement>, "ref"> & {
        ref?: ((instance: HTMLParagraphElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLParagraphElement> | null | undefined;
    }, SParagraphProps>> & string;
};
export declare namespace TBaseParagraph {
    type Styles = TypeStyles;
    type Main = BaseParagraphProps;
    type SParagraph = SParagraphProps;
}
export {};
