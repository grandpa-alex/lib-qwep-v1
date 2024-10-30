import { TypeColorScheme } from '../../../general/colors';
import { TypeSSBox, TypeSSMR } from '../../../general/styleScheme';
import { TypeMargin } from '../../../types/TypeBase';
import { default as React } from '../../../../../node_modules/react';
import { TypeBoxDisplay, TypeBoxPaddingVariant, TypeBoxWidthVariant } from '../../../types/TypeBox.ts';
import * as Tabs from '@radix-ui/react-tabs';
type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
};
type BaseTabContentProps = {
    boxWidthVariant?: TypeBoxWidthVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxDisplay?: TypeBoxDisplay;
    mr?: TypeMargin;
    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.ComponentPropsWithRef<typeof Tabs.Content>;
type SRootProps = {
    $mr?: TypeMargin;
    $boxWidthVariant?: TypeBoxWidthVariant;
    $boxPaddingVariant?: TypeBoxPaddingVariant;
    $boxDisplay?: TypeBoxDisplay;
    $styles: TypeStyles;
} & React.ComponentPropsWithRef<typeof Tabs.Content>;
export declare const BaseTabContent: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<BaseTabContentProps, "ref"> & React.RefAttributes<HTMLDivElement>>>;
export declare const SBaseTabContent: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Tabs.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, SRootProps>> & string & Omit<React.ForwardRefExoticComponent<Tabs.TabsContentProps & React.RefAttributes<HTMLDivElement>>, keyof React.Component<any, {}, any>>;
};
export declare namespace TBaseTabContent {
    type Main = BaseTabContentProps;
    type Styles = TypeStyles;
    type SRoot = SRootProps;
}
export {};
