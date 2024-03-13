import React from 'react';
import { TypeSSInp } from '../general/styleScheme';
import { TypeVariantSize, VS } from '../types/TypeBase';

type renderIconTextFieldProps = {
    icon?: React.ReactNode;
    size: TypeSSInp;
    sizeVariant: TypeVariantSize;
    rest?: any;
};

export const renderIconTextField = ({ icon, size, sizeVariant, rest }: renderIconTextFieldProps) => {
    if (!icon) return null;
    const sizeIcon = {
        [VS.L]: {
            width: size.inpIconSize_L,
            height: size.inpIconSize_L,
        },
        [VS.M]: {
            width: size.inpIconSize_M,
            height: size.inpIconSize_M,
        },
    };
    return React.cloneElement(icon as React.ReactElement, {
        //@ts-ignore
        _importantColor: Boolean(icon?.props.color),
        ...rest,
        style: {
            ...sizeIcon[sizeVariant],
        },
        //@ts-ignore
        ...icon?.props,
    });
};
