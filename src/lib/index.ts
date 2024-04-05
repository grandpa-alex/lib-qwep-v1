export * from './components/index';
export * as General from './general';
export * as Icon from './icons';

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
} from './types/TypeBase';
import { BP, TypeBtnPosition, TypeVariantBtn, VB } from './types/TypeBtn';

export namespace TypeBase {
    export type Margin = TypeMargin;
    export type ModalPosition = TypeModalPosition;
    export type VariantSize = TypeVariantSize;
    export type VariantColor = TypeVariantColor;
    export type ItemIconPosition = TypeItemIconPosition;
}

export const EnumBase = {
    ModalPosition: MP,
    VariantSize: VS,
    VariantColor: VC,
    ItemIconPosition: IIP,
};

export namespace TypeBaseButton {
    export type VariantBtn = TypeVariantBtn;
    export type BtnPosition = TypeBtnPosition;
}

export const EnumBaseButton = {
    VariantBtn: VB,
    BtnPosition: BP,
};
