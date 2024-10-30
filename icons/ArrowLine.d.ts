import { default as React } from '../../../node_modules/react';
import { IconSVGContainerProps } from './IconSVGContainer';
import { TypeIconPosition } from '../types/TypeIcon';

export type ArrowLineProps = {
    position?: TypeIconPosition;
} & IconSVGContainerProps;
export declare const ArrowLine: React.FC<ArrowLineProps>;
