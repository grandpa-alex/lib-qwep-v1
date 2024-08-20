import { AdaptiveScrollArea, SAdaptiveScrollArea, TAdaptiveScrollArea } from './adaptive-scrollarea/AdaptiveScrollArea';
import { BaseScrollArea, SBaseScrollArea, TBaseScrollArea } from './base-scrollarea/BaseScrollArea';
import { SBaseScrollAreaComponent, TBaseScrollAreaComponent } from './base-scrollarea/BaseScrollAreaComponent';
export { BaseScrollArea, AdaptiveScrollArea };

export const ScrollAreaStyledComponent = {
    BaseScrollAreaComponent: SBaseScrollAreaComponent,
    SBaseScrollArea: SBaseScrollArea,
    AdaptiveScrollArea: SAdaptiveScrollArea,
};

export namespace TypeScrollArea {
    export namespace BaseScrollAreaComponent {
        export type SRoot = TBaseScrollAreaComponent.SRoot;
        export type SScrollbar = TBaseScrollAreaComponent.SScrollbar;
        export type SThumb = TBaseScrollAreaComponent.SThumb;
        export type SViewport = TBaseScrollAreaComponent.SViewport;
    }

    export namespace BaseScrollArea {
        export type Styles = TBaseScrollArea.Styles;
        export type Main = TBaseScrollArea.Main;
        export type SRoot = TBaseScrollArea.SRoot;
        export type SViewport = TBaseScrollArea.SViewport;
        export type SCorner = TBaseScrollArea.SCorner;
        export type SScrollbar = TBaseScrollArea.SScrollbar;
        export type SThumb = TBaseScrollArea.SThumb;
    }

    export namespace AdaptiveScrollArea {
        export type Styles = TAdaptiveScrollArea.Styles;
        export type Main = TAdaptiveScrollArea.Main;
        export type SRoot = TAdaptiveScrollArea.SRoot;
    }
}
