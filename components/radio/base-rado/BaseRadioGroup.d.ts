import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSBox, TypeSSMR, TypeSSTypography } from '../../../general/styleScheme';
import { default as React } from '../../../../../node_modules/react';
import { TypeMargin, TypeOrientationContent } from '../../../types/TypeBase';
import { TypeBoxGapVariant } from '../../../types/TypeBox';
import { TMessageBox } from '../../input/wrapper-input/MessageBox';
import { TBaseText } from '../../typography/base/BaseText';
import * as RadioGroup from '@radix-ui/react-radio-group';
type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
    typography: TypeSSTypography;
};
type BaseRadioGroupProps = {
    mr?: TypeMargin;
    orientation?: TypeOrientationContent;
    label?: string;
    labelColor?: Hex;
    boxGapVariant?: TypeBoxGapVariant;
    message?: TMessageBox.Message;
    boxGapVariantLabel?: TypeBoxGapVariant;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    rootProps?: React.RefAttributes<HTMLDivElement>;
    labelProps?: React.HTMLAttributes<HTMLElement>;
    messageProps?: React.HTMLAttributes<HTMLSpanElement>;
} & React.ComponentPropsWithRef<typeof RadioGroup.Root>;
type SRootProps = {
    $mr?: TypeMargin;
    $styles: TypeStyles;
    $blocked?: boolean;
    $boxGapVariantLabel: TypeBoxGapVariant;
} & React.RefAttributes<HTMLDivElement>;
type SGroupProps = {
    $styles: TypeStyles;
    $orientation: TypeOrientationContent;
    $boxGapVariant: TypeBoxGapVariant;
} & React.ComponentPropsWithRef<typeof RadioGroup.Root>;
export declare const BaseRadioGroup: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<BaseRadioGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>>;
export declare const SBaseRadioGroup: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SRootProps>> & string;
    Group: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<RadioGroup.RadioGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, SGroupProps>> & string & Omit<React.ForwardRefExoticComponent<RadioGroup.RadioGroupProps & React.RefAttributes<HTMLDivElement>>, keyof React.Component<any, {}, any>>;
    Label: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {
        $colors: TypeColorScheme;
        $styles: {
            typography: TypeSSTypography;
        };
        $color?: Hex;
    } & React.HTMLAttributes<HTMLParagraphElement>>> & string;
};
export declare namespace TBaseRadioGroup {
    type Styles = TypeStyles;
    type Main = BaseRadioGroupProps;
    type SRoot = SRootProps;
    type SLabel = TBaseText.SText;
    type SGroup = SGroupProps;
}
export {};
