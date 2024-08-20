import { BaseSlider, SBaseSlider, TBaseSlider } from './base-slider/BaseSlider';
export { BaseSlider };

export const SliderStyledComponent = {
    BaseSlider: SBaseSlider,
};

export namespace TypeSlider {
    export namespace BaseSlider {
        export type Main = TBaseSlider.Main;
        export type Styles = TBaseSlider.Styles;
        export type SRoot = TBaseSlider.SRoot;
        export type STrack = TBaseSlider.STrack;
        export type SRange = TBaseSlider.SRange;
        export type SThumb = TBaseSlider.SThumb;
    }
}
