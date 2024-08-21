import { createContext, ReactNode, useState, useEffect, useContext } from 'react';
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
    currentColorThemeName: string;
    currentColorScheme: TypeColorScheme;
    listThemeColors: TypeCustomColorTheme[];
    changeColorThemeHandler: (themeName: TypeColorTheme) => void;
    setColorThemeHandler: (theme: TypeCustomColorTheme) => void;
    //STYLES
    currentStyles: TypeSS;
    updateStylesHandler: (newStyles: TypeSS) => void;
};

interface ThemeProviderProps {
    children: ReactNode;
    colorThemeName?: TypeColorTheme;
    customColorThemes?: TypeCustomColorTheme[];
    addColorsLight?: { [key: string]: Hex };
    addColorsDark?: { [key: string]: Hex };
    currentStyles?: TypeSS;
}
const BaseThemeContext = createContext<TypeBaseThemeContext>({
    // COLORS
    currentColorThemeName: 'light',
    currentColorScheme: colorsLight,
    listThemeColors: [],
    changeColorThemeHandler: () => {},
    setColorThemeHandler: () => {},
    // STYLES
    currentStyles: styleScheme,
    updateStylesHandler: () => {},
});
export const BaseThemeProvider = ({
    children,
    customColorThemes = [],
    colorThemeName = 'light',
    addColorsLight,
    addColorsDark,
    currentStyles = styleScheme,
}: ThemeProviderProps) => {
    const [currentColorThemeName, setCurrentColorThemeName] = useState<TypeColorTheme>(colorThemeName);
    const [currentColorScheme, setCurrentColorScheme] = useState<TypeColorScheme>({
        ...colorsLight,
        ...addColorsLight,
    });
    const [listThemeColors, setListThemeColors] = useState<TypeCustomColorTheme[]>([
        { type: 'light', name: 'Light Theme', colors: { ...colorsLight, ...addColorsLight } },
        { type: 'dark', name: 'Dark Theme', colors: { ...colorsDark, ...addColorsDark } },
        ...customColorThemes,
    ]);
    const [styles, setStyles] = useState<TypeSS>(currentStyles);

    useEffect(() => {
        const theme = listThemeColors.find((theme) => theme.type === currentColorThemeName);
        if (theme) {
            setCurrentColorScheme(theme.colors);
        } else {
            setCurrentColorScheme({ ...colorsLight, ...addColorsLight });
        }
    }, [currentColorThemeName, listThemeColors, addColorsLight]);

    const setColorThemeHandler = (theme: TypeCustomColorTheme) => {
        const themeExists = listThemeColors.some((t) => t.name === theme.name);
        if (!themeExists) {
            setListThemeColors([...listThemeColors, theme]);
        } else {
            console.warn(`Theme with name ${theme.name} already exists`);
        }
    };

    const changeColorThemeHandler = (themeName: TypeColorTheme) => {
        const theme = listThemeColors.find((theme) => theme.type === themeName);
        if (theme) {
            setCurrentColorThemeName(themeName);
            setCurrentColorScheme(theme.colors);
        }
    };

    const updateStylesHandler = (newStyles: TypeSS) => {
        setStyles((prevStyles) => ({
            ...prevStyles,
            ...newStyles,
        }));
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
        currentStyles: styles,
        //methods
        updateStylesHandler,
    };

    return <BaseThemeContext.Provider value={contextValue}>{children}</BaseThemeContext.Provider>;
};

export const useBaseThemeContext = (): TypeBaseThemeContext => {
    const context = useContext(BaseThemeContext);
    if (!context) {
        throw new Error('useThemeContext must be used within a BaseThemeProvider');
    }
    return context;
};
