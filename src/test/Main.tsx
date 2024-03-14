import {
    BaseBox,
    BaseButton,
    BaseCheckbox,
    BaseInput,
    BaseSlider,
    BaseSwitch,
    BaseTextField,
    Icon,
    RootTextField,
    SimpleBox,
    SimpleButton,
    SimpleTextField,
    SubmitCheckbox,
    SubmitSwitch,
    SubmitTextField,
} from '@src/lib';
import { useState } from 'react';

function Main() {
    const [val, setVal] = useState(false);

    return (
        <div>
            <BaseSlider
                mr={'m-5'}
                width={'300px'}
                onValueChange={(e) => console.log(e)}
                defaultValue={[20, 50]}
                max={200}
            />
            <BaseSlider mr={'m-5'} colorVariant={'info'} defaultValue={[20]} max={200} />
            <BaseSlider mr={'m-5'} colorVariant={'success'} defaultValue={[20]} max={200} />
            <BaseSlider mr={'m-5'} colorVariant={'error'} defaultValue={[20]} max={200} />
            <button style={{ padding: '2px 10px', height: '50px' }}>test</button>
            <BaseButton>test</BaseButton>
            <BaseButton colorVariant={'success'}>test</BaseButton>
            <BaseButton variant={'outlined'}>test</BaseButton>
            <SimpleButton variant={'text'}>test</SimpleButton>
            <SimpleButton variant={'outlined'} mr={'m-5'} colorVariant={'success'} icon={<Icon.Gear />}>
                Yesttrerey
            </SimpleButton>
            <SimpleButton
                variant={'outlined'}
                mr={'m-5'}
                sizeVariant={'M'}
                colorVariant={'success'}
                icon={<Icon.Gear />}
            >
                Yesttrerey
            </SimpleButton>
            <SimpleButton
                variant={'outlined'}
                disabled
                style={{ width: '300px' }}
                mr={'m-5'}
                colorVariant={'success'}
                icon={<Icon.Gear />}
            >
                Yesttrereyr
            </SimpleButton>
            <SimpleButton
                variant={'outlined'}
                position="right"
                style={{ width: '300px' }}
                mr={'m-5'}
                colorVariant={'success'}
                icon={<Icon.Gear />}
            >
                Yesttrerey
            </SimpleButton>
            <SimpleButton
                variant={'outlined'}
                iconPosition={'right'}
                position="left"
                style={{ width: '300px' }}
                mr={'m-5'}
                colorVariant={'success'}
                icon={<Icon.Gear />}
            >
                Yesttrerey
            </SimpleButton>
            <SimpleButton variant={'contained'} disabled mr={'m-5'} colorVariant={'success'} icon={<Icon.Gear />}>
                Yesttrerey
            </SimpleButton>
            <SimpleButton
                variant={'contained'}
                style={{ width: '300px' }}
                mr={'m-5'}
                colorVariant={'success'}
                icon={<Icon.Gear />}
            >
                Yesttrereyr
            </SimpleButton>
            <SimpleButton
                variant={'contained'}
                position="right"
                style={{ width: '300px' }}
                mr={'m-5'}
                colorVariant={'success'}
                icon={<Icon.Gear />}
            >
                Yesttrerey
            </SimpleButton>
            <SimpleButton
                variant={'contained'}
                iconPosition={'right'}
                position="left"
                style={{ width: '300px' }}
                mr={'m-5'}
                colorVariant={'success'}
                icon={<Icon.Gear />}
            >
                Yesttrerey
            </SimpleButton>
            <SimpleButton variant={'text'} disabled mr={'m-5'} colorVariant={'success'} icon={<Icon.Gear />}>
                Yesttrerey
            </SimpleButton>
            <SimpleButton
                variant={'text'}
                style={{ width: '300px' }}
                mr={'m-5'}
                colorVariant={'success'}
                icon={<Icon.Gear />}
            >
                Yesttrereyr
            </SimpleButton>
            <SimpleButton
                variant={'text'}
                position="right"
                style={{ width: '300px' }}
                mr={'m-5'}
                colorVariant={'success'}
                icon={<Icon.Gear />}
            >
                Yesttrerey
            </SimpleButton>
            <SimpleButton
                variant={'text'}
                iconPosition={'right'}
                position="left"
                style={{ width: '300px' }}
                mr={'m-5'}
                colorVariant={'success'}
                icon={<Icon.Chat secondColor={'#f45455'} color={'#65867586'} />}
            >
                Yesttrerey
            </SimpleButton>
            <SimpleButton
                variant={'text'}
                iconPosition={'right'}
                disabled
                position="left"
                style={{ width: '300px' }}
                mr={'m-5'}
                colorVariant={'success'}
                icon={<Icon.Chat secondColor={'#f45455'} color={'#65867586'} />}
            >
                Yesttrerey
            </SimpleButton>
            <Icon.CallMe mr={'m-4'} sizeVariant={'M'} />
            <Icon.Chat mr={'m-4'} color={'#65867586'} />
            <BaseTextField mr={'m-5'} color={'#65867586'} sizeVariant={'M'} placeholder={'!!!Text ggYY'} />
            <BaseTextField mr={'m-5'} color={'#65867586'} disabled={true} placeholder={'!!!Text ggYY'} />
            <BaseTextField mr={'m-5'} colorVariant={'success'} placeholder={'!!!Text ggYY'} />
            <div style={{ display: 'flex' }}>
                <SimpleTextField
                    mr={'m-5'}
                    color={'#c04615e6'}
                    icon={<Icon.Gear color={'#65867586'} />}
                    placeholder={'!!!Text ggYY'}
                />

                <SimpleTextField mr={'m-5'} color={'#c04615e6'} disabled={true} placeholder={'!!!Text ggYY'} />
                <SimpleTextField mr={'m-5'} color={'#c04615e6'} colorVariant={'success'} placeholder={'!!!Text ggYY'} />
                <SimpleTextField mr={'m-5'} icon={<Icon.Gear />} placeholder={'!!!Text ggYY'} />
            </div>
            <div>
                <SimpleTextField
                    mr={'m-5'}
                    color={'#65867586'}
                    iconPosition={'right'}
                    sizeVariant={'M'}
                    icon={<Icon.Gear />}
                    placeholder={'!!!Text ggYY'}
                />
                <SimpleTextField
                    mr={'m-5'}
                    sizeVariant={'M'}
                    icon={<Icon.Gear />}
                    colorVariant={'success'}
                    placeholder={'!!!Text ggYY'}
                />
            </div>
            SubmitTextField
            <SubmitTextField
                isLoading={true}
                mr={'m-5'}
                style={{ padding: '30px' }}
                iconPosition="right"
                icon={val ? <Icon.CallMe /> : <Icon.Gear />}
                sizeVariant={'L'}
                placeholder={'!!!Text ggYY'}
                iconOnClick={() => setVal(!val)}
            />
            <SubmitTextField
                isLoading={false}
                mr={'m-5'}
                iconPosition="right"
                colorVariant={'success'}
                icon={val ? <Icon.CallMe /> : <Icon.Gear />}
                sizeVariant={'L'}
                placeholder={'!!!Text ggYY'}
                iconOnClick={() => setVal(!val)}
            />
            <SubmitTextField
                isLoading={true}
                mr={'m-5'}
                iconPosition="right"
                colorVariant={'success'}
                icon={val ? <Icon.CallMe /> : <Icon.Gear />}
                sizeVariant={'L'}
                placeholder={'!!!Text ggYY'}
                iconOnClick={() => setVal(!val)}
            />
            <SubmitTextField
                isLoading={true}
                mr={'m-5'}
                disabled
                colorVariant={'success'}
                icon={val ? <Icon.CallMe /> : <Icon.Gear />}
                sizeVariant={'M'}
                placeholder={'!!!Text ggYY'}
                iconOnClick={() => setVal(!val)}
            />
            <div style={{ display: 'flex' }}>
                <BaseCheckbox mr={'m-5'} />
                <BaseCheckbox sizeVariant={'M'} colorVariant={'success'} mr="m-5" />
                <BaseCheckbox checked disabled mr={'m-5'} />
            </div>
            <div style={{ display: 'flex' }}>
                <SubmitCheckbox isLoading={false} mr={'m-5'} />
                <SubmitCheckbox sizeVariant={'M'} isLoading={true} mr={'m-5'} />
                <SubmitCheckbox isLoading={true} colorVariant={'success'} mr="m-5" />
                <SubmitCheckbox isLoading={true} checked disabled mr={'m-5'} />
            </div>
            <div style={{ display: 'flex' }}>
                <BaseSwitch mr={'m-5'} />
                <BaseSwitch mr={'m-5'} colorVariant={'success'} />
                <BaseSwitch mr={'m-5'} sizeVariant={'M'} />
                <BaseSwitch mr={'m-5'} disabled colorVariant={'success'} />
                <BaseSwitch mr={'m-5'} disabled sizeVariant={'M'} />
            </div>
            SubmitSwitch
            <div style={{ display: 'flex' }}>
                <SubmitSwitch mr={'m-5'} isLoading={true} />
                <SubmitSwitch checked mr={'m-5'} isLoading={true} colorVariant={'success'} />
                <SubmitSwitch mr={'m-5'} isLoading={true} sizeVariant={'M'} />
                <SubmitSwitch mr={'m-5'} isLoading={false} disabled colorVariant={'success'} />
                <SubmitSwitch mr={'m-5'} isLoading={true} disabled sizeVariant={'M'} />
            </div>
            <BaseBox mr={'m-5'} boxWidthVariant={'w-3'} boxPaddingVariant={'p-3'} boxGapVariant={'g-3'}>
                base Box
                <SubmitTextField
                    isLoading={true}
                    // mr={'m-5'}
                    // style={{ width: '200px' }}

                    iconPosition="right"
                    icon={val ? <Icon.CallMe /> : <Icon.Gear />}
                    sizeVariant={'L'}
                    placeholder={'!!!Text ggYY'}
                    // iconOnClick={() => setVal(!val)}
                />
                <SubmitTextField
                    isLoading={false}
                    // mr={'m-5'}
                    // style={{ width: '200px' }}
                    colorVariant={'success'}
                    iconPosition="right"
                    icon={val ? <Icon.CallMe /> : <Icon.Gear />}
                    sizeVariant={'L'}
                    placeholder={'!!!Text ggYY'}
                    // iconOnClick={() => setVal(!val)}
                />
            </BaseBox>
            <SimpleBox
                mr={'m-5'}
                boxWidthVariant={'w-3'}
                boxPaddingVariant={'p-3'}
                boxGapVariant={'g-3'}
                boxRadiusVariant={'br-2'}
                boxShadowVariant={'shd-1'}
                boxBorderColor={'#ff00dd'}
            >
                <SubmitTextField
                    isLoading={true}
                    iconPosition="right"
                    icon={val ? <Icon.CallMe /> : <Icon.Gear />}
                    sizeVariant={'L'}
                    placeholder={'!!!Text ggYY'}
                />

                <SubmitTextField
                    isLoading={false}
                    colorVariant={'success'}
                    iconPosition="right"
                    icon={val ? <Icon.CallMe /> : <Icon.Gear />}
                    sizeVariant={'L'}
                    placeholder={'!!!Text ggYY'}
                />
            </SimpleBox>
            <SimpleBox
                mr={'m-5'}
                boxWidthVariant={'w-3'}
                boxPaddingVariant={'p-3'}
                boxGapVariant={'g-3'}
                boxRadiusVariant={'br-2'}
                boxShadowVariant={'shd-2'}
                boxShadowColor={'#ff00dd'}
            >
                <SubmitTextField
                    isLoading={true}
                    iconPosition="right"
                    icon={val ? <Icon.CallMe /> : <Icon.Gear />}
                    sizeVariant={'L'}
                    placeholder={'!!!Text ggYY'}
                />

                <SubmitTextField
                    isLoading={false}
                    colorVariant={'success'}
                    iconPosition="right"
                    icon={val ? <Icon.CallMe /> : <Icon.Gear />}
                    sizeVariant={'L'}
                    placeholder={'!!!Text ggYY'}
                />
            </SimpleBox>
        </div>
    );
}

export default Main;
