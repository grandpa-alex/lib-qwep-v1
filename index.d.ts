import { Copy } from './types/CopyType';
import { TypeVariantSizeAvatar, VSA } from './types/TypeAvatar';
import { MP, TypeVariantColor, TypeItemIconPosition, TypeMargin, TypeModalPosition, TypeVariantSize, VC, VS, IIP, TypeOrientationContent, OC } from './types/TypeBase';
import { TypeBoxDisplay, TypeBoxGapVariant, TypeBoxPaddingVariant, TypeBoxRadiusVariant, TypeBoxShadowVariant, TypeBoxWidthVariant } from './types/TypeBox';
import { BP, TypeBtnPosition, TypeVariantBtn, VB } from './types/TypeBtn';
import { PIL, TypeInpVariant, TypePositionInpLabel } from './types/TypeInp';
import { TypeTitleVariant } from './types/TypeText';
export * from './components/index';
export * as General from './general';
export * as Icon from './icons';
export declare namespace TypeBase {
    type Margin = Copy<TypeMargin>;
    type ModalPosition = Copy<TypeModalPosition>;
    type VariantSize = Copy<TypeVariantSize>;
    type VariantColor = Copy<TypeVariantColor>;
    type ItemIconPosition = Copy<TypeItemIconPosition>;
    type OrientationContent = Copy<TypeOrientationContent>;
}
export declare namespace TypeBaseButton {
    type VariantBtn = Copy<TypeVariantBtn>;
    type BtnPosition = Copy<TypeBtnPosition>;
}
export declare namespace TypeBaseInput {
    type VariantInp = Copy<TypeInpVariant>;
    type PositionInpLabel = Copy<TypePositionInpLabel>;
}
export declare namespace TypeBaseAvatar {
    type VariantSizeAvatar = Copy<TypeVariantSizeAvatar>;
}
export declare namespace TypeBaseBox {
    type BoxWidthVariant = Copy<TypeBoxWidthVariant>;
    type BoxPaddingVariant = Copy<TypeBoxPaddingVariant>;
    type BoxGapVariant = Copy<TypeBoxGapVariant>;
    type BoxShadowVariant = Copy<TypeBoxShadowVariant>;
    type BoxRadiusVariant = Copy<TypeBoxRadiusVariant>;
    type BoxDisplay = Copy<TypeBoxDisplay>;
}
export declare namespace TypeText {
    type TitleVariant = Copy<TypeTitleVariant>;
}
export declare const EnumBase: {
    ModalPosition: typeof MP;
    VariantSize: typeof VS;
    VariantColor: typeof VC;
    ItemIconPosition: typeof IIP;
    OrientationContent: typeof OC;
};
export declare const EnumBaseButton: {
    VariantBtn: typeof VB;
    BtnPosition: typeof BP;
};
export declare const EnumBaseInput: {
    PositionInpLabel: typeof PIL;
};
export declare const EnumBaseAvatar: {
    VariantSizeAvatar: typeof VSA;
};
