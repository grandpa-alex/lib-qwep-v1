import { BaseSelectContent, TBaseSelectContent } from './base-select/BaseSelectContent';
import { BaseSelectItem, TBaseSelectItem } from './base-select/BaseSelectItem';
import { BaseSelectGroup, TBaseSelectGroup } from './base-select/BaseSelectGroup';
import { TBaseSelectComponent } from './base-select/BaseSelectComponent';
import { Copy } from '../../types/CopyType';

export { BaseSelectItem, BaseSelectGroup, BaseSelectContent };
export declare const SelectStyledComponent: {
    BaseSelectComponent: {
        Icon: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<Omit<import('@radix-ui/react-select').SelectIconProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }, never>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-select').SelectIconProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
        Item: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<Omit<import('@radix-ui/react-select').SelectItemProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }, never>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-select').SelectItemProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
    };
    BaseSelectItem: {
        Item: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<Omit<import('@radix-ui/react-select').SelectItemProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }, never>, {
            indicatorProps?: React.ComponentPropsWithRef<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-select').SelectItemIndicatorProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>>>;
            iconProps?: import('../../icons/BaseCheck').BaseCheckProps;
            itemTextProps?: React.ComponentPropsWithRef<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-select').SelectItemTextProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>>>;
        } & Omit<import('@radix-ui/react-select').SelectItemProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }>> & string;
        Indicator: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-select').SelectItemIndicatorProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }, Omit<import('@radix-ui/react-select').SelectItemIndicatorProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-select').SelectItemIndicatorProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
        ItemText: import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-select').SelectItemTextProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>>;
    };
    BaseSelectGroup: {
        Label: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
        Group: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-select').SelectGroupProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }, Omit<import('@radix-ui/react-select').SelectGroupProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-select').SelectGroupProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
    };
    BaseSelectContent: {
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
        Value: import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-select').SelectValueProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>>;
        Icon: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<Omit<import('@radix-ui/react-select').SelectIconProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }, never>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-select').SelectIconProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
        Portal: import('../../../../node_modules/react').FC<import('@radix-ui/react-select').SelectPortalProps>;
        Trigger: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-select').SelectTriggerProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }, {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $color?: import('../../general/colors').Hex;
            $width?: string;
            $blocked?: boolean;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                select: import('../../general/styleScheme').TypeSSSelect;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
                box: import('../../general/styleScheme').TypeSSBox;
            };
            $positionTrigger: import('../../types/TypeBtn').TypeBtnPosition;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $_isActiveHover?: boolean;
        } & Omit<import('@radix-ui/react-select').SelectTriggerProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-select').SelectTriggerProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
        Viewport: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
            $color?: import('../../general/colors').Hex;
            $maxHeight?: string;
            $colors: import('../../general/colors').TypeColorScheme;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $_isActiveHover?: boolean;
        } & Omit<import('@radix-ui/react-select').SelectViewportProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }>> & string;
        Content: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-select').SelectContentProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }, {
            $color?: import('../../general/colors').Hex;
            $width?: string;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                select: import('../../general/styleScheme').TypeSSSelect;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
                box: import('../../general/styleScheme').TypeSSBox;
            };
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $boxShadowVariant: import('../../types/TypeBox').TypeBoxShadowVariant;
            $boxPaddingVariant: import('../../types/TypeBox').TypeBoxPaddingVariant;
            $_isActiveHover?: boolean;
        } & Omit<import('@radix-ui/react-select').SelectContentProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-select').SelectContentProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
    };
};
export declare namespace TypeSelect {
    namespace BaseSelectComponent {
        type SIcon = Copy<TBaseSelectComponent.SIcon>;
        type SItem = Copy<TBaseSelectComponent.SItem>;
    }
    namespace BaseSelectGroup {
        type Main = Copy<TBaseSelectGroup.Main>;
        type SGroup = Copy<TBaseSelectGroup.SGroup>;
        type SLabel = Copy<TBaseSelectGroup.SLabel>;
    }
    namespace BaseSelectItem {
        type Main = Copy<TBaseSelectItem.Main>;
        type SIndicator = Copy<TBaseSelectItem.SIndicator>;
        type SItemText = Copy<TBaseSelectItem.SItemText>;
    }
    namespace BaseSelectContent {
        type Main = Copy<TBaseSelectContent.Main>;
        type Styles = Copy<TBaseSelectContent.Styles>;
        type SRoot = Copy<TBaseSelectContent.SRoot>;
        type SValue = Copy<TBaseSelectContent.SValue>;
        type SIcon = Copy<TBaseSelectContent.SIcon>;
        type SPortal = Copy<TBaseSelectContent.SPortal>;
        type SContent = Copy<TBaseSelectContent.SContent>;
        type STrigger = Copy<TBaseSelectContent.STrigger>;
        type SViewport = Copy<TBaseSelectContent.SViewport>;
    }
}
