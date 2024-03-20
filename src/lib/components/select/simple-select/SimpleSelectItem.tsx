import React from 'react';
import styled from 'styled-components';
import {
    StyledBaseSelectItem,
    StyledBaseSelectItemIndicator,
    StyledBaseSelectItemProps,
    StyledBaseSelectItemText,
} from '../base-select-component/BaseSelectComponent';
import { Icon } from '@src/lib';



export type SimpleSelectItemProps = {
    children: React.ReactNode;
} & StyledBaseSelectItemProps;

export const StyledSimpleSelectItem = styled(StyledBaseSelectItem)`
    padding: 6px 20px 6px 20px;
    border-radius: 4px;
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    outline: none;
    line-height: normal;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

export const StyledSimpleSelectItemIndicator = styled(StyledBaseSelectItemIndicator)`
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    svg {
        width: 14px;
        height: 14px;
    }
`;

export const SimpleSelectItem: React.FC<SimpleSelectItemProps> = React.forwardRef(
    ({ children, ...rest }) => {
      
        return (
            <StyledSimpleSelectItem
                {...rest}
            >
                <StyledSimpleSelectItemIndicator>
                    <Icon.BaseCheck />
                </StyledSimpleSelectItemIndicator>
                <StyledBaseSelectItemText>{children}</StyledBaseSelectItemText>
            </StyledSimpleSelectItem>
        );
    }
);
