import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';
import { IP, TypeIconPosition } from '../types/TypeIcon';

export type ArrowProps = {
    position?: TypeIconPosition;
} & IconSVGContainerProps;

export const Arrow: React.FC<ArrowProps> = ({ position = IP.TOP, ...rest }) => {
    const rotate = {
        [IP.LEFT]: 'rotate(90deg)',
        [IP.BOTTOM]: 'rotate(0deg)',
        [IP.TOP]: 'rotate(180deg)',
        [IP.RIGTH]: 'rotate(-90deg)',
    };
    return (
        <IconSVGContainer
            style={{ transform: rotate[position] }}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M14.9999 16.465L21.1874 10.2775L22.9549 12.045L14.9999 20L7.04492 12.045L8.81242 10.2775L14.9999 16.465Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
