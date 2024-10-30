import { default as React } from '../../../../../node_modules/react';
import * as Select from '@radix-ui/react-select';
type SIconProps = React.ComponentPropsWithRef<typeof Select.Icon>;
type SItemProps = React.ComponentPropsWithRef<typeof Select.Item>;
export declare const SBaseSelectComponent: {
    Icon: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<Omit<Select.SelectIconProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement> | null | undefined;
    }, never>> & string & Omit<React.ForwardRefExoticComponent<Select.SelectIconProps & React.RefAttributes<HTMLSpanElement>>, keyof React.Component<any, {}, any>>;
    Item: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components').FastOmit<Omit<Select.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, never>> & string & Omit<React.ForwardRefExoticComponent<Select.SelectItemProps & React.RefAttributes<HTMLDivElement>>, keyof React.Component<any, {}, any>>;
};
export declare namespace TBaseSelectComponent {
    type SIcon = SIconProps;
    type SItem = SItemProps;
}
export {};
