import { Copy } from '../../types/CopyType';
import { BaseButton, TBaseButton } from './base-button/BaseButton';
import { IconButton, TIconButton } from './icon-button/IconButton';
import { SimpleButton, TSimpleButton } from './simple-button/SimpleButton';
import { SubmitButton, TSubmitButton } from './submit-button/SubmitButton';

export { BaseButton, SimpleButton, SubmitButton, IconButton };
export declare const ButtonStyledComponent: {
    BaseButton: {
        Button: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $color?: import('../../general/colors').Hex;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                btn: import('../../general/styleScheme').TypeSSBtn;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $variant: import('../../types/TypeBtn').TypeVariantBtn;
            $_isActiveHover: boolean;
            $blocked?: boolean;
        } & import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>>> & string;
    };
    SimpleButton: {
        Button: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "$mr" | "$styles" | keyof import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant"> & {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $color?: import('../../general/colors').Hex;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                btn: import('../../general/styleScheme').TypeSSBtn;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $variant: import('../../types/TypeBtn').TypeVariantBtn;
            $_isActiveHover: boolean;
            $blocked?: boolean;
        } & import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }, {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $color?: import('../../general/colors').Hex;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                btn: import('../../general/styleScheme').TypeSSBtn;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $variant: import('../../types/TypeBtn').TypeVariantBtn;
            $_isActiveHover: boolean;
            $blocked?: boolean;
        } & import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>>> & string;
        IconContainer: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
            $iconPosition: import('../../types/TypeBase').TypeItemIconPosition;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
        ContentContainer: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
            $position: import('../../types/TypeBtn').TypeBtnPosition;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
    };
    SubmitButton: {
        Button: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<Omit<import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "$mr" | "$styles" | keyof import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant"> & {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $color?: import('../../general/colors').Hex;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                btn: import('../../general/styleScheme').TypeSSBtn;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $variant: import('../../types/TypeBtn').TypeVariantBtn;
            $_isActiveHover: boolean;
            $blocked?: boolean;
        } & import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }, "$mr" | "$styles" | keyof import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant"> & {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $color?: import('../../general/colors').Hex;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                btn: import('../../general/styleScheme').TypeSSBtn;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $variant: import('../../types/TypeBtn').TypeVariantBtn;
            $_isActiveHover: boolean;
            $blocked?: boolean;
        } & import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, {
            $isLoading?: boolean;
        } & {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $color?: import('../../general/colors').Hex;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                btn: import('../../general/styleScheme').TypeSSBtn;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $variant: import('../../types/TypeBtn').TypeVariantBtn;
            $_isActiveHover: boolean;
            $blocked?: boolean;
        } & import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>>> & string;
        Loading: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, {
            $color?: import('../../general/colors').Hex;
            $isLoading?: boolean;
            $disabled?: boolean;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: TBaseButton.Styles;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $variant: import('../../types/TypeBtn').TypeVariantBtn;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLSpanElement>>> & string;
    };
    IconButton: {
        Button: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "$mr" | "$styles" | keyof import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant"> & {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $color?: import('../../general/colors').Hex;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                btn: import('../../general/styleScheme').TypeSSBtn;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $variant: import('../../types/TypeBtn').TypeVariantBtn;
            $_isActiveHover: boolean;
            $blocked?: boolean;
        } & import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }, {
            $borderRadius: "default" | "round";
        } & {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $color?: import('../../general/colors').Hex;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                btn: import('../../general/styleScheme').TypeSSBtn;
                typography: import('../../general/styleScheme').TypeSSTypography;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $variant: import('../../types/TypeBtn').TypeVariantBtn;
            $_isActiveHover: boolean;
            $blocked?: boolean;
        } & import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>>> & string;
    };
};
export declare namespace TypeButton {
    namespace BaseButton {
        type Main = Copy<TBaseButton.Main>;
        type Styles = Copy<TBaseButton.Styles>;
        type SButton = Copy<TBaseButton.SButton>;
    }
    namespace SimpleButton {
        type Main = Copy<TSimpleButton.Main>;
        type SButton = Copy<TSimpleButton.SButton>;
        type SContentContainer = Copy<TSimpleButton.SContentContainer>;
        type SIconContainer = Copy<TSimpleButton.SIconContainer>;
    }
    namespace SubmitButton {
        type Main = Copy<TSubmitButton.Main>;
        type SButton = Copy<TSubmitButton.SButton>;
        type SLoading = Copy<TSubmitButton.SLoading>;
        type SContentContainer = Copy<TSubmitButton.SContentContainer>;
        type SIconContainer = Copy<TSubmitButton.SIconContainer>;
    }
    namespace IconButton {
        type Main = Copy<TIconButton.Main>;
        type SButton = Copy<TIconButton.SButton>;
    }
}
