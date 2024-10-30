import { default as React } from '../../../node_modules/react';
import { IconSVGContainerProps } from './IconSVGContainer';
import { TypeIconPosition } from '../types/TypeIcon';

export type ArrowProps = {
    position?: TypeIconPosition;
} & IconSVGContainerProps;
export declare const Arrow: React.FC<ArrowProps>;
