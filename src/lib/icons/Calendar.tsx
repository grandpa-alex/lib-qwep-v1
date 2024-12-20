import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type CalendarProps = IconSVGContainerProps;

export const Calendar: React.FC<CalendarProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M21.25 3.75H26.25C26.5815 3.75 26.8995 3.8817 27.1339 4.11612C27.3683 4.35054 27.5 4.66848 27.5 5V25C27.5 25.3315 27.3683 25.6495 27.1339 25.8839C26.8995 26.1183 26.5815 26.25 26.25 26.25H3.75C3.41848 26.25 3.10054 26.1183 2.86612 25.8839C2.6317 25.6495 2.5 25.3315 2.5 25V5C2.5 4.66848 2.6317 4.35054 2.86612 4.11612C3.10054 3.8817 3.41848 3.75 3.75 3.75H8.75V1.25H11.25V3.75H18.75V1.25H21.25V3.75ZM18.75 6.25H11.25V8.75H8.75V6.25H5V11.25H25V6.25H21.25V8.75H18.75V6.25ZM25 13.75H5V23.75H25V13.75Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
