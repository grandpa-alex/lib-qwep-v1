import {
    BaseThemeContext,
    BaseThemeProvider,
    TypeBaseThemeContext,
    TypeColorTheme,
    TypeCustomColorTheme,
} from './BaseThemeContext';
import { Hex, TypeColorScheme, TypeDafaultColorSchemes, colorsDark, colorsLight } from './colors';
import {
    TypeSS,
    TypeSSBase,
    TypeSSBox,
    TypeSSBtn,
    TypeSSCheckbox,
    TypeSSIcon,
    TypeSSInp,
    TypeSSMR,
    TypeSSSelect,
    TypeSSSlider,
    TypeSSSwitch,
    TypeSSTypography,
    styleScheme,
} from './styleScheme';
import { useColorScheme } from './useColorScheme';
import { useStyleScheme } from './useStyleScheme';
import { useTheme } from './useTheme';

export {
    //core
    BaseThemeProvider,
    BaseThemeContext,
    //hooks
    useTheme,
    useColorScheme,
    useStyleScheme,
    //colors
    colorsLight,
    colorsDark,
    //styles
    styleScheme,
};
export type {
    //core
    TypeColorTheme,
    TypeCustomColorTheme,
    TypeBaseThemeContext,
    //colors
    Hex,
    TypeDafaultColorSchemes,
    TypeColorScheme,
    //styles
    TypeSS,
    TypeSSMR,
    TypeSSBase,
    TypeSSBtn,
    TypeSSInp,
    TypeSSIcon,
    TypeSSCheckbox,
    TypeSSSwitch,
    TypeSSSelect,
    TypeSSSlider,
    TypeSSTypography,
    TypeSSBox,
};
