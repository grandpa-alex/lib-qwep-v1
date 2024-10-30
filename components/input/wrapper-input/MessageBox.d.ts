import { default as React } from '../../../../../node_modules/react';
import { TypeColorScheme } from '../../../general/colors';
import { TypeVariantColor } from '../../../types/TypeBase';

type TypeMessage = {
    text?: React.ReactNode;
    colorVariant?: TypeVariantColor;
};
type MessageBoxProps = {
    $colors?: TypeColorScheme;
    message?: TypeMessage;
} & React.HTMLAttributes<HTMLSpanElement>;
type SMessageProps = {
    $colors: TypeColorScheme;
    $colorVariant: TypeVariantColor;
} & React.HTMLAttributes<HTMLSpanElement>;
export declare const MessageBox: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    $colors?: TypeColorScheme;
    message?: TypeMessage;
} & React.HTMLAttributes<HTMLSpanElement> & React.RefAttributes<HTMLSpanElement>>>;
export declare const SMessageBox: {
    Message: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, SMessageProps>> & string;
};
export declare namespace TMessageBox {
    type Message = TypeMessage;
    type Main = MessageBoxProps;
    type SMessage = SMessageProps;
}
export {};
