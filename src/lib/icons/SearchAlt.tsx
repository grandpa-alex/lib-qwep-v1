import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type SearchAltProps = IconSVGContainerProps;

export const SearchAlt: React.FC<SearchAltProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M13.75 2.5C19.96 2.5 25 7.54 25 13.75C25 19.96 19.96 25 13.75 25C7.54 25 2.5 19.96 2.5 13.75C2.5 7.54 7.54 2.5 13.75 2.5ZM13.75 22.5C18.5838 22.5 22.5 18.5838 22.5 13.75C22.5 8.915 18.5838 5 13.75 5C8.915 5 5 8.915 5 13.75C5 18.5838 8.915 22.5 13.75 22.5ZM24.3563 22.5887L27.8925 26.1238L26.1238 27.8925L22.5887 24.3563L24.3563 22.5887V22.5887Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
