import { default as React } from '../../../../../node_modules/react';
import { SelectGroupProps } from '@radix-ui/react-select';
import * as Select from '@radix-ui/react-select';
type BaseSelectGroupProps = {
    label?: string;
    labelProps?: React.HTMLAttributes<HTMLDivElement>;
} & React.ComponentPropsWithRef<typeof Select.Group>;
export declare const BaseSelectGroup: React.ForwardRefExoticComponent<Omit<BaseSelectGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const SBaseSelectGroup: {
    Label: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, React.HTMLAttributes<HTMLDivElement>>> & string;
    Group: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Select.SelectGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, Omit<Select.SelectGroupProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }>> & string & Omit<React.ForwardRefExoticComponent<Select.SelectGroupProps & React.RefAttributes<HTMLDivElement>>, keyof React.Component<any, {}, any>>;
};
export declare namespace TBaseSelectGroup {
    type Main = BaseSelectGroupProps;
    type SGroup = SelectGroupProps;
    type SLabel = React.HTMLAttributes<HTMLDivElement>;
}
export {};
