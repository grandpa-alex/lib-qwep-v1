import { Meta, Story } from '@storybook/react';
import { BaseBox, BaseTextField, BaseTitle, TypeInput } from '@src/lib';


export default {
  title: 'Components/input/BaseTextField',
  component: BaseTextField,
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

const Template: Story<TypeInput.BaseTextField.Main> = (args) => {
  return (
      <BaseBox 
      boxDisplay={'flex'} 
      style={{justifyContent: 'center', margin: '50px auto'}}
      >
        <BaseTextField {...args} />
      </BaseBox>
  )
};

export const Main = Template.bind({});
Main.args = {
 placeholder: 'Base text field'
};

export const ExampleBaseTextField = () => (
  <BaseBox mr={'mt-3'}>
    <BaseTitle as={'h4'} mr={'mb-3'}>Color</BaseTitle>
      <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
        <BaseTextField colorVariant={'default'} placeholder={'Default'} />
        <BaseTextField colorVariant={'info'} placeholder={'Info'}/>
        <BaseTextField colorVariant={'success'} placeholder={'Success'}/>
        <BaseTextField colorVariant={'warning'} placeholder={'Warning'}/>
        <BaseTextField colorVariant={'error'} placeholder={'Error'} />
    </BaseBox>
    <BaseTitle as={'h4'} mr={'mb-3'}>State</BaseTitle>
      <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
        <BaseTextField colorVariant={'default'} blocked placeholder={'Blocked'} />
        <BaseTextField colorVariant={'info'} disabled placeholder={'Disabled'}/>
        <BaseTextField colorVariant={'success'} sizeVariant={'M'} placeholder={'SizeVariant M'}/>
    </BaseBox>
  </BaseBox>

);

