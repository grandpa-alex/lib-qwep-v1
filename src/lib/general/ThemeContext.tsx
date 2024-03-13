import { createContext, ReactNode, useState, useMemo } from 'react';
import { TypeColorScheme, colorsDark, colorsLight } from './colors';
import { TypeSS, styleScheme } from './styleScheme';

export type TypeTheme = 'light' | 'dark' | 'custom';

export type ThemeContextType = {
    themeColorName: string;
    changeColorTheme: (theme: TypeTheme) => void;
    colorScheme: TypeColorScheme;
    styles: TypeSS;
};
interface ThemeProviderProps {
    children: ReactNode;
    themeColors?: TypeTheme;
    colors?: TypeColorScheme;
    styles?: TypeSS;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider = ({
    children,
    colors = colorsLight,
    styles = styleScheme,
    themeColors = 'light',
}: ThemeProviderProps) => {
    const [themeColorName, setThemeColorName] = useState(themeColors);
    const [colorScheme, setColorScheme] = useState<TypeColorScheme>(colors);

    const changeColorTheme = (theme: TypeTheme) => {
        switch (theme) {
            case 'light':
                setThemeColorName('light');
                setColorScheme(colorsLight);
                break;
            case 'dark':
                setThemeColorName('dark');
                setColorScheme(colorsDark);
                break;
            case 'custom':
                setThemeColorName('custom');
                setColorScheme(colors);
                break;
        }
    };
    useMemo(() => changeColorTheme(themeColorName), [themeColors]);

    const contextValue: ThemeContextType = {
        themeColorName,
        changeColorTheme,
        colorScheme,
        styles,
    };

    return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};
