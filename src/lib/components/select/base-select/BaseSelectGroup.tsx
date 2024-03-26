import * as Select from '@radix-ui/react-select';
import React from 'react';
import styled from 'styled-components';
import { SelectGroupProps } from '@radix-ui/react-select';

export type BaseSelectGroupProps = {
    children: React.ReactNode;
    title?: string;
} & SelectGroupProps &
    React.RefAttributes<HTMLDivElement>;

export const SBSelectGroup = styled(Select.Group)`
    padding: 10px 0px;
    &:not(:last-child) {
        border-bottom: 1px solid;
    }
`;

export const SBSelectLabel = styled.div`
    font-size: 13px;
    padding: 2px 20px 6px 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const BaseSelectGroupRef: React.ForwardRefRenderFunction<unknown | any, BaseSelectGroupProps> = (
    { children, title, ...rest },
    ref
) => {
    return (
        <SBSelectGroup ref={ref} {...rest}>
            {title && <SBSelectLabel>{title}</SBSelectLabel>}
            {children}
        </SBSelectGroup>
    );
};

export const BaseSelectGroup = React.forwardRef(BaseSelectGroupRef);
