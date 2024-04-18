import { BaseAvatar, BaseBox, BaseTitle } from '@src/lib';

function Avatar() {
    const url = 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80';
    const urlB = 'https://images.unsplash.com/photo-1492633423870-43';
    return (
        <BaseBox style={{ paddingBottom: '300px' }}>
            <BaseTitle>BASE AVATAR</BaseTitle>
            <BaseBox style={{ display: 'flex' }}>
                <BaseAvatar src={url} alt={'Afrf As'} mr={'m-3'} />
                <BaseAvatar alt={'lex v b'} sizeVariant={'large'} src={urlB} mr={'m-3'} />
                <BaseAvatar alt={'Hex V B'} sizeVariant={'medium'} src={urlB} mr={'m-3'} />
                <BaseAvatar alt={'Wex V B'} src={urlB} sizeVariant={'small'} mr={'m-3'} />
            </BaseBox>
        </BaseBox>
    );
}

export default Avatar;