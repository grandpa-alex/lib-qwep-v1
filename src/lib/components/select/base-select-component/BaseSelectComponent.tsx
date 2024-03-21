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
    SelectItemIndicatorProps,
    SelectItemProps,
    SelectItemTextProps,
    SelectGroupProps,
    SelectValueProps,
} from '@radix-ui/react-select';

export type SBSelectRootProps = SelectProps;
export const SBSelectRoot = styled(Select.Root)``;

export type SBSelectTriggerProps = SelectTriggerProps & React.RefAttributes<HTMLButtonElement>;
export const SBSelectTrigger = styled(Select.Trigger)``;

export type SBSelectValueProps = SelectValueProps & React.RefAttributes<HTMLButtonElement>;
export const SBSelectValue = styled(Select.Value)``;

export type SBSelectIconProps = SelectIconProps & React.RefAttributes<HTMLSpanElement>;
export const SBSelectIcon = styled(Select.Icon)``;

export type SBSelectPortalProps = SelectPortalProps;
export const SBSelectPortal = styled(Select.Portal)``;

export type SBSelectContentProps = SelectContentProps & React.RefAttributes<HTMLDivElement>;
export const SBSelectContent = styled(Select.Content)``;

export type SBSelectScrollUpButtonProps = SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>;
export const SBSelectScrollUpButton = styled(Select.ScrollUpButton)``;

export type SBSelectViewportProps = SelectViewportProps & React.RefAttributes<HTMLDivElement>;
export const SBSelectViewport = styled(Select.Viewport)``;

//item
export type SBSelectItemProps = SelectItemProps & React.RefAttributes<HTMLDivElement>;
export const SBSelectItem = styled(Select.Item)``;

export type SBSelectItemTextProps = SelectItemTextProps & React.RefAttributes<HTMLSpanElement>;
export const SBSelectItemText = styled(Select.ItemText)``;

export type SBSelectItemIndicatorProps = SelectItemIndicatorProps & React.RefAttributes<HTMLSpanElement>;
export const SBSelectItemIndicator = styled(Select.ItemIndicator)``;

// group
export type SBSelectGroupProps = SelectGroupProps & React.RefAttributes<HTMLDivElement>;
export const SBSelectGroup = styled(Select.Group)``;
