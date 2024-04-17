import { Meta, Story } from '@storybook/react';
import { BaseBox, SubmitCheckbox, BaseTitle, TypeCheckbox } from '@src/lib';

export default {
    title: 'Components/checkbox/SubmitCheckbox',
    component: SubmitCheckbox,
    tags: ['autodocs'],
    argTypes: {
        color: { control: 'color' },
        disabled: {
            control: 'boolean',
            description: 'Disables the button, making it uninteractive',
            defaultValue: false,
        },
    },
} as Meta;

const Template: Story<TypeCheckbox.SubmitCheckbox.Main> = (args) => {
    return (
        <BaseBox boxDisplay={'flex'} style={{ justifyContent: 'center', margin: '50px auto' }}>
            <SubmitCheckbox {...args} />
        </BaseBox>
    );
};

export const Main = Template.bind({});
Main.args = {
    isLoading: false
};
export const ExampleSubmitCheckbox = () => (
    <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Loading
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <SubmitCheckbox isLoading={false} colorVariant={'default'}  />
            <SubmitCheckbox isLoading={true} colorVariant={'info'}  />
        </BaseBox>
    </BaseBox>
);
