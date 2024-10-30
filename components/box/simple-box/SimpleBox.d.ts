import { TypeBoxRadiusVariant, TypeBoxShadowVariant } from '../../../types/TypeBox';
import { default as React } from '../../../../../node_modules/react';
import { Hex, TypeColorScheme } from '../../../general/colors';
import { TBaseBox } from '../base-box/BaseBox';

type SimpleBoxProps = {
    bg?: Hex;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxRadiusVariant?: TypeBoxRadiusVariant;
    $colors?: TypeColorScheme;
} & TBaseBox.Main;
type SBoxProps = {
    $colors: TypeColorScheme;
    $bg?: Hex;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TypeBoxShadowVariant;
    $boxRadiusVariant?: TypeBoxRadiusVariant;
} & TBaseBox.SBox;
export declare const SimpleBox: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    bg?: Hex;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxRadiusVariant?: TypeBoxRadiusVariant;
    $colors?: TypeColorScheme;
} & {
    mr?: import('../../../types/TypeBase').TypeMargin;
    boxWidthVariant?: import('../../../types/TypeBox').TypeBoxWidthVariant;
    boxPaddingVariant?: import('../../../types/TypeBox').TypeBoxPaddingVariant;
    boxGapVariant?: import('../../../types/TypeBox').TypeBoxGapVariant;
    boxDisplay?: import('../../../types/TypeBox').TypeBoxDisplay;
    as?: keyof JSX.IntrinsicElements;
    $styles?: {
        box: import('../../../general/styleScheme').TypeSSBox;
        mr: import('../../../general/styleScheme').TypeSSMR;
    };
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>>;
export declare const SSimpleBox: {
    Box: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$boxWidthVariant" | "$boxPaddingVariant" | "$boxGapVariant" | "$boxDisplay" | "$mr" | "$styles" | keyof React.HTMLAttributes<HTMLDivElement>> & {
        $boxWidthVariant?: import('../../../types/TypeBox').TypeBoxWidthVariant;
        $boxPaddingVariant?: import('../../../types/TypeBox').TypeBoxPaddingVariant;
        $boxGapVariant?: import('../../../types/TypeBox').TypeBoxGapVariant;
        $boxDisplay?: import('../../../types/TypeBox').TypeBoxDisplay;
        $mr?: import('../../../types/TypeBase').TypeMargin;
        $styles: {
            box: import('../../../general/styleScheme').TypeSSBox;
            mr: import('../../../general/styleScheme').TypeSSMR;
        };
    } & React.HTMLAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, SBoxProps>> & string;
};
export declare namespace TSimpleBox {
    type Main = SimpleBoxProps;
    type SBox = SBoxProps;
}
export {};
