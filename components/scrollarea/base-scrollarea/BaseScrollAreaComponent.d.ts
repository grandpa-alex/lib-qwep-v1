import { default as React } from '../../../../../node_modules/react';
import * as ScrollArea from '@radix-ui/react-scroll-area';
type SRootProps = React.ComponentPropsWithRef<typeof ScrollArea.Root>;
type SViewportProps = React.ComponentPropsWithRef<typeof ScrollArea.Viewport>;
type SScrollbarProps = React.ComponentPropsWithRef<typeof ScrollArea.Scrollbar>;
type SThumbProps = React.ComponentPropsWithRef<typeof ScrollArea.Thumb>;
export declare const SBaseScrollAreaComponent: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<ScrollArea.ScrollAreaProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, Omit<ScrollArea.ScrollAreaProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }>> & string & Omit<React.ForwardRefExoticComponent<ScrollArea.ScrollAreaProps & React.RefAttributes<HTMLDivElement>>, keyof React.Component<any, {}, any>>;
    Viewport: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<ScrollArea.ScrollAreaViewportProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, Omit<ScrollArea.ScrollAreaViewportProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }>> & string & Omit<React.ForwardRefExoticComponent<ScrollArea.ScrollAreaViewportProps & React.RefAttributes<HTMLDivElement>>, keyof React.Component<any, {}, any>>;
    Scrollbar: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<ScrollArea.ScrollAreaScrollbarProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, Omit<ScrollArea.ScrollAreaScrollbarProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }>> & string & Omit<React.ForwardRefExoticComponent<ScrollArea.ScrollAreaScrollbarProps & React.RefAttributes<HTMLDivElement>>, keyof React.Component<any, {}, any>>;
    Thumb: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<ScrollArea.ScrollAreaThumbProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, Omit<ScrollArea.ScrollAreaThumbProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }>> & string & Omit<React.ForwardRefExoticComponent<ScrollArea.ScrollAreaThumbProps & React.RefAttributes<HTMLDivElement>>, keyof React.Component<any, {}, any>>;
};
export declare namespace TBaseScrollAreaComponent {
    type SRoot = SRootProps;
    type SViewport = SViewportProps;
    type SScrollbar = SScrollbarProps;
    type SThumb = SThumbProps;
}
export {};
