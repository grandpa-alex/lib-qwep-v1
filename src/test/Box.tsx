import { BaseBox, BaseTitle, SimpleBox, SimpleTextField } from '@src/lib';

function Box() {
    return (
        <BaseBox style={{ paddingBottom: '300px' }}>
            <h2>BASE BOX</h2>
            <BaseBox boxGapVariant={'g-3'} mr={'m-3'} style={{ display: 'flex' }}>
                <BaseBox
                    boxPaddingVariant={'p-1'}
                    boxGapVariant={'g-1'}
                    boxWidthVariant={'w-1'}
                    style={{ background: '#f5eee4' }}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </BaseBox>

                <BaseBox
                    boxPaddingVariant={'p-2'}
                    boxGapVariant={'g-2'}
                    boxWidthVariant={'w-2'}
                    style={{ background: '#f5eee4' }}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </BaseBox>
                <BaseBox
                    boxPaddingVariant={'p-3'}
                    boxGapVariant={'g-3'}
                    boxWidthVariant={'w-3'}
                    style={{ background: '#f5eee4' }}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </BaseBox>
                <BaseBox
                    boxPaddingVariant={'p-4'}
                    boxGapVariant={'g-4'}
                    boxWidthVariant={'w-4'}
                    style={{ background: '#f5eee4' }}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </BaseBox>
            </BaseBox>
            <BaseTitle  as={'h2'}>Simple Box</BaseTitle>
            <SimpleBox
            mr={'m-3'}
                    boxPaddingVariant={'p-4'}
                    boxGapVariant={'g-4'}
                    boxWidthVariant={'w-4'}
                    boxRadiusVariant={'br-3'}
                    boxShadowVariant={'shd-3'}
                    // style={{ background: '#f5eee4' }}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                    <SimpleTextField placeholder={'Placeholder'} />
                </SimpleBox>
        </BaseBox>
    );
}

export default Box;
