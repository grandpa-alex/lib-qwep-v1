import * as Select from '@radix-ui/react-select';
import { styled } from 'styled-components';
import {
    SelectIconProps,
    SelectItemProps,
    SelectGroupProps
} from '@radix-ui/react-select';


// content 
export type SBCSelectIconProps = SelectIconProps & React.RefAttributes<HTMLSpanElement>;
export const SBCSelectIcon = styled(Select.Icon)`
    margin-left: 8px;
    margin-top: -3px;
    svg {
        width: 15px;
        height: 15px;
    }
`;

// item
export type SBCSelectItemProps = SelectItemProps & React.RefAttributes<HTMLDivElement>;
export const SBCSelectItem = styled(Select.Item)`
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    outline: none;
    line-height: normal;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

// group
export type SBSelectGroupProps = SelectGroupProps & React.RefAttributes<HTMLDivElement>;
export const SBSelectGroup = styled(Select.Group)``;
