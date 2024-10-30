import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSBase, TypeSSBox, TypeSSMR, TypeSSSelect, TypeSSTypography } from '../../../general/styleScheme';
import { TypeVariantColor, TypeMargin, TypeVariantSize } from '../../../types/TypeBase';
import { TypeBtnPosition } from '../../../types/TypeBtn';
import { default as React } from '../../../../../node_modules/react';
import { TypeBoxPaddingVariant, TypeBoxShadowVariant } from '../../../types/TypeBox';
import { TBaseSelectComponent } from './BaseSelectComponent';
import { ArrowProps } from '../../../icons/Arrow.tsx';

import * as Select from '@radix-ui/react-select';
type TypeStyles = {
    base: TypeSSBase;
    select: TypeSSSelect;
    typography: TypeSSTypography;
    mr: TypeSSMR;
    box: TypeSSBox;
};
type BaseSelectContentProps = {
    children?: React.ReactNode;
    mr?: TypeMargin;
    width?: string;
    sizeVariant?: TypeVariantSize;
    colorVariant?: TypeVariantColor;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    color?: Hex;
    blocked?: boolean;
    positionTrigger?: TypeBtnPosition;
    maxHeight?: string;
    placeholder?: React.ReactNode;
    _isActiveHover?: boolean;
    triggerProps?: React.ComponentPropsWithRef<typeof Select.Trigger>;
    valueProps?: React.ComponentPropsWithRef<typeof Select.Value>;
    iconProps?: TBaseSelectComponent.SIcon;
    iconArrowProps?: ArrowProps;
    portalProps?: React.ComponentPropsWithRef<typeof Select.Portal>;
    contentProps?: React.ComponentPropsWithRef<typeof Select.Content>;
    viewportProps?: React.ComponentPropsWithRef<typeof Select.Viewport>;
} & React.ComponentPropsWithRef<typeof Select.Root>;
type STriggerProps = {
    $mr?: TypeMargin;
    $color?: Hex;
    $width?: string;
    $blocked?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $positionTrigger: TypeBtnPosition;
    $sizeVariant: TypeVariantSize;
    $colorVariant: TypeVariantColor;
    $_isActiveHover?: boolean;
} & React.ComponentPropsWithRef<typeof Select.Trigger>;
type SContentProps = {
    $color?: Hex;
    $width?: string;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TypeVariantColor;
    $boxShadowVariant: TypeBoxShadowVariant;
    $boxPaddingVariant: TypeBoxPaddingVariant;
    $_isActiveHover?: boolean;
} & React.ComponentPropsWithRef<typeof Select.Content>;
type SViewportProps = {
    $color?: Hex;
    $maxHeight?: string;
    $colors: TypeColorScheme;
    $colorVariant: TypeVariantColor;
    $_isActiveHover?: boolean;
} & React.ComponentPropsWithRef<typeof Select.Viewport>;
export declare const BaseSelectContent: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
    mr?: TypeMargin;
    width?: string;
    sizeVariant?: TypeVariantSize;
    colorVariant?: TypeVariantColor;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    color?: Hex;
    blocked?: boolean;
    positionTrigger?: TypeBtnPosition;
    maxHeight?: string;
    placeholder?: React.ReactNode;
    _isActiveHover?: boolean;
    triggerProps?: React.ComponentPropsWithRef<typeof Select.Trigger>;
    valueProps?: React.ComponentPropsWithRef<typeof Select.Value>;
    iconProps?: TBaseSelectComponent.SIcon;
    iconArrowProps?: ArrowProps;
    portalProps?: React.ComponentPropsWithRef<typeof Select.Portal>;
    contentProps?: React.ComponentPropsWithRef<typeof Select.Content>;
    viewportProps?: React.ComponentPropsWithRef<typeof Select.Viewport>;
} & Select.SelectProps & React.RefAttributes<HTMLButtonElement>>>;
export declare const SBaseSelectContent: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$mr" | "$styles" | keyof React.HTMLAttributes<HTMLDivElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant" | "$disabled" | "$_isFocused"> & {
        $color?: Hex;
        $mr?: TypeMargin;
        $disabled?: boolean;
        $colors: TypeColorScheme;
        $styles: {
            base: TypeSSBase;
            inp: import('../../../general/styleScheme').TypeSSInp;
            typography: TypeSSTypography;
            mr: TypeSSMR;
        };
        $colorVariant: TypeVariantColor;
        $sizeVariant: TypeVariantSize;
        $variant: import('../../../types/TypeInp').TypeInpVariant;
        $blocked?: boolean;
        $_isFocused?: boolean;
        $_isActiveHover?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "$mr" | "$styles" | keyof React.HTMLAttributes<HTMLDivElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant" | "$disabled" | "$_isFocused"> & {
        $color?: Hex;
        $mr?: TypeMargin;
        $disabled?: boolean;
        $colors: TypeColorScheme;
        $styles: {
            base: TypeSSBase;
            inp: import('../../../general/styleScheme').TypeSSInp;
            typography: TypeSSTypography;
            mr: TypeSSMR;
        };
        $colorVariant: TypeVariantColor;
        $sizeVariant: TypeVariantSize;
        $variant: import('../../../types/TypeInp').TypeInpVariant;
        $blocked?: boolean;
        $_isFocused?: boolean;
        $_isActiveHover?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>, {
        $color?: Hex;
        $mr?: TypeMargin;
        $disabled?: boolean;
        $colors: TypeColorScheme;
        $styles: {
            base: TypeSSBase;
            inp: import('../../../general/styleScheme').TypeSSInp;
            typography: TypeSSTypography;
            mr: TypeSSMR;
        };
        $colorVariant: TypeVariantColor;
        $sizeVariant: TypeVariantSize;
        $variant: import('../../../types/TypeInp').TypeInpVariant;
        $blocked?: boolean;
        $_isFocused?: boolean;
        $_isActiveHover?: boolean;
    } & React.HTMLAttributes<HTMLDivElement>>> & string;
    Value: React.ForwardRefExoticComponent<Select.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
    Icon: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<Omit<Select.SelectIconProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement> | null | undefined;
    }, never>> & string & Omit<React.ForwardRefExoticComponent<Select.SelectIconProps & React.RefAttributes<HTMLSpanElement>>, keyof React.Component<any, {}, any>>;
    Portal: React.FC<Select.SelectPortalProps>;
    Trigger: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Select.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement> | null | undefined;
    }, STriggerProps>> & string & Omit<React.ForwardRefExoticComponent<Select.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>>, keyof React.Component<any, {}, any>>;
    Viewport: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SViewportProps>> & string;
    Content: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Select.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, SContentProps>> & string & Omit<React.ForwardRefExoticComponent<Select.SelectContentProps & React.RefAttributes<HTMLDivElement>>, keyof React.Component<any, {}, any>>;
};
export declare namespace TBaseSelectContent {
    type Styles = TypeStyles;
    type Main = BaseSelectContentProps;
    type SRoot = React.ComponentPropsWithRef<typeof Select.Root>;
    type SValue = React.ComponentPropsWithRef<typeof Select.Value>;
    type SIcon = TBaseSelectComponent.SIcon;
    type SPortal = React.ComponentPropsWithRef<typeof Select.Portal>;
    type SViewport = SViewportProps;
    type STrigger = STriggerProps;
    type SContent = SContentProps;
}
export {};
