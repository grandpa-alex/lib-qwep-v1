import { BaseCheckbox, SBaseCheckbox, TBaseCheckbox } from './base-checkbox/BaseCheckbox';
import { SSubmitCheckbox, SubmitCheckbox, TSubmitCheckbox } from './submit-checkbox/SubmitCheckbox';

export { BaseCheckbox, SubmitCheckbox };

export const CheckboxStyledComponent = {
    BaseCheckbox: SBaseCheckbox,
    SubmitCheckbox: SSubmitCheckbox,
};

export namespace TypeCheckbox {
    export namespace BaseCheckbox {
        export type Main = TBaseCheckbox.Main;
        export type Styles = TBaseCheckbox.Styles;
        export type SIndicator = TBaseCheckbox.SIndicator;
        export type SRoot = TBaseCheckbox.SRoot;
        export type SIcon = TBaseCheckbox.SIcon;
    }

    export namespace SubmitCheckbox {
        export type Main = TSubmitCheckbox.Main;
        export type SRoot = TSubmitCheckbox.SRoot;
        export type SIcon = TSubmitCheckbox.SIcon;
        export type SIndicator = TSubmitCheckbox.SIndicator;
        export type Styles = TSubmitCheckbox.Styles;
    }
}
