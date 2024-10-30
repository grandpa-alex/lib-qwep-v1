import { default as React } from '../../../node_modules/react';
import { TypeSSBtn, TypeSSInp } from '../general/styleScheme';
import { TypeVariantSize } from '../types/TypeBase';

type renderIconTextFieldProps = {
    icon?: React.ReactNode;
    size: TypeSSInp;
    sizeVariant: TypeVariantSize;
    rest?: object;
};
export declare const renderIconTextField: ({ icon, size, sizeVariant, rest }: renderIconTextFieldProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
type renderIconBittonProps = {
    icon?: React.ReactNode;
    size: TypeSSBtn;
    sizeVariant: TypeVariantSize;
    rest?: object;
};
export declare const renderIconButton: ({ icon, size, sizeVariant, rest }: renderIconBittonProps) => React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export {};
