import { TypeSSBox } from '../general/styleScheme';
import { Hex, TypeColorScheme } from '../general/colors';
import { TypeBoxDisplay, TypeBoxGapVariant, TypeBoxPaddingVariant, TypeBoxRadiusVariant, TypeBoxShadowVariant, TypeBoxWidthVariant } from '../types/TypeBox';

export declare const BOX_WIDTH_VARIANT: {
    "w-1": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "w-2": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "w-3": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "w-4": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "w-5": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "w-6": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "w-null": () => import('styled-components').RuleSet<object>;
};
export declare const BOX_GAP_VARIANT: {
    "g-1": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "g-2": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "g-3": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "g-4": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "g-5": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "g-6": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "g-null": () => import('styled-components').RuleSet<object>;
};
export declare const BOX_PADDING_VARIANT: {
    "p-1": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "p-2": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "p-3": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "p-4": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "p-5": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "p-6": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "p-null": () => import('styled-components').RuleSet<object>;
};
export declare const BOX_BORDER_RADIUS: {
    "br-1": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "br-2": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "br-3": (props: TypeSSBox) => import('styled-components').RuleSet<object>;
    "br-null": () => import('styled-components').RuleSet<object>;
};
export type StyledBoxShadowVariantProps = {
    $boxShadowColor?: Hex;
    $colors: TypeColorScheme;
    $box: TypeSSBox;
};
export declare const BOX_SHADOW_VARIANT: {
    "shd-1": (props: StyledBoxShadowVariantProps) => import('styled-components').RuleSet<object>;
    "shd-2": (props: StyledBoxShadowVariantProps) => import('styled-components').RuleSet<object>;
    "shd-3": (props: StyledBoxShadowVariantProps) => import('styled-components').RuleSet<object>;
    "shd-null": () => import('styled-components').RuleSet<object>;
};
export type CSSBaseBoxProps = {
    $boxWidthVariant?: TypeBoxWidthVariant;
    $boxPaddingVariant?: TypeBoxPaddingVariant;
    $boxGapVariant?: TypeBoxGapVariant;
    $boxDisplay?: TypeBoxDisplay;
    $styles: TypeSSBox;
};
export declare const CSSBaseBox: (props: CSSBaseBoxProps) => import('styled-components').RuleSet<object>;
export type CSSSimplePropsBox = {
    $styles: TypeSSBox;
    $colors: TypeColorScheme;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TypeBoxShadowVariant;
    $boxRadiusVariant?: TypeBoxRadiusVariant;
};
export declare const CSSSimpleBox: (props: CSSSimplePropsBox) => import('styled-components').RuleSet<object>;
