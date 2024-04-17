import { BaseBox, SBaseBox, TBaseBox } from './base-box/BaseBox';
import { SimpleBox, SSimpleBox, TSimpleBox } from './simple-box/SimpleBox';
import { BaseContainer, SBaseContainer, TBaseContainer } from './base-container/BaseContainer';
import { BaseLayout, SBaseLayout, TBaseLayout } from './base-layout/BaseLayout';
import { BaseMenuGroup, SBaseMenuGroup, TBaseMenuGroup } from './base-menu/BaseMenuGroup';
import { BaseMenuItem, SBaseMenuItem, TBaseMenuItem } from './base-menu/BaseMenuItem';
export { BaseBox, SimpleBox, BaseContainer, BaseLayout, BaseMenuGroup, BaseMenuItem };

export const BoxStyledComponent = {
    BaseBox: SBaseBox,
    SimpleBox: SSimpleBox,
    BaseContainer: SBaseContainer,
    BaseLayout: SBaseLayout,
    BaseMenuGroup: SBaseMenuGroup,
    BaseMenuItem: SBaseMenuItem,
};

export namespace TypeBox {
    export namespace BaseBox {
        export type Main = TBaseBox.Main;
        export type SBox = TBaseBox.SBox;
        export type Styles = TBaseBox.Styles;
    }
    export namespace SimpleBox {
        export type Main = TSimpleBox.Main;
        export type SBox = TSimpleBox.SBox;
    }
    export namespace BaseContainer {
        export type Main = TBaseContainer.Main;
        export type SContainer = TBaseContainer.SContainer;
    }
    export namespace BaseLayout {
        export type Main = TBaseLayout.Main;
        export type SWrapper = TBaseLayout.SWrapper;
        export type SRoot = TBaseLayout.SRoot;
    }
    export namespace BaseMenuGroup {
        export type Main = TBaseMenuGroup.Main;
        export type Styles = TBaseMenuGroup.Styles;
        export type SRoot = TBaseMenuGroup.SRoot;
    }
    export namespace BaseMenuItem {
        export type Main = TBaseMenuItem.Main;
        export type Styles = TBaseMenuItem.Styles;
        export type SButton = TBaseMenuItem.SButton;
    }
}
