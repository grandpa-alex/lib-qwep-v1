import * as Select from '@radix-ui/react-select';
import React from 'react';
import styled from 'styled-components';
import { SelectGroupProps } from '@radix-ui/react-select';

type BaseSelectGroupProps = {
    children: React.ReactNode;
    title?: string;
} & SelectGroupProps &
    React.RefAttributes<HTMLDivElement>;

const SGroup = styled(Select.Group)<SelectGroupProps & React.RefAttributes<HTMLDivElement>>`
    padding: 10px 0px;
    &:not(:last-child) {
        border-bottom: 1px solid;
    }
`;

const SLabel = styled.div`
    font-size: 13px;
    padding: 2px 20px 6px 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const BaseSelectGroupRef: React.ForwardRefRenderFunction<HTMLDivElement, BaseSelectGroupProps> = (
    { children, title, ...rest },
    ref
) => {
    return (
        <SGroup ref={ref} {...rest}>
            {title && <SLabel>{title}</SLabel>}
            {children}
        </SGroup>
    );
};

export const BaseSelectGroup = React.forwardRef(BaseSelectGroupRef);

//export component
export const SBaseSelectGroup = {
    Label: SLabel,
    Group: SGroup,
};

//export type
export namespace TBaseSelectGroup {
    export type Main = BaseSelectGroupProps;
    export type SGroup = SelectGroupProps & React.RefAttributes<HTMLDivElement>;
}
