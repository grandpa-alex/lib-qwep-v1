import { Copy } from '../../types/CopyType';
import { BasePopup, TBasePopup } from './base-popup/BasePopup';
import { SimplePopup, TSimplePopup } from './simple-popup/SimplePopup';

export { BasePopup, SimplePopup };
export declare const PopupStyledComponent: {
    BasePopup: {
        Root: import('../../../../node_modules/react').FC<import('@radix-ui/react-popover').PopoverProps>;
        Portal: import('../../../../node_modules/react').FC<import('@radix-ui/react-popover').PopoverPortalProps>;
        Content: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-popover').PopoverContentProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }, {
            $colors: import('../../general/colors').TypeColorScheme;
            $bg?: import('../../general/colors').Hex;
        } & Omit<import('@radix-ui/react-popover').PopoverContentProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-popover').PopoverContentProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
        Trigger: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-popover').PopoverTriggerProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }, Omit<import('@radix-ui/react-popover').PopoverTriggerProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-popover').PopoverTriggerProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
        Arrow: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-popover').PopoverArrowProps & import('../../../../node_modules/react').RefAttributes<SVGSVGElement>, "ref"> & {
            ref?: ((instance: SVGSVGElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<SVGSVGElement> | null | undefined;
        }, Omit<import('@radix-ui/react-popover').PopoverArrowProps & import('../../../../node_modules/react').RefAttributes<SVGSVGElement>, "ref"> & {
            ref?: ((instance: SVGSVGElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<SVGSVGElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-popover').PopoverArrowProps & import('../../../../node_modules/react').RefAttributes<SVGSVGElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
    };
    SimplePopup: {
        Root: import('../../../../node_modules/react').FC<import('@radix-ui/react-popover').PopoverProps>;
        Trigger: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-popover').PopoverTriggerProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }, Omit<import('@radix-ui/react-popover').PopoverTriggerProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>, "ref"> & {
            ref?: ((instance: HTMLButtonElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLButtonElement> | null | undefined;
        }>> & string & Omit<import('../../../../node_modules/react').ForwardRefExoticComponent<import('@radix-ui/react-popover').PopoverTriggerProps & import('../../../../node_modules/react').RefAttributes<HTMLButtonElement>>, keyof import('../../../../node_modules/react').Component<any, {}, any>>;
        Portal: import('../../../../node_modules/react').FC<import('@radix-ui/react-popover').PopoverPortalProps>;
        Content: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<Omit<import('@radix-ui/react-popover').PopoverContentProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }, "title" | "children" | "ref" | "slot" | "style" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "autoFocus" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "nonce" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "content" | "datatype" | "inlist" | "prefix" | "property" | "rel" | "resource" | "rev" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "sticky" | "align" | "$colors" | "$bg" | "asChild" | "forceMount" | "side" | "sideOffset" | "alignOffset" | "arrowPadding" | "avoidCollisions" | "collisionBoundary" | "collisionPadding" | "hideWhenDetached" | "updatePositionStrategy" | "onEscapeKeyDown" | "onPointerDownOutside" | "onFocusOutside" | "onInteractOutside" | "onCloseAutoFocus" | "onOpenAutoFocus"> & {
            $colors: import('../../general/colors').TypeColorScheme;
            $bg?: import('../../general/colors').Hex;
        } & Omit<import('@radix-ui/react-popover').PopoverContentProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }, {
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                mr: import('../../general/styleScheme').TypeSSMR;
                box: import('../../general/styleScheme').TypeSSBox;
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $bg?: import('../../general/colors').Hex;
            $width?: string;
            $height?: string;
            $maxHeight?: string;
            $boxBorderColor?: import('../../general/colors').Hex;
            $boxShadowColor?: import('../../general/colors').Hex;
            $boxShadowVariant?: import('../../types/TypeBox').TypeBoxShadowVariant;
            $boxRadiusVariant?: import('../../types/TypeBox').TypeBoxRadiusVariant;
        } & {
            $colors: import('../../general/colors').TypeColorScheme;
            $bg?: import('../../general/colors').Hex;
        } & Omit<import('@radix-ui/react-popover').PopoverContentProps & import('../../../../node_modules/react').RefAttributes<HTMLDivElement>, "ref"> & {
            ref?: ((instance: HTMLDivElement | null) => void | import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof import('../../../../node_modules/react').DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | import('../../../../node_modules/react').RefObject<HTMLDivElement> | null | undefined;
        }>> & string;
        Card: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                mr: import('../../general/styleScheme').TypeSSMR;
                box: import('../../general/styleScheme').TypeSSBox;
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $color?: import('../../general/colors').Hex;
            $height?: string;
            $maxHeight?: string;
            $boxPaddingVariant: import('../../types/TypeBox').TypeBoxPaddingVariant;
            $boxGapVariant?: import('../../types/TypeBox').TypeBoxGapVariant;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
        Header: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
            $colors: import('../../general/colors').TypeColorScheme;
            $styles: {
                mr: import('../../general/styleScheme').TypeSSMR;
                box: import('../../general/styleScheme').TypeSSBox;
                typography: import('../../general/styleScheme').TypeSSTypography;
            };
            $color?: import('../../general/colors').Hex;
            $boxPaddingVariant: import('../../types/TypeBox').TypeBoxPaddingVariant;
        } & import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
        Title: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, import('../../../../node_modules/react').HTMLAttributes<HTMLParagraphElement>>> & string;
        Icon: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('../../../../node_modules/react').DetailedHTMLProps<import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>, HTMLDivElement>, import('../../../../node_modules/react').HTMLAttributes<HTMLDivElement>>> & string;
    };
};
export declare namespace TypePopup {
    namespace BasePopup {
        type Main = Copy<TBasePopup.Main>;
        type SArrow = Copy<TBasePopup.SArrow>;
        type SContent = Copy<TBasePopup.SContent>;
        type STrigger = Copy<TBasePopup.STrigger>;
        type SRoot = Copy<TBasePopup.SRoot>;
        type SPortal = Copy<TBasePopup.SPortal>;
    }
    namespace SimplePopup {
        type Styles = Copy<TSimplePopup.Styles>;
        type Main = Copy<TSimplePopup.Main>;
        type SContent = Copy<TSimplePopup.SContent>;
        type STrigger = Copy<TSimplePopup.STrigger>;
        type SRoot = Copy<TSimplePopup.SRoot>;
        type SPortal = Copy<TSimplePopup.SPortal>;
        type SCard = Copy<TSimplePopup.SCard>;
        type SHeader = Copy<TSimplePopup.SHeader>;
        type STitle = Copy<TSimplePopup.STitle>;
        type SIcon = Copy<TSimplePopup.SIcon>;
    }
}
