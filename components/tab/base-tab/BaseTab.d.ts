import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSBtn, TypeSSMR, TypeSSTypography } from '../../../general/styleScheme';
import { TypeMargin, TypeVariantSize } from '../../../types/TypeBase';
import { default as React } from '../../../../../node_modules/react';
import * as Tabs from '@radix-ui/react-tabs';
type TypeStyles = {
    mr: TypeSSMR;
    btn: TypeSSBtn;
    typography: TypeSSTypography;
};
type BaseTabProps = {
    mr?: TypeMargin;
    color?: Hex;
    sizeVariant?: TypeVariantSize;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    blocked?: boolean;
} & React.ComponentPropsWithRef<typeof Tabs.Trigger>;
type STabProps = {
    $mr?: TypeMargin;
    $blocked?: boolean;
    $sizeVariant: TypeVariantSize;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
} & React.ComponentPropsWithRef<typeof Tabs.Trigger>;
export declare const BaseTab: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<BaseTabProps, "ref"> & React.RefAttributes<HTMLButtonElement>>>;
export declare const SBaseTab: {
    Tab: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Tabs.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement> | null | undefined;
    }, STabProps>> & string & Omit<React.ForwardRefExoticComponent<Tabs.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>>, keyof React.Component<any, {}, any>>;
};
export declare namespace TBaseTab {
    type Main = BaseTabProps;
    type Styles = TypeStyles;
    type STab = STabProps;
}
export {};
