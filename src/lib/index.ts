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
    export type Margin = Copy<TypeMargin>;
    export type ModalPosition = Copy<TypeModalPosition>;
    export type VariantSize = Copy<TypeVariantSize>;
    export type VariantColor = Copy<TypeVariantColor>;
    export type ItemIconPosition = Copy<TypeItemIconPosition>;
    export type OrientationContent = Copy<TypeOrientationContent>;
}

export namespace TypeBaseButton {
    export type VariantBtn = Copy<TypeVariantBtn>;
    export type BtnPosition = Copy<TypeBtnPosition>;
}

export namespace TypeBaseInput {
    export type VariantInp = Copy<TypeInpVariant>;
    export type PositionInpLabel = Copy<TypePositionInpLabel>;
}

export namespace TypeBaseAvatar {
    export type VariantSizeAvatar = Copy<TypeVariantSizeAvatar>;
}

export namespace TypeBaseBox {
    export type BoxWidthVariant = Copy<TypeBoxWidthVariant>;
    export type BoxPaddingVariant = Copy<TypeBoxPaddingVariant>;
    export type BoxGapVariant = Copy<TypeBoxGapVariant>;
    export type BoxShadowVariant = Copy<TypeBoxShadowVariant>;
    export type BoxRadiusVariant = Copy<TypeBoxRadiusVariant>;
    export type BoxDisplay = Copy<TypeBoxDisplay>;
}

export namespace TypeText {
    export type TitleVariant = Copy<TypeTitleVariant>;
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
