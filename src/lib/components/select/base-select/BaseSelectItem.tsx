import React from 'react';
import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';
import { BaseCheck } from '@src/lib/icons';
import { SBaseSelectComponent, TBaseSelectComponent } from './BaseSelectComponent';
import { SelectItemIndicatorProps } from '@radix-ui/react-select';

type BaseSelectItemProps = {
    children: React.ReactNode;
} & TBaseSelectComponent.SItem;

const SItem = styled(SBaseSelectComponent.Item)<TBaseSelectComponent.SItem>`
    padding: 6px 20px 6px 20px;
    border-radius: 4px;
`;

const SIndicator = styled(Select.ItemIndicator)<SelectItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>`
    position: absolute;
    top: 50%;
    left: 2px;
    transform: translateY(-50%);
    svg {
        min-width: 14px;
        max-width: 14px;
        width: 14px;
        height: 14px;
    }
`;

const BaseSelectItemRef: React.ForwardRefRenderFunction<HTMLDivElement, BaseSelectItemProps> = (
    { children, ...rest },
    ref
) => {
    return (
        <SItem ref={ref} {...rest}>
            <SIndicator>
                <BaseCheck />
            </SIndicator>
            <Select.ItemText>{children}</Select.ItemText>
        </SItem>
    );
};

export const BaseSelectItem = React.forwardRef(BaseSelectItemRef);

//export component
export const SBaseSelectItem = {
    Item: SItem,
    Indicator: SIndicator,
};

//export type
export namespace TBaseSelectItem {
    export type Main = BaseSelectItemProps;
    export type SIndicator = SelectItemIndicatorProps & React.RefAttributes<HTMLSpanElement>;
}
