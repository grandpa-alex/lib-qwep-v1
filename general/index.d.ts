import { Copy } from '../types/CopyType';
import { BaseThemeProvider, TypeBaseThemeContext, TypeColorTheme, TypeCustomColorTheme, useBaseThemeContext } from './BaseThemeContext';
import { TypeColorScheme, colorsDark, colorsLight } from './colors';
import { TypeSS, TypeSSAvatar, TypeSSBase, TypeSSBox, TypeSSBtn, TypeSSCheckbox, TypeSSIcon, TypeSSInp, TypeSSMR, TypeSSRadio, TypeSSSelect, TypeSSSlider, TypeSSSwitch, TypeSSTypography, styleScheme } from './styleScheme';
import { useColorScheme } from './useColorScheme';
import { useStyleScheme } from './useStyleScheme';

export { BaseThemeProvider, useBaseThemeContext, useColorScheme, useStyleScheme, colorsLight, colorsDark, styleScheme, };
export declare namespace TypeGeneral {
    type ColorTheme = Copy<TypeColorTheme>;
    type CustomColorTheme = Copy<TypeCustomColorTheme>;
    type BaseThemeContext = Copy<TypeBaseThemeContext>;
    type Hex = `#${string}`;
    type ColorScheme = Copy<TypeColorScheme>;
    type SS = Copy<TypeSS>;
    type SSMR = Copy<TypeSSMR>;
    type SSBase = Copy<TypeSSBase>;
    type SSBtn = Copy<TypeSSBtn>;
    type SSInp = Copy<TypeSSInp>;
    type SSIcon = Copy<TypeSSIcon>;
    type SSCheckbox = Copy<TypeSSCheckbox>;
    type SSAvatar = Copy<TypeSSAvatar>;
    type SSSwitch = Copy<TypeSSSwitch>;
    type SSSlider = Copy<TypeSSSlider>;
    type SSSelect = Copy<TypeSSSelect>;
    type SSRadio = Copy<TypeSSRadio>;
    type SSTypography = Copy<TypeSSTypography>;
    type SSBox = Copy<TypeSSBox>;
}
