import { BaseBox, TBaseBox } from './base-box/BaseBox';
import { SimpleBox, TSimpleBox } from './simple-box/SimpleBox';
import { BaseContainer, TBaseContainer } from './base-container/BaseContainer';
import { BaseLayout, TBaseLayout } from './base-layout/BaseLayout';
import { BaseMenuGroup, TBaseMenuGroup } from './base-menu/BaseMenuGroup';
import { BaseMenuItem, TBaseMenuItem } from './base-menu/BaseMenuItem';
import { Copy } from '../../types/CopyType';

export { BaseBox, SimpleBox, BaseContainer, BaseLayout, BaseMenuGroup, BaseMenuItem };
export declare const BoxStyledComponent: {
    BaseBox: {
        Box: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
            $boxWidthVariant?: import('../../types/TypeBox').TypeBoxWidthVariant;
            $boxPaddingVariant?: import('../../types/TypeBox').TypeBoxPaddingVariant;
            $boxGapVariant?: import('../../types/TypeBox').TypeBoxGapVariant;
            $boxDisplay?: import('../../types/TypeBox').TypeBoxDisplay;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $styles: {
                box: import('../../general/styleScheme').TypeSSBox;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
    };
    SimpleBox: {
        Box: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('styled-components').FastOmit<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "$boxWidthVariant" | "$boxPaddingVariant" | "$boxGapVariant" | "$boxDisplay" | "$mr" | "$styles" | keyof import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>> & {
            $boxWidthVariant?: import('../../types/TypeBox').TypeBoxWidthVariant;
            $boxPaddingVariant?: import('../../types/TypeBox').TypeBoxPaddingVariant;
            $boxGapVariant?: import('../../types/TypeBox').TypeBoxGapVariant;
            $boxDisplay?: import('../../types/TypeBox').TypeBoxDisplay;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $styles: {
                box: import('../../general/styleScheme').TypeSSBox;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }, {
            $colors: import('../../general/colors').TypeColorScheme;
            $bg?: import('../../general/colors').Hex;
            $boxBorderColor?: import('../../general/colors').Hex;
            $boxShadowColor?: import('../../general/colors').Hex;
            $boxShadowVariant?: import('../../types/TypeBox').TypeBoxShadowVariant;
            $boxRadiusVariant?: import('../../types/TypeBox').TypeBoxRadiusVariant;
        } & {
            $boxWidthVariant?: import('../../types/TypeBox').TypeBoxWidthVariant;
            $boxPaddingVariant?: import('../../types/TypeBox').TypeBoxPaddingVariant;
            $boxGapVariant?: import('../../types/TypeBox').TypeBoxGapVariant;
            $boxDisplay?: import('../../types/TypeBox').TypeBoxDisplay;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $styles: {
                box: import('../../general/styleScheme').TypeSSBox;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
    };
    BaseContainer: {
        Container: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
            $bg?: import('../../general/colors').Hex;
            $colors: import('../../general/colors').TypeColorScheme;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
    };
    BaseLayout: {
        Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
        Layout: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
    };
    BaseMenuGroup: {
        Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                box: import('../../general/styleScheme').TypeSSBox;
                mr: import('../../general/styleScheme').TypeSSMR;
                btn: import('../../general/styleScheme').TypeSSBtn;
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $bg?: import('../../general/colors').Hex;
            $orientation: import('../../types/TypeBase').TypeOrientationContent;
            $boxBorderColor?: import('../../general/colors').Hex;
            $boxShadowColor?: import('../../general/colors').Hex;
            $boxShadowVariant?: import('../../types/TypeBox').TypeBoxShadowVariant;
            $boxRadiusVariant?: import('../../types/TypeBox').TypeBoxRadiusVariant;
            $boxWidthVariant?: import('../../types/TypeBox').TypeBoxWidthVariant;
            $boxPaddingVariant?: import('../../types/TypeBox').TypeBoxPaddingVariant;
            $boxGapVariant?: import('../../types/TypeBox').TypeBoxGapVariant;
            $mr?: import('../../types/TypeBase').TypeMargin;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
    };
    BaseMenuItem: {
        Button: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
            $color?: import('../../general/colors').Hex;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                base: import('../../general/styleScheme').TypeSSBase;
                btn: import('../../general/styleScheme').TypeSSBtn;
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $opacityHover?: import('../../common/getColor').opacity;
            $opacityActive?: import('../../common/getColor').opacity;
            $textColor?: import('../../general/colors').Hex;
            $textColorActive?: import('../../general/colors').Hex;
            $active?: boolean;
            $_isActiveHover: boolean;
            $blocked?: boolean;
        } & import('../../../../node_modules/react').ButtonHTMLAttributes<HTMLButtonElement>>> & string;
    };
};
export declare namespace TypeBox {
    namespace BaseBox {
        type Main = Copy<TBaseBox.Main>;
        type SBox = Copy<TBaseBox.SBox>;
        type Styles = Copy<TBaseBox.Styles>;
    }
    namespace SimpleBox {
        type Main = Copy<TSimpleBox.Main>;
        type SBox = Copy<TSimpleBox.SBox>;
    }
    namespace BaseContainer {
        type Main = Copy<TBaseContainer.Main>;
        type SContainer = Copy<TBaseContainer.SContainer>;
    }
    namespace BaseLayout {
        type Main = Copy<TBaseLayout.Main>;
        type SWrapper = Copy<TBaseLayout.SWrapper>;
        type SRoot = Copy<TBaseLayout.SRoot>;
    }
    namespace BaseMenuGroup {
        type Main = Copy<TBaseMenuGroup.Main>;
        type Styles = Copy<TBaseMenuGroup.Styles>;
        type SRoot = Copy<TBaseMenuGroup.SRoot>;
    }
    namespace BaseMenuItem {
        type Main = Copy<TBaseMenuItem.Main>;
        type Styles = Copy<TBaseMenuItem.Styles>;
        type SButton = Copy<TBaseMenuItem.SButton>;
    }
}
