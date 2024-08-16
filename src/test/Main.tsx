import { useState } from 'react';
import Buttons from './Buttons';
import Inputs from './Inputs';
import Checkbox from './Checkbox';
import Slider from './Slider';
import Colors from './Colors';
import Select from './Select';
import DialogTooltip from './DialogTooltip';
import Box from './Box';
import Text from './Text';
import Icons from './Icons';
import Avatar from './Avatar';
import { BaseLayout } from '@src/lib';
import WrapperItem from './WrapperItem';
import Tab from '@src/test/Tab.tsx';

// const Wrapper = ({children}: any) => {
//     const colors = useColorScheme();
//     const { changeColorTheme, themeColorName } = useContext<any>(ThemeContext);

//     return <BaseBox style={{ paddingBottom: '300px', background: colors.background }}>
// <SimpleButton onClick={() => changeColorTheme(themeColorName === 'light' ? 'dark' : 'light')}>Change thame</SimpleButton>
// {children}
//     </BaseBox>
// }

function Main() {
    const [val, setVal] = useState(<Checkbox />);
    // const [valTheme, setValTheme] = useState<'light' | 'dark'>('light');

    const handler = (val: string) => {
        switch (val) {
            case 'btn':
                setVal(<Buttons />);
                break;
            case 'inp':
                setVal(<Inputs />);
                break;
            case 'check':
                setVal(<Checkbox />);
                break;
            case 'slider':
                setVal(<Slider />);
                break;
            case 'colors':
                setVal(<Colors />);
                break;
            case 'select':
                setVal(<Select />);
                break;
            case 'dialog':
                setVal(<DialogTooltip />);
                break;
            case 'box':
                setVal(<Box />);
                break;
            case 'text':
                setVal(<Text />);
                break;
            case 'icons':
                setVal(<Icons />);
                break;
            case 'ava':
                setVal(<Avatar />);
                break;
            case 'wrapper':
                setVal(<WrapperItem />);
                break;
            case 'tab':
                setVal(<Tab />);
                break;
        }
    };

    return (
        <BaseLayout>
            <div style={{ display: 'flex' }}>
                <button onClick={() => handler('btn')}>buttons</button>
                <button onClick={() => handler('inp')}>inputs</button>
                <button onClick={() => handler('check')}>Checkbox Switch</button>
                <button onClick={() => handler('slider')}>Slider</button>
                <button onClick={() => handler('select')}>Select Popup</button>
                <button onClick={() => handler('dialog')}>Dialog tooltip</button>
                <button onClick={() => handler('box')}>Box</button>
                <button onClick={() => handler('text')}>Text</button>
                <button onClick={() => handler('colors')}>Colors</button>
                <button onClick={() => handler('icons')}>Icons</button>
                <button onClick={() => handler('ava')}>Avatar</button>
                <button onClick={() => handler('wrapper')}>WrapperItem</button>
                <button onClick={() => handler('tab')}>Tab</button>
            </div>
            <div>{val}</div>
        </BaseLayout>

        // <>
        //     <div>
        //     <Icon.Settings />
        //     <Icon.Chat />
        //
        //     <Icon.BaseCheck />
        //     <SimpleButton onClick={() => setLoading(!loading)} mr={'m-2'} icon={<Icon.Settings />} colorVariant={'info'}>
        //                 ON
        //     </SimpleButton>
        //     <SubmitButton mr={'m-12'} isLoading={loading} color={'#d35959'} variant={'outlined'} position={'left'} style={{width: '300px'}} colorVariant={'warning'} icon={<Icon.Settings />}>
        //             SubmitButton isLoading
        //             </SubmitButton>
        //     <SubmitButton mr={'m-12'} isLoading={loading} position={'center'} iconPosition={'right'} style={{width: '300px'}} colorVariant={'warning'} icon={<Icon.Settings color={'#d35959'} />}>
        //     SubmitButton isLoading
        //     </SubmitButton>

        //     <SubmitButton mr={'m-12'} isLoading={loading} position={'right'} iconPosition={'right'} style={{width: '300px'}} colorVariant={'warning'} icon={<Icon.Settings />}>
        //     SubmitButton isLoading
        //     </SubmitButton>

        //         <div style={{ display: 'flex' }}>
        //             <SimpleButton
        //                 mr={'m-2'}
        //                 icon={<Icon.Settings />}
        //                 style={{ width: '250px', borderRadius: '20px' }}
        //                 position={'left'}
        //                 iconPosition={'right'}
        //             >
        //                 Test
        //             </SimpleButton>
        //             <SimpleButton mr={'m-2'} icon={<Icon.Settings />} colorVariant={'info'}>
        //                 Test
        //             </SimpleButton>
        //             <SimpleButton mr={'m-2'} icon={<Icon.Settings />} colorVariant={'warning'}>
        //                 Test
        //             </SimpleButton>
        //             <SimpleButton mr={'m-2'} colorVariant={'success'} icon={<Icon.Settings />}>
        //                 Test
        //             </SimpleButton>
        //             <SimpleButton mr={'m-2'} colorVariant={'error'} icon={<Icon.Settings />}>
        //                 Test
        //             </SimpleButton>
        //         </div>
        //         <div style={{ display: 'flex' }}>
        //             <SimpleButton variant={'outlined'} mr={'m-2'} icon={<Icon.Settings />}>
        //                 Test
        //             </SimpleButton>
        //             <SimpleButton mr={'m-2'} variant={'outlined'} icon={<Icon.Settings />} colorVariant={'info'}>
        //                 Test
        //             </SimpleButton>
        //             <SimpleButton mr={'m-2'} variant={'outlined'} icon={<Icon.Settings />} colorVariant={'warning'}>
        //                 Test
        //             </SimpleButton>
        //             <SimpleButton mr={'m-2'} variant={'outlined'} colorVariant={'success'} icon={<Icon.Settings />}>
        //                 Test
        //             </SimpleButton>
        //             <SimpleButton mr={'m-2'} variant={'outlined'} colorVariant={'error'} icon={<Icon.Settings />}>
        //                 Test
        //             </SimpleButton>
        //         </div>
        //         <div style={{ display: 'flex' }}>
        //             <SimpleButton variant={'outlined'} mr={'m-2'} icon={<Icon.Settings />} sizeVariant={'M'}>
        //                 Test
        //             </SimpleButton>
        //             <SimpleButton
        //                 mr={'m-2'}
        //                 variant={'outlined'}
        //                 icon={<Icon.Settings />}
        //                 colorVariant={'info'}
        //                 sizeVariant={'M'}
        //             >
        //                 Test
        //             </SimpleButton>
        //             <SimpleButton
        //                 mr={'m-2'}
        //                 variant={'outlined'}
        //                 icon={<Icon.Settings />}
        //                 colorVariant={'warning'}
        //                 sizeVariant={'M'}
        //             >
        //                 Test
        //             </SimpleButton>
        //             <SimpleButton
        //                 mr={'m-2'}
        //                 variant={'outlined'}
        //                 colorVariant={'success'}
        //                 icon={<Icon.Settings />}
        //                 sizeVariant={'M'}
        //             >
        //                 Test
        //             </SimpleButton>
        //             <SimpleButton
        //                 mr={'m-2'}
        //                 variant={'outlined'}
        //                 colorVariant={'error'}
        //                 icon={<Icon.Settings />}
        //                 sizeVariant={'M'}
        //             >
        //                 Test
        //             </SimpleButton>
        //         </div>

        //         <div>
        //             <SimpleTextField mr={'m-5'} icon={<Icon.Settings />} placeholder={'!!!Text ggYY'} disabled />
        //             <SimpleTextField
        //                 mr={'m-5'}
        //                 color={'#65867586'}
        //                 iconPosition={'right'}
        //                 sizeVariant={'M'}
        //                 icon={<Icon.Settings />}
        //                 placeholder={'!!!Text ggYY'}
        //             />
        //             <SimpleTextField
        //                 mr={'m-5'}
        //                 color={'#65867586'}
        //                 iconPosition={'right'}
        //                 sizeVariant={'M'}
        //                 icon={<Icon.Settings />}
        //                 placeholder={'!!!Text ggYY'}
        //             />
        //             <SimpleTextField
        //                 mr={'m-5'}
        //                 color={'#65867586'}
        //                 iconPosition={'right'}
        //                 sizeVariant={'M'}
        //                 icon={<Icon.Settings />}
        //                 placeholder={'!!!Text ggYY'}
        //             />
        //             <SimpleTextField
        //                 mr={'m-5'}
        //                 color={'#65867586'}
        //                 iconPosition={'right'}
        //                 sizeVariant={'M'}
        //                 icon={<Icon.Settings />}
        //                 placeholder={'!!!Text ggYY'}
        //             />
        //         </div>
        //     </div>

        //     <div>
        //         {/* <SimpleSelectContent colorVariant={'success'} placeholder={'Test select'} mr={'m-4'}>
        //             <SimpleSelectItem value="1">value_1</SimpleSelectItem>
        //             <SimpleSelectItem value="2">value_2</SimpleSelectItem>
        //             <SimpleSelectItem value="3">value_3</SimpleSelectItem>
        //             <SimpleSelectItem value="4">value_4</SimpleSelectItem>
        //             <SimpleSelectItem value="5">value_5</SimpleSelectItem>
        //             <SimpleSelectItem value="6">value_1</SimpleSelectItem>
        //             <SimpleSelectItem value="7">value_2</SimpleSelectItem>
        //             <SimpleSelectItem value="8">value_3</SimpleSelectItem>
        //             <SimpleSelectItem value="9">value_4</SimpleSelectItem>
        //         </SimpleSelectContent>
        //         <SimpleSelectContent
        //             style={{ width: '200px' }}
        //             colorVariant={'success'}
        //             placeholder={'Test select'}
        //             mr={'m-12'}
        //         >
        //             <SimpleSelectItem value="1">value_1</SimpleSelectItem>
        //             <SimpleSelectItem value="2">value_2</SimpleSelectItem>
        //             <SimpleSelectItem value="3">value_3</SimpleSelectItem>
        //             <SimpleSelectItem value="4">value_4</SimpleSelectItem>
        //             <SimpleSelectItem value="5">value_5</SimpleSelectItem>
        //             <SimpleSelectItem value="6">value_1</SimpleSelectItem>
        //             <SimpleSelectItem value="7">value_2</SimpleSelectItem>
        //             <SimpleSelectItem value="8">value_3</SimpleSelectItem>
        //             <SimpleSelectItem value="9">value_4</SimpleSelectItem>
        //         </SimpleSelectContent>
        //         <SimpleSelectContent colorVariant={'success'} placeholder={'Test select'} mr={'m-12'}>
        //             <SimpleSelectItem value="1">value_1</SimpleSelectItem>
        //             <SimpleSelectItem value="2">value_2</SimpleSelectItem>
        //             <SimpleSelectItem value="3">value_3</SimpleSelectItem>
        //             <SimpleSelectItem value="4">value_4</SimpleSelectItem>
        //             <SimpleSelectItem value="5">value_5</SimpleSelectItem>
        //             <SimpleSelectItem value="6">value_1</SimpleSelectItem>
        //             <SimpleSelectItem value="7">value_2</SimpleSelectItem>
        //             <SimpleSelectItem value="8">value_3</SimpleSelectItem>
        //             <SimpleSelectItem value="9">value_4</SimpleSelectItem>
        //         </SimpleSelectContent> */}
        //         <BaseTooltip
        //         tooltip={'Копокпр пршеор'}
        //         >
        //             <SimpleButton colorVariant={'success'} icon={<Icon.Settings />}>
        //             BaseTooltip
        //             </SimpleButton>
        //         </BaseTooltip>
        //         <SimpleTooltip
        //         tooltip={'Копокпр пршеор 1'}
        //         >
        //             <SubmitButton isLoading={true} colorVariant={'warning'} icon={<Icon.Settings />}>
        //             SubmitButton
        //             </SubmitButton>
        //         </SimpleTooltip>

        //             <SubmitButton disabled isLoading={true} colorVariant={'warning'} icon={<Icon.Settings />}>
        //             SubmitButton disabled isLoading
        //             </SubmitButton>
        //             <SubmitButton disabled isLoading={false} colorVariant={'warning'} icon={<Icon.Settings />}>
        //             SubmitButton disabled isLoading false
        //             </SubmitButton>

        //         <BaseSlider
        //             mr={'m-5'}
        //             width={'300px'}
        //             onValueChange={(e) => console.log(e)}
        //             defaultValue={[20, 50]}
        //             max={200}
        //         />
        //         <BaseSlider mr={'m-5'} colorVariant={'info'} defaultValue={[20]} max={200} />
        //         <BaseSlider mr={'m-5'} colorVariant={'success'} defaultValue={[20]} max={200} />
        //         <BaseSlider mr={'m-5'} colorVariant={'error'} defaultValue={[20]} max={200} />
        //         <button style={{ padding: '2px 10px', height: '50px' }}>test</button>
        //         <BaseButton>test</BaseButton>
        //         <BaseButton colorVariant={'success'}>test</BaseButton>
        //         <BaseButton variant={'outlined'}>test</BaseButton>
        //         <SimpleButton variant={'text'}>test</SimpleButton>
        //         <SimpleButton variant={'outlined'} mr={'m-5'} colorVariant={'success'} icon={<Icon.Settings />}>
        //             Yesttrerey
        //         </SimpleButton>
        //         <SimpleButton
        //             variant={'outlined'}
        //             mr={'m-5'}
        //             sizeVariant={'M'}
        //             colorVariant={'success'}
        //             icon={<Icon.Settings />}
        //         >
        //             Yesttrerey
        //         </SimpleButton>
        //         <SimpleButton
        //             variant={'outlined'}
        //             disabled
        //             style={{ width: '300px' }}
        //             mr={'m-5'}
        //             colorVariant={'success'}
        //             icon={<Icon.Settings />}
        //         >
        //             Yesttrereyr
        //         </SimpleButton>
        //         <SimpleButton
        //             variant={'outlined'}
        //             position="right"
        //             style={{ width: '300px' }}
        //             mr={'m-5'}
        //             colorVariant={'success'}
        //             icon={<Icon.Settings />}
        //         >
        //             Yesttrerey
        //         </SimpleButton>
        //         <SimpleButton
        //             variant={'outlined'}
        //             iconPosition={'right'}
        //             position="left"
        //             style={{ width: '300px' }}
        //             mr={'m-5'}
        //             colorVariant={'success'}
        //             icon={<Icon.Settings />}
        //         >
        //             Yesttrerey
        //         </SimpleButton>
        //         <SimpleButton variant={'contained'} disabled mr={'m-5'} colorVariant={'success'} icon={<Icon.Settings />}>
        //             Yesttrerey
        //         </SimpleButton>
        //         <SimpleButton
        //             variant={'contained'}
        //             style={{ width: '300px' }}
        //             mr={'m-5'}
        //             colorVariant={'success'}
        //             icon={<Icon.Settings />}
        //         >
        //             Yesttrereyr
        //         </SimpleButton>
        //         <SimpleButton
        //             variant={'contained'}
        //             position="right"
        //             style={{ width: '300px' }}
        //             mr={'m-5'}
        //             colorVariant={'success'}
        //             icon={<Icon.Settings />}
        //         >
        //             Yesttrerey
        //         </SimpleButton>
        //         <SimpleButton
        //             variant={'contained'}
        //             iconPosition={'right'}
        //             position="left"
        //             style={{ width: '300px' }}
        //             mr={'m-5'}
        //             colorVariant={'success'}
        //             icon={<Icon.Settings />}
        //         >
        //             Yesttrerey
        //         </SimpleButton>
        //         <SimpleButton variant={'text'} disabled mr={'m-5'} colorVariant={'success'} icon={<Icon.Settings />}>
        //             Yesttrerey
        //         </SimpleButton>
        //         <SimpleButton
        //             variant={'text'}
        //             style={{ width: '300px' }}
        //             mr={'m-5'}
        //             colorVariant={'success'}
        //             icon={<Icon.Settings />}
        //         >
        //             Yesttrereyr
        //         </SimpleButton>
        //         {/* <SimpleSelectContent>
        //             <SimpleSelectItem value="1">value_1</SimpleSelectItem>
        //             <SimpleSelectItem value="2">value_2</SimpleSelectItem>
        //             <SimpleSelectItem value="3">value_3</SimpleSelectItem>
        //             <SimpleSelectItem value="4">value_4</SimpleSelectItem>
        //             <SimpleSelectItem value="5">value_5</SimpleSelectItem>
        //             <SimpleSelectItem value="6">value_1</SimpleSelectItem>
        //             <SimpleSelectItem value="7">value_2</SimpleSelectItem>
        //             <SimpleSelectItem value="8">value_3</SimpleSelectItem>
        //             <SimpleSelectItem value="9">value_4</SimpleSelectItem>
        //             <SimpleSelectItem value="10">value_5</SimpleSelectItem>
        //             <SimpleSelectItem value="11">value_1</SimpleSelectItem>
        //             <SimpleSelectItem value="12">value_2</SimpleSelectItem>
        //             <SimpleSelectItem value="13">value_3</SimpleSelectItem>
        //             <SimpleSelectItem value="14">value_4</SimpleSelectItem>
        //             <SimpleSelectItem value="15">value_5</SimpleSelectItem>
        //             <SimpleSelectItem value="16">value_1</SimpleSelectItem>
        //             <SimpleSelectItem value="17">value_2</SimpleSelectItem>
        //             <SimpleSelectItem value="18">value_3</SimpleSelectItem>
        //             <SimpleSelectItem value="19">value_4</SimpleSelectItem>
        //             <SimpleSelectItem value="20">value_5</SimpleSelectItem>
        //         </SimpleSelectContent> */}
        //         <SimpleButton
        //             variant={'text'}
        //             position="right"
        //             style={{ width: '300px' }}
        //             mr={'m-5'}
        //             colorVariant={'success'}
        //             icon={<Icon.Settings />}
        //         >
        //             Yesttrerey
        //         </SimpleButton>
        //         <SimpleButton
        //             variant={'text'}
        //             iconPosition={'right'}
        //             position="left"
        //             style={{ width: '300px' }}
        //             mr={'m-5'}
        //             colorVariant={'success'}
        //             icon={<Icon.Chat secondColor={'#f45455'} color={'#65867586'} />}
        //         >
        //             Yesttrerey
        //         </SimpleButton>
        //         <SimpleButton
        //             variant={'text'}
        //             iconPosition={'right'}
        //             disabled
        //             position="left"
        //             style={{ width: '300px' }}
        //             mr={'m-5'}
        //             colorVariant={'success'}
        //             icon={<Icon.Chat secondColor={'#f45455'} color={'#65867586'} />}
        //         >
        //             Yesttrerey
        //         </SimpleButton>
        //         <Icon.Phone mr={'m-4'} sizeVariant={'M'} />
        //         <Icon.Chat mr={'m-4'} color={'#65867586'} />
        //         <BaseTextField mr={'m-5'} color={'#65867586'} sizeVariant={'M'} placeholder={'!!!Text ggYY'} />
        //         <BaseTextField mr={'m-5'} color={'#65867586'} disabled={true} placeholder={'!!!Text ggYY'} />
        //         <BaseTextField mr={'m-5'} colorVariant={'success'} placeholder={'!!!Text ggYY'} />
        //         <div style={{ display: 'flex' }}>
        //             <SimpleTextField
        //                 mr={'m-5'}
        //                 color={'#c04615e6'}
        //                 icon={<Icon.Settings color={'#65867586'} />}
        //                 placeholder={'!!!Text ggYY'}
        //             />

        //             <SimpleTextField mr={'m-5'} color={'#c04615e6'} disabled={true} placeholder={'!!!Text ggYY'} />
        //             <SimpleTextField
        //                 mr={'m-5'}
        //                 color={'#c04615e6'}
        //                 colorVariant={'success'}
        //                 placeholder={'!!!Text ggYY'}
        //             />
        //             <SimpleTextField mr={'m-5'} icon={<Icon.Settings />} placeholder={'!!!Text ggYY'} />
        //         </div>
        //         <div>
        //             <SimpleTextField
        //                 mr={'m-5'}
        //                 color={'#65867586'}
        //                 iconPosition={'right'}
        //                 sizeVariant={'M'}
        //                 icon={<Icon.Settings />}
        //                 placeholder={'!!!Text ggYY'}
        //             />
        //             <SimpleTextField
        //                 mr={'m-5'}
        //                 sizeVariant={'M'}
        //                 icon={<Icon.Settings />}
        //                 colorVariant={'success'}
        //                 placeholder={'!!!Text ggYY'}
        //             />
        //         </div>
        //         SubmitTextField
        //         <SubmitTextField
        //             isLoading={true}
        //             mr={'m-5'}
        //             style={{ padding: '30px' }}
        //             iconPosition="right"
        //             icon={val ? <Icon.Phone /> : <Icon.Settings />}
        //             sizeVariant={'L'}
        //             placeholder={'!!!Text ggYY'}
        //             iconOnClick={() => setVal(!val)}
        //         />
        //         <SubmitTextField
        //             isLoading={false}
        //             mr={'m-5'}
        //             iconPosition="right"
        //             colorVariant={'success'}
        //             icon={val ? <Icon.Phone /> : <Icon.Settings />}
        //             sizeVariant={'L'}
        //             placeholder={'!!!Text ggYY'}
        //             iconOnClick={() => setVal(!val)}
        //         />
        //         <SubmitTextField
        //             isLoading={true}
        //             mr={'m-5'}
        //             iconPosition="right"
        //             colorVariant={'success'}
        //             icon={val ? <Icon.Phone /> : <Icon.Settings />}
        //             sizeVariant={'L'}
        //             placeholder={'!!!Text ggYY'}
        //             iconOnClick={() => setVal(!val)}
        //         />
        //         <SubmitTextField
        //             isLoading={true}
        //             mr={'m-5'}
        //             disabled
        //             colorVariant={'success'}
        //             icon={val ? <Icon.Phone /> : <Icon.Settings />}
        //             sizeVariant={'M'}
        //             placeholder={'!!!Text ggYY'}
        //             iconOnClick={() => setVal(!val)}
        //         />
        //         <div style={{ display: 'flex' }}>
        //             <BaseCheckbox mr={'m-5'} />
        //             <BaseCheckbox sizeVariant={'M'} colorVariant={'success'} mr="m-5" />
        //             <BaseCheckbox checked disabled mr={'m-5'} />
        //         </div>
        //         <div style={{ display: 'flex' }}>
        //             <SubmitCheckbox isLoading={false} mr={'m-5'} />
        //             <SubmitCheckbox sizeVariant={'M'} isLoading={true} mr={'m-5'} />
        //             <SubmitCheckbox isLoading={true} colorVariant={'success'} mr="m-5" />
        //             <SubmitCheckbox isLoading={true} checked disabled mr={'m-5'} />
        //         </div>
        //         <div style={{ display: 'flex' }}>
        //             <BaseSwitch mr={'m-5'} />
        //             <BaseSwitch mr={'m-5'} colorVariant={'success'} />
        //             <BaseSwitch mr={'m-5'} sizeVariant={'M'} />
        //             <BaseSwitch mr={'m-5'} disabled colorVariant={'success'} />
        //             <BaseSwitch mr={'m-5'} disabled sizeVariant={'M'} />
        //         </div>
        //         SubmitSwitch
        //         <div style={{ display: 'flex' }}>
        //             <SubmitSwitch mr={'m-5'} isLoading={true} />
        //             <SubmitSwitch checked mr={'m-5'} isLoading={true} colorVariant={'success'} />
        //             <SubmitSwitch mr={'m-5'} isLoading={true} sizeVariant={'M'} />
        //             <SubmitSwitch mr={'m-5'} isLoading={false} disabled colorVariant={'success'} />
        //             <SubmitSwitch mr={'m-5'} isLoading={true} disabled sizeVariant={'M'} />
        //         </div>
        //         <BaseBox mr={'m-5'} boxWidthVariant={'w-3'} boxPaddingVariant={'p-3'} boxGapVariant={'g-3'}>
        //             base Box
        //             <SubmitTextField
        //                 isLoading={true}
        //                 // mr={'m-5'}
        //                 // style={{ width: '200px' }}

        //                 iconPosition="right"
        //                 icon={val ? <Icon.Phone /> : <Icon.Settings />}
        //                 sizeVariant={'L'}
        //                 placeholder={'!!!Text ggYY'}
        //                 // iconOnClick={() => setVal(!val)}
        //             />
        //             <SubmitTextField
        //                 isLoading={false}
        //                 // mr={'m-5'}
        //                 // style={{ width: '200px' }}
        //                 colorVariant={'success'}
        //                 iconPosition="right"
        //                 icon={val ? <Icon.Phone /> : <Icon.Settings />}
        //                 sizeVariant={'L'}
        //                 placeholder={'!!!Text ggYY'}
        //                 // iconOnClick={() => setVal(!val)}
        //             />
        //         </BaseBox>
        //         <SimpleBox
        //             mr={'m-5'}
        //             boxWidthVariant={'w-3'}
        //             boxPaddingVariant={'p-3'}
        //             boxGapVariant={'g-3'}
        //             boxRadiusVariant={'br-2'}
        //             boxShadowVariant={'shd-1'}
        //             boxBorderColor={'#ff00dd'}
        //         >
        //             ghrjghjrhgjhrjghjrehgjrhejgh
        //             <SubmitTextField
        //                 isLoading={true}
        //                 iconPosition="right"
        //                 icon={val ? <Icon.Phone /> : <Icon.Settings />}
        //                 sizeVariant={'L'}
        //                 placeholder={'!!!Text ggYY'}
        //             />
        //             <SubmitTextField
        //                 isLoading={false}
        //                 colorVariant={'success'}
        //                 iconPosition="right"
        //                 icon={val ? <Icon.Phone /> : <Icon.Settings />}
        //                 sizeVariant={'L'}
        //                 placeholder={'!!!Text ggYY'}
        //             />
        //         </SimpleBox>
        //         <SimpleBox
        //             mr={'m-5'}
        //             boxWidthVariant={'w-3'}
        //             boxPaddingVariant={'p-3'}
        //             boxGapVariant={'g-3'}
        //             boxRadiusVariant={'br-2'}
        //             boxShadowVariant={'shd-2'}
        //             boxShadowColor={'#ff00dd'}
        //         >
        //             <SubmitTextField
        //                 isLoading={true}
        //                 iconPosition="right"
        //                 icon={val ? <Icon.Phone /> : <Icon.Settings />}
        //                 sizeVariant={'L'}
        //                 placeholder={'!!!Text ggYY'}
        //             />

        //             <SubmitTextField
        //                 isLoading={false}
        //                 colorVariant={'success'}
        //                 iconPosition="right"
        //                 icon={val ? <Icon.Phone /> : <Icon.Settings />}
        //                 sizeVariant={'L'}
        //                 placeholder={'!!!Text ggYY'}
        //             />
        //         </SimpleBox>
        //         {/* <ToggleGroupDemo/> */}
        //         {/* <SimpleTooltip
        //             content="This is a tooltip"
        //             mr={'m-12'}
        //             align={'center'}
        //             side={'bottom'}
        //             // sideOffset={0}
        //             collisionPadding={3}
        //             arrowPadding={10}
        //         >
        //             <SimpleButton colorVariant={'success'} icon={<Icon.Settings />}>
        //                 Yesttrereyr
        //             </SimpleButton>
        //         </SimpleTooltip> */}
        //         {/* <SimpleSelectContent
        //             sideOffset={10}
        //             mr={'m-12'}
        //             // value={'2'}
        //             defaultValue={'2'}
        //             placeholder={'Test list'}
        //             width={'200px'}
        //             positionTrigger={'left'}
        //         >
        //             <SimpleSelectGroup title={'1 list'}>
        //                 <SimpleSelectItem value="1">value_1htrhrthrthrthrth</SimpleSelectItem>
        //                 <SimpleSelectItem disabled value="2">
        //                     value_2hrthrthrthrthrthrth
        //                 </SimpleSelectItem>
        //                 <SimpleSelectItem value="3">value_3htrhrthrtht</SimpleSelectItem>
        //                 <SimpleSelectItem value="4">value_4htrhrthrthrth</SimpleSelectItem>
        //                 <SimpleSelectItem value="5">value_5hthrthrthrthrth</SimpleSelectItem>
        //                 <SimpleSelectItem value="6">value_1ghtrhghurthguhrtughrthguhrtu</SimpleSelectItem>
        //             </SimpleSelectGroup>
        //             <SimpleSelectGroup title={'2 list'}>
        //                 <SimpleSelectItem value="7">value_2</SimpleSelectItem>
        //                 <SimpleSelectItem value="8">value_3</SimpleSelectItem>
        //                 <SimpleSelectItem value="9">value_4</SimpleSelectItem>
        //                 <SimpleSelectItem value="10">value_5</SimpleSelectItem>
        //                 <SimpleSelectItem value="11">value_1</SimpleSelectItem>
        //                 <SimpleSelectItem value="12">value_2</SimpleSelectItem>
        //             </SimpleSelectGroup>
        //             <SimpleSelectGroup title={'3 list'}>
        //                 <SimpleSelectItem value="13">value_3</SimpleSelectItem>
        //                 <SimpleSelectItem value="14">value_4</SimpleSelectItem>
        //                 <SimpleSelectItem value="15">value_5</SimpleSelectItem>
        //                 <SimpleSelectItem value="16">value_1</SimpleSelectItem>
        //                 <SimpleSelectItem value="17">value_2</SimpleSelectItem>
        //                 <SimpleSelectItem value="18">value_3</SimpleSelectItem>
        //                 <SimpleSelectItem value="19">value_4</SimpleSelectItem>
        //                 <SimpleSelectItem value="20">value_5</SimpleSelectItem>
        //             </SimpleSelectGroup>
        //         </SimpleSelectContent>
        //         <SimpleSelectContent
        //             // defaultOpen
        //             mr={'m-12'}
        //             placeholder={'Test list'}
        //             width={'300px'}
        //             positionTrigger={'left'}
        //         >
        //             <SimpleSelectItem value="1">value_1htrhrthrthrthrth</SimpleSelectItem>
        //             <SimpleSelectItem value="2">value_2hrthrthrthrthrthrth</SimpleSelectItem>
        //             <SimpleSelectItem value="3">value_3htrhrthrtht</SimpleSelectItem>
        //             <SimpleSelectItem value="4">value_4htrhrthrthrth</SimpleSelectItem>
        //         </SimpleSelectContent>
        //         <SimpleSelectContent
        //             onValueChange={(e) => console.log(e)}
        //             mr={'m-12'}
        //             sizeVariant={'M'}
        //             placeholder={'Test list'}
        //             width={'300px'}
        //             positionTrigger={'left'}
        //         >
        //             <SimpleSelectGroup
        //                 title={
        //                     '1 list gtghkrtj hkrtkh jkrjhkjrt khj jg hrehgjkrhejghjrehgjrhegjkhrejkghjrehgjrhejghrjkeghjrehgjhrejgh'
        //                 }
        //             >
        //                 <SimpleSelectItem disabled value="1">
        //                     value_1htrhrthrthrthrth
        //                 </SimpleSelectItem>
        //                 <SimpleSelectItem disabled value="2">
        //                     value_2hrthrthrthrthrthrth
        //                 </SimpleSelectItem>
        //             </SimpleSelectGroup>
        //             <SimpleSelectGroup title={'1 list gtghkrtj hkrtkh jkrjhkjrt khj'}>
        //                 <SimpleSelectItem value="3">value_3htrhrthrtht</SimpleSelectItem>
        //                 <SimpleSelectItem value="4">value_4htrhrthrthrth</SimpleSelectItem>
        //             </SimpleSelectGroup>
        //         </SimpleSelectContent> */}
        //     </div>

        //     {/* <SimpleButton mr={'m-12'} style={{ width: '100px' }} onClick={() => setOpenM(true)}>
        //         Open
        //     </SimpleButton> */}

        //     {/* <SimpleDialog
        //         overlayBlur={'5px'}

        //         // style={{width: '700px'}}
        //         boxGapVariant={'g-3'}
        //         open={openM}
        //         onOpenChange={setOpenM}
        //     >
        //         <SubmitTextField
        //             isLoading={false}
        //             iconPosition="right"
        //             colorVariant={'success'}
        //             sizeVariant={'L'}
        //             placeholder={'!!!Text ggYY'}
        //         />
        //         <SubmitTextField
        //             isLoading={false}
        //             iconPosition="right"
        //             colorVariant={'success'}
        //             icon={val ? <Icon.Phone /> : <Icon.Settings />}
        //             sizeVariant={'L'}
        //             placeholder={'!!!Text ggYY'}
        //             iconOnClick={() => setVal(!val)}
        //         />
        //         <SubmitTextField
        //             isLoading={false}
        //             iconPosition="right"
        //             colorVariant={'success'}
        //             icon={val ? <Icon.Phone /> : <Icon.Settings />}
        //             sizeVariant={'L'}
        //             placeholder={'!!!Text ggYY'}
        //             iconOnClick={() => setVal(!val)}
        //         />
        //     </SimpleDialog> */}
        // </>
    );
}

export default Main;
