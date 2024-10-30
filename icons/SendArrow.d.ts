import { default as React } from '../../../node_modules/react';
import { IconSVGContainerProps } from './IconSVGContainer';
import { TypeIconPosition } from '../types/TypeIcon';

export type SendArrowProps = {
    position?: TypeIconPosition;
} & IconSVGContainerProps;
export declare const SendArrow: React.FC<SendArrowProps>;
