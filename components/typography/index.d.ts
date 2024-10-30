import { BaseText, TBaseText } from './base/BaseText';
import { BaseParagraph, TBaseParagraph } from './base/BaseParagraph';
import { BaseTitle, TBaseTitle } from './base/BaseTitle';
import { Copy } from '../../types/CopyType';

export { BaseText, BaseParagraph, BaseTitle };
export declare const TypographyStyledComponent: {
    BaseText: {
        Text: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $color?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement>>> & string;
    };
    BaseParagraph: {
        Paragraph: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "$styles" | keyof import('../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement> | "$colors" | "$color"> & {
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $color?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement>, "ref"> & {
            ref?: ((instance: HTMLParagraphElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLParagraphElement> | null | undefined;
        }, {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $styles: {
                mr: import('../../general/styleScheme').TypeSSMR;
            } & {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $isEllipsis?: boolean;
        } & {
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $color?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement>>> & string;
    };
    BaseTitle: {
        Title: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $isEllipsis?: boolean;
            $as: import('../../types/TypeText').TypeTitleVariant;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $color?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLElement>>> & string;
    };
};
export declare namespace TypeTypography {
    namespace BaseText {
        type Main = Copy<TBaseText.Main>;
        type Styles = Copy<TBaseText.Styles>;
        type SText = Copy<TBaseText.SText>;
    }
    namespace BaseParagraph {
        type Main = Copy<TBaseParagraph.Main>;
        type Styles = Copy<TBaseParagraph.Styles>;
        type SParagraph = Copy<TBaseParagraph.SParagraph>;
    }
    namespace BaseTitle {
        type Main = Copy<TBaseTitle.Main>;
        type STitle = Copy<TBaseTitle.STitle>;
        type Styles = Copy<TBaseTitle.Styles>;
    }
}
