import { TypeVariantColor, TypeVariantSize } from '../../../types/TypeBase';
import { default as React } from '../../../../../node_modules/react';
import { TypeVariantBtn } from '../../../types/TypeBtn';
import { TSimpleButton } from '../simple-button/SimpleButton';
import { TBaseButton } from '../base-button/BaseButton';
import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSBtn } from '../../../general/styleScheme';

type SubmitButtonProps = {
    isLoading: boolean;
    loadingProps?: React.HTMLAttributes<HTMLSpanElement>;
} & TSimpleButton.Main;
type SButtonProps = {
    $isLoading?: boolean;
} & TBaseButton.SButton;
type SLoadingProps = {
    $color?: Hex;
    $isLoading?: boolean;
    $disabled?: boolean;
    $colors: TypeColorScheme;
    $styles: TBaseButton.Styles;
    $colorVariant: TypeVariantColor;
    $sizeVariant: TypeVariantSize;
    $variant: TypeVariantBtn;
} & React.HTMLAttributes<HTMLSpanElement>;
export declare const SubmitButton: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    isLoading: boolean;
    loadingProps?: React.HTMLAttributes<HTMLSpanElement>;
} & {
    position?: import('../../../types/TypeBtn').TypeBtnPosition;
    icon?: React.ReactNode;
    iconPosition?: import('../../../types/TypeBase').TypeItemIconPosition;
    iconContainerProps?: React.HTMLAttributes<HTMLDivElement>;
    contentProps?: React.HTMLAttributes<HTMLDivElement>;
} & {
    mr?: import('../../../types/TypeBase').TypeMargin;
    sizeVariant?: TypeVariantSize;
    colorVariant?: TypeVariantColor;
    variant?: TypeVariantBtn;
    $colors?: TypeColorScheme;
    $styles?: {
        base: import('../../../general/styleScheme').TypeSSBase;
        btn: TypeSSBtn;
        typography: import('../../../general/styleScheme').TypeSSTypography;
        mr: import('../../../general/styleScheme').TypeSSMR;
    };
    color?: Hex;
    blocked?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    _isActiveHover?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>>;
export declare const SSubmitButton: {
    Button: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "$mr" | "$styles" | keyof React.ButtonHTMLAttributes<HTMLButtonElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant"> & {
        $mr?: import('../../../types/TypeBase').TypeMargin;
        $color?: Hex;
        $colors: TypeColorScheme;
        $styles: {
            base: import('../../../general/styleScheme').TypeSSBase;
            btn: TypeSSBtn;
            typography: import('../../../general/styleScheme').TypeSSTypography;
            mr: import('../../../general/styleScheme').TypeSSMR;
        };
        $sizeVariant: TypeVariantSize;
        $colorVariant: TypeVariantColor;
        $variant: TypeVariantBtn;
        $_isActiveHover: boolean;
        $blocked?: boolean;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement> | null | undefined;
    }, "$mr" | "$styles" | keyof React.ButtonHTMLAttributes<HTMLButtonElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant"> & {
        $mr?: import('../../../types/TypeBase').TypeMargin;
        $color?: Hex;
        $colors: TypeColorScheme;
        $styles: {
            base: import('../../../general/styleScheme').TypeSSBase;
            btn: TypeSSBtn;
            typography: import('../../../general/styleScheme').TypeSSTypography;
            mr: import('../../../general/styleScheme').TypeSSMR;
        };
        $sizeVariant: TypeVariantSize;
        $colorVariant: TypeVariantColor;
        $variant: TypeVariantBtn;
        $_isActiveHover: boolean;
        $blocked?: boolean;
    } & React.ButtonHTMLAttributes<HTMLButtonElement>, SButtonProps>> & string;
    Loading: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, SLoadingProps>> & string;
};
export declare namespace TSubmitButton {
    type Main = SubmitButtonProps;
    type SButton = SButtonProps;
    type SLoading = SLoadingProps;
    type SIconContainer = TSimpleButton.SIconContainer;
    type SContentContainer = TSimpleButton.SContentContainer;
}
export {};
