import { useBaseThemeContext } from './BaseThemeContext';
import { TypeSS, styleScheme } from './styleScheme';

type KeyOfSS = keyof TypeSS;

export const useStyleScheme = <K extends KeyOfSS>(keys: K[], $styles?: Partial<TypeSS>): Pick<TypeSS, K> => {
    const context = useBaseThemeContext();
    const baseStyleScheme = $styles || (context?.currentStyles ? context.currentStyles : styleScheme);
    return keys.reduce(
        (acc, key) => {
            if (key in baseStyleScheme) {
                acc[key] = baseStyleScheme[key] as TypeSS[K]; // Уточняем тип
            }
            return acc;
        },
        {} as Pick<TypeSS, K>
    );
};
