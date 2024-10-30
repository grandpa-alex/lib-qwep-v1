import { BaseInput, TBaseInput } from './base-text-field/BaseInput';
import { RootTextField, TRootTextField } from './base-text-field/RootTextField';
import { BaseTextField, TBaseTextField } from './base-text-field/BaseTextField';
import { SimpleTextField, TSimpleTextField } from './simple-text-field/SimpleTextField';
import { SubmitTextField, TSubmitTextField } from './submit-text-field/SubmitTextField';
import { WrapperInput, TWrapperInput } from './wrapper-input/WrapperInput';
import { BaseTextarea, TBaseTextarea } from './base-textarea/BaseTextarea';
import { TMessageBox } from './wrapper-input/MessageBox';
import { TBaseInputArea } from './base-textarea/BaseInputArea.tsx';
import { TRootTextarea } from './base-textarea/RootTextarea.tsx';
import { Copy } from '../../types/CopyType';

export { BaseInput, RootTextField, BaseTextField, SimpleTextField, SubmitTextField, BaseTextarea, WrapperInput };
export declare const InputStyledComponent: {
    BaseInput: {
        Input: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, {
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $colors: import('../../general/colors').TypeColorScheme;
            $inputAutofill?: import('../../general/colors').Hex;
            $inputAutofillText?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>>> & string;
    };
    RootTextField: {
        Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
            $color?: import('../../general/colors').Hex;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $disabled?: boolean;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                inp: import('../../general/styleScheme').TypeSSInp;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $variant: import('../../types/TypeInp').TypeInpVariant;
            $blocked?: boolean;
            $_isFocused?: boolean;
            $_isActiveHover?: boolean;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
    };
    BaseTextField: {
        Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$mr" | "$styles" | keyof import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant" | "$disabled" | "$_isFocused"> & {
            $color?: import('../../general/colors').Hex;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $disabled?: boolean;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                inp: import('../../general/styleScheme').TypeSSInp;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $variant: import('../../types/TypeInp').TypeInpVariant;
            $blocked?: boolean;
            $_isFocused?: boolean;
            $_isActiveHover?: boolean;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }, {
            $color?: import('../../general/colors').Hex;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $disabled?: boolean;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                inp: import('../../general/styleScheme').TypeSSInp;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $variant: import('../../types/TypeInp').TypeInpVariant;
            $blocked?: boolean;
            $_isFocused?: boolean;
            $_isActiveHover?: boolean;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
        Input: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "$styles" | keyof import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement> | "$colors" | "$inputAutofill" | "$inputAutofillText"> & {
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $colors: import('../../general/colors').TypeColorScheme;
            $inputAutofill?: import('../../general/colors').Hex;
            $inputAutofillText?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>, "ref"> & {
            ref?: ((instance: HTMLInputElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLInputElement> | null | undefined;
        }, {
            $color?: import('../../general/colors').Hex;
            $colors: import('../../general/colors').TypeColorScheme;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
        } & {
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $colors: import('../../general/colors').TypeColorScheme;
            $inputAutofill?: import('../../general/colors').Hex;
            $inputAutofillText?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>>> & string;
    };
    SimpleTextField: {
        Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<Omit<import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$mr" | "$styles" | keyof import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant" | "$disabled" | "$_isFocused"> & {
            $color?: import('../../general/colors').Hex;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $disabled?: boolean;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                inp: import('../../general/styleScheme').TypeSSInp;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $variant: import('../../types/TypeInp').TypeInpVariant;
            $blocked?: boolean;
            $_isFocused?: boolean;
            $_isActiveHover?: boolean;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }, "$mr" | "$styles" | keyof import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant" | "$disabled" | "$_isFocused"> & {
            $color?: import('../../general/colors').Hex;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $disabled?: boolean;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                inp: import('../../general/styleScheme').TypeSSInp;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $variant: import('../../types/TypeInp').TypeInpVariant;
            $blocked?: boolean;
            $_isFocused?: boolean;
            $_isActiveHover?: boolean;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, {
            $color?: import('../../general/colors').Hex;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $disabled?: boolean;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                inp: import('../../general/styleScheme').TypeSSInp;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $variant: import('../../types/TypeInp').TypeInpVariant;
            $blocked?: boolean;
            $_isFocused?: boolean;
            $_isActiveHover?: boolean;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
        IconContainer: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
            $iconPosition: import('../../types/TypeBase').TypeItemIconPosition;
            $useBtn: boolean;
            $disabled?: boolean;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
        Input: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<Omit<import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "$styles" | keyof import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement> | "$colors" | "$inputAutofill" | "$inputAutofillText"> & {
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $colors: import('../../general/colors').TypeColorScheme;
            $inputAutofill?: import('../../general/colors').Hex;
            $inputAutofillText?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>, "ref"> & {
            ref?: ((instance: HTMLInputElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLInputElement> | null | undefined;
        }, "$styles" | keyof import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement> | "$colors" | "$color" | "$colorVariant" | "$inputAutofill" | "$inputAutofillText"> & {
            $color?: import('../../general/colors').Hex;
            $colors: import('../../general/colors').TypeColorScheme;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
        } & {
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $colors: import('../../general/colors').TypeColorScheme;
            $inputAutofill?: import('../../general/colors').Hex;
            $inputAutofillText?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>, {
            $color?: import('../../general/colors').Hex;
            $colors: import('../../general/colors').TypeColorScheme;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
        } & {
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $colors: import('../../general/colors').TypeColorScheme;
            $inputAutofill?: import('../../general/colors').Hex;
            $inputAutofillText?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>>> & string;
    };
    SubmitTextField: {
        Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<Omit<import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$mr" | "$styles" | keyof import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant" | "$disabled" | "$_isFocused"> & {
            $color?: import('../../general/colors').Hex;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $disabled?: boolean;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                inp: import('../../general/styleScheme').TypeSSInp;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $variant: import('../../types/TypeInp').TypeInpVariant;
            $blocked?: boolean;
            $_isFocused?: boolean;
            $_isActiveHover?: boolean;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }, "$mr" | "$styles" | keyof import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant" | "$disabled" | "$_isFocused"> & {
            $color?: import('../../general/colors').Hex;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $disabled?: boolean;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                inp: import('../../general/styleScheme').TypeSSInp;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $variant: import('../../types/TypeInp').TypeInpVariant;
            $blocked?: boolean;
            $_isFocused?: boolean;
            $_isActiveHover?: boolean;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, {
            $color?: import('../../general/colors').Hex;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $disabled?: boolean;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                inp: import('../../general/styleScheme').TypeSSInp;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $variant: import('../../types/TypeInp').TypeInpVariant;
            $blocked?: boolean;
            $_isFocused?: boolean;
            $_isActiveHover?: boolean;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
        Input: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<import('styled-components').FastOmit<Omit<import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "$styles" | keyof import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement> | "$colors" | "$inputAutofill" | "$inputAutofillText"> & {
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $colors: import('../../general/colors').TypeColorScheme;
            $inputAutofill?: import('../../general/colors').Hex;
            $inputAutofillText?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>, "ref"> & {
            ref?: ((instance: HTMLInputElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLInputElement> | null | undefined;
        }, "$styles" | keyof import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement> | "$colors" | "$color" | "$colorVariant" | "$inputAutofill" | "$inputAutofillText"> & {
            $color?: import('../../general/colors').Hex;
            $colors: import('../../general/colors').TypeColorScheme;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
        } & {
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $colors: import('../../general/colors').TypeColorScheme;
            $inputAutofill?: import('../../general/colors').Hex;
            $inputAutofillText?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>, "$styles" | keyof import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement> | "$colors" | "$color" | "$colorVariant" | "$inputAutofill" | "$inputAutofillText"> & {
            $color?: import('../../general/colors').Hex;
            $colors: import('../../general/colors').TypeColorScheme;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
        } & {
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $colors: import('../../general/colors').TypeColorScheme;
            $inputAutofill?: import('../../general/colors').Hex;
            $inputAutofillText?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>, {
            $isLoading?: boolean;
        } & {
            $color?: import('../../general/colors').Hex;
            $colors: import('../../general/colors').TypeColorScheme;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
        } & {
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $colors: import('../../general/colors').TypeColorScheme;
            $inputAutofill?: import('../../general/colors').Hex;
            $inputAutofillText?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').InputHTMLAttributes<HTMLInputElement>>> & string;
        Loading: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
            $color?: import('../../general/colors').Hex;
            $isLoading?: boolean;
            $disabled?: boolean;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: TBaseTextField.Styles;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLSpanElement>>> & string;
        IconContainer: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
            $iconPosition: import('../../types/TypeBase').TypeItemIconPosition;
            $useBtn: boolean;
            $disabled?: boolean;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
    };
    BaseTextarea: {
        Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$mr" | "$styles" | keyof import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$disabled" | "$_isFocused"> & {
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                inp: import('../../general/styleScheme').TypeSSInp;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $colors: import('../../general/colors').TypeColorScheme;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $disabled?: boolean;
            $color?: import('../../general/colors').Hex;
            $blocked?: boolean;
            $_isActiveHover?: boolean;
            $_isFocused?: boolean;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }, {
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                inp: import('../../general/styleScheme').TypeSSInp;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $colors: import('../../general/colors').TypeColorScheme;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $disabled?: boolean;
            $color?: import('../../general/colors').Hex;
            $blocked?: boolean;
            $_isActiveHover?: boolean;
            $_isFocused?: boolean;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
        Textarea: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "$styles" | keyof import('../../../../node_modules/react').TextareaHTMLAttributes<HTMLTextAreaElement> | "$resize"> & {
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $resize?: boolean;
        } & import('../../../../node_modules/react').TextareaHTMLAttributes<HTMLTextAreaElement>, "ref"> & {
            ref?: ((instance: HTMLTextAreaElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLTextAreaElement> | null | undefined;
        }, {
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $resize?: boolean;
        } & import('../../../../node_modules/react').TextareaHTMLAttributes<HTMLTextAreaElement>>> & string;
    };
    BaseInputTextarea: {
        Textarea: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, {
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $resize?: boolean;
        } & import('../../../../node_modules/react').TextareaHTMLAttributes<HTMLTextAreaElement>>> & string;
    };
    RootTextarea: {
        Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                inp: import('../../general/styleScheme').TypeSSInp;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $colors: import('../../general/colors').TypeColorScheme;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $disabled?: boolean;
            $color?: import('../../general/colors').Hex;
            $blocked?: boolean;
            $_isActiveHover?: boolean;
            $_isFocused?: boolean;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
    };
    MessageBox: {
        Message: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
            $colors: import('../../general/colors').TypeColorScheme;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLSpanElement>>> & string;
    };
    WrapperInput: {
        Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $blocked?: boolean;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                mr: import('../../general/styleScheme').TypeSSMR;
                box: import('../../general/styleScheme').TypeSSBox;
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $positionLabel: import('../../types/TypeInp').TypePositionInpLabel;
            $boxGapVariant: import('../../types/TypeBox').TypeBoxGapVariant;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
        Label: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "$styles" | keyof import('../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement> | "$colors" | "$color"> & {
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $color?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement>, "ref"> & {
            ref?: ((instance: HTMLParagraphElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLParagraphElement> | null | undefined;
        }, {
            $required?: boolean;
        } & {
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $color?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement>>> & string;
    };
};
export declare namespace TypeInput {
    namespace BaseInput {
        type Main = Copy<TBaseInput.Main>;
        type Styles = Copy<TBaseInput.Styles>;
        type SInput = Copy<TBaseInput.SInput>;
    }
    namespace RootTextField {
        type Main = Copy<TRootTextField.Main>;
        type Styles = Copy<TRootTextField.Styles>;
        type SRoot = Copy<TRootTextField.SRoot>;
    }
    namespace BaseTextField {
        type Styles = Copy<TBaseTextField.Styles>;
        type Main = Copy<TBaseTextField.Main>;
        type SInput = Copy<TBaseTextField.SInput>;
        type SRoot = Copy<TBaseTextField.SRoot>;
    }
    namespace SimpleTextField {
        type Main = Copy<TSimpleTextField.Main>;
        type SIconContainer = Copy<TSimpleTextField.SIconContainer>;
        type SRoot = Copy<TSimpleTextField.SRoot>;
        type SInput = Copy<TSimpleTextField.SInput>;
    }
    namespace SubmitTextField {
        type Main = Copy<TSubmitTextField.Main>;
        type SInput = Copy<TSubmitTextField.SInput>;
        type SLoading = Copy<TSubmitTextField.SLoading>;
        type SRoot = Copy<TSubmitTextField.SRoot>;
        type SIconContainer = Copy<TSubmitTextField.SIconContainer>;
    }
    namespace BaseInputTextarea {
        type Main = Copy<TBaseInputArea.Main>;
        type Styles = Copy<TBaseInputArea.Styles>;
        type STextarea = Copy<TBaseInputArea.STextarea>;
    }
    namespace BaseRootTextarea {
        type Main = Copy<TRootTextarea.Main>;
        type Styles = Copy<TRootTextarea.Styles>;
        type SRoot = Copy<TRootTextarea.SRoot>;
    }
    namespace BaseTextarea {
        type Main = Copy<TBaseTextarea.Main>;
        type Styles = Copy<TBaseTextarea.Styles>;
        type SRoot = Copy<TBaseTextarea.SRoot>;
    }
    namespace WrapperInput {
        type Styles = Copy<TWrapperInput.Styles>;
        type Main = Copy<TWrapperInput.Main>;
        type SRoot = Copy<TWrapperInput.SRoot>;
        type SLabel = Copy<TWrapperInput.SLabel>;
    }
    namespace MessageBox {
        type Message = Copy<TMessageBox.Message>;
        type Main = Copy<TMessageBox.Main>;
        type SMessage = Copy<TMessageBox.SMessage>;
    }
}
