import { BaseInput, SBaseInput, TBaseInput } from './base-text-field/BaseInput';
import { RootTextField, SRootTextField, TRootTextField } from './base-text-field/RootTextField';
import { BaseTextField, SBaseTextField, TBaseTextField } from './base-text-field/BaseTextField';
import { SSimpleTextField, SimpleTextField, TSimpleTextField } from './simple-text-field/SimpleTextField';
import { SubmitTextField, SSubmitTextField, TSubmitTextField } from './submit-text-field/SubmitTextField';
import { WrapperInput, TWrapperInput, SWrapperInput } from './wrapper-input/WrapperInput';
import { BaseTextarea, SBaseTextarea, TBaseTextarea } from './base-textarea/BaseTextarea';
import { SMessageBox, TMessageBox } from './wrapper-input/MessageBox';
import { SBaseInputArea, TBaseInputArea } from '@src/lib/components/input/base-textarea/BaseInputArea.tsx';
import { SRootTextarea, TRootTextarea } from '@src/lib/components/input/base-textarea/RootTextarea.tsx';

export { BaseInput, RootTextField, BaseTextField, SimpleTextField, SubmitTextField, BaseTextarea, WrapperInput };

export const InputStyledComponent = {
    BaseInput: SBaseInput,
    RootTextField: SRootTextField,
    BaseTextField: SBaseTextField,
    SimpleTextField: SSimpleTextField,
    SubmitTextField: SSubmitTextField,
    BaseTextarea: SBaseTextarea,
    BaseInputTextarea: SBaseInputArea,
    RootTextarea: SRootTextarea,
    MessageBox: SMessageBox,
    WrapperInput: SWrapperInput,
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
        export type SRoot = TSimpleTextField.SRoot;
        export type SInput = TSimpleTextField.SInput;
    }

    export namespace SubmitTextField {
        export type Main = TSubmitTextField.Main;
        export type SInput = TSubmitTextField.SInput;
        export type SLoading = TSubmitTextField.SLoading;
        export type SRoot = TSubmitTextField.SRoot;
        export type SIconContainer = TSubmitTextField.SIconContainer;
    }

    export namespace BaseInputTextarea {
        export type Main = TBaseInputArea.Main;
        export type Styles = TBaseInputArea.Styles;
        export type STextarea = TBaseInputArea.STextarea;
    }

    export namespace BaseRootTextarea {
        export type Main = TRootTextarea.Main;
        export type Styles = TRootTextarea.Styles;
        export type SRoot = TRootTextarea.SRoot;
    }

    export namespace BaseTextarea {
        export type Main = TBaseTextarea.Main;
        export type Styles = TBaseTextarea.Styles;
        export type SRoot = TBaseTextarea.SRoot;
    }

    export namespace WrapperInput {
        export type Styles = TWrapperInput.Styles;
        export type Main = TWrapperInput.Main;
        export type SRoot = TWrapperInput.SRoot;
        export type SLabel = TWrapperInput.SLabel;
    }

    export namespace MessageBox {
        export type Message = TMessageBox.Message;
        export type Main = TMessageBox.Main;
        export type SMessage = TMessageBox.SMessage;
    }
}
