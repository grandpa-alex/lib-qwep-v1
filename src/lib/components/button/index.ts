import { BaseButton, SBaseButton, TBaseButton } from './base-button/BaseButton';
import { SSimpleButton, SimpleButton, TSimpleButton } from './simple-button/SimpleButton';
import { SSubmitButton, SubmitButton, TSubmitButton } from './submit-button/SubmitButton';

export { BaseButton, SimpleButton, SubmitButton };

export const ButtonStyledComponent = {
    BaseButton: SBaseButton,
    SimpleButton: SSimpleButton,
    SubmitButton: SSubmitButton,
};

export namespace TypeButton {
    export namespace BaseButton {
        export type Main = TBaseButton.Main;
        export type Styles = TBaseButton.Styles;
        export type SButton = TBaseButton.SButton;
    }

    export namespace SimpleButton {
        export type Main = TSimpleButton.Main;
        export type SContentContainer = TSimpleButton.SContentContainer;
        export type SIconContainer = TSimpleButton.SIconContainer;
    }

    export namespace SubmitButton {
        export type Main = TSubmitButton.Main;
        export type SButton = TSubmitButton.SButton;
        export type SLoading = TSubmitButton.SLoading;
    }
}
