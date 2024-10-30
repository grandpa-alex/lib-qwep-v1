import { Copy } from '../../types/CopyType';
import { BaseRadioGroup, TBaseRadioGroup } from './base-rado/BaseRadioGroup';
import { BaseRadioItem, TBaseRadioItem } from './base-rado/BaseRadioItem';

export { BaseRadioItem, BaseRadioGroup };
export declare const RadioStyledComponent: {
    BaseRadioItem: {
        Item: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-radio-group').RadioGroupItemProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }, {
            $color?: import('../../general/colors').Hex;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                mr: import('../../general/styleScheme').TypeSSMR;
                radio: import('../../general/styleScheme').TypeSSRadio;
            };
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $blocked?: boolean;
            $_isActiveHover?: boolean;
        } & Omit<import('@radix-ui/react-radio-group').RadioGroupItemProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-radio-group').RadioGroupItemProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
        Indicator: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-radio-group').RadioGroupIndicatorProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }, {
            $styles: {
                mr: import('../../general/styleScheme').TypeSSMR;
                radio: import('../../general/styleScheme').TypeSSRadio;
            };
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
        } & Omit<import('@radix-ui/react-radio-group').RadioGroupIndicatorProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-radio-group').RadioGroupIndicatorProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
    };
    BaseRadioGroup: {
        Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $styles: {
                mr: import('../../general/styleScheme').TypeSSMR;
                box: import('../../general/styleScheme').TypeSSBox;
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $blocked?: boolean;
            $boxGapVariantLabel: import('../../types/TypeBox').TypeBoxGapVariant;
        } & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>> & string;
        Group: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-radio-group').RadioGroupProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }, {
            $styles: {
                mr: import('../../general/styleScheme').TypeSSMR;
                box: import('../../general/styleScheme').TypeSSBox;
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $orientation: import('../../types/TypeBase').TypeOrientationContent;
            $boxGapVariant: import('../../types/TypeBox').TypeBoxGapVariant;
        } & Omit<import('@radix-ui/react-radio-group').RadioGroupProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-radio-group').RadioGroupProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
        Label: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, {
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $color?: import('../../general/colors').Hex;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement>>> & string;
    };
};
export declare namespace TypeRadio {
    namespace BaseRadioItem {
        type Main = Copy<TBaseRadioItem.Main>;
        type Styles = Copy<TBaseRadioItem.Styles>;
        type SItem = Copy<TBaseRadioItem.SItem>;
        type SIndicator = Copy<TBaseRadioItem.SIndicator>;
    }
    namespace BaseRadioGroup {
        type Main = Copy<TBaseRadioGroup.Main>;
        type SRoot = Copy<TBaseRadioGroup.SRoot>;
        type Styles = Copy<TBaseRadioGroup.Styles>;
        type SGroup = Copy<TBaseRadioGroup.SGroup>;
        type SLabel = Copy<TBaseRadioGroup.SLabel>;
    }
}
