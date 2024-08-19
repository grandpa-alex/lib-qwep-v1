import { useContext } from 'react';
import { BaseThemeContext, TypeBaseThemeContext } from './BaseThemeContext';
import { TypeSS, styleScheme } from './styleScheme';

type KeyOfSS = keyof TypeSS;

// export const useStyleScheme = <K extends KeyOfSS>(keys: K[]): Pick<TypeSS, K> => {
//     const context = useContext<TypeBaseThemeContext>(BaseThemeContext);
//     const baseStyleScheme = context?.currentStyles ? context.currentStyles : styleScheme;
//
//     return keys.reduce(
//         (acc, key) => {
//             if (key in baseStyleScheme) {
//                 acc[key] = baseStyleScheme[key];
//             }
//             return acc;
//         },
//         {} as Pick<TypeSS, K>
//     );
// };

export const useStyleScheme = <K extends KeyOfSS>(keys: K[], $styles?: Partial<TypeSS>): Pick<TypeSS, K> => {
    const context = useContext<TypeBaseThemeContext>(BaseThemeContext);
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
