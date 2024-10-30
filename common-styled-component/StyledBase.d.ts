import { Hex, TypeColorScheme } from '../general/colors';
import { TypeVariantColor } from '../types/TypeBase';

export type StyledScrollbarItemProps = {
    $color?: Hex;
    $colorVariant?: TypeVariantColor;
    $hover?: boolean;
    $colors: TypeColorScheme;
};
export declare const StyledScrollbarItem: (props: StyledScrollbarItemProps) => import('styled-components').RuleSet<object>;
