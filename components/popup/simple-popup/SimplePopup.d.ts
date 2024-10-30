import { Hex, TypeColorScheme } from '../../../general/colors';
import { TypeSSBox, TypeSSMR, TypeSSTypography } from '../../../general/styleScheme';
import { default as React } from '../../../../../node_modules/react';
import { TBasePopup } from '../base-popup/BasePopup';
import { TypeBoxGapVariant, TypeBoxPaddingVariant, TypeBoxRadiusVariant, TypeBoxShadowVariant } from '../../../types/TypeBox';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
    typography: TypeSSTypography;
};
type SimplePopupProps = {
    icon: React.ReactNode;
    title: React.ReactNode;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxRadiusVariant?: TypeBoxRadiusVariant;
    width?: string;
    height?: string;
    maxHeight?: string;
    color?: Hex;
    $styles?: TypeStyles;
    headerProps?: React.HTMLAttributes<HTMLDivElement>;
    cardProps?: React.HTMLAttributes<HTMLDivElement>;
    iconProps?: React.HTMLAttributes<HTMLDivElement>;
    titleProps?: React.HTMLAttributes<HTMLParagraphElement>;
} & TBasePopup.Main;
type SContentProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $bg?: Hex;
    $width?: string;
    $height?: string;
    $maxHeight?: string;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TypeBoxShadowVariant;
    $boxRadiusVariant?: TypeBoxRadiusVariant;
} & TBasePopup.SContent;
type SHeaderProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $color?: Hex;
    $boxPaddingVariant: TypeBoxPaddingVariant;
} & React.HTMLAttributes<HTMLDivElement>;
type SCardProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $color?: Hex;
    $height?: string;
    $maxHeight?: string;
    $boxPaddingVariant: TypeBoxPaddingVariant;
    $boxGapVariant?: TypeBoxGapVariant;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const SimplePopup: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    icon: React.ReactNode;
    title: React.ReactNode;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxRadiusVariant?: TypeBoxRadiusVariant;
    width?: string;
    height?: string;
    maxHeight?: string;
    color?: Hex;
    $styles?: TypeStyles;
    headerProps?: React.HTMLAttributes<HTMLDivElement>;
    cardProps?: React.HTMLAttributes<HTMLDivElement>;
    iconProps?: React.HTMLAttributes<HTMLDivElement>;
    titleProps?: React.HTMLAttributes<HTMLParagraphElement>;
} & {
    trigger: React.ReactNode;
    mr?: import('../../../types/TypeBase').TypeMargin;
    bg?: Hex;
    $colors?: TypeColorScheme;
    triggerProps?: React.ComponentPropsWithRef<React.ForwardRefExoticComponent<import('@radix-ui/react-popover').PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>>;
    portalProps?: React.ComponentPropsWithRef<React.FC<import('@radix-ui/react-popover').PopoverPortalProps>>;
    contentProps?: React.ComponentPropsWithRef<React.ForwardRefExoticComponent<import('@radix-ui/react-popover').PopoverContentProps & React.RefAttributes<HTMLDivElement>>>;
    arrowProps?: React.ComponentPropsWithRef<React.ForwardRefExoticComponent<import('@radix-ui/react-popover').PopoverArrowProps & React.RefAttributes<SVGSVGElement>>>;
} & import('@radix-ui/react-popover').PopoverProps & React.RefAttributes<HTMLButtonElement>>>;
export declare const SSimplePopup: {
    Root: React.FC<import('@radix-ui/react-popover').PopoverProps>;
    Trigger: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<Omit<import('@radix-ui/react-popover').PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement> | null | undefined;
    }, Omit<import('@radix-ui/react-popover').PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & {
        ref?: ((instance: HTMLButtonElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLButtonElement> | null | undefined;
    }>> & string & Omit<React.ForwardRefExoticComponent<import('@radix-ui/react-popover').PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>, keyof React.Component<any, {}, any>>;
    Portal: React.FC<import('@radix-ui/react-popover').PopoverPortalProps>;
    Content: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<import('styled-components').FastOmit<Omit<import('@radix-ui/react-popover').PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, "title" | "children" | "ref" | "slot" | "style" | "defaultChecked" | "defaultValue" | "suppressContentEditableWarning" | "suppressHydrationWarning" | "accessKey" | "autoFocus" | "className" | "contentEditable" | "contextMenu" | "dir" | "draggable" | "hidden" | "id" | "lang" | "nonce" | "spellCheck" | "tabIndex" | "translate" | "radioGroup" | "role" | "about" | "content" | "datatype" | "inlist" | "prefix" | "property" | "rel" | "resource" | "rev" | "typeof" | "vocab" | "autoCapitalize" | "autoCorrect" | "autoSave" | "color" | "itemProp" | "itemScope" | "itemType" | "itemID" | "itemRef" | "results" | "security" | "unselectable" | "inputMode" | "is" | "aria-activedescendant" | "aria-atomic" | "aria-autocomplete" | "aria-braillelabel" | "aria-brailleroledescription" | "aria-busy" | "aria-checked" | "aria-colcount" | "aria-colindex" | "aria-colindextext" | "aria-colspan" | "aria-controls" | "aria-current" | "aria-describedby" | "aria-description" | "aria-details" | "aria-disabled" | "aria-dropeffect" | "aria-errormessage" | "aria-expanded" | "aria-flowto" | "aria-grabbed" | "aria-haspopup" | "aria-hidden" | "aria-invalid" | "aria-keyshortcuts" | "aria-label" | "aria-labelledby" | "aria-level" | "aria-live" | "aria-modal" | "aria-multiline" | "aria-multiselectable" | "aria-orientation" | "aria-owns" | "aria-placeholder" | "aria-posinset" | "aria-pressed" | "aria-readonly" | "aria-relevant" | "aria-required" | "aria-roledescription" | "aria-rowcount" | "aria-rowindex" | "aria-rowindextext" | "aria-rowspan" | "aria-selected" | "aria-setsize" | "aria-sort" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "aria-valuetext" | "dangerouslySetInnerHTML" | "onCopy" | "onCopyCapture" | "onCut" | "onCutCapture" | "onPaste" | "onPasteCapture" | "onCompositionEnd" | "onCompositionEndCapture" | "onCompositionStart" | "onCompositionStartCapture" | "onCompositionUpdate" | "onCompositionUpdateCapture" | "onFocus" | "onFocusCapture" | "onBlur" | "onBlurCapture" | "onChange" | "onChangeCapture" | "onBeforeInput" | "onBeforeInputCapture" | "onInput" | "onInputCapture" | "onReset" | "onResetCapture" | "onSubmit" | "onSubmitCapture" | "onInvalid" | "onInvalidCapture" | "onLoad" | "onLoadCapture" | "onError" | "onErrorCapture" | "onKeyDown" | "onKeyDownCapture" | "onKeyPress" | "onKeyPressCapture" | "onKeyUp" | "onKeyUpCapture" | "onAbort" | "onAbortCapture" | "onCanPlay" | "onCanPlayCapture" | "onCanPlayThrough" | "onCanPlayThroughCapture" | "onDurationChange" | "onDurationChangeCapture" | "onEmptied" | "onEmptiedCapture" | "onEncrypted" | "onEncryptedCapture" | "onEnded" | "onEndedCapture" | "onLoadedData" | "onLoadedDataCapture" | "onLoadedMetadata" | "onLoadedMetadataCapture" | "onLoadStart" | "onLoadStartCapture" | "onPause" | "onPauseCapture" | "onPlay" | "onPlayCapture" | "onPlaying" | "onPlayingCapture" | "onProgress" | "onProgressCapture" | "onRateChange" | "onRateChangeCapture" | "onResize" | "onResizeCapture" | "onSeeked" | "onSeekedCapture" | "onSeeking" | "onSeekingCapture" | "onStalled" | "onStalledCapture" | "onSuspend" | "onSuspendCapture" | "onTimeUpdate" | "onTimeUpdateCapture" | "onVolumeChange" | "onVolumeChangeCapture" | "onWaiting" | "onWaitingCapture" | "onAuxClick" | "onAuxClickCapture" | "onClick" | "onClickCapture" | "onContextMenu" | "onContextMenuCapture" | "onDoubleClick" | "onDoubleClickCapture" | "onDrag" | "onDragCapture" | "onDragEnd" | "onDragEndCapture" | "onDragEnter" | "onDragEnterCapture" | "onDragExit" | "onDragExitCapture" | "onDragLeave" | "onDragLeaveCapture" | "onDragOver" | "onDragOverCapture" | "onDragStart" | "onDragStartCapture" | "onDrop" | "onDropCapture" | "onMouseDown" | "onMouseDownCapture" | "onMouseEnter" | "onMouseLeave" | "onMouseMove" | "onMouseMoveCapture" | "onMouseOut" | "onMouseOutCapture" | "onMouseOver" | "onMouseOverCapture" | "onMouseUp" | "onMouseUpCapture" | "onSelect" | "onSelectCapture" | "onTouchCancel" | "onTouchCancelCapture" | "onTouchEnd" | "onTouchEndCapture" | "onTouchMove" | "onTouchMoveCapture" | "onTouchStart" | "onTouchStartCapture" | "onPointerDown" | "onPointerDownCapture" | "onPointerMove" | "onPointerMoveCapture" | "onPointerUp" | "onPointerUpCapture" | "onPointerCancel" | "onPointerCancelCapture" | "onPointerEnter" | "onPointerLeave" | "onPointerOver" | "onPointerOverCapture" | "onPointerOut" | "onPointerOutCapture" | "onGotPointerCapture" | "onGotPointerCaptureCapture" | "onLostPointerCapture" | "onLostPointerCaptureCapture" | "onScroll" | "onScrollCapture" | "onWheel" | "onWheelCapture" | "onAnimationStart" | "onAnimationStartCapture" | "onAnimationEnd" | "onAnimationEndCapture" | "onAnimationIteration" | "onAnimationIterationCapture" | "onTransitionEnd" | "onTransitionEndCapture" | "key" | "sticky" | "align" | "$colors" | "$bg" | "asChild" | "forceMount" | "side" | "sideOffset" | "alignOffset" | "arrowPadding" | "avoidCollisions" | "collisionBoundary" | "collisionPadding" | "hideWhenDetached" | "updatePositionStrategy" | "onEscapeKeyDown" | "onPointerDownOutside" | "onFocusOutside" | "onInteractOutside" | "onCloseAutoFocus" | "onOpenAutoFocus"> & {
        $colors: TypeColorScheme;
        $bg?: Hex;
    } & Omit<import('@radix-ui/react-popover').PopoverContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & {
        ref?: ((instance: HTMLDivElement | null) => void | React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES[keyof React.DO_NOT_USE_OR_YOU_WILL_BE_FIRED_CALLBACK_REF_RETURN_VALUES]) | React.RefObject<HTMLDivElement> | null | undefined;
    }, SContentProps>> & string;
    Card: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SCardProps>> & string;
    Header: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SHeaderProps>> & string;
    Title: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>, React.HTMLAttributes<HTMLParagraphElement>>> & string;
    Icon: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, React.HTMLAttributes<HTMLDivElement>>> & string;
};
export declare namespace TSimplePopup {
    type Styles = TypeStyles;
    type Main = SimplePopupProps;
    type SRoot = TBasePopup.SRoot;
    type SPortal = TBasePopup.SPortal;
    type STrigger = TBasePopup.STrigger;
    type SContent = SContentProps;
    type SCard = SCardProps;
    type SHeader = React.HTMLAttributes<HTMLDivElement>;
    type STitle = React.HTMLAttributes<HTMLParagraphElement>;
    type SIcon = React.HTMLAttributes<HTMLDivElement>;
}
export {};
