import { TypeSSBox, TypeSSMR } from '../../../general/styleScheme';
import { TypeMargin, TypeOrientationContent } from '../../../types/TypeBase';
import { default as React } from '../../../../../node_modules/react';
import { TypeBoxPaddingVariant, TypeBoxWidthVariant } from '../../../types/TypeBox.ts';
import * as Tabs from '@radix-ui/react-tabs';
type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
};
type Box = {
    boxWidthVariant?: TypeBoxWidthVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    mr?: TypeMargin;
    $styles?: TypeStyles;
};
type TypeTabsListProps = {
    orientation?: TypeOrientationContent;
} & Box & React.ComponentPropsWithRef<typeof Tabs.List>;
type BaseTabWrapperProps = {
    tabs: React.ReactNode[];
    tabsListProps?: TypeTabsListProps;
} & Box & React.ComponentPropsWithRef<typeof Tabs.Root>;
type SBox = {
    $mr?: TypeMargin;
    $boxWidthVariant?: TypeBoxWidthVariant;
    $boxPaddingVariant?: TypeBoxPaddingVariant;
    $styles: TypeStyles;
};
type SRootProps = SBox & React.ComponentPropsWithRef<typeof Tabs.Root>;
type SListProps = {
    $orientation: TypeOrientationContent;
} & SBox & React.ComponentPropsWithRef<typeof Tabs.List>;
export declare const BaseTabWrapper: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<BaseTabWrapperProps, "ref"> & React.RefAttributes<HTMLDivElement>>>;
export declare const SBaseTabWrapper: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Tabs.TabsProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, SRootProps>> & string & Omit<React.ForwardRefExoticComponent<Tabs.TabsProps & React.RefAttributes<HTMLDivElement>>, keyof React.Component<any, {}, any>>;
    List: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Tabs.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, SListProps>> & string & Omit<React.ForwardRefExoticComponent<Tabs.TabsListProps & React.RefAttributes<HTMLDivElement>>, keyof React.Component<any, {}, any>>;
};
export declare namespace TBaseTabWrapper {
    type Main = BaseTabWrapperProps;
    type Styles = TypeStyles;
    type SRoot = SRootProps;
    type SList = SListProps;
}
export {};
