import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSMR, TypeSSSlider } from '../../../general/styleScheme';
import { TypeVariantColor, TypeMargin, TypeVariantSize } from '../../../types/TypeBase';
import { default as React } from '../../../../../node_modules/react';
import * as Slider from '@radix-ui/react-slider';
type TypeStyles = {
    mr: TypeSSMR;
    slider: TypeSSSlider;
};
type BaseSliderProps = {
    mr?: TypeMargin;
    colorVariant?: TypeVariantColor;
    sizeVariant?: TypeVariantSize;
    length?: string;
    color?: Hex;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    trackProps?: React.ComponentPropsWithRef<typeof Slider.Track>;
    rangeProps?: React.ComponentPropsWithRef<typeof Slider.Range>;
    thumbProps?: React.ComponentPropsWithRef<typeof Slider.Thumb>;
} & React.ComponentPropsWithRef<typeof Slider.Root>;
type SRootProps = {
    $mr?: TypeMargin;
    $color?: Hex;
    $length?: string;
    $blocked?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TypeVariantColor;
    $sizeVariant: TypeVariantSize;
} & React.ComponentPropsWithRef<typeof Slider.Root>;
export declare const BaseSlider: React.MemoExoticComponent<React.ForwardRefExoticComponent<Omit<BaseSliderProps, "ref"> & React.RefAttributes<HTMLSpanElement>>>;
export declare const SBaseSlider: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Slider.SliderProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement> | null | undefined;
    }, SRootProps>> & string & Omit<React.ForwardRefExoticComponent<Slider.SliderProps & React.RefAttributes<HTMLSpanElement>>, keyof React.Component<any, {}, any>>;
    Thumb: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Slider.SliderThumbProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement> | null | undefined;
    }, Omit<Slider.SliderThumbProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement> | null | undefined;
    }>> & string & Omit<React.ForwardRefExoticComponent<Slider.SliderThumbProps & React.RefAttributes<HTMLSpanElement>>, keyof React.Component<any, {}, any>>;
    Range: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Slider.SliderRangeProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement> | null | undefined;
    }, Omit<Slider.SliderRangeProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement> | null | undefined;
    }>> & string & Omit<React.ForwardRefExoticComponent<Slider.SliderRangeProps & React.RefAttributes<HTMLSpanElement>>, keyof React.Component<any, {}, any>>;
    Track: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<Slider.SliderTrackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement> | null | undefined;
    }, Omit<Slider.SliderTrackProps & React.RefAttributes<HTMLSpanElement>, "ref"> & {
        ref?: ((instance: HTMLSpanElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLSpanElement> | null | undefined;
    }>> & string & Omit<React.ForwardRefExoticComponent<Slider.SliderTrackProps & React.RefAttributes<HTMLSpanElement>>, keyof React.Component<any, {}, any>>;
};
export declare namespace TBaseSlider {
    type Main = BaseSliderProps;
    type Styles = TypeStyles;
    type SRoot = SRootProps;
    type STrack = React.ComponentPropsWithRef<typeof Slider.Track>;
    type SRange = React.ComponentPropsWithRef<typeof Slider.Range>;
    type SThumb = React.ComponentPropsWithRef<typeof Slider.Thumb>;
}
export {};
