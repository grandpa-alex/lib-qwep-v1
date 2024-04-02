import React from 'react';
import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';
import { BaseCheck } from '@src/lib/icons';
import { SBCSelectItem, SBCSelectItemProps } from './BaseSelectComponent';

export type BaseSelectItemProps = {
    children: React.ReactNode;
} & SBCSelectItemProps;

export const SBSelectItem = styled(SBCSelectItem)`
    padding: 6px 20px 6px 20px;
    border-radius: 4px;
`;

export const SBSelectItemIndicator = styled(Select.ItemIndicator)`
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    svg {
        width: 14px;
        height: 14px;
    }
`;

const BaseSelectItemRef: React.ForwardRefRenderFunction<HTMLDivElement, BaseSelectItemProps> = (
    { children, ...rest },
    ref
) => {
    return (
        <SBSelectItem ref={ref} {...rest}>
            <SBSelectItemIndicator>
                <BaseCheck />
            </SBSelectItemIndicator>
            <Select.ItemText>{children}</Select.ItemText>
        </SBSelectItem>
    );
};

export const BaseSelectItem = React.forwardRef(BaseSelectItemRef);
