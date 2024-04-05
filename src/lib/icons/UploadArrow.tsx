import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';
import { IP, TypeIconPosition } from '../types/TypeIcon';

export type UploadArrowProps = { position?: TypeIconPosition } & IconSVGContainerProps;

export const UploadArrow: React.FC<UploadArrowProps> = ({ position = IP.BOTTOM, ...rest }) => {
    const rotate = {
        [IP.LEFT]: 'rotate(-90deg)',
        [IP.BOTTOM]: 'rotate(180deg)',
        [IP.TOP]: 'rotate(0deg)',
        [IP.RIGTH]: 'rotate(90deg)',
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
                d="M3.75 23.75H26.25V26.25H3.75V23.75ZM16.25 7.285V21.25H13.75V7.285L6.16125 14.875L4.39375 13.1075L15 2.5L25.6063 13.1062L23.8387 14.8738L16.25 7.2875V7.285Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};