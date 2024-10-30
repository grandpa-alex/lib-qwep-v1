import { Hex, TypeColorScheme } from '../../../general/colors';
import { default as React } from '../../../../../node_modules/react';
import { TypeMargin } from '../../../types/TypeBase';
import * as Popover from '@radix-ui/react-popover';
type BasePopupProps = {
    trigger: React.ReactNode;
    mr?: TypeMargin;
    bg?: Hex;
    $colors?: TypeColorScheme;
    triggerProps?: React.ComponentPropsWithRef<typeof Popover.Trigger>;
    portalProps?: React.ComponentPropsWithRef<typeof Popover.Portal>;
    contentProps?: React.ComponentPropsWithRef<typeof Popover.Content>;
    arrowProps?: React.ComponentPropsWithRef<typeof Popover.Arrow>;
} & React.ComponentPropsWithRef<typeof Popover.Root>;
type SContentProps = {
    $colors: TypeColorScheme;
    $bg?: Hex;
} & React.ComponentPropsWithRef<typeof Popover.Content>;
export declare const BasePopup: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    trigger: React.ReactNode;
    mr?: TypeMargin;
    bg?: Hex;
    $colors?: TypeColorScheme;
    triggerProps?: React.ComponentPropsWithRef<typeof Popover.Trigger>;
    portalProps?: React.ComponentPropsWithRef<typeof Popover.Portal>;
    contentProps?: React.ComponentPropsWithRef<typeof Popover.Content>;
    arrowProps?: React.ComponentPropsWithRef<typeof Popover.Arrow>;
} & Popover.PopoverProps & React.RefAttributes<HTMLButtonElement>>>;
export declare const SBasePopup: {
    Root: React.FC<Popover.PopoverProps>;
    Portal: React.FC<Popover.PopoverPortalProps>;
    Content: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Popover.PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, SContentProps>> & string & Omit<React.ForwardRefExoticComponent<Popover.PopoverContentProps & React.RefAttributes<HTMLDivElement>>, keyof React.Component<any, {}, any>>;
    Trigger: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Popover.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement> | null | undefined;
    }, Omit<Popover.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement> | null | undefined;
    }>> & string & Omit<React.ForwardRefExoticComponent<Popover.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>, keyof React.Component<any, {}, any>>;
    Arrow: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Popover.PopoverArrowProps & React.RefAttributes<SVGSVGElement>, "ref"> & {
        ref?: ((instance: SVGSVGElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<SVGSVGElement> | null | undefined;
    }, Omit<Popover.PopoverArrowProps & React.RefAttributes<SVGSVGElement>, "ref"> & {
        ref?: ((instance: SVGSVGElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<SVGSVGElement> | null | undefined;
    }>> & string & Omit<React.ForwardRefExoticComponent<Popover.PopoverArrowProps & React.RefAttributes<SVGSVGElement>>, keyof React.Component<any, {}, any>>;
};
export declare namespace TBasePopup {
    type Main = BasePopupProps;
    type SContent = SContentProps;
    type SRoot = React.ComponentPropsWithRef<typeof Popover.Root>;
    type SPortal = React.ComponentPropsWithRef<typeof Popover.Portal>;
    type STrigger = React.ComponentPropsWithRef<typeof Popover.Trigger>;
    type SArrow = React.ComponentPropsWithRef<typeof Popover.Arrow>;
}
export {};
