import { TypeSSTypography } from '../../../general/styleScheme';
import { default as React } from '../../../../../node_modules/react';

type TypeStyles = {
    typography: TypeSSTypography;
};
type BaseInputAreaProps = {
    $styles?: TypeStyles;
    resize?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
type STextareaProps = {
    $styles: TypeStyles;
    $resize?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export declare const BaseInputArea: React.FC<BaseInputAreaProps>;
export declare const SBaseInputArea: {
    Textarea: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, STextareaProps>> & string;
};
export declare namespace TBaseInputArea {
    type Main = BaseInputAreaProps;
    type Styles = TypeStyles;
    type STextarea = STextareaProps;
}
export {};
