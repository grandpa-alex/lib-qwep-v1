import React, { useState } from 'react';

import { BaseBox, BaseButton, useNotificationContext } from '../lib';
import { ENotificationPosition } from '../lib/types/TypeBase';

function Alert() {
    const [count, setCount] = useState(1);
    const { showAlert } = useNotificationContext();
    const alertHandler = () => {
        setCount(count + 1);
        showAlert<'base'>({
            title: 'Alert',
            message: `Alert ${count}`,
            variant: 'error',
            duration: 3000,
            position: ENotificationPosition.BOTTOM_RIGHT,
            type: 'base',
            portalProps: {
                boxGapVariant: 'g-5',
                boxPaddingVariant: 'p-5',
            },
        });
        showAlert<'custom'>({
            duration: 3000,
            content: <div>ferjifjreijg</div>,
            position: ENotificationPosition.BOTTOM_LEFT,
            type: 'custom',
            portalProps: {
                boxGapVariant: 'g-5',
                boxPaddingVariant: 'p-5',
            },
        });
        // showAlert<'custom'>({
        //     // title: 'Alert',
        //     // message: `Alert ${count}`,
        //     // variant: 'error',
        //     duration: 3000,
        //     position: ENotificationPosition.BOTTOM_RIGHT,
        //     // type: 'base',

        //     portalProps: {
        //         boxGapVariant: 'g-5',
        //         boxPaddingVariant: 'p-5',
        //     },
        // });
        // showAlert({
        //     title: 'Alert',
        //     message: `Alert ${count}`,
        //     variant: 'success',
        //     duration: 3000,
        //     position: ENotificationPosition.BOTTOM_CENTER,
        //     type: 'base',
        // });
        // showAlert({
        //     title: 'Alert',
        //     message: `Alert ${count}`,
        //     variant: 'success',
        //     duration: 3000,
        //     position: ENotificationPosition.BOTTOM_LEFT,
        //     type: 'base',
        // });
        // showAlert({
        //     title: 'Alert',
        //     message: `Alert ${count}`,
        //     variant: 'info',
        //     duration: 3000,
        //     position: ENotificationPosition.CENTER_RIGHT,
        //     type: 'base',
        // });
        // showAlert({
        //     title: 'Alert',
        //     message: `Alert ${count}`,
        //     variant: 'info',
        //     duration: 3000,
        //     position: ENotificationPosition.CENTER,
        //     type: 'base',
        // });
        // showAlert({
        //     title: 'Alert',
        //     message: `Alert ${count}`,
        //     variant: 'info',
        //     duration: 3000,
        //     position: ENotificationPosition.CENTER_LEFT,
        //     type: 'base',
        // });
        // showAlert({
        //     title: 'Alert',
        //     message: `Alert ${count}`,
        //     variant: 'warning',
        //     duration: 3000,
        //     position: ENotificationPosition.TOP_RIGHT,
        //     type: 'base',
        // });
        // showAlert({
        //     title: 'Alert',
        //     message: `Alert ${count}`,
        //     variant: 'warning',
        //     duration: 3000,
        //     position: ENotificationPosition.TOP_CENTER,
        //     type: 'base',
        // });
        // showAlert({
        //     title: 'Alert',
        //     message: `Alert ${count}`,
        //     variant: 'info',
        //     duration: 3000,
        //     position: ENotificationPosition.TOP_LEFT,
        //     type: 'base',
        // });
        // showAlert({
        //     // title: 'Alert',
        //     // message: `Alert ${count}`,
        //     // variant: 'error',
        //     duration: 500,
        //     position: ENotificationPosition.BOTTOM_LEFT,
        //     // isSingle: true,
        //     type: 'custom',
        //     children: <div style={{ color: 'red' }}> custom ALERT</div>,
        // });
    };

    return (
        <BaseBox boxDisplay={'grid'} boxGapVariant={'g-2'}>
            <BaseButton onClick={() => alertHandler()}>Show</BaseButton>

            {/* <BaseNotificationToast title={'Alert'} message={'Lorem ipsum do'} />
            <BaseNotificationToast
                title={'Alert Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}
                message={
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nemo ipsum similique, atque illo perspiciatis ab? Officiis nemo ipsum similique, atque illo perspiciatis ab?'
                }
                variant={'success'}
            />
            <BaseNotificationToast
                title={'Alert'}
                variant={'info'}
                message={
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nemo ipsum similique, atque illo perspiciatis ab? Officiis nemo ipsum similique, atque illo perspiciatis ab?'
                }
            />
            <BaseNotificationToast
                title={'Alert'}
                variant={'warning'}
                message={
                    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis nemo ipsum similique, atque illo perspiciatis ab? Officiis nemo ipsum similique, atque illo perspiciatis ab?'
                }
            /> */}
        </BaseBox>
    );
}

export default Alert;