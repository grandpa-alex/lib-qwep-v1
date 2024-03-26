import { BaseButton, Icon, SimpleButton, SubmitButton } from '@src/lib';
import { TypeColorVariant } from '@src/lib/types/TypeBase';
import { TypeBtnVariant } from '@src/lib/types/TypeBtn';
import { useState } from 'react';

function Buttons() {
    const [loading, setLoading] = useState(false);

    const [status, setStatus] = useState<TypeColorVariant>('default');
    const [v, setV] = useState<TypeBtnVariant>('contained');

    const simpleBtnH = () => {
        if (status === 'default') {
            setStatus('success');
            setV('outlined');
        } else {
            setStatus('default');
            setV('contained');
        }
    };

    const [c, setC] = useState<TypeColorVariant>('default');
    const [l, setL] = useState(false);

    const subCustH = async () => {
        setL(true);
        setTimeout(() => {
            setL(false);
            setTimeout(() => {
                setC('default');
            }, 1000);
            setC('success');
        }, 2000);
    };

    return (
        <div style={{ paddingBottom: '300px' }}>
            <h2>BASE BUTTON</h2>
            <h4>BASE BUTTON L COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseButton mr={'m-3'}>BaseButton</BaseButton>
                <BaseButton mr={'m-3'} colorVariant={'info'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} colorVariant={'success'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} colorVariant={'warning'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} colorVariant={'error'}>
                    BaseButton error
                </BaseButton>
                <BaseButton mr={'m-3'} color={'#d80097'}>
                    BaseButton custom
                </BaseButton>
            </div>
            <h4>BASE BUTTON M COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseButton mr={'m-3'} sizeVariant={'M'}>
                    BaseButton
                </BaseButton>
                <BaseButton mr={'m-3'} colorVariant={'info'} sizeVariant={'M'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} colorVariant={'success'} sizeVariant={'M'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} colorVariant={'warning'} sizeVariant={'M'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} colorVariant={'error'} sizeVariant={'M'}>
                    BaseButton error
                </BaseButton>
                <BaseButton mr={'m-3'} color={'#d80097'} sizeVariant={'M'}>
                    BaseButton custom
                </BaseButton>
            </div>
            <h4>BASE BUTTON VARIANT</h4>
            <div style={{ display: 'flex' }}>
                <BaseButton mr={'m-3'} variant={'contained'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} variant={'outlined'}>
                    BaseButton outlined
                </BaseButton>
                <BaseButton mr={'m-3'} variant={'text'}>
                    BaseButton outlined
                </BaseButton>
                <BaseButton mr={'m-3'} sizeVariant={'M'} variant={'contained'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} sizeVariant={'M'} variant={'outlined'}>
                    BaseButton outlined
                </BaseButton>
                <BaseButton mr={'m-3'} sizeVariant={'M'} variant={'text'}>
                    BaseButton outlined
                </BaseButton>
                <BaseButton mr={'m-3'} sizeVariant={'M'} color={'#d80097'} variant={'text'}>
                    BaseButton text custom
                </BaseButton>
                <BaseButton mr={'m-3'} sizeVariant={'M'} color={'#d80097'} variant={'outlined'}>
                    BaseButton outlined custom
                </BaseButton>
            </div>
            <h4>BASE BUTTON VARIANT DISABLED</h4>
            <div style={{ display: 'flex' }}>
                <BaseButton mr={'m-3'} disabled={true} variant={'contained'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} disabled={true} variant={'outlined'}>
                    BaseButton outlined
                </BaseButton>
                <BaseButton mr={'m-3'} disabled={true} variant={'text'}>
                    BaseButton outlined
                </BaseButton>
                <BaseButton mr={'m-3'} disabled={true} sizeVariant={'M'} variant={'contained'}>
                    BaseButton info
                </BaseButton>
                <BaseButton mr={'m-3'} disabled={true} sizeVariant={'M'} variant={'outlined'}>
                    BaseButton outlined
                </BaseButton>
                <BaseButton mr={'m-3'} disabled={true} sizeVariant={'M'} variant={'text'}>
                    BaseButton outlined
                </BaseButton>
            </div>
            <h2>SIMPLE BUTTON</h2>
            <h4>SIMPLE BUTTON POSITION</h4>
            <div style={{ display: 'flex' }}>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} position={'center'}>
                    SimpleButton def
                </SimpleButton>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} position={'left'}>
                    SimpleButton left
                </SimpleButton>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} position={'right'}>
                    SimpleButton right
                </SimpleButton>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} sizeVariant={'M'} position={'center'}>
                    SimpleButton def
                </SimpleButton>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} sizeVariant={'M'} position={'left'}>
                    SimpleButton left
                </SimpleButton>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} sizeVariant={'M'} position={'right'}>
                    SimpleButton right
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    sizeVariant={'M'}
                    color={'#d80097'}
                    position={'center'}
                >
                    SimpleButton custom
                </SimpleButton>
            </div>
            <h4>SIMPLE BUTTON OUTLIN POSITION</h4>
            <div style={{ display: 'flex' }}>
                <SimpleButton mr={'m-3'} variant={'outlined'} style={{ width: '200px' }} position={'center'}>
                    SimpleButton def
                </SimpleButton>
                <SimpleButton mr={'m-3'} variant={'outlined'} style={{ width: '200px' }} position={'left'}>
                    SimpleButton left
                </SimpleButton>
                <SimpleButton mr={'m-3'} variant={'outlined'} style={{ width: '200px' }} position={'right'}>
                    SimpleButton right
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    variant={'outlined'}
                    style={{ width: '200px' }}
                    sizeVariant={'M'}
                    position={'center'}
                >
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    variant={'outlined'}
                    style={{ width: '200px' }}
                    sizeVariant={'M'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    variant={'outlined'}
                    style={{ width: '200px' }}
                    sizeVariant={'M'}
                    position={'right'}
                >
                    SimpleButton right
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    variant={'outlined'}
                    style={{ width: '200px' }}
                    sizeVariant={'M'}
                    color={'#d80097'}
                    position={'center'}
                >
                    SimpleButton custom
                </SimpleButton>
            </div>
            <h4>SIMPLE BUTTON DEF ICONS LEFT</h4>
            <div style={{ display: 'flex' }}>
                <SimpleButton mr={'m-3'} icon={<Icon.Gear />} position={'center'}>
                    SimpleButton
                </SimpleButton>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} icon={<Icon.Gear />} position={'center'}>
                    SimpleButton def
                </SimpleButton>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} icon={<Icon.CallMe />} position={'left'}>
                    SimpleButton left
                </SimpleButton>
                <SimpleButton mr={'m-3'} style={{ width: '200px' }} icon={<Icon.Gear />} position={'right'}>
                    SimpleButton right
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    position={'center'}
                >
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    icon={<Icon.CallMe />}
                    sizeVariant={'M'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    position={'right'}
                >
                    SimpleButton right
                </SimpleButton>
            </div>
            <h4>SIMPLE BUTTON ICONS RIGHT</h4>
            <div style={{ display: 'flex' }}>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    position={'center'}
                >
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    iconPosition={'right'}
                    icon={<Icon.CallMe />}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    position={'right'}
                >
                    SimpleButton right
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    position={'center'}
                >
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    iconPosition={'right'}
                    icon={<Icon.CallMe />}
                    sizeVariant={'M'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    style={{ width: '200px' }}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    position={'right'}
                >
                    SimpleButton right
                </SimpleButton>
            </div>
            <h4>SIMPLE BUTTON ICONS DISABLED</h4>
            <div style={{ display: 'flex' }}>
                <SimpleButton mr={'m-3'} disabled={true} icon={<Icon.Gear />} position={'center'}>
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    icon={<Icon.CallMe />}
                    iconPosition={'right'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton mr={'m-3'} disabled={true} icon={<Icon.Gear />} position={'right'}>
                    SimpleButton right
                </SimpleButton>
                <SimpleButton mr={'m-3'} disabled={true} icon={<Icon.Gear />} sizeVariant={'M'} position={'center'}>
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    icon={<Icon.CallMe />}
                    iconPosition={'right'}
                    sizeVariant={'M'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton mr={'m-3'} disabled={true} icon={<Icon.Gear />} sizeVariant={'M'} position={'right'}>
                    SimpleButton right
                </SimpleButton>
            </div>
            <h4>SIMPLE BUTTON ICONS OUTLINE DISABLED</h4>
            <div style={{ display: 'flex' }}>
                <SimpleButton mr={'m-3'} disabled={true} variant={'outlined'} icon={<Icon.Gear />} position={'center'}>
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'outlined'}
                    icon={<Icon.CallMe />}
                    iconPosition={'right'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton mr={'m-3'} disabled={true} variant={'outlined'} icon={<Icon.Gear />} position={'right'}>
                    SimpleButton right
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'outlined'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    position={'center'}
                >
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'outlined'}
                    icon={<Icon.CallMe />}
                    iconPosition={'right'}
                    sizeVariant={'M'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'outlined'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    position={'right'}
                >
                    SimpleButton right
                </SimpleButton>
            </div>
            <h4>SIMPLE BUTTON ICONS TEXT DISABLED</h4>
            <div style={{ display: 'flex' }}>
                <SimpleButton mr={'m-3'} disabled={true} variant={'text'} icon={<Icon.Gear />} position={'center'}>
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'text'}
                    icon={<Icon.CallMe />}
                    iconPosition={'right'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton mr={'m-3'} disabled={true} variant={'text'} icon={<Icon.Gear />} position={'right'}>
                    SimpleButton right
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'text'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    position={'center'}
                >
                    SimpleButton def
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'text'}
                    icon={<Icon.CallMe />}
                    iconPosition={'right'}
                    sizeVariant={'M'}
                    position={'left'}
                >
                    SimpleButton left
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    disabled={true}
                    variant={'text'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    position={'right'}
                >
                    SimpleButton right
                </SimpleButton>
            </div>
            <h4>SIMPLE BUTTON CUSTOM</h4>
            <div style={{ display: 'flex' }}>
                <SimpleButton
                    mr={'m-3'}
                    color={'#161616'}
                    style={{ color: '#aa06aa' }}
                    icon={<Icon.Gear color={'#aa06aa'} />}
                >
                    SimpleButton
                </SimpleButton>
                <SimpleButton mr={'m-3'} variant={'outlined'} color={'#811f69'}>
                    SimpleButton
                </SimpleButton>
                <SimpleButton mr={'m-3'} color={'#161616'} variant={'text'} icon={<Icon.Gear color={'#aa06aa'} />}>
                    SimpleButton
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    variant={'outlined'}
                    style={{ width: '200px' }}
                    color={'#d80097'}
                    position={'center'}
                >
                    SimpleButton custom
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    onClick={simpleBtnH}
                    colorVariant={status}
                    style={{ width: '200px' }}
                    position={'center'}
                >
                    SimpleButton custom
                </SimpleButton>
                <SimpleButton
                    mr={'m-3'}
                    onClick={simpleBtnH}
                    colorVariant={status}
                    variant={v}
                    style={{ width: '200px' }}
                    position={'center'}
                >
                    SimpleButton custom
                </SimpleButton>
            </div>
            <h2>SIMPLE BUTTON</h2>
            <SimpleButton
                mr={'m-3'}
                onClick={() => setLoading(!loading)}
                style={{ width: '200px' }}
                position={'center'}
            >
                LOADING
            </SimpleButton>
            <div style={{ display: 'flex' }}>
                <SubmitButton isLoading={loading} mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} variant="outlined" mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} variant={'text'} mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} sizeVariant={'M'} mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} sizeVariant={'M'} mr={'m-3'} variant="outlined">
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} sizeVariant={'M'} mr={'m-3'} variant="text">
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} sizeVariant={'M'} mr={'m-3'} color={'#d80097'}>
                    SubmitButton custom
                </SubmitButton>
            </div>
            <div style={{ display: 'flex' }}>
                <SubmitButton isLoading={loading} mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} icon={<Icon.Gear />} variant="outlined" mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} icon={<Icon.Gear />} variant={'text'} mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton
                    isLoading={loading}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    mr={'m-3'}
                >
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} icon={<Icon.Gear />} sizeVariant={'M'} mr={'m-3'} variant="outlined">
                    SubmitButton
                </SubmitButton>
                <SubmitButton isLoading={loading} icon={<Icon.Gear />} sizeVariant={'M'} mr={'m-3'} variant="text">
                    SubmitButton
                </SubmitButton>
                <SubmitButton
                    isLoading={loading}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    mr={'m-3'}
                    color={'#d80097'}
                >
                    SubmitButton custom
                </SubmitButton>
            </div>
            <div style={{ display: 'flex' }}>
                <SubmitButton isLoading={loading} style={{ width: '200px' }} mr={'m-3'}>
                    SubmitButton
                </SubmitButton>
                <SubmitButton
                    isLoading={loading}
                    style={{ width: '200px' }}
                    position={'right'}
                    icon={<Icon.Gear />}
                    variant="outlined"
                    mr={'m-3'}
                >
                    SubmitButton
                </SubmitButton>
                <SubmitButton
                    isLoading={loading}
                    style={{ width: '200px' }}
                    icon={<Icon.Gear />}
                    variant={'text'}
                    mr={'m-3'}
                >
                    SubmitButton
                </SubmitButton>
                <SubmitButton
                    isLoading={loading}
                    style={{ width: '200px' }}
                    iconPosition={'right'}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    mr={'m-3'}
                >
                    SubmitButton
                </SubmitButton>
                <SubmitButton
                    isLoading={loading}
                    style={{ width: '200px' }}
                    icon={<Icon.Gear />}
                    sizeVariant={'M'}
                    mr={'m-3'}
                    variant="outlined"
                >
                    SubmitButton
                </SubmitButton>
            </div>
            <div style={{ display: 'flex' }}>
                <SubmitButton onClick={subCustH} colorVariant={c} isLoading={l} style={{ width: '200px' }} mr={'m-3'}>
                    CUSTOM SubmitButton
                </SubmitButton>
            </div>
        </div>
    );
}

export default Buttons;