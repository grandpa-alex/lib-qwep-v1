// import React, { useRef } from 'react';
import { useEffect, useRef } from 'react';
import { BaseAvatar, BaseBox, BaseButton, BasePopup, BaseTitle } from '../lib';

function Avatar() {
    const url = 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80';
    const urlB = 'https://images.unsplash.com/photo-1492633423870-43';
    const inputRef = useRef(null);

    useEffect(() => {
        console.log('AAAA', inputRef);
    }, [inputRef]);

    return (
        <BaseBox style={{ paddingBottom: '300px' }}>
            <BaseTitle>BASE AVATAR</BaseTitle>
            <BaseBox style={{ display: 'flex' }}>
                <BaseAvatar src={url} alt={'Afrf As'} mr={'m-3'} style={{ width: '200px', height: '200px' }} />
                <BaseAvatar alt={'lex v b'} sizeVariant={'large'} src={urlB} mr={'m-3'} />
                <BaseAvatar alt={'Hex V B'} sizeVariant={'medium'} src={urlB} mr={'m-3'} />
                <BaseAvatar alt={'Wex V B'} src={urlB} sizeVariant={'small'} mr={'m-3'} />
            </BaseBox>
            <BaseBox style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <BasePopup bg={'#b31f1f'} trigger={<BaseButton>rtretretr</BaseButton>}>
                    <BaseBox>kgjrekgjregjregregkerkgjkrejg</BaseBox>
                </BasePopup>
            </BaseBox>
        </BaseBox>
    );
}

export default Avatar;
