import { BaseBox, SBaseBox, TBaseBox } from './base-box/BaseBox';
import { SimpleBox, SSimpleBox, TSimpleBox } from './simple-box/SimpleBox';
import { BaseContainer, SBaseContainer, TBaseContainer } from './base-container/BaseContainer';
export { BaseBox, SimpleBox, BaseContainer };

export const BoxStyledComponent = {
    BaseBox: SBaseBox,
    SimpleBox: SSimpleBox,
    BaseContainer: SBaseContainer,
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
        export type Styles = TBaseContainer.Styles;
    }
}
