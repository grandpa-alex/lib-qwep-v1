import { useContext } from 'react';
import { ThemeContext, ThemeContextType } from './ThemeContext';
import { TypeSS, styleScheme } from './styleScheme';

type KeyOfSS = keyof TypeSS;

export const useStyleScheme = <K extends KeyOfSS>(keys: K[]): Pick<TypeSS, K> => {
    const context = useContext<ThemeContextType | undefined>(ThemeContext);
    const baseStyleScheme = context?.styles ? context.styles : styleScheme;

    const selectedStyles = keys.reduce(
        (acc, key) => {
            // Проверка на существование ключа в объекте styleScheme для обеспечения типовой безопасности
            if (key in baseStyleScheme) {
                acc[key] = baseStyleScheme[key];
            }
            return acc;
        },
        {} as Pick<TypeSS, K>
    );

    return selectedStyles;
};
