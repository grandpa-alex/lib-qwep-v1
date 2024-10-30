import { default as React } from '../../../node_modules/react';
import { IconSVGContainerProps } from './IconSVGContainer';
import { Hex } from '../general/colors';

export type ChatProps = {
    secondColor?: Hex;
} & IconSVGContainerProps;
export declare const Chat: React.FC<ChatProps>;
