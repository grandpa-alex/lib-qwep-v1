import React from 'react';
import styled from 'styled-components';
import { SBSelectGroup, SBSelectGroupProps } from '../base-select-component/BaseSelectComponent';

export type SimpleSelectGroupProps = {
    children: React.ReactNode;
    title?: string;
} & SBSelectGroupProps;

export const SSSelectGroup = styled(SBSelectGroup)`
    padding: 10px 0px;

    &:not(:last-child) {
        border-bottom: 1px solid;
    }
`;

export const SSSelectLabel = styled.div`
    font-size: 13px;
    padding: 2px 20px 6px 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

export const SimpleSelectGroup: React.FC<SimpleSelectGroupProps> = React.forwardRef(({ children, title, ...rest }) => {
    return (
        <SSSelectGroup {...rest}>
            {title && <SSSelectLabel>{title}</SSSelectLabel>}
            {children}
        </SSSelectGroup>
    );
});
