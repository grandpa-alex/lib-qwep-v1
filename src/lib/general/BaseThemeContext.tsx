import { createContext, ReactNode, useState, useEffect } from 'react';
import { Hex, TypeColorScheme, colorsDark, colorsLight } from './colors';
import { TypeSS, styleScheme } from './styleScheme';

export type TypeColorTheme = 'light' | 'dark' | `_custom_${string}`;

export type TypeCustomColorTheme = {
    type: TypeColorTheme;
    name: string;
    colors: TypeColorScheme;
};

export type TypeBaseThemeContext = {
    //COLORS
    //values
    currentColorThemeName: string;
    currentColorScheme: TypeColorScheme;
    listThemeColors: TypeCustomColorTheme[];
    // methods
    changeColorThemeHandler: (themeName: TypeColorTheme) => void;
    setColorThemeHandler: (theme: TypeCustomColorTheme) => void;
    //STYLES
    //values
    currentStyles: TypeSS;

    // methods
};
interface ThemeProviderProps {
    children: ReactNode;
    colorThemeName?: TypeColorTheme;
    customColorThemes?: TypeCustomColorTheme[];
    addColorsLigth?: { [key: string]: Hex };
    addColorsDark?: { [key: string]: Hex };
    currentStyles?: TypeSS;
    // updateStyles?: { [key: string]: {[key: string]: string} };
}
export const BaseThemeContext = createContext<TypeBaseThemeContext>({
    //COLORS
    //values
    currentColorThemeName: 'light',
    currentColorScheme: colorsLight,
    listThemeColors: [],
    // methods
    changeColorThemeHandler: () => {},
    setColorThemeHandler: () => {},
    //STYLES
    //values
    currentStyles: styleScheme,
    // updateStyles,

    // methods
});
export const BaseThemeProvider = ({
    children,
    customColorThemes = [],
    colorThemeName = 'light',
    addColorsLigth,
    addColorsDark,
    currentStyles = styleScheme,
}: ThemeProviderProps) => {
    const [currentColorThemeName, setCurrentColorThemeName] = useState<TypeColorTheme>(colorThemeName);
    const [currentColorScheme, setCurrentColorScheme] = useState<TypeColorScheme>({
        ...colorsLight,
        ...addColorsLigth,
    });
    const [listThemeColors, setListThemeColors] = useState<TypeCustomColorTheme[]>([
        { type: 'light', name: 'Light Theme', colors: { ...colorsLight, ...addColorsLigth } },
        { type: 'dark', name: 'Dark Theme', colors: { ...colorsDark, ...addColorsDark } },
        ...customColorThemes,
    ]);

    useEffect(() => {
        const theme = listThemeColors.find((theme) => theme.type === currentColorThemeName);
        if (theme) {
            setCurrentColorScheme(theme.colors);
        } else {
            setCurrentColorScheme({ ...colorsLight, ...addColorsLigth });
        }
    }, [currentColorThemeName]);

    const setColorThemeHandler = (theme: TypeCustomColorTheme) => {
        setListThemeColors([...listThemeColors, theme]);
    };

    const changeColorThemeHandler = (themeName: TypeColorTheme) => {
        const theme = listThemeColors.find((theme) => theme.type === themeName);
        if (theme) {
            setCurrentColorThemeName(themeName);
            setCurrentColorScheme(theme.colors);
        }
    };

    const contextValue: TypeBaseThemeContext = {
        //COLORS
        //values
        currentColorThemeName,
        currentColorScheme,
        listThemeColors,
        //methods
        changeColorThemeHandler,
        setColorThemeHandler,

        //STYLES
        //values
        currentStyles,
    };

    return <BaseThemeContext.Provider value={contextValue}>{children}</BaseThemeContext.Provider>;
};
