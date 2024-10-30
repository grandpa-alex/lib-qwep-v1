import { default as React } from '../../../../../node_modules/react';
import { TBaseButton } from '../base-button/BaseButton';
import { TypeSSBtn } from '../../../general/styleScheme';

type IconButtonProps = {
    borderRadius?: 'default' | 'round';
} & TBaseButton.Main;
type SButtonProps = {
    $borderRadius: 'default' | 'round';
} & TBaseButton.SButton;
export declare const IconButton: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    borderRadius?: "default" | "round";
} & {
    mr?: import('../../../types/TypeBase').TypeMargin;
    sizeVariant?: import('../../../types/TypeBase').TypeVariantSize;
    colorVariant?: import('../../../types/TypeBase').TypeVariantColor;
    variant?: import('../../../types/TypeBtn').TypeVariantBtn;
    $colors?: import('../../../general/colors').TypeColorScheme;
    $styles?: {
        base: import('../../../general/styleScheme').TypeSSBase;
        btn: TypeSSBtn;
        typography: import('../../../general/styleScheme').TypeSSTypography;
        mr: import('../../../general/styleScheme').TypeSSMR;
    };
    color?: import('../../../general/colors').Hex;
    blocked?: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    _isActiveHover?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.RefAttributes<HTMLButtonElement>>>;
export declare const SIconButton: {
    Button: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "$mr" | "$styles" | keyof React.ButtonHTMLAttributes<HTMLButtonElement> | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "$variant"> & {
        $mr?: import('../../../types/TypeBase').TypeMargin;
        $color?: import('../../../general/colors').Hex;
        $colors: import('../../../general/colors').TypeColorScheme;
        $styles: {
            base: import('../../../general/styleScheme').TypeSSBase;
            btn: TypeSSBtn;
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
    }, SButtonProps>> & string;
};
export declare namespace TIconButton {
    type Main = IconButtonProps;
    type SButton = SButtonProps;
}
export {};
