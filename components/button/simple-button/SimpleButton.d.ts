import { TypeItemIconPosition } from '../../../types/TypeBase';
import { default as React } from '../../../../../node_modules/react';
import { TypeBtnPosition } from '../../../types/TypeBtn';
import { TBaseButton } from '../base-button/BaseButton';

type SimpleButtonProps = {
    position?: TypeBtnPosition;
    icon?: React.ReactNode;
    iconPosition?: TypeItemIconPosition;
    iconContainerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentProps?: React.HTMLAttributes<HTMLDivElement>;
} & TBaseButton.Main;
type SIconContainerProps = {
    $iconPosition: TypeItemIconPosition;
} & React.HTMLAttributes<HTMLDivElement>;
type SContentContainerProps = {
    $position: TypeBtnPosition;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const SimpleButton: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    position?: TypeBtnPosition;
    icon?: React.ReactNode;
    iconPosition?: TypeItemIconPosition;
    iconContainerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentProps?: React.HTMLAttributes<HTMLDivElement>;
} & {
    mr?: import('../../../types/TypeBase').TypeMargin;
    sizeVariant?: import('../../../types/TypeBase').TypeVariantSize;
    colorVariant?: import('../../../types/TypeBase').TypeVariantColor;
    variant?: import('../../../types/TypeBtn').TypeVariantBtn;
    $colors?: import('../../../general/colors').TypeColorScheme;
    $styles?: {
        base: import('../../../general/styleScheme').TypeSSBase;
        btn: import('../../../general/styleScheme').TypeSSBtn;
        typography: import('../../../general/styleScheme').TypeSSTypography;
        mr: import('../../../general/styleScheme').TypeSSMR;
    };
    color?: import('../../../general/colors').Hex;
    blocked?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    _isActiveHover?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>>;
export declare const SSimpleButton: {
    Button: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "$mr" | "$styles" | keyof React.ButtonHTMLAttributes<HTMLButtonElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant"> & {
        $mr?: import('../../../types/TypeBase').TypeMargin;
        $color?: import('../../../general/colors').Hex;
        $colors: import('../../../general/colors').TypeColorScheme;
        $styles: {
            base: import('../../../general/styleScheme').TypeSSBase;
            btn: import('../../../general/styleScheme').TypeSSBtn;
            typography: import('../../../general/styleScheme').TypeSSTypography;
            mr: import('../../../general/styleScheme').TypeSSMR;
        };
        $sizeVariant: import('../../../types/TypeBase').TypeVariantSize;
        $colorVariant: import('../../../types/TypeBase').TypeVariantColor;
        $variant: import('../../../types/TypeBtn').TypeVariantBtn;
        $_isActiveHover: boolean;
        $blocked?: boolean;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement> | null | undefined;
    }, {
        $mr?: import('../../../types/TypeBase').TypeMargin;
        $color?: import('../../../general/colors').Hex;
        $colors: import('../../../general/colors').TypeColorScheme;
        $styles: {
            base: import('../../../general/styleScheme').TypeSSBase;
            btn: import('../../../general/styleScheme').TypeSSBtn;
            typography: import('../../../general/styleScheme').TypeSSTypography;
            mr: import('../../../general/styleScheme').TypeSSMR;
        };
        $sizeVariant: import('../../../types/TypeBase').TypeVariantSize;
        $colorVariant: import('../../../types/TypeBase').TypeVariantColor;
        $variant: import('../../../types/TypeBtn').TypeVariantBtn;
        $_isActiveHover: boolean;
        $blocked?: boolean;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>>> & string;
    IconContainer: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SIconContainerProps>> & string;
    ContentContainer: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SContentContainerProps>> & string;
};
export declare namespace TSimpleButton {
    type Main = SimpleButtonProps;
    type SButton = TBaseButton.SButton;
    type SIconContainer = SIconContainerProps;
    type SContentContainer = SContentContainerProps;
}
export {};
