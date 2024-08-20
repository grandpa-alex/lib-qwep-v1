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
        export type SRoot = TBasePopup.SRoot;
        export type SPortal = TBasePopup.SPortal;
    }

    export namespace SimplePopup {
        export type Styles = TSimplePopup.Styles;
        export type Main = TSimplePopup.Main;
        export type SContent = TSimplePopup.SContent;
        export type STrigger = TSimplePopup.STrigger;
        export type SRoot = TSimplePopup.SRoot;
        export type SPortal = TSimplePopup.SPortal;
        export type SCard = TSimplePopup.SCard;
        export type SHeader = TSimplePopup.SHeader;
        export type STitle = TSimplePopup.STitle;
        export type SIcon = TSimplePopup.SIcon;
    }
}
