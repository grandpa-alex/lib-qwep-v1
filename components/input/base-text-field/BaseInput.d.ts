import { TypeSSTypography } from '../../../general/styleScheme';
import { default as React } from '../../../../../node_modules/react';
import { Hex, TypeColorScheme } from '../../../general/colors.ts';

type TypeStyles = {
    typography: TypeSSTypography;
};
type BaseInputProps = {
    inputAutofill?: Hex;
    inputAutofillText?: Hex;
    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.InputHTMLAttributes<HTMLInputElement>;
type SInputProps = {
    $styles: TypeStyles;
    $colors: TypeColorScheme;
    $inputAutofill?: Hex;
    $inputAutofillText?: Hex;
} & React.InputHTMLAttributes<HTMLInputElement>;
export declare const BaseInput: React.FC<BaseInputProps>;
export declare const SBaseInput: {
    Input: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, SInputProps>> & string;
};
export declare namespace TBaseInput {
    type Main = BaseInputProps;
    type Styles = TypeStyles;
    type SInput = SInputProps;
}
export {};
