import { BaseSelectContent, SBaseSelectContent, TBaseSelectContent } from './base-select/BaseSelectContent';
import { BaseSelectItem, SBaseSelectItem, TBaseSelectItem } from './base-select/BaseSelectItem';
import { BaseSelectGroup, SBaseSelectGroup, TBaseSelectGroup } from './base-select/BaseSelectGroup';
import { SBaseSelectComponent, TBaseSelectComponent } from './base-select/BaseSelectComponent';

export { BaseSelectItem, BaseSelectGroup, BaseSelectContent };

export const SelectStyledComponent = {
    BaseSelectComponent: SBaseSelectComponent,
    BaseSelectItem: SBaseSelectItem,
    BaseSelectGroup: SBaseSelectGroup,
    BaseSelectContent: SBaseSelectContent,
};

export namespace TypeSelect {
    export namespace BaseSelectComponent {
        export type SIcon = TBaseSelectComponent.SIcon;
        export type SItem = TBaseSelectComponent.SItem;
    }

    export namespace BaseSelectGroup {
        export type Main = TBaseSelectGroup.Main;
        export type SGroup = TBaseSelectGroup.SGroup;
        export type SLabel = TBaseSelectGroup.SLabel;
    }

    export namespace BaseSelectItem {
        export type Main = TBaseSelectItem.Main;
        export type SIndicator = TBaseSelectItem.SIndicator;
        export type SItemText = TBaseSelectItem.SItemText;
    }

    export namespace BaseSelectContent {
        export type Main = TBaseSelectContent.Main;
        export type Styles = TBaseSelectContent.Styles;
        export type SRoot = TBaseSelectContent.SRoot;
        export type SValue = TBaseSelectContent.SValue;
        export type SIcon = TBaseSelectContent.SIcon;
        export type SPortal = TBaseSelectContent.SPortal;
        export type SContent = TBaseSelectContent.SContent;
        export type STrigger = TBaseSelectContent.STrigger;
        export type SViewport = TBaseSelectContent.SViewport;
    }
}
