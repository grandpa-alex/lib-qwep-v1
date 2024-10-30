import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSAvatar, TypeSSMR } from '../../../general/styleScheme';
import { TypeMargin } from '../../../types/TypeBase';
import { default as React } from '../../../../../node_modules/react';
import { TypeVariantSizeAvatar } from '../../../types/TypeAvatar';
import * as Avatar from '@radix-ui/react-avatar';
type TypeStyles = {
    avatar: TypeSSAvatar;
    mr: TypeSSMR;
};
type BaseAvatarProps = {
    mr?: TypeMargin;
    sizeVariant?: TypeVariantSizeAvatar;
    color?: Hex;
    bg?: Hex;
    rootProps?: React.ComponentPropsWithRef<typeof Avatar.Root>;
    fallbackProps?: React.ComponentPropsWithRef<typeof Avatar.Fallback>;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & React.ComponentPropsWithRef<typeof Avatar.Image>;
type SRootProps = {
    $color?: Hex;
    $bg?: Hex;
    $mr?: TypeMargin;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $sizeVariant: TypeVariantSizeAvatar;
} & React.ComponentPropsWithRef<typeof Avatar.Root>;
export declare const BaseAvatar: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<BaseAvatarProps, "ref"> & React.RefAttributes<HTMLSpanElement>>>;
export declare const SBaseAvatar: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Avatar.AvatarProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement> | null | undefined;
    }, SRootProps>> & string & Omit<React.ForwardRefExoticComponent<Avatar.AvatarProps & React.RefAttributes<HTMLSpanElement>>, keyof React.Component<any, {}, any>>;
    Img: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Avatar.AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref"> & {
        ref?: ((instance: HTMLImageElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLImageElement> | null | undefined;
    }, Omit<Avatar.AvatarImageProps & React.RefAttributes<HTMLImageElement>, "ref"> & {
        ref?: ((instance: HTMLImageElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLImageElement> | null | undefined;
    }>> & string & Omit<React.ForwardRefExoticComponent<Avatar.AvatarImageProps & React.RefAttributes<HTMLImageElement>>, keyof React.Component<any, {}, any>>;
    Fallback: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Avatar.AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement> | null | undefined;
    }, Omit<Avatar.AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement> | null | undefined;
    }>> & string & Omit<React.ForwardRefExoticComponent<Avatar.AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>>, keyof React.Component<any, {}, any>>;
};
export declare namespace TBaseAvatar {
    type Styles = TypeStyles;
    type Main = BaseAvatarProps;
    type SRoot = SRootProps;
    type SImg = React.ComponentPropsWithRef<typeof Avatar.Image>;
    type SFallback = React.ComponentPropsWithRef<typeof Avatar.Fallback>;
}
export {};
