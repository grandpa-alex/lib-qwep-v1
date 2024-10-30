import { ReactNode } from '../../../node_modules/react';
import { Hex, TypeColorScheme } from './colors';
import { TypeSS } from './styleScheme';

export type TypeColorTheme = 'light' | 'dark' | `_custom_${string}`;
export type TypeCustomColorTheme = {
    type: TypeColorTheme;
    name: string;
    colors: TypeColorScheme;
};
export type TypeBaseThemeContext = {
    currentColorThemeName: string;
    currentColorScheme: TypeColorScheme;
    listThemeColors: TypeCustomColorTheme[];
    changeColorThemeHandler: (themeName: TypeColorTheme) => void;
    setColorThemeHandler: (theme: TypeCustomColorTheme) => void;
    currentStyles: TypeSS;
    updateStylesHandler: (newStyles: TypeSS) => void;
};
interface ThemeProviderProps {
    children: ReactNode;
    colorThemeName?: TypeColorTheme;
    customColorThemes?: TypeCustomColorTheme[];
    addColorsLight?: {
        [key: string]: Hex;
    };
    addColorsDark?: {
        [key: string]: Hex;
    };
    currentStyles?: TypeSS;
}
export declare const BaseThemeProvider: ({ children, customColorThemes, colorThemeName, addColorsLight, addColorsDark, currentStyles, }: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
export declare const useBaseThemeContext: () => TypeBaseThemeContext;
export {};
