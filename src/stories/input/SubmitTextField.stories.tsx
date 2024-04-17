import { Meta, Story } from '@storybook/react';
import { BaseBox, SubmitTextField, BaseTitle, TypeInput, Icon } from '@src/lib';


export default {
  title: 'Components/input/SubmitTextField',
  component: SubmitTextField,
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

const Template: Story<TypeInput.SubmitTextField.Main> = (args) => {
  return (
      <BaseBox 
      boxDisplay={'flex'} 
      style={{justifyContent: 'center', margin: '50px auto'}}
      >
        <SubmitTextField {...args} />
      </BaseBox>
  )
};

export const Main = Template.bind({});
Main.args = {
 placeholder: 'Base text field',
 icon: <Icon.Search/>,
 isLoading: false
};

export const ExampleSubmitTextField = () => {
  return (
    <BaseBox mr={'mt-3'}>
    <BaseTitle as={'h4'} mr={'mb-3'}>Loading</BaseTitle>
      <BaseBox boxDisplay="flex" boxGapVariant={'g-1'}>
        <SubmitTextField isLoading={false} icon={<Icon.Search/>} colorVariant={'default'} placeholder={'Default'} />
        <SubmitTextField isLoading={true}  icon={<Icon.Search/>} placeholder={'Loading'}/>
    </BaseBox>
  </BaseBox>
  )
}


