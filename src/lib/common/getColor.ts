import { TypeColorScheme } from '../general/colors';
import { TypeVariantColor } from '../types/TypeBase';

type getColorProps = {
    cs: TypeColorScheme;
    color?: string;
    variant?: TypeVariantColor;
    disabled?: boolean;
    opacity?: '20' | '40' | '60' | '80' | '90' | 'b3' | 'dd' | '';
    hover?: boolean;
};

export const getColor = ({ cs, variant, disabled, color, opacity = '', hover = false }: getColorProps) => {
    if (disabled) {
        return `${cs.disabled}${opacity}`;
    } else if (color) {
        return `${color}${opacity}`;
    } else if (hover) {
        return `${variant === 'error' ? cs.errorItemActive : variant === 'info' ? cs.infoItemActive : variant === 'warning' ? cs.warningItemActive : variant === 'success' ? cs.successItemActive : cs.primaryItemActive}${opacity}`;
    } else {
        return `${variant === 'error' ? cs.errorItem : variant === 'info' ? cs.infoItem : variant === 'warning' ? cs.warningItem : variant === 'success' ? cs.successItem : cs.primaryItem}${opacity}`;
    }
};
