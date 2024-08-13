import { BaseTab, SBaseTab, TBaseTab } from './base-tab/BaseTab';
import { BaseTabContent, SBaseTabContent, TBaseTabContent } from './base-tab/BaseTabContent';
import { BaseTabWrapper, SBaseTabWrapper, TBaseTabWrapper } from './base-tab/BaseTabWrapper';

export { BaseTabWrapper, BaseTab, BaseTabContent };

export const TabStyledComponent = {
    BaseTab: SBaseTab,
    BaseTabWrapper: SBaseTabWrapper,
    BaseTabContent: SBaseTabContent,
};

export namespace TypeTab {
    export namespace BaseTab {
        export type Main = TBaseTab.Main;
        export type Styles = TBaseTab.Styles;
        export type STab = TBaseTab.STab;
    }

    export namespace BaseTabWrapper {
        export type Main = TBaseTabWrapper.Main;
        export type Styles = TBaseTabWrapper.Styles;
        export type SRoot = TBaseTabWrapper.SRoot;
        export type SList = TBaseTabWrapper.SList;
    }

    export namespace BaseTabContent {
        export type Main = TBaseTabContent.Main;
        export type Styles = TBaseTabContent.Styles;
        export type SRoot = TBaseTabContent.SRoot;
    }
}
