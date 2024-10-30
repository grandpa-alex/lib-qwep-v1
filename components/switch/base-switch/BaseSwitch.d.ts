import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSMR, TypeSSSwitch } from '../../../general/styleScheme';
import { TypeVariantColor, TypeMargin, TypeVariantSize } from '../../../types/TypeBase';
import { default as React } from '../../../../../node_modules/react';
import * as Switch from '@radix-ui/react-switch';
type TypeStyles = {
    switch: TypeSSSwitch;
    mr: TypeSSMR;
};
type BaseSwitchProps = {
    mr?: TypeMargin;
    colorVariant?: TypeVariantColor;
    sizeVariant?: TypeVariantSize;
    color?: Hex;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isActiveHover?: boolean;
    thumbProps?: React.ComponentPropsWithRef<typeof Switch.Thumb>;
} & React.ComponentPropsWithRef<typeof Switch.Root>;
export type SRootProps = {
    $color?: Hex;
    $mr?: TypeMargin;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TypeVariantColor;
    $sizeVariant: TypeVariantSize;
    $blocked?: boolean;
    $_isActiveHover?: boolean;
} & React.ComponentPropsWithRef<typeof Switch.Root>;
export type SThumbProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $sizeVariant: TypeVariantSize;
} & React.ComponentPropsWithoutRef<typeof Switch.Thumb>;
export declare const BaseSwitch: React.FC<BaseSwitchProps>;
export declare const SBaseSwitch: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Switch.SwitchProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement> | null | undefined;
    }, SRootProps>> & string & Omit<React.ForwardRefExoticComponent<Switch.SwitchProps & React.RefAttributes<HTMLButtonElement>>, keyof React.Component<any, {}, any>>;
    Thumb: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Switch.SwitchThumbProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement> | null | undefined;
    }, SThumbProps>> & string & Omit<React.ForwardRefExoticComponent<Switch.SwitchThumbProps & React.RefAttributes<HTMLSpanElement>>, keyof React.Component<any, {}, any>>;
};
export declare namespace TBaseSwitch {
    type Main = BaseSwitchProps;
    type Styles = TypeStyles;
    type SRoot = SRootProps;
    type SThumb = SThumbProps;
}
export {};
