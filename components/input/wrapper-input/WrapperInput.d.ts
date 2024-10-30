import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSBox, TypeSSMR, TypeSSTypography } from '../../../general/styleScheme';
import { default as React } from '../../../../../node_modules/react';
import { TypeMargin } from '../../../types/TypeBase';
import { TypeBoxGapVariant } from '../../../types/TypeBox';
import { TypePositionInpLabel } from '../../../types/TypeInp';
import { TMessageBox } from './MessageBox';
import { TBaseText } from '../../typography/base/BaseText.tsx';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
    typography: TypeSSTypography;
};
type WrapperInputProps = {
    id?: string;
    label?: string;
    customLabel?: React.ReactNode;
    required?: boolean;
    positionLabel?: TypePositionInpLabel;
    mr?: TypeMargin;
    boxGapVariant?: TypeBoxGapVariant;
    message?: TMessageBox.Message;
    labelColor?: Hex;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    messageProps?: React.HTMLAttributes<HTMLSpanElement>;
    labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
} & React.HTMLAttributes<HTMLDivElement>;
type SRootProps = {
    $mr?: TypeMargin;
    $blocked?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $positionLabel: TypePositionInpLabel;
    $boxGapVariant: TypeBoxGapVariant;
} & React.HTMLAttributes<HTMLDivElement>;
type SLabelProps = {
    $required?: boolean;
} & TBaseText.SText;
export declare const WrapperInput: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    id?: string;
    label?: string;
    customLabel?: React.ReactNode;
    required?: boolean;
    positionLabel?: TypePositionInpLabel;
    mr?: TypeMargin;
    boxGapVariant?: TypeBoxGapVariant;
    message?: TMessageBox.Message;
    labelColor?: Hex;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    messageProps?: React.HTMLAttributes<HTMLSpanElement>;
    labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>>;
export declare const SWrapperInput: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SRootProps>> & string;
    Label: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, "$styles" | keyof React.HTMLAttributes<HTMLParagraphElement> | "$colors" | "$color"> & {
        $colors: TypeColorScheme;
        $styles: {
            typography: TypeSSTypography;
        };
        $color?: Hex;
    } & React.HTMLAttributes<HTMLParagraphElement>, "ref"> & {
        ref?: ((instance: HTMLParagraphElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLParagraphElement> | null | undefined;
    }, SLabelProps>> & string;
};
export declare namespace TWrapperInput {
    type Styles = TypeStyles;
    type Main = WrapperInputProps;
    type SRoot = SRootProps;
    type SLabel = SLabelProps;
}
export {};
