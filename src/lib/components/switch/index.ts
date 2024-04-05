import { BaseSwitch, SBaseSwitch, TBaseSwitch } from './base-switch/BaseSwitch';
import { SSubmitSwitch, SubmitSwitch, TSubmitSwitch } from './submit-switch/SubmitSwitch';
export { BaseSwitch, SubmitSwitch };

export const SwitchStyledComponent = {
    BaseSwitch: SBaseSwitch,
    SubmitSwitch: SSubmitSwitch,
};

export namespace TypeSwitch {
    export namespace BaseSwitch {
        export type Main = TBaseSwitch.Main;
        export type Styles = TBaseSwitch.Styles;
        export type SRoot = TBaseSwitch.SRoot;
        export type SThumb = TBaseSwitch.SThumb;
    }

    export namespace SubmitSwitch {
        export type Main = TSubmitSwitch.Main;
        export type SSwitch = TSubmitSwitch.SSwitch;
    }
}
