export * from './components/index';
export * as General from './general';
export * as Icon from './icons';

import { Copy } from './types/CopyType';
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
import { TypeTitleVariant } from './types/TypeText';

export namespace TypeBase {
    export type Margin = {} & TypeMargin;
    export type ModalPosition = {} & TypeModalPosition;
    export type VariantSize = {} & TypeVariantSize;
    export type VariantColor = {} & TypeVariantColor;
    export type ItemIconPosition = {} & TypeItemIconPosition;
    export type OrientationContent = {} & TypeOrientationContent;
}

export namespace TypeBaseButton {
    export type VariantBtn = {} & TypeVariantBtn;
    export type BtnPosition = {} & TypeBtnPosition;
}

export namespace TypeBaseInput {
    export type VariantInp = {} & TypeInpVariant;
    export type PositionInpLabel = {} & TypePositionInpLabel;
}

export namespace TypeBaseAvatar {
    export type VariantSizeAvatar = {} & TypeVariantSizeAvatar;
}

export namespace TypeBaseBox {
    export type BoxWidthVariant = {} & TypeBoxWidthVariant;
    export type BoxPaddingVariant = {} & TypeBoxPaddingVariant;
    export type BoxGapVariant = {} & TypeBoxGapVariant;
    export type BoxShadowVariant = {} & TypeBoxShadowVariant;
    export type BoxRadiusVariant = {} & TypeBoxRadiusVariant;
    export type BoxDisplay = {} & TypeBoxDisplay;
}

export namespace TypeText {
    export type TitleVariant = {} & TypeTitleVariant;
}

export const EnumBase = {
    ModalPosition: MP,
    VariantSize: VS,
    VariantColor: VC,
    ItemIconPosition: IIP,
    OrientationContent: OC,
};

export const EnumBaseButton = {
    VariantBtn: VB,
    BtnPosition: BP,
};

export const EnumBaseInput = {
    PositionInpLabel: PIL,
};

export const EnumBaseAvatar = {
    VariantSizeAvatar: VSA,
};
