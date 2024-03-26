import { BaseBox, SimpleBox } from '@src/lib';
import { Hex, TypeColorScheme, colorsDark, colorsLight } from '@src/lib/general/colors';
import { useState } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.p<{ bg?: boolean }>`
    font-size: 14px;
    font-weight: 600;
    border-radius: 8px;
    padding: 5px;
    text-align: center;
    background-color: ${(props) => (props.bg ? '#646464' : '#0000000')};
    text-transform: capitalize;
`;

const StyledHex = styled.p<{ l?: boolean }>`
    font-size: 14px;
    font-weight: 600;
    border-radius: 8px;
    text-align: center;
    color: ${(props) => (props.l ? '#fff' : '#000')};
`;

const Card = ({ color, title, bg }: any) => {
    return (
        <SimpleBox boxGapVariant={'g-1'} boxPaddingVariant={'p-1'} boxShadowVariant={'shd-1'} boxRadiusVariant={'br-1'}>
            <StyledTitle bg={bg} style={{ color: color }}>
                {title}
            </StyledTitle>

            <SimpleBox boxShadowVariant={'shd-1'} boxPaddingVariant={'p-3'} boxRadiusVariant={'br-2'} bg={color}>
                <StyledHex>{color}</StyledHex>
            </SimpleBox>
        </SimpleBox>
    );
};

