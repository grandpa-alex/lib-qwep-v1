import * as Select from '@radix-ui/react-select';

import { styled } from 'styled-components';
import {
    SelectProps,
    SelectTriggerProps,
    SelectIconProps,
    SelectPortalProps,
    SelectContentProps,
    SelectScrollUpButtonProps,
    SelectViewportProps,
    SelectSeparatorProps,
    SelectItemIndicatorProps,
    SelectItemProps,
    SelectItemTextProps,
    SelectGroupProps,
    SelectValueProps,
    SelectScrollDownButtonProps,
} from '@radix-ui/react-select';


export type StyledBaseSelectRootProps = SelectProps;
export const StyledBaseSelectRoot = styled(Select.Root)``;

export type StyledBaseSelectTriggerProps = SelectTriggerProps & React.RefAttributes<HTMLButtonElement>;
export const StyledBaseSelectTrigger = styled(Select.Trigger)``;

export type StyledBaseSelectValueProps = SelectValueProps & React.RefAttributes<HTMLButtonElement>;
export const StyledBaseSelectValue = styled(Select.Value)`
  
`;

export type StyledBaseSelectIconProps = SelectIconProps & React.RefAttributes<HTMLSpanElement>;
export const StyledBaseSelectIcon = styled(Select.Icon)``;

export type StyledBaseSelectPortalProps = SelectPortalProps;
export const StyledBaseSelectPortal = styled(Select.Portal)``;

export type StyledBaseSelectGroupProps = SelectGroupProps & React.RefAttributes<HTMLDivElement>;
export const StyledBaseSelectGroup = styled(Select.Group)``;

export type StyledBaseSelectContentProps = SelectContentProps & React.RefAttributes<HTMLDivElement>;
export const StyledBaseSelectContent = styled(Select.Content)``;

export type StyledBaseSelectScrollUpButtonProps = SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>;
export const StyledBaseSelectScrollUpButton = styled(Select.ScrollUpButton)``;

export type StyledBaseSelectViewportProps = SelectViewportProps & React.RefAttributes<HTMLDivElement>;
export const StyledBaseSelectViewport = styled(Select.Viewport)``;

export type StyledBaseSelectSeparatorProps = SelectSeparatorProps & React.RefAttributes<HTMLDivElement>;
export const StyledBaseSelectSeparator = styled(Select.Separator)``;

export type StyledBaseSelectScrollDownButtonProps = SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>;
export const StyledBaseSelectScrollDownButton = styled(Select.ScrollDownButton)``;

//item

export type StyledBaseSelectItemProps = SelectItemProps & React.RefAttributes<HTMLDivElement>;
export const StyledBaseSelectItem = styled(Select.Item)``;

export type StyledBaseSelectItemTextProps = SelectItemTextProps & React.RefAttributes<HTMLSpanElement>;
export const StyledBaseSelectItemText = styled(Select.ItemText)`
   
`;

export type StyledBaseSelectItemIndicatorProps = SelectItemIndicatorProps & React.RefAttributes<HTMLSpanElement>;
export const StyledBaseSelectItemIndicator = styled(Select.ItemIndicator)``;


