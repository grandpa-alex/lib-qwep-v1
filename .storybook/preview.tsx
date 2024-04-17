import type { DecoratorFn, Preview } from '@storybook/react';
import '../src/styles/index.css';
import React from 'react';
import { BaseBox, SimpleBox, SimpleButton, General, BaseLayout, BaseText } from '../src/lib';

const Content = ({ StoryFn, context }) => {
    const { currentColorThemeName, changeColorThemeHandler } = General.useTheme();

    const changeThemeHandler = () => {
        if (currentColorThemeName === 'light') {
            changeColorThemeHandler('dark');
        } else {
            changeColorThemeHandler('light');
        }
    };

    return (
        <BaseLayout
            wrapperStyle={{
                padding: '15px',
            }}
        >
            <SimpleBox
                as={'header'}
                boxDisplay={'flex'}
                boxGapVariant={'g-2'}
                boxPaddingVariant={'p-1'}
                boxShadowVariant={'shd-1'}
                boxRadiusVariant={'br-1'}
                style={{
                    alignItems: 'center',
                }}
            >
                <SimpleButton sizeVariant={'M'} onClick={changeThemeHandler}>
                    Change theme
                </SimpleButton>
                <BaseText>Current color: {currentColorThemeName}</BaseText>
            </SimpleBox>
            <BaseBox>
                <StoryFn {...context} />
            </BaseBox>
        </BaseLayout>
    );
};

const coreTheme: DecoratorFn = (StoryFn, context) => {
    return (
        <General.BaseThemeProvider>
            <Content StoryFn={StoryFn} context={context} />
        </General.BaseThemeProvider>
    );
};

const preview: Preview = {
    decorators: [coreTheme],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export default preview;
