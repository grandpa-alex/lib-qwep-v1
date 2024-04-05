import { BaseText, SBaseText, TBaseText } from './base/BaseText';
import { BaseParagraph, SBaseParagraph, TBaseParagraph } from './base/BaseParagraph';
import { BaseTitle, SBaseTitle, TBaseTitle } from './base/BaseTitle';
export { BaseText, BaseParagraph, BaseTitle };

export const TypographyStyledComponent = {
    BaseText: SBaseText,
    BaseParagraph: SBaseParagraph,
    BaseTitle: SBaseTitle,
};

export namespace TypeTypography {
    export namespace BaseText {
        export type Main = TBaseText.Main;
        export type Styles = TBaseText.Styles;
        export type SText = TBaseText.SText;
    }

    export namespace BaseParagraph {
        export type Main = TBaseParagraph.Main;
        export type Styles = TBaseParagraph.Styles;
        export type SParagraph = TBaseParagraph.SParagraph;
    }

    export namespace BaseTitle {
        export type Main = TBaseTitle.Main;
        export type STitle = TBaseTitle.STitle;
        export type Styles = TBaseTitle.Styles;
    }
}
