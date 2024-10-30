import { default as React } from '../../../node_modules/react';
import { IconSVGContainerProps } from './IconSVGContainer';
import { TypeIconPosition } from '../types/TypeIcon';

export type UploadArrowProps = {
    position?: TypeIconPosition;
} & IconSVGContainerProps;
export declare const UploadArrow: React.FC<UploadArrowProps>;
