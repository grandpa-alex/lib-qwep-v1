import { BaseBox, BaseTitle, General, SimpleBox, SimpleButton } from "@src/lib";
import { styled } from "styled-components";

const SDrawerContainer = styled(SimpleBox)`
    width: 250px;
    height: 100vh;
    border-right: 1px solid;
    border-color: ${props => props.$colors?.__test__};
`;

export const Drawer = () => {
    const { changeColorThemeHandler } = General.useTheme()
    const colors = General.useColorScheme();
    const styles = General.useStyleScheme(['box', 'mr']);
    // themeColorName === 'light' ? 'dark' : 'light'
    return (
        <SDrawerContainer boxPaddingVariant={'p-3'} $colors={colors} $styles={styles}>
            <BaseTitle>Test App</BaseTitle>
            <BaseBox>
                <SimpleButton mr={'my-3'} onClick={() => changeColorThemeHandler('_custom_1')} style={{ width: '100%' }}>
                    Change Theme
                </SimpleButton>
            </BaseBox>
        </SDrawerContainer>
    );
};