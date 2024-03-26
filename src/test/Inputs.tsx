import { BaseTextField, Icon, SimpleTextField, SubmitTextField } from '@src/lib';
import { useState } from 'react';

function Inputs() {
    const [l, setL] = useState(false);
    const [val, setVal] = useState('');

    const testH = async (e: string) => {
        setL(true);

        setTimeout(() => {
            setVal(e);
            setL(false);
        }, 300);
    };

    return (
        <div style={{ paddingBottom: '300px' }}>
            <h2>BASE INPUT</h2>
            <h4>BASE INPUT L COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseTextField mr={'m-3'} placeholder={'Placeholder'} />
                <BaseTextField mr={'m-3'} colorVariant={'info'} placeholder={'Placeholder'} />
                <BaseTextField
                    mr={'m-3'}
                    defaultValue={'defaultValue'}
                    colorVariant={'success'}
                    placeholder={'Placeholder'}
                />
                <BaseTextField mr={'m-3'} colorVariant={'warning'} placeholder={'Placeholder'} />
                <BaseTextField mr={'m-3'} colorVariant={'error'} placeholder={'Placeholder'} />
                <BaseTextField mr={'m-3'} colorVariant={'error'} placeholder={'Placeholder'} />
                <BaseTextField mr={'m-3'} color={'#d80097'} colorVariant={'error'} placeholder={'Placeholder custom'} />
            </div>
            <h4>BASE INPUT M COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseTextField mr={'m-3'} disabled sizeVariant={'M'} placeholder={'Placeholder'} />
                <BaseTextField
                    mr={'m-3'}
                    disabled
                    sizeVariant={'M'}
                    colorVariant={'info'}
                    placeholder={'Placeholder'}
                />
                <BaseTextField mr={'m-3'} sizeVariant={'M'} colorVariant={'success'} placeholder={'Placeholder'} />
                <BaseTextField mr={'m-3'} sizeVariant={'M'} colorVariant={'warning'} placeholder={'Placeholder'} />
                <BaseTextField mr={'m-3'} sizeVariant={'M'} colorVariant={'error'} placeholder={'Placeholder'} />
                <BaseTextField mr={'m-3'} sizeVariant={'M'} colorVariant={'error'} placeholder={'Placeholder'} />
                <BaseTextField
                    mr={'m-3'}
                    sizeVariant={'M'}
                    color={'#d80097'}
                    colorVariant={'error'}
                    placeholder={'Placeholder disabled'}
                />
            </div>
            <h2>SIMPLE INPUT</h2>
            <h4>SIMPLE INPUT ICON</h4>
            <div style={{ display: 'flex' }}>
                <SimpleTextField mr={'m-3'} icon={<Icon.Gear />} placeholder={'Placeholder'} />
                <SimpleTextField
                    mr={'m-3'}
                    icon={<Icon.Gear />}
                    value={'value'}
                    colorVariant={'info'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    icon={<Icon.Gear />}
                    defaultValue={'defaultValue'}
                    colorVariant={'success'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    colorVariant={'warning'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    colorVariant={'error'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    color={'#d80097'}
                    colorVariant={'error'}
                    placeholder={'Placeholder custom'}
                />
            </div>
            <h4>SIMPLE INPUT ICON RIGHT</h4>
            <div style={{ display: 'flex' }}>
                <SimpleTextField mr={'m-3'} iconPosition={'right'} icon={<Icon.Gear />} placeholder={'Placeholder'} />
                <SimpleTextField
                    mr={'m-3'}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    colorVariant={'info'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    colorVariant={'success'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    colorVariant={'warning'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    colorVariant={'error'}
                    placeholder={'Placeholder'}
                />
                <SimpleTextField
                    mr={'m-3'}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    color={'#d80097'}
                    colorVariant={'error'}
                    placeholder={'Placeholder custom'}
                />
            </div>
            <h2>SUBMIT INPUT</h2>
            <h4>SUBMIT INPUT ICON</h4>
            <div style={{ display: 'flex' }}>
                <SubmitTextField mr={'m-3'} isLoading={true} icon={<Icon.Gear />} placeholder={'Placeholder'} />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    icon={<Icon.Gear />}
                    value={'value'}
                    colorVariant={'info'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    icon={<Icon.Gear />}
                    defaultValue={'defaultValue'}
                    colorVariant={'success'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    colorVariant={'warning'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    colorVariant={'error'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    color={'#d80097'}
                    colorVariant={'error'}
                    placeholder={'Placeholder custom'}
                />
            </div>
            <h4>SUBMIT INPUT ICON RIGHT</h4>
            <div style={{ display: 'flex' }}>
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    colorVariant={'info'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    colorVariant={'success'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    colorVariant={'warning'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    colorVariant={'error'}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    isLoading={true}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    color={'#d80097'}
                    colorVariant={'error'}
                    placeholder={'Placeholder custom'}
                />
            </div>
            <h4>SUBMIT INPUT CUSTOM</h4>
            <div style={{ display: 'flex' }}>
                <SubmitTextField
                    mr={'m-3'}
                    value={val}
                    onChange={(e) => testH(e.target.value)}
                    isLoading={l}
                    iconPosition={'left'}
                    icon={<Icon.Gear />}
                    placeholder={'Placeholder'}
                />
                <SubmitTextField
                    mr={'m-3'}
                    style={{ width: '100%' }}
                    isLoading={false}
                    iconPosition={'left'}
                    icon={<Icon.Gear />}
                    placeholder={'Placeholder'}
                />
            </div>
        </div>
    );
}

export default Inputs;
