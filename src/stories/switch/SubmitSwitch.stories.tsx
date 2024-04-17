import { Meta, Story } from '@storybook/react';
import { BaseBox, SubmitSwitch, BaseTitle, TypeSwitch } from '@src/lib';

export default {
    title: 'Components/switch/SubmitSwitch',
    component: SubmitSwitch,
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

const Template: Story<TypeSwitch.SubmitSwitch.Main> = (args) => {
    return (
        <BaseBox boxDisplay={'flex'} style={{ justifyContent: 'center', margin: '50px auto' }}>
            <SubmitSwitch {...args} />
        </BaseBox>
    );
};

export const Main = Template.bind({});
Main.args = {
    isLoading: false
};
export const ExampleSubmitSwitch = () => (
    <BaseBox mr={'mt-3'}>
        <BaseTitle as={'h4'} mr={'mb-3'}>
            Loading
        </BaseTitle>
        <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
            <SubmitSwitch isLoading={false} colorVariant={'default'}  />
            <SubmitSwitch isLoading={true} colorVariant={'info'}  />
        </BaseBox>
    </BaseBox>
);