function Colors() {
    // export const colorsLight: TypeColorScheme = {
    //     primary: '#218EE1',
    //     secondary: '#E5F1FF',

    //     //items
    //     primaryItem: '#218EE1',
    //     primaryItemActive: '#3a86ff',
    //     successItem: '#6EBA6E',
    //     successItemActive: '#3b8c3b',
    //     infoItem: '#59aeee',
    //     infoItemActive: '#2378b8',
    //     errorItem: '#f77f76',
    //     errorItemActive: '#d18730',
    //     warningItem: '#F0BC7F',
    //     warningItemActive: '#d18730',
    //     //base
    //     background: '#ffffff',
    //     backgroundBox: '#ffffff',
    //     backgroundTooltip: '#1f1f1fc8',
    //     disabled: '#858585',
    //     shadowColor: '#6e6e6e',

    //     //text
    //     title: '#1A242A',
    //     text: '#1A242A',
    //     textItem: '#F5F5F5',
    //     link: '#7677C3',
    //     linkActive: '#7677ff',
    //     prompt: '#4f4f4f',

    //     //general
    //     alpha: '#ffffff',
    //     omaga: '#000000',
    // };

    // colorsLight;

    return (
        <BaseBox style={{ paddingBottom: '300px' }}>
            <BaseBox boxGapVariant={'g-1'} style={{ gridTemplateColumns: '1fr 1fr' }}>
                <BaseBox>
                    <h2>COLORS LIGHT MAIN</h2>
                    <BaseBox mr={'m-3'} boxGapVariant={'g-1'} style={{ gridTemplateColumns: '200px 200px' }}>
                        <Card color={colorsLight.primary} title={'primary'} />
                        <Card color={colorsLight.secondary} title={'secondary'} bg />
                    </BaseBox>
                </BaseBox>
                <BaseBox>
                    <h2>COLORS DARK MAIN</h2>
                    <BaseBox mr={'m-3'} boxGapVariant={'g-1'} style={{ gridTemplateColumns: '200px 200px' }}>
                        <Card color={colorsDark.primary} title={'primary'} />
                        <Card color={colorsDark.secondary} bg title={'secondary'} />
                    </BaseBox>
                </BaseBox>
            </BaseBox>
            <BaseBox boxGapVariant={'g-1'} style={{ gridTemplateColumns: '1fr 1fr' }}>
                <BaseBox>
                    <h2>COLORS LIGHT ITEMS</h2>
                    <BaseBox
                        mr={'m-3'}
                        boxGapVariant={'g-1'}
                        style={{ gridTemplateColumns: '200px 200px 200px 200px' }}
                    >
                        <Card color={colorsLight.primaryItem} title={'primaryItem'} />
                        <Card color={colorsLight.primaryItemActive} title={'primaryItemActive'} />
                        <Card color={colorsLight.successItem} title={'successItem'} />
                        <Card color={colorsLight.successItemActive} title={'successItemActive'} />
                        <Card color={colorsLight.infoItem} title={'InfoItem'} />
                        <Card color={colorsLight.infoItemActive} title={'infoItemActive'} />
                        <Card color={colorsLight.errorItem} title={'errorItem'} />
                        <Card color={colorsLight.errorItemActive} title={'errorItemActive'} />
                        <Card color={colorsLight.warningItem} title={'warningItem'} />
                        <Card color={colorsLight.warningItemActive} title={'warningItemActive'} />
                    </BaseBox>
                </BaseBox>
                <BaseBox>
                    <BaseBox>
                        <h2>COLORS DARK ITEMS</h2>
                        <BaseBox
                            mr={'m-3'}
                            boxGapVariant={'g-1'}
                            style={{ gridTemplateColumns: '200px 200px 200px 200px' }}
                        >
                            <Card color={colorsDark.primaryItem} title={'primaryItem'} />
                            <Card color={colorsDark.primaryItemActive} title={'primaryItemActive'} />
                            <Card color={colorsDark.successItem} title={'successItem'} />
                            <Card color={colorsDark.successItemActive} title={'successItemActive'} />
                            <Card color={colorsDark.infoItem} title={'InfoItem'} />
                            <Card color={colorsDark.infoItemActive} title={'infoItemActive'} />
                            <Card color={colorsDark.errorItem} title={'errorItem'} />
                            <Card color={colorsDark.errorItemActive} title={'errorItemActive'} />
                            <Card color={colorsDark.warningItem} title={'warningItem'} />
                            <Card color={colorsDark.warningItemActive} title={'warningItemActive'} />
                        </BaseBox>
                    </BaseBox>
                </BaseBox>
                <BaseBox>
                    <BaseBox>
                        <h2>COLORS BASE LIGHT</h2>
                        <BaseBox
                            mr={'m-3'}
                            boxGapVariant={'g-1'}
                            style={{ gridTemplateColumns: '200px 200px 200px 200px' }}
                        >
                            <Card color={colorsLight.background} bg title={'background'} />
                            <Card color={colorsLight.backgroundBox} bg title={'backgroundBox'} />
                            <Card color={colorsLight.backgroundTooltip} title={'backgroundTooltip'} />
                            <Card color={colorsLight.disabled} title={'disabled'} />
                            <Card color={colorsLight.shadowColor} title={'shadowColor'} />
                        </BaseBox>
                    </BaseBox>
                </BaseBox>
                <BaseBox>
                    <BaseBox>
                        <h2>COLORS BASE DARK</h2>
                        <BaseBox
                            mr={'m-3'}
                            boxGapVariant={'g-1'}
                            style={{ gridTemplateColumns: '200px 200px 200px 200px' }}
                        >
                            <Card color={colorsDark.background} bg title={'background'} />
                            <Card color={colorsDark.backgroundBox} bg title={'backgroundBox'} />
                            <Card color={colorsDark.backgroundTooltip} title={'backgroundTooltip'} />
                            <Card color={colorsDark.disabled} title={'disabled'} />
                            <Card color={colorsDark.shadowColor} title={'shadowColor'} />
                        </BaseBox>
                    </BaseBox>
                </BaseBox>
                <BaseBox>
                    <BaseBox>
                        <h2>COLORS TEXT LIGHT</h2>
                        <BaseBox
                            mr={'m-3'}
                            boxGapVariant={'g-1'}
                            style={{ gridTemplateColumns: '200px 200px 200px 200px' }}
                        >
                            <Card color={colorsLight.title} title={'title'} />
                            <Card color={colorsLight.text} title={'text'} />
                            <Card color={colorsLight.textItem} bg title={'textItem'} />
                            <Card color={colorsLight.link} title={'link'} />
                            <Card color={colorsLight.linkActive} title={'linkActive'} />
                            <Card color={colorsLight.prompt} title={'prompt'} />
                        </BaseBox>
                    </BaseBox>
                </BaseBox>
                <BaseBox>
                    <BaseBox>
                        <h2>COLORS TEXT DARK</h2>
                        <BaseBox
                            mr={'m-3'}
                            boxGapVariant={'g-1'}
                            style={{ gridTemplateColumns: '200px 200px 200px 200px' }}
                        >
                            <Card color={colorsDark.title} title={'title'} />
                            <Card color={colorsDark.text} title={'text'} />
                            <Card color={colorsDark.textItem} bg title={'textItem'} />
                            <Card color={colorsDark.link} title={'link'} />
                            <Card color={colorsDark.linkActive} title={'linkActive'} />
                            <Card color={colorsDark.prompt} title={'prompt'} />
                        </BaseBox>
                    </BaseBox>
                </BaseBox>
                <BaseBox>
                    <BaseBox>
                        <h2>COLORS GENERAL LIGHT</h2>
                        <BaseBox
                            mr={'m-3'}
                            boxGapVariant={'g-1'}
                            style={{ gridTemplateColumns: '200px 200px 200px 200px' }}
                        >
                            <Card color={colorsLight.alpha} bg title={'alpha'} />
                            <Card color={colorsLight.omaga} title={'omaga'} />
                        </BaseBox>
                    </BaseBox>
                </BaseBox>
                <BaseBox>
                    <BaseBox>
                        <h2>COLORS GENERAL DARK</h2>
                        <BaseBox
                            mr={'m-3'}
                            boxGapVariant={'g-1'}
                            style={{ gridTemplateColumns: '200px 200px 200px 200px' }}
                        >
                            <Card color={colorsDark.alpha} bg title={'alpha'} />
                            <Card color={colorsDark.omaga} title={'omaga'} />
                        </BaseBox>
                    </BaseBox>
                </BaseBox>
            </BaseBox>
        </BaseBox>
    );
}

export default Colors;
