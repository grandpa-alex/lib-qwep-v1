import { BaseBox, BaseContainer, BaseTitle, General, SimpleBox, SimpleButton } from '@src/lib';
import { styled } from 'styled-components';
import { Drawer } from './Drawer';
import { TypeColorScheme } from '@src/lib/general/colors';
import { ThemeProvider } from './Theme_context';

const customColors: TypeColorScheme = {
    primary: '#000000',
    secondary: '#E5F1FF',

    //items
    primaryItem: '#000000',
    primaryItemActive: '#000000',
    successItem: '#000000',
    successItemActive: '#000000',
    infoItem: '#000000',
    infoItemActive: '#18338C',
    errorItem: '#DC2626',
    errorItemActive: '#B91C1C',
    warningItem: '#EA580C',
    warningItemActive: '#C2410C',
    //base
    background: '#ffffff',
    backgroundBox: '#ffffff',
    backgroundTooltip: '#1f1f1fc8',
    disabled: '#B9BCBE',
    shadowColor: '#002B4D',
    //sec base
    backgroundSuccess: '#DCFCE7',
    backgroundError: '#FEE2E2',
    backgroundInfo: '#DBEAFE',
    backgroundwarning: '#FFEDD5',

    //text
    title: '#1A242A',
    text: '#1A242A',
    textItem: '#F5F5F5',
    link: '#2563EB',
    linkActive: '#1D4ED8',
    prompt: '#4f4f4f',

    //general
    alpha: '#ffffff',
    omaga: '#000000',
};

const customThemes: General.TypeCustomColorTheme[] = [
    { type: '_custom_1', name: 'Custom Theme 1', colors: customColors },
    // { type: 'custom_2', name: 'Custom Theme 2', colors:customColors_1 },
];

export const TestApp = () => {
    return (
        <General.BaseThemeProvider
            colorThemeName={'dark'}
            customColorThemes={customThemes}
            addColorsLigth={{
                primaryItem: '#e60000',
                __test__: '#e60000',
            }}
            addColorsDark={{
                primaryItem: '#440000',
                __test__: '#440000',
            }}
        >
            <ThemeProvider>
                <BaseContainer as={'main'}>
                    <Drawer />
                </BaseContainer>
            </ThemeProvider>
        </General.BaseThemeProvider>
    );
};
