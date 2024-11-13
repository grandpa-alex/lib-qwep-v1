import { useBaseThemeContext } from './BaseThemeContext';
import { TypeColorScheme, colorsLight } from './colors';

export const useColorScheme = ($colors?: TypeColorScheme) => {
    const context = useBaseThemeContext();
    if ($colors) {
        return $colors;
    }
    if (context?.currentColorScheme && context.currentColorThemeName) {
        return context.currentColorScheme as TypeColorScheme;
    } else {
        return colorsLight as TypeColorScheme;
    }
};
