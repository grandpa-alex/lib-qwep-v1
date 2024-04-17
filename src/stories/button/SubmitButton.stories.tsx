import { Meta, Story } from '@storybook/react';
import { BaseBox, BaseTitle, TypeButton, Icon, SubmitButton } from '@src/lib';


export default {
  title: 'Components/button/SubmitButton',
  component: SubmitButton,
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

const Template: Story<TypeButton.SubmitButton.Main> = (args) => {
  return (
      <BaseBox 
      boxDisplay={'flex'} 
      style={{justifyContent: 'center', margin: '50px auto'}}
      >
        <SubmitButton  {...args} />
      </BaseBox>
  )
};



export const Main = Template.bind({});
Main.args = {
  children: 'Simple Button',
  icon: <Icon.BarChart/>
};

export const ExampleSubmitButton = () => (
  <BaseBox mr={'mt-3'}>
    <BaseTitle as={'h4'} mr={'mb-3'}>Loading</BaseTitle>
      <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
        <SubmitButton isLoading={false} icon={<Icon.BarChart/>} colorVariant={'default'}>Default</SubmitButton>
        <SubmitButton isLoading={true} icon={<Icon.BarChart/>} colorVariant={'default'}>Loading</SubmitButton>
    </BaseBox>
  </BaseBox>

);

