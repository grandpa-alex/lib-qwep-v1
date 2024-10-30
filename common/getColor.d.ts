import { TypeColorScheme } from '../general/colors';
import { TypeVariantColor } from '../types/TypeBase';

export type opacity = '5' | '10' | '20' | '40' | '60' | '80' | '90' | 'b3' | 'dd' | '';
type getColorProps = {
    cs: TypeColorScheme;
    color?: string;
    variant?: TypeVariantColor;
    disabled?: boolean;
    opacity?: opacity;
    hover?: boolean;
};
export declare const getColor: ({ cs, variant, disabled, color, opacity, hover }: getColorProps) => string;
export {};
