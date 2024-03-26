import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type BaseArrowProps = {} & IconSVGContainerProps;

export const BaseArrow: React.FC<BaseArrowProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path d="M4 12L12 4L20 12" strokeWidth="2"
            stroke="currentColor"
            fill="none" 
            strokeLinecap="round" strokeLinejoin="round" />
        </IconSVGContainer>
    );
};
