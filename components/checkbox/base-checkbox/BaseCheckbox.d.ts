import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSBase, TypeSSCheckbox, TypeSSMR } from '../../../general/styleScheme';
import { TypeVariantColor, TypeMargin, TypeVariantSize } from '../../../types/TypeBase';
import { default as React } from '../../../../../node_modules/react';
import * as Checkbox from '@radix-ui/react-checkbox';
type TypeStyles = {
    base: TypeSSBase;
    checkbox: TypeSSCheckbox;
    mr: TypeSSMR;
};
type BaseCheckboxProps = {
    mr?: TypeMargin;
    colorVariant?: TypeVariantColor;
    sizeVariant?: TypeVariantSize;
    color?: Hex;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isActiveHover?: boolean;
    iconProps?: React.SVGProps<SVGSVGElement>;
    polylineProps?: React.SVGProps<SVGPolylineElement>;
    indicatorProps?: React.ComponentPropsWithRef<typeof Checkbox.Indicator>;
} & React.ComponentPropsWithRef<typeof Checkbox.Root>;
type SRootProps = {
    $color?: Hex;
    $mr?: TypeMargin;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TypeVariantColor;
    $sizeVariant: TypeVariantSize;
    $blocked?: boolean;
    $_isActiveHover?: boolean;
} & React.ComponentPropsWithRef<typeof Checkbox.Root>;
type SIconProps = {
    $colorVariant: TypeVariantColor;
    $colors: TypeColorScheme;
    $color?: Hex;
    $disabled?: boolean;
} & React.SVGProps<SVGSVGElement>;
export declare const BaseCheckbox: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<BaseCheckboxProps, "ref"> & React.RefAttributes<HTMLButtonElement>>>;
export declare const SBaseCheckbox: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Checkbox.CheckboxProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement> | null | undefined;
    }, SRootProps>> & string & Omit<React.ForwardRefExoticComponent<Checkbox.CheckboxProps & React.RefAttributes<HTMLButtonElement>>, keyof React.Component<any, {}, any>>;
    Icon: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.SVGProps<SVGSVGElement>, SIconProps>> & string;
    Indicator: React.ForwardRefExoticComponent<Checkbox.CheckboxIndicatorProps & React.RefAttributes<HTMLSpanElement>>;
};
export declare namespace TBaseCheckbox {
    type Styles = TypeStyles;
    type Main = BaseCheckboxProps;
    type SRoot = SRootProps;
    type SIndicator = React.ComponentPropsWithRef<typeof Checkbox.Indicator>;
    type SIcon = SIconProps;
}
export {};
