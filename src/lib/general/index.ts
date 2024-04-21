import {
    BaseThemeContext,
    BaseThemeProvider,
    TypeBaseThemeContext,
    TypeColorTheme,
    TypeCustomColorTheme,
} from './BaseThemeContext';
import { TypeColorScheme, colorsDark, colorsLight } from './colors';
import {
    TypeSS,
    TypeSSAvatar,
    TypeSSBase,
    TypeSSBox,
    TypeSSBtn,
    TypeSSCheckbox,
    TypeSSIcon,
    TypeSSInp,
    TypeSSMR,
    TypeSSRadio,
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

export namespace TypeGeneral {
    export type ColorTheme = TypeColorTheme;
    export type CustomColorTheme = TypeCustomColorTheme;
    export type BaseThemeContext = TypeBaseThemeContext;
    export type Hex = `#${string}`;
    export type ColorScheme = TypeColorScheme;
    export type SS = TypeSS;
    export type SSMR = TypeSSMR;
    export type SSBase = TypeSSBase;
    export type SSBtn = TypeSSBtn;
    export type SSInp = TypeSSInp;
    export type SSIcon = TypeSSIcon;
    export type SSCheckbox = TypeSSCheckbox;
    export type SSAvatar = TypeSSAvatar;
    export type SSSwitch = TypeSSSwitch;
    export type SSSlider = TypeSSSlider;
    export type SSSelect = TypeSSSelect;
    export type SSRadio = TypeSSRadio;
    export type SSTypography = TypeSSTypography;
    export type SSBox = TypeSSBox;
}
