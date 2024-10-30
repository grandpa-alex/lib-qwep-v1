import { Copy } from '../../types/CopyType';
import { BaseSlider, TBaseSlider } from './base-slider/BaseSlider';

export { BaseSlider };
export declare const SliderStyledComponent: {
    BaseSlider: {
        Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-slider').SliderProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }, {
            $mr?: import('../../types/TypeBase').TypeMargin;
            $color?: import('../../general/colors').Hex;
            $length?: string;
            $blocked?: boolean;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                mr: import('../../general/styleScheme').TypeSSMR;
                slider: import('../../general/styleScheme').TypeSSSlider;
            };
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
        } & Omit<import('@radix-ui/react-slider').SliderProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-slider').SliderProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
        Thumb: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-slider').SliderThumbProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }, Omit<import('@radix-ui/react-slider').SliderThumbProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-slider').SliderThumbProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
        Range: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-slider').SliderRangeProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }, Omit<import('@radix-ui/react-slider').SliderRangeProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-slider').SliderRangeProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
        Track: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-slider').SliderTrackProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }, Omit<import('@radix-ui/react-slider').SliderTrackProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-slider').SliderTrackProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
    };
};
export declare namespace TypeSlider {
    namespace BaseSlider {
        type Main = Copy<TBaseSlider.Main>;
        type Styles = Copy<TBaseSlider.Styles>;
        type SRoot = Copy<TBaseSlider.SRoot>;
        type STrack = Copy<TBaseSlider.STrack>;
        type SRange = Copy<TBaseSlider.SRange>;
        type SThumb = Copy<TBaseSlider.SThumb>;
    }
}
