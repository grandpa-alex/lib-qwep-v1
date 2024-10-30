import { Copy } from '../../types/CopyType';
import { BaseTab, TBaseTab } from './base-tab/BaseTab';
import { BaseTabContent, TBaseTabContent } from './base-tab/BaseTabContent';
import { BaseTabWrapper, TBaseTabWrapper } from './base-tab/BaseTabWrapper';

export { BaseTabWrapper, BaseTab, BaseTabContent };
export declare const TabStyledComponent: {
    BaseTab: {
        Tab: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-tabs').TabsTriggerProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }, {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $blocked?: boolean;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $styles: {
                mr: import('../../general/styleScheme').TypeSSMR;
                btn: import('../../general/styleScheme').TypeSSBtn;
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $colors: import('../../general/colors').TypeColorScheme;
        } & Omit<import('@radix-ui/react-tabs').TabsTriggerProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-tabs').TabsTriggerProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
    };
    BaseTabWrapper: {
        Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-tabs').TabsProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }, {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $boxWidthVariant?: import('../../types/TypeBox').TypeBoxWidthVariant;
            $boxPaddingVariant?: import('../../types/TypeBox').TypeBoxPaddingVariant;
            $styles: {
                mr: import('../../general/styleScheme').TypeSSMR;
                box: import('../../general/styleScheme').TypeSSBox;
            };
        } & Omit<import('@radix-ui/react-tabs').TabsProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-tabs').TabsProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
        List: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-tabs').TabsListProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }, {
            $orientation: import('../../types/TypeBase').TypeOrientationContent;
        } & {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $boxWidthVariant?: import('../../types/TypeBox').TypeBoxWidthVariant;
            $boxPaddingVariant?: import('../../types/TypeBox').TypeBoxPaddingVariant;
            $styles: {
                mr: import('../../general/styleScheme').TypeSSMR;
                box: import('../../general/styleScheme').TypeSSBox;
            };
        } & Omit<import('@radix-ui/react-tabs').TabsListProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-tabs').TabsListProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
    };
    BaseTabContent: {
        Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-tabs').TabsContentProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }, {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $boxWidthVariant?: import('../../types/TypeBox').TypeBoxWidthVariant;
            $boxPaddingVariant?: import('../../types/TypeBox').TypeBoxPaddingVariant;
            $boxDisplay?: import('../../types/TypeBox').TypeBoxDisplay;
            $styles: {
                mr: import('../../general/styleScheme').TypeSSMR;
                box: import('../../general/styleScheme').TypeSSBox;
            };
        } & Omit<import('@radix-ui/react-tabs').TabsContentProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-tabs').TabsContentProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
    };
};
export declare namespace TypeTab {
    namespace BaseTab {
        type Main = Copy<TBaseTab.Main>;
        type Styles = Copy<TBaseTab.Styles>;
        type STab = Copy<TBaseTab.STab>;
    }
    namespace BaseTabWrapper {
        type Main = Copy<TBaseTabWrapper.Main>;
        type Styles = Copy<TBaseTabWrapper.Styles>;
        type SRoot = Copy<TBaseTabWrapper.SRoot>;
        type SList = Copy<TBaseTabWrapper.SList>;
    }
    namespace BaseTabContent {
        type Main = Copy<TBaseTabContent.Main>;
        type Styles = Copy<TBaseTabContent.Styles>;
        type SRoot = Copy<TBaseTabContent.SRoot>;
    }
}
