import { BaseInput, SBaseInput, TBaseInput } from './base-text-field/BaseInput';
import { RootTextField, SRootTextField, TRootTextField } from './base-text-field/RootTextField';
import { BaseTextField, SBaseTextField, TBaseTextField } from './base-text-field/BaseTextField';
import { SSimpleTextField, SimpleTextField, TSimpleTextField } from './simple-text-field/SimpleTextField';
import { SubmitTextField, SSubmitTextField, TSubmitTextField } from './submit-text-field/SubmitTextField';
import { WrapperTextField, TWrapperTextField, SWrapperTextField } from './wrapper-text-field/WrapperTextField';
import { BaseTextarea, SBaseTextarea, TBaseTextarea } from './base-textarea/BaseTextarea';

export { BaseInput, RootTextField, BaseTextField, SimpleTextField, SubmitTextField, BaseTextarea, WrapperTextField };

export const InputStyledComponent = {
    BaseInput: SBaseInput,
    RootTextField: SRootTextField,
    BaseTextField: SBaseTextField,
    SimpleTextField: SSimpleTextField,
    SubmitTextField: SSubmitTextField,
    BaseTextarea: SBaseTextarea,
    WrapperTextField: SWrapperTextField,
};

export namespace TypeInput {
    export namespace BaseInput {
        export type Main = TBaseInput.Main;
        export type Styles = TBaseInput.Styles;
        export type SInput = TBaseInput.SInput;
    }

    export namespace RootTextField {
        export type Main = TRootTextField.Main;
        export type Styles = TRootTextField.Styles;
        export type SRoot = TRootTextField.SRoot;
    }

    export namespace BaseTextField {
        export type Styles = TBaseTextField.Styles;
        export type Main = TBaseTextField.Main;
        export type SInput = TBaseTextField.SInput;
        export type SRoot = TBaseTextField.SRoot;
    }

    export namespace SimpleTextField {
        export type Main = TSimpleTextField.Main;
        export type SIconContainer = TSimpleTextField.SIconContainer;
    }

    export namespace SubmitTextField {
        export type Main = TSubmitTextField.Main;
        export type SInput = TSubmitTextField.SInput;
        export type SLoading = TSubmitTextField.SLoading;
    }

    export namespace BaseTextarea {
        export type Main = TBaseTextarea.Main;
        export type Styles = TBaseTextarea.Styles;
        export type SRoot = TBaseTextarea.SRoot;
    }

    export namespace WrapperTextField {
        export type Styles = TWrapperTextField.Styles;
        export type Main = TWrapperTextField.Main;
        export type Message = TWrapperTextField.Message;
        export type SMessage = TWrapperTextField.SMessage;
        export type SRoot = TWrapperTextField.SRoot;
    }
}
