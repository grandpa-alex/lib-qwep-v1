import { BaseCheckbox, BaseSwitch, SubmitCheckbox, SubmitSwitch } from '@src/lib';
import { useState } from 'react';

function Checkbox() {
    const [l, setL] = useState(false);
    const [lS, setLS] = useState(false);

    const testH = async (check: boolean | string) => {
        console.log(check);

        setL(true);

        setTimeout(() => {
            setL(false);
        }, 300);
    };

    const testHS = async (check: boolean | string) => {
        console.log(check);

        setLS(true);

        setTimeout(() => {
            setLS(false);
        }, 600);
    };

    return (
        <div style={{ paddingBottom: '300px' }}>
            <h2>BASE CECKBOX</h2>
            <h4>BASE CECKBOX L COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseCheckbox mr={'m-3'} />
                <BaseCheckbox mr={'m-3'} colorVariant={'info'} />
                <BaseCheckbox mr={'m-3'} checked colorVariant={'success'} />
                <BaseCheckbox mr={'m-3'} colorVariant={'warning'} />
                <BaseCheckbox mr={'m-3'} checked colorVariant={'error'} />
                <BaseCheckbox mr={'m-3'} defaultChecked color={'#d80097'} />
                <BaseCheckbox mr={'m-3'} disabled defaultChecked color={'#d80097'} />
            </div>
            <h4>BASE CECKBOX M COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseCheckbox mr={'m-3'} sizeVariant={'M'} />
                <BaseCheckbox mr={'m-3'} sizeVariant={'M'} colorVariant={'info'} />
                <BaseCheckbox mr={'m-3'} sizeVariant={'M'} checked colorVariant={'success'} />
                <BaseCheckbox mr={'m-3'} sizeVariant={'M'} colorVariant={'warning'} />
                <BaseCheckbox mr={'m-3'} sizeVariant={'M'} checked colorVariant={'error'} />
                <BaseCheckbox mr={'m-3'} sizeVariant={'M'} defaultChecked color={'#d80097'} />
                <BaseCheckbox mr={'m-3'} sizeVariant={'M'} disabled defaultChecked color={'#d80097'} />
            </div>
            <h2>SUBMIT CECKBOX</h2>
            <h4>SUBMIT CECKBOX COLORS</h4>
            <div style={{ display: 'flex' }}>
                <SubmitCheckbox mr={'m-3'} isLoading={true} />
                <SubmitCheckbox mr={'m-3'} isLoading={true} colorVariant={'info'} />
                <SubmitCheckbox mr={'m-3'} isLoading={true} checked colorVariant={'success'} />
                <SubmitCheckbox mr={'m-3'} isLoading={true} colorVariant={'warning'} />
                <SubmitCheckbox mr={'m-3'} isLoading={true} sizeVariant={'M'} checked colorVariant={'error'} />
                <SubmitCheckbox mr={'m-3'} isLoading={true} sizeVariant={'M'} defaultChecked color={'#d80097'} />
                <SubmitCheckbox
                    mr={'m-3'}
                    isLoading={true}
                    sizeVariant={'M'}
                    disabled
                    defaultChecked
                    color={'#d80097'}
                />
            </div>
            <div style={{ display: 'flex' }}>
                <SubmitCheckbox mr={'m-3'} onCheckedChange={(check) => testH(check)} isLoading={l} />
            </div>
            <h2>BASE SWITH</h2>
            <h4>BASE SWITH L COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseSwitch mr={'m-3'} />
                <BaseSwitch mr={'m-3'} colorVariant={'info'} />
                <BaseSwitch mr={'m-3'} checked colorVariant={'success'} />
                <BaseSwitch mr={'m-3'} colorVariant={'warning'} />
                <BaseSwitch mr={'m-3'} checked colorVariant={'error'} />
                <BaseSwitch mr={'m-3'} defaultChecked color={'#d80097'} />
                <BaseSwitch mr={'m-3'} disabled defaultChecked color={'#d80097'} />
            </div>
            <h4>BASE SWITH M COLORS</h4>
            <div style={{ display: 'flex' }}>
                <BaseSwitch mr={'m-3'} sizeVariant={'M'} />
                <BaseSwitch mr={'m-3'} sizeVariant={'M'} colorVariant={'info'} />
                <BaseSwitch mr={'m-3'} sizeVariant={'M'} checked colorVariant={'success'} />
                <BaseSwitch mr={'m-3'} sizeVariant={'M'} colorVariant={'warning'} />
                <BaseSwitch mr={'m-3'} sizeVariant={'M'} checked colorVariant={'error'} />
                <BaseSwitch mr={'m-3'} sizeVariant={'M'} defaultChecked color={'#d80097'} />
                <BaseSwitch mr={'m-3'} sizeVariant={'M'} disabled defaultChecked color={'#d80097'} />
            </div>
            <h2>SUBMIT SWITH</h2>
            <h4>SUBMIT SWITH L COLORS</h4>
            <div style={{ display: 'flex' }}>
                <SubmitSwitch mr={'m-3'} isLoading={true} />
                <SubmitSwitch mr={'m-3'} isLoading={true} colorVariant={'info'} />
                <SubmitSwitch mr={'m-3'} isLoading={true} checked colorVariant={'success'} />
                <SubmitSwitch mr={'m-3'} isLoading={true} colorVariant={'warning'} />
                <SubmitSwitch mr={'m-3'} isLoading={true} sizeVariant={'M'} checked colorVariant={'error'} />
                <SubmitSwitch mr={'m-3'} isLoading={true} sizeVariant={'M'} defaultChecked color={'#d80097'} />
                <SubmitSwitch mr={'m-3'} isLoading={true} sizeVariant={'M'} disabled color={'#d80097'} />
            </div>
            <div style={{ display: 'flex' }}>
                <SubmitSwitch mr={'m-3'} onCheckedChange={(check) => testHS(check)} isLoading={lS} />
            </div>
        </div>
    );
}

export default Checkbox;