import { useContext } from 'react';
import { BaseThemeContext, TypeBaseThemeContext } from './BaseThemeContext';

export const useTheme = () => {
    const context = useContext(BaseThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a BaseThemeProvider');
    }
    return context as TypeBaseThemeContext;
};
