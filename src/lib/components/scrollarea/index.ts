import { BaseScrollArea, SBaseScrollArea, TBaseScrollArea } from './base-scrollarea/BaseScrollArea';
import { SBaseScrollAreaComponent, TBaseScrollAreaComponent } from './base-scrollarea/BaseScrollAreaComponent';
export { BaseScrollArea };

export const ScrollAreaStyledComponent = {
    BaseScrollAreaComponent: SBaseScrollAreaComponent,
    SBaseScrollArea: SBaseScrollArea,
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
        export type SScrollbar = TBaseScrollArea.SScrollbar;
        export type SThumb = TBaseScrollArea.SThumb;
    }
}
