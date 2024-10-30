import { Copy } from '../../types/CopyType';
import { BaseAvatar, TBaseAvatar } from './base-avatar/BaseAvatar';

export { BaseAvatar };
export declare const AvatarStyledComponent: {
    BaseAvatar: {
        Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-avatar').AvatarProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }, {
            $color?: import('../../general/colors').Hex;
            $bg?: import('../../general/colors').Hex;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                avatar: import('../../general/styleScheme').TypeSSAvatar;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $sizeVariant: import('../../types/TypeAvatar').TypeVariantSizeAvatar;
        } & Omit<import('@radix-ui/react-avatar').AvatarProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-avatar').AvatarProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
        Img: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-avatar').AvatarImageProps & import('../../../../node_modules/react').RefAttributes<HTMLImageElement>, "ref"> & {
            ref?: ((instance: HTMLImageElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLImageElement> | null | undefined;
        }, Omit<import('@radix-ui/react-avatar').AvatarImageProps & import('../../../../node_modules/react').RefAttributes<HTMLImageElement>, "ref"> & {
            ref?: ((instance: HTMLImageElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLImageElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-avatar').AvatarImageProps & import('../../../../node_modules/react').RefAttributes<HTMLImageElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
        Fallback: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-avatar').AvatarFallbackProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }, Omit<import('@radix-ui/react-avatar').AvatarFallbackProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-avatar').AvatarFallbackProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
    };
};
export declare namespace TypeAvatar {
    namespace BaseBox {
        type Main = Copy<TBaseAvatar.Main>;
        type SRoot = Copy<TBaseAvatar.SRoot>;
        type SImg = Copy<TBaseAvatar.SImg>;
        type SFallback = Copy<TBaseAvatar.SFallback>;
        type Styles = Copy<TBaseAvatar.Styles>;
    }
}
