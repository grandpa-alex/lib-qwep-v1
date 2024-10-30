import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSMR, TypeSSRadio } from '../../../general/styleScheme';
import { default as React } from '../../../../../node_modules/react';
import { TypeVariantColor, TypeMargin, TypeVariantSize } from '../../../types/TypeBase';
import * as RadioGroup from '@radix-ui/react-radio-group';
type TypeStyles = {
    mr: TypeSSMR;
    radio: TypeSSRadio;
};
type BaseRadioItemProps = {
    mr?: TypeMargin;
    colorVariant?: TypeVariantColor;
    sizeVariant?: TypeVariantSize;
    color?: Hex;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isActiveHover?: boolean;
    indicatorProps?: React.ComponentPropsWithRef<typeof RadioGroup.Indicator>;
} & React.ComponentPropsWithRef<typeof RadioGroup.Item>;
type SItemProps = {
    $color?: Hex;
    $mr?: TypeMargin;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TypeVariantColor;
    $sizeVariant: TypeVariantSize;
    $blocked?: boolean;
    $_isActiveHover?: boolean;
} & React.ComponentPropsWithRef<typeof RadioGroup.Item>;
type SIndicatorProps = {
    $styles: TypeStyles;
    $sizeVariant: TypeVariantSize;
} & React.ComponentPropsWithRef<typeof RadioGroup.Indicator>;
export declare const BaseRadioItem: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<BaseRadioItemProps, "ref"> & React.RefAttributes<HTMLButtonElement>>>;
export declare const SBaseRadioItem: {
    Item: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<RadioGroup.RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement> | null | undefined;
    }, SItemProps>> & string & Omit<React.ForwardRefExoticComponent<RadioGroup.RadioGroupItemProps & React.RefAttributes<HTMLButtonElement>>, keyof React.Component<any, {}, any>>;
    Indicator: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<RadioGroup.RadioGroupIndicatorProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement> | null | undefined;
    }, SIndicatorProps>> & string & Omit<React.ForwardRefExoticComponent<RadioGroup.RadioGroupIndicatorProps & React.RefAttributes<HTMLSpanElement>>, keyof React.Component<any, {}, any>>;
};
export declare namespace TBaseRadioItem {
    type Styles = TypeStyles;
    type Main = BaseRadioItemProps;
    type SItem = SItemProps;
    type SIndicator = SIndicatorProps;
}
export {};
