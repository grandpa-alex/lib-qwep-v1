export * from './components/index';
export * as General from './general';
export * as Icon from './icons';

import { TypeVariantSizeAvatar, VSA } from './types/TypeAvatar';
import {
    MP,
    TypeVariantColor,
    TypeItemIconPosition,
    TypeMargin,
    TypeModalPosition,
    TypeVariantSize,
    VC,
    VS,
    IIP,
    TypeOrientationContent,
    OC,
} from './types/TypeBase';
import {
    TypeBoxDisplay,
    TypeBoxGapVariant,
    TypeBoxPaddingVariant,
    TypeBoxRadiusVariant,
    TypeBoxShadowVariant,
    TypeBoxWidthVariant,
} from './types/TypeBox';
import { BP, TypeBtnPosition, TypeVariantBtn, VB } from './types/TypeBtn';
import { PIL, TypeInpVariant, TypePositionInpLabel } from './types/TypeInp';

export namespace TypeBase {
    export type Margin = TypeMargin;
    export type ModalPosition = TypeModalPosition;
    export type VariantSize = TypeVariantSize;
    export type VariantColor = TypeVariantColor;
    export type ItemIconPosition = TypeItemIconPosition;
    export type OrientationContent = TypeOrientationContent;
}

export const EnumBase = {
    ModalPosition: MP,
    VariantSize: VS,
    VariantColor: VC,
    ItemIconPosition: IIP,
    OrientationContent: OC,
};

export namespace TypeBaseButton {
    export type VariantBtn = TypeVariantBtn;
    export type BtnPosition = TypeBtnPosition;
}

export const EnumBaseButton = {
    VariantBtn: VB,
    BtnPosition: BP,
};

export namespace TypeBaseInput {
    export type VariantInp = TypeInpVariant;
    export type PositionInpLabel = TypePositionInpLabel;
}

export const EnumBaseInput = {
    PositionInpLabel: PIL,
};

export namespace TypeBaseAvatar {
    export type VariantSizeAvatar = TypeVariantSizeAvatar;
}

export const EnumBaseAvatar = {
    VariantSizeAvatar: VSA,
};

export namespace TypeBaseBox {
    export type BoxWidthVariant = TypeBoxWidthVariant;
    export type BoxPaddingVariant = TypeBoxPaddingVariant;
    export type BoxGapVariant = TypeBoxGapVariant;
    export type BoxShadowVariant = TypeBoxShadowVariant;
    export type BoxRadiusVariant = TypeBoxRadiusVariant;
    export type BoxDisplay = TypeBoxDisplay;
}
