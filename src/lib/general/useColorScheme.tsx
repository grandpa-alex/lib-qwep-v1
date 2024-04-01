import { useContext } from 'react';
import { BaseThemeContext, TypeBaseThemeContext } from './BaseThemeContext';
import { TypeColorScheme, colorsLight } from './colors';

export const useColorScheme = () => {
    const context = useContext<TypeBaseThemeContext>(BaseThemeContext);
    if (context?.currentColorScheme) {
        return context.currentColorScheme as TypeColorScheme;
    } else {
        return colorsLight as TypeColorScheme;
    }
};
