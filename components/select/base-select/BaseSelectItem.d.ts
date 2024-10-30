import { default as React } from '../../../../../node_modules/react';
import { TBaseSelectComponent } from './BaseSelectComponent';
import { BaseCheckProps } from '../../../icons/BaseCheck.tsx';

import * as Select from '@radix-ui/react-select';
type BaseSelectItemProps = {
    indicatorProps?: React.ComponentPropsWithRef<typeof Select.ItemIndicator>;
    iconProps?: BaseCheckProps;
    itemTextProps?: React.ComponentPropsWithRef<typeof Select.ItemText>;
} & TBaseSelectComponent.SItem;
export declare const BaseSelectItem: React.ForwardRefExoticComponent<Omit<BaseSelectItemProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const SBaseSelectItem: {
    Item: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<Omit<Select.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, never>, BaseSelectItemProps>> & string;
    Indicator: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Select.SelectItemIndicatorProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement> | null | undefined;
    }, Omit<Select.SelectItemIndicatorProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement> | null | undefined;
    }>> & string & Omit<React.ForwardRefExoticComponent<Select.SelectItemIndicatorProps & React.RefAttributes<HTMLSpanElement>>, keyof React.Component<any, {}, any>>;
    ItemText: React.ForwardRefExoticComponent<Select.SelectItemTextProps & React.RefAttributes<HTMLSpanElement>>;
};
export declare namespace TBaseSelectItem {
    type Main = BaseSelectItemProps;
    type SIndicator = React.ComponentPropsWithRef<typeof Select.ItemIndicator>;
    type SItemText = React.ComponentPropsWithRef<typeof Select.ItemText>;
}
export {};
