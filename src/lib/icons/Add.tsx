import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type AddProps = IconSVGContainerProps;

export const Add: React.FC<AddProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M13.75 13.75V6.25H16.25V13.75H23.75V16.25H16.25V23.75H13.75V16.25H6.25V13.75H13.75Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
