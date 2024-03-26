import { BaseDialog, BaseTooltip, SimpleButton, SimpleTextField, SimpleTooltip } from '@src/lib';
import { useState } from 'react';

function DialogTooltip() {
    const [openD1, setOpenD1] = useState(false);
    const [openD2, setOpenD2] = useState(false);

    return (
        <div style={{ paddingBottom: '300px' }}>
            <h2>BASE DIALOG</h2>
            <div style={{ display: 'flex' }}>
                <SimpleButton mr={'m-3'} onClick={() => setOpenD1(true)}>
                    Default Dialog
                </SimpleButton>
                <BaseDialog open={openD1} onOpenChange={setOpenD1} boxGapVariant={'g-2'}>
                    <SimpleTextField placeholder={'Placeholder 1'} />
                    <SimpleTextField placeholder={'Placeholder 2'} />
                    <SimpleButton colorVariant={'error'} onClick={() => setOpenD1(false)}>
                        Close
                    </SimpleButton>
                </BaseDialog>
                <SimpleButton mr={'m-3'} onClick={() => setOpenD2(true)}>
                    Dialog Styles
                </SimpleButton>
                <BaseDialog
                    open={openD2}
                    onOpenChange={setOpenD2}
                    boxGapVariant={'g-2'}
                    boxPaddingVariant={'p-5'}
                    boxWidthVariant={'w-5'}
                    boxRadiusVariant={'br-3'}
                    boxShadowVariant={'shd-3'}
                    boxShadowColor={'#ff00007d'}
                    boxBorderColor={'#000000'}
                    bg={'#9ef1b7'}
                    overlayBlur={'5px'}
                    overlayColor={'#e4eb8c'}
                >
                    <SimpleTextField placeholder={'Placeholder 1'} />
                    <SimpleTextField placeholder={'Placeholder 2'} />
                    <SimpleButton colorVariant={'error'} onClick={() => setOpenD2(false)}>
                        Close
                    </SimpleButton>
                </BaseDialog>
            </div>
            <h2>BASE TOLLTIP</h2>
            <div style={{ display: 'flex' }}>
                <BaseTooltip mr={'m-3'} tooltip={'Default Tooltip'}>
                    <SimpleButton>Default Tooltip</SimpleButton>
                </BaseTooltip>
                <BaseTooltip mr={'m-3'} side={'top'} tooltip={'Top Tooltip'}>
                    <SimpleButton>Top Tooltip</SimpleButton>
                </BaseTooltip>
                <BaseTooltip mr={'m-3'} side={'left'} tooltip={'Left Tooltip'}>
                    <SimpleButton>Left Tooltip</SimpleButton>
                </BaseTooltip>
                <BaseTooltip mr={'m-3'} side={'right'} tooltip={'Right Tooltip'}>
                    <SimpleButton>Right Tooltip</SimpleButton>
                </BaseTooltip>
            </div>
            <h2>SIMPLE TOLLTIP</h2>
            <div style={{ display: 'flex' }}>
                <SimpleTooltip mr={'m-3'} tooltip={'Default Tooltip'}>
                    <SimpleButton>Default Tooltip</SimpleButton>
                </SimpleTooltip>
                <SimpleTooltip mr={'m-3'} side={'top'} tooltip={'Top Tooltip'}>
                    <SimpleButton>Top Tooltip</SimpleButton>
                </SimpleTooltip>
                <SimpleTooltip mr={'m-3'} side={'left'} tooltip={'Left Tooltip'}>
                    <SimpleButton>Left Tooltip</SimpleButton>
                </SimpleTooltip>
                <SimpleTooltip mr={'m-3'} side={'right'} tooltip={'Right Tooltip'}>
                    <SimpleButton>Right Tooltip</SimpleButton>
                </SimpleTooltip>
            </div>
            <h2>SIMPLE TOLLTIP CUSTOM</h2>
            <div style={{ display: 'flex' }}>
                <SimpleTooltip 
                mr={'m-3'} 
                tooltip={'Custom Tooltip'}
                bg={'#f1c69e'}
                style={{color: '#000000'}}
                boxPaddingVariant={'p-2'}
                boxShadowColor={'#ff00007d'}
                boxRadiusVariant={'br-3'}
                >
                    <SimpleButton>Custom Tooltip</SimpleButton>
                </SimpleTooltip>
            </div>
            <div style={{ display: 'flex' }}>
                <SimpleTooltip 
                mr={'m-3'} 
                boxGapVariant={'g-2'}
                tooltip={
                    <>
                    <SimpleTextField placeholder={'Placeholder 1'} />
                    <SimpleTextField placeholder={'Placeholder 2'} />
                    <SimpleButton colorVariant={'error'} onClick={() => setOpenD2(false)}>
                        Close
                    </SimpleButton>
                    </>
                }
                bg={'#f1c69e'}
                style={{color: '#000000'}}
                boxPaddingVariant={'p-4'}
                boxShadowColor={'#ff00007d'}
                boxRadiusVariant={'br-3'}
                >
                    <SimpleButton>Custom Tooltip</SimpleButton>
                </SimpleTooltip>
            </div>
        </div>
    );
}

export default DialogTooltip;
