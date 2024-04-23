import {
    BaseBox,
    BaseCheckbox,
    BaseSlider,
    BaseSwitch,
    BaseTextarea,
    BaseTextField,
    BaseTitle,
    SimpleTextField,
    SubmitCheckbox,
    SubmitSwitch,
    SubmitTextField,
    WrapperInput,
} from '@src/lib';

function WrapperItem() {
    return (
        <BaseBox>
            <BaseTitle>Wrapper text field</BaseTitle>
            <BaseBox mr={'my-3'} style={{ display: 'flex' }} boxGapVariant={'g-2'}>
                <WrapperInput
                    positionLabel={'top'}
                    id={'BaseTextField'}
                    label={'BaseTextField'}
                    message={{
                        text: 'BaseTextField',
                    }}
                >
                    <BaseTextField placeholder={'Placeholder'} />
                </WrapperInput>
                <WrapperInput
                    positionLabel={'top'}
                    id={'SimpleTextField'}
                    label={'SimpleTextField'}
                    message={{
                        text: 'SimpleTextField',
                    }}
                >
                    <SimpleTextField placeholder={'Placeholder'} />
                </WrapperInput>
                <WrapperInput
                    positionLabel={'top'}
                    id={'SubmitTextField'}
                    label={'SubmitTextField'}
                    message={{
                        text: 'SubmitTextField',
                    }}
                >
                    <SubmitTextField isLoading={true} sizeVariant={'M'} placeholder={'Placeholder'} />
                </WrapperInput>
                <WrapperInput
                    positionLabel={'top'}
                    id={'SubmitTextField_dis'}
                    label={'SubmitTextField_dis'}
                    message={{
                        text: 'SubmitTextField_dis',
                    }}
                >
                    <SubmitTextField isLoading={true} disabled={true} sizeVariant={'M'} placeholder={'Placeholder'} />
                </WrapperInput>
            </BaseBox>
            <BaseTitle>Label checkbox</BaseTitle>
            <BaseBox mr={'my-3'} style={{ display: 'flex' }} boxGapVariant={'g-2'}>
                <WrapperInput
                    positionLabel={'left'}
                    id={'BaseCheckbox'}
                    label={'BaseCheckbox'}
                    message={{
                        text: 'BaseCheckbox',
                    }}
                >
                    <BaseCheckbox />
                </WrapperInput>
                <WrapperInput
                    blocked
                    positionLabel={'right'}
                    id={'SubmitCheckbox'}
                    label={'SubmitCheckbox'}
                    message={{
                        text: 'SubmitCheckbox',
                    }}
                >
                    <SubmitCheckbox isLoading />
                </WrapperInput>
                <WrapperInput
                    blocked
                    positionLabel={'right'}
                    id={'SubmitCheckbox_dis'}
                    label={'SubmitCheckbox_dis'}
                    message={{
                        text: 'SubmitCheckbox_dis',
                    }}
                >
                    <SubmitCheckbox isLoading disabled />
                </WrapperInput>
            </BaseBox>
            <BaseTitle>Label switch</BaseTitle>
            <BaseBox mr={'my-3'} style={{ display: 'flex' }} boxGapVariant={'g-2'}>
                <WrapperInput
                    positionLabel={'right'}
                    id={'BaseSwitch'}
                    label={'BaseSwitch'}
                    message={{
                        text: 'BaseSwitch',
                    }}
                >
                    <BaseSwitch />
                </WrapperInput>
                <WrapperInput
                    blocked
                    positionLabel={'right'}
                    id={'SubmitSwitch'}
                    label={'SubmitSwitch'}
                    message={{
                        text: 'SubmitSwitch',
                    }}
                >
                    <SubmitSwitch isLoading />
                </WrapperInput>
                <WrapperInput
                    blocked
                    positionLabel={'right'}
                    id={'SubmitSwitch_dis'}
                    label={'SubmitSwitch_dis'}
                    message={{
                        text: 'SubmitSwitch_dis',
                    }}
                >
                    <SubmitSwitch isLoading disabled />
                </WrapperInput>
            </BaseBox>

            <BaseTitle>Label switch</BaseTitle>
            <BaseBox mr={'my-3'} style={{ display: 'flex' }} boxGapVariant={'g-2'}>
                <WrapperInput
                    positionLabel={'top'}
                    id={'BaseSwitch'}
                    label={'BaseSwitch'}
                    message={{
                        text: 'BaseSwitch',
                    }}
                >
                    <BaseSlider defaultValue={[20, 70]} max={100} step={1} />
                </WrapperInput>
                <WrapperInput
                    blocked
                    positionLabel={'top'}
                    id={'SubmitSwitch'}
                    label={'SubmitSwitch'}
                    message={{
                        text: 'SubmitSwitch',
                    }}
                >
                    <BaseSlider />
                </WrapperInput>

                <WrapperInput
                    positionLabel={'top'}
                    id={'SubmitSwitch'}
                    label={'SubmitSwitch'}
                    message={{
                        text: 'SubmitSwitch',
                    }}
                    style={{ width: '200px' }}
                >
                    <BaseTextarea />
                </WrapperInput>
            </BaseBox>
            <WrapperInput
                positionLabel={'top'}
                required
                mr={'m-11'}
                id={'SubmitSwitch'}
                label={'SubmitSwitch'}
                message={{
                    text: 'SubmitSwitch jfrheui ghreh grhg hrehg kerhk hrjkgh krewhrkhj wkljh klwej hkljw',
                }}
                // style={{ width: '400px' }}
            >
                <BaseTextarea />
            </WrapperInput>
        </BaseBox>
    );
}

export default WrapperItem;
