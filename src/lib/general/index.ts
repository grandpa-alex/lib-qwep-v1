import { Copy } from '../types/CopyType';
import {
    BaseThemeProvider,
    TypeBaseThemeContext,
    TypeColorTheme,
    TypeCustomColorTheme,
    useBaseThemeContext,
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

export {
    //core
    BaseThemeProvider,
    useBaseThemeContext,
    //hooks
    useColorScheme,
    useStyleScheme,
    //colors
    colorsLight,
    colorsDark,
    //styles
    styleScheme,
};
export namespace TypeGeneral {
    export type ColorTheme = Copy<TypeColorTheme>;
    export type CustomColorTheme = Copy<TypeCustomColorTheme>;
    export type BaseThemeContext = Copy<TypeBaseThemeContext>;
    export type Hex = Copy<`#${string}`>; // Уточнение для строки с шаблонной строкой
    export type ColorScheme = Copy<TypeColorScheme>;
    export type SS = Copy<TypeSS>;
    export type SSMR = Copy<TypeSSMR>;
    export type SSBase = Copy<TypeSSBase>;
    export type SSBtn = Copy<TypeSSBtn>;
    export type SSInp = Copy<TypeSSInp>;
    export type SSIcon = Copy<TypeSSIcon>;
    export type SSCheckbox = Copy<TypeSSCheckbox>;
    export type SSAvatar = Copy<TypeSSAvatar>;
    export type SSSwitch = Copy<TypeSSSwitch>;
    export type SSSlider = Copy<TypeSSSlider>;
    export type SSSelect = Copy<TypeSSSelect>;
    export type SSRadio = Copy<TypeSSRadio>;
    export type SSTypography = Copy<TypeSSTypography>;
    export type SSBox = Copy<TypeSSBox>;
}
