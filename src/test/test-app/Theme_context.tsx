// import { General } from '@src/lib';
import { createContext, ReactNode } from 'react';





export type ThemeContextType = {
    //COLORS


    // methods
};
interface ThemeProviderProps {
    children: ReactNode;

}
export const ThemeContext = createContext<ThemeContextType>({

});
export const ThemeProvider = ({
    children,
}: ThemeProviderProps) => {

    // const { listThemeColors } = useContext(General.BaseThemeContext)



    
    const contextValue: ThemeContextType = {
      
    };

    return <ThemeContext.Provider 
    value={contextValue}>
        
        {children}
        
        </ThemeContext.Provider>;
};
