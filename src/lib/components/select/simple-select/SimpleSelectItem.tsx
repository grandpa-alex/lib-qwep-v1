import React from 'react';
import styled from 'styled-components';
import {
    SBSelectItem,
    SBSelectItemIndicator,
    SBSelectItemProps,
    SBSelectItemText,
} from '../base-select-component/BaseSelectComponent';
import { Icon } from '@src/lib';

export type SimpleSelectItemProps = {
    children: React.ReactNode;
} & SBSelectItemProps;

export const SSSelectItem = styled(SBSelectItem)`
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

export const SSSelectItemIndicator = styled(SBSelectItemIndicator)`
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    svg {
        width: 14px;
        height: 14px;
    }
`;

export const SimpleSelectItem: React.FC<SimpleSelectItemProps> = React.forwardRef(({ children, ...rest }) => {
    return (
        <SSSelectItem {...rest}>
            <SSSelectItemIndicator>
                <Icon.BaseCheck />
            </SSSelectItemIndicator>
            <SBSelectItemText>{children}</SBSelectItemText>
        </SSSelectItem>
    );
});
