import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';
import { IP, TypeIconPosition } from '../types/TypeIcon';

export type DownloadArrowProps = { position?: TypeIconPosition } & IconSVGContainerProps;

export const DownloadArrow: React.FC<DownloadArrowProps> = ({ position = IP.BOTTOM, ...rest }) => {
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
                d="M3.75 23.75H26.25V26.25H3.75V23.75ZM16.25 16.465L23.8387 8.875L25.6063 10.6425L15 21.25L4.39375 10.6438L6.16125 8.875L13.75 16.4625V2.5H16.25V16.465Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};