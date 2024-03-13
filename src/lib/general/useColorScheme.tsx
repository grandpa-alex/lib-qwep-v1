import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from './ThemeContext';
import { TypeColorScheme, colorsLight } from './colors';

export const useColorScheme = () => {
    const context = useContext<ThemeContextType | undefined>(ThemeContext);
    if (context?.colorScheme) {
        return context.colorScheme as TypeColorScheme;
    } else {
        return colorsLight as TypeColorScheme;
    }
};
