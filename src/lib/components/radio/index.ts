import { BaseRadioGroup, SBaseRadioGroup, TBaseRadioGroup } from './base-rado/BaseRadioGroup';
import { BaseRadioItem, SBaseRadioItem, TBaseRadioItem } from './base-rado/BaseRadioItem';
export { BaseRadioItem, BaseRadioGroup };

export const RadioStyledComponent = {
    BaseRadioItem: SBaseRadioItem,
    BaseRadioGroup: SBaseRadioGroup,
};

export namespace TypeRadio {
    export namespace BaseRadioItem {
        export type Main = TBaseRadioItem.Main;
        export type Styles = TBaseRadioItem.Styles;
        export type SItem = TBaseRadioItem.SItem;
        export type SIndicator = TBaseRadioItem.SIndicator;
    }

    export namespace BaseRadioGroup {
        export type Main = TBaseRadioGroup.Main;
        export type SRoot = TBaseRadioGroup.SRoot;
        export type Styles = TBaseRadioGroup.Styles;
        export type SGroup = TBaseRadioGroup.SGroup;
        export type SLabel = TBaseRadioGroup.SLabel;
    }
}
