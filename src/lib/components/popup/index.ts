import { BasePopup, SBasePopup, TBasePopup } from './base-popup/BasePopup';
import { SimplePopup, SSimplePopup, TSimplePopup } from './simple-popup/SimplePopup';

export { BasePopup, SimplePopup };

export const PopupStyledComponent = {
    BasePopup: SBasePopup,
    SimplePopup: SSimplePopup,
};

export namespace TypePopup {
    export namespace BasePopup {
        export type Main = TBasePopup.Main;
        export type SArrow = TBasePopup.SArrow;
        export type SContent = TBasePopup.SContent;
        export type STrigger = TBasePopup.STrigger;
        export type Styles = TBasePopup.Styles;
    }

    export namespace SimplePopup {
        export type Main = TSimplePopup.Main;
        export type SCard = TSimplePopup.SCard;
        export type SContent = TSimplePopup.SContent;
        export type SHeader = TSimplePopup.SHeader;
        export type Styles = TSimplePopup.Styles;
    }
}
