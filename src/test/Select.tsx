import {
    BasePopup,
    BaseSelectContent,
    BaseSelectGroup,
    BaseSelectItem,
    Icon,
    SimpleBox,
    SimpleButton,
    SimpleTextField,
    SubmitButton,
} from '@src/lib';

function Select() {
    return (
        <div style={{ paddingBottom: '300px' }}>
            <h2>BASE SELECT</h2>
            <h4>BASE SELECT L COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseSelectContent mr={'m-3'} placeholder={'Default select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
                <BaseSelectContent colorVariant={'info'} mr={'m-3'} placeholder={'Info select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
                <BaseSelectContent colorVariant={'success'} mr={'m-3'} placeholder={'Successs select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
                <BaseSelectContent colorVariant={'warning'} mr={'m-3'} placeholder={'Warning select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
                <BaseSelectContent colorVariant={'error'} mr={'m-3'} placeholder={'Error select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
            </div>
            <h4>BASE SELECT M COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseSelectContent sizeVariant={'M'} mr={'m-3'} placeholder={'Default select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
                <BaseSelectContent sizeVariant={'M'} colorVariant={'info'} mr={'m-3'} placeholder={'Info select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
                <BaseSelectContent
                    sizeVariant={'M'}
                    colorVariant={'success'}
                    mr={'m-3'}
                    placeholder={'Successs select'}
                >
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
                <BaseSelectContent sizeVariant={'M'} colorVariant={'warning'} mr={'m-3'} placeholder={'Warning select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
                <BaseSelectContent sizeVariant={'M'} colorVariant={'error'} mr={'m-3'} placeholder={'Error select'}>
                    <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                </BaseSelectContent>
            </div>
            <h4>BASE SCROLL M COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseSelectContent mr={'m-3'} width={'200px'} placeholder={'Default select'}>
                    <BaseSelectGroup title={'Group 1'}>
                        <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 2'}>
                        <BaseSelectItem value={'6'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'7'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'8'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'9'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'10'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 3'}>
                        <BaseSelectItem value={'11'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'12'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'13'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'14'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'15'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                </BaseSelectContent>
                <BaseSelectContent colorVariant={'success'} mr={'m-3'} width={'200px'} placeholder={'Success select'}>
                    <BaseSelectGroup title={'Group 1'}>
                        <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 2'}>
                        <BaseSelectItem value={'6'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'7'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'8'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'9'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'10'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 3'}>
                        <BaseSelectItem value={'11'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'12'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'13'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'14'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'15'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                </BaseSelectContent>
                <BaseSelectContent
                    positionTrigger={'left'}
                    colorVariant={'warning'}
                    mr={'m-3'}
                    width={'200px'}
                    placeholder={'Warning select'}
                >
                    <BaseSelectGroup title={'Group 1'}>
                        <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                        <BaseSelectItem disabled value={'3'}>
                            Item 3
                        </BaseSelectItem>
                        <BaseSelectItem disabled value={'4'}>
                            Item 4
                        </BaseSelectItem>
                        <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 2'}>
                        <BaseSelectItem value={'6'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'7'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'8'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'9'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'10'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 3'}>
                        <BaseSelectItem value={'11'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'12'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'13'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'14'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'15'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                </BaseSelectContent>
                <BaseSelectContent
                    positionTrigger={'right'}
                    colorVariant={'warning'}
                    mr={'m-3'}
                    width={'200px'}
                    placeholder={'Warning select'}
                >
                    <BaseSelectGroup title={'Group 1'}>
                        <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                        <BaseSelectItem disabled value={'3'}>
                            Item 3
                        </BaseSelectItem>
                        <BaseSelectItem disabled value={'4'}>
                            Item 4
                        </BaseSelectItem>
                        <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 2'}>
                        <BaseSelectItem value={'6'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'7'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'8'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'9'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'10'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 3'}>
                        <BaseSelectItem value={'11'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'12'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'13'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'14'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'15'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                </BaseSelectContent>
                <BaseSelectContent width={'150px'} colorVariant={'error'} mr={'m-3'} placeholder={'Error long select'}>
                    <BaseSelectItem value={'1'}>Item 1 long long long</BaseSelectItem>
                    <BaseSelectItem value={'2'}>Item 2 long long long</BaseSelectItem>
                    <BaseSelectItem value={'3'}>Item 3 long long long</BaseSelectItem>
                    <BaseSelectItem value={'4'}>Item 4 long long long</BaseSelectItem>
                    <BaseSelectItem value={'5'}>Item 5 long long long</BaseSelectItem>
                </BaseSelectContent>
            </div>
            <h4>BASE SCROLL M COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseSelectContent
                    mr={'m-3'}
                    positionTrigger={'left'}
                    onValueChange={(e) => console.log(e)}
                    width={'200px'}
                    placeholder={'Default select'}
                >
                    <BaseSelectGroup title={'Group 1'}>
                        <BaseSelectItem value={'1'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'2'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'3'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'4'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'5'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 2'}>
                        <BaseSelectItem value={'6'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'7'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'8'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'9'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'10'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                    <BaseSelectGroup title={'Group 3'}>
                        <BaseSelectItem value={'11'}>Item 1</BaseSelectItem>
                        <BaseSelectItem value={'12'}>Item 2</BaseSelectItem>
                        <BaseSelectItem value={'13'}>Item 3</BaseSelectItem>
                        <BaseSelectItem value={'14'}>Item 4</BaseSelectItem>
                        <BaseSelectItem value={'15'}>Item 5</BaseSelectItem>
                    </BaseSelectGroup>
                </BaseSelectContent>
            </div>

            <h2>BASE POPUP L COLORS</h2>
            <div style={{ display: 'flex' }}>
                <BasePopup
                    mr={'m-3'}
                    popupComponent={
                        <SimpleBox
                            boxGapVariant={'g-2'}
                            boxPaddingVariant={'p-2'}
                            boxShadowVariant={'shd-3'}
                            boxRadiusVariant={'br-1'}
                        >
                            <SimpleTextField placeholder={'Placeholder'} />
                            <SimpleTextField placeholder={'Placeholder'} />
                            <SubmitButton icon={<Icon.Gear />} isLoading={false}>
                                Submit
                            </SubmitButton>
                        </SimpleBox>
                    }
                >
                    <SimpleButton>Popup</SimpleButton>
                </BasePopup>
            </div>
        </div>
    );
}

export default Select;
