import { Meta, Story } from '@storybook/react';
import { BaseBox, BaseTitle, SimpleButton, TypeButton, Icon } from '@src/lib';


export default {
  title: 'Components/button/SimpleButton',
  component: SimpleButton,
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

const Template: Story<TypeButton.SimpleButton.Main> = (args) => {
  return (
      <BaseBox 
      boxDisplay={'flex'} 
      style={{justifyContent: 'center', margin: '50px auto'}}
      >
        <SimpleButton  {...args} />
      </BaseBox>
  )
};



export const Main = Template.bind({});
Main.args = {
  children: 'Simple Button',
  icon: <Icon.BarChart/>
};

export const ExampleSimpleButton = () => (
  <BaseBox mr={'mt-3'}>
    <BaseTitle as={'h4'} mr={'mb-3'}>Position</BaseTitle>
      <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
        <SimpleButton icon={<Icon.BarChart/>} colorVariant={'default'}>Default</SimpleButton>
        <SimpleButton icon={<Icon.BarChart/>} style={{width: '200px'}} colorVariant={'info'}>Position center</SimpleButton>
        <SimpleButton icon={<Icon.BarChart/>} style={{width: '200px'}} position={'left'} colorVariant={'success'}>Position left</SimpleButton>
        <SimpleButton icon={<Icon.BarChart/>} style={{width: '200px'}} position={'right'} colorVariant={'warning'}>Position right</SimpleButton>
    </BaseBox>
    <BaseTitle as={'h4'} mr={'my-3'}>Position icon</BaseTitle>
      <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
        <SimpleButton icon={<Icon.BarChart/>} colorVariant={'default'}>Default</SimpleButton>
        <SimpleButton icon={<Icon.BarChart/>} style={{width: '200px'}} iconPosition={'right'} colorVariant={'info'}>Position right</SimpleButton>
        <SimpleButton icon={<Icon.BarChart/>} style={{width: '200px'}} iconPosition={'left'} colorVariant={'info'}>Position left</SimpleButton>
    </BaseBox>
    <BaseTitle as={'h4'} mr={'my-3'}>Long title</BaseTitle>
      <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
        <SimpleButton icon={<Icon.BarChart/>} style={{width: '200px'}} colorVariant={'default'}>Long long long long long long long</SimpleButton>
    </BaseBox>
  </BaseBox>

);

