import { Copy } from '../../types/CopyType';
import { BaseSwitch, TBaseSwitch } from './base-switch/BaseSwitch';
import { SubmitSwitch, TSubmitSwitch } from './submit-switch/SubmitSwitch';

export { BaseSwitch, SubmitSwitch };
export declare const SwitchStyledComponent: {
    BaseSwitch: {
        Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-switch').SwitchProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }, import('./base-switch/BaseSwitch').SRootProps>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-switch').SwitchProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
        Thumb: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-switch').SwitchThumbProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }, import('./base-switch/BaseSwitch').SThumbProps>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-switch').SwitchThumbProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
    };
    SubmitSwitch: {
        Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<Omit<import('@radix-ui/react-switch').SwitchProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }, "disabled" | "title" | "children" | "value" | "ref" | "form" | "slot" | "style" | "$mr" | "$styles" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "autoFocus" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "nonce" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "content" | "datatype" | "inlist" | "prefix" | "property" | "rel" | "resource" | "rev" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "name" | "type" | "required" | "formAction" | "formEncType" | "formMethod" | "formNoValidate" | "formTarget" | "checked" | "$colors" | "$color" | "$sizeVariant" | "$_isActiveHover" | "$blocked" | "$colorVariant" | "asChild" | "onCheckedChange"> & {
            $color?: import('../../general/colors').Hex;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                switch: import('../../general/styleScheme').TypeSSSwitch;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $blocked?: boolean;
            $_isActiveHover?: boolean;
        } & Omit<import('@radix-ui/react-switch').SwitchProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }, {
            $isLoading: boolean;
        } & {
            $color?: import('../../general/colors').Hex;
            $mr?: import('../../types/TypeBase').TypeMargin;
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                switch: import('../../general/styleScheme').TypeSSSwitch;
                mr: import('../../general/styleScheme').TypeSSMR;
            };
            $colorVariant: import('../../types/TypeBase').TypeVariantColor;
            $sizeVariant: import('../../types/TypeBase').TypeVariantSize;
            $blocked?: boolean;
            $_isActiveHover?: boolean;
        } & Omit<import('@radix-ui/react-switch').SwitchProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }>> & string;
        Thumb: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-switch').SwitchThumbProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>, "ref"> & {
            ref?: ((instance: HTMLSpanElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLSpanElement> | null | undefined;
        }, import('./base-switch/BaseSwitch').SThumbProps>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-switch').SwitchThumbProps & import('../../../../node_modules/react').RefAttributes<HTMLSpanElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
    };
};
export declare namespace TypeSwitch {
    namespace BaseSwitch {
        type Main = Copy<TBaseSwitch.Main>;
        type Styles = Copy<TBaseSwitch.Styles>;
        type SRoot = Copy<TBaseSwitch.SRoot>;
        type SThumb = Copy<TBaseSwitch.SThumb>;
    }
    namespace SubmitSwitch {
        type Main = Copy<TSubmitSwitch.Main>;
        type SRoot = Copy<TSubmitSwitch.SRoot>;
        type SThumb = Copy<TSubmitSwitch.SThumb>;
    }
}
