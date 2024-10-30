import { default as React } from '../../../node_modules/react';
import { IconSVGContainerProps } from './IconSVGContainer';
import { TypeIconPosition } from '../types/TypeIcon';

export type DownloadArrowProps = {
    position?: TypeIconPosition;
} & IconSVGContainerProps;
export declare const DownloadArrow: React.FC<DownloadArrowProps>;
