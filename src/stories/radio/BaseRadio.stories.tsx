import { Meta, Story } from '@storybook/react';
import { BaseBox, BaseRadioGroup, BaseRadioItem, TypeRadio, WrapperInput } from '@src/lib';
import { TypePositionInpLabel } from '@src/lib/types/TypeInp';
import { TypeVariantColor, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';

export default {
    title: 'Components/radio/BaseRadioGroup',
    component: BaseRadioGroup,
    tags: ['autodocs'],
    argTypes: {
        activeValue: {
            control: 'text',
            description: 'Value of the selected radio button',
        },
        labelColor: { control: 'color' },
        colorVariant: {
            control: 'select',
            options: Object.values(VC),
        },
        sizeVariant: {
            control: 'select',
            options: Object.values(VS),
        },
    },
} as Meta;

const Template: Story<
    TypeRadio.BaseRadioGroup.Main & {
        activeValue: string;
        disabled: boolean;
        positionLabel: TypePositionInpLabel;
        colorVariant: TypeVariantColor;
        sizeVariant: TypeVariantSize;
    }
> = (args) => {
    return (
        <BaseBox boxDisplay={'flex'} style={{ justifyContent: 'center', margin: '50px auto' }}>
            <BaseRadioGroup orientation={args.orientation} {...args}>
                {[1, 2, 3, 4].map((num) => (
                    <WrapperInput
                        key={num}
                        positionLabel={args.positionLabel}
                        id={`${num}`}
                        label={`BaseRadioItem ${num}`}
                    >
                        <BaseRadioItem
                            id={`${num}`}
                            colorVariant={args.colorVariant}
                            sizeVariant={args.sizeVariant}
                            value={`${num}`}
                        />
                    </WrapperInput>
                ))}
            </BaseRadioGroup>
        </BaseBox>
    );
};

export const Main = Template.bind({});
Main.args = {
    positionLabel: 'right',
    colorVariant: 'default',
    label: 'Default',
};