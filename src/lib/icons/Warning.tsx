import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type WarningProps = IconSVGContainerProps;

export const Warning: React.FC<WarningProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M16.0825 3.75001L27.99 24.375C28.0997 24.565 28.1575 24.7806 28.1575 25C28.1575 25.2194 28.0997 25.435 27.99 25.625C27.8803 25.815 27.7225 25.9728 27.5325 26.0825C27.3425 26.1922 27.1269 26.25 26.9075 26.25H3.0925C2.87308 26.25 2.65753 26.1922 2.46751 26.0825C2.27749 25.9728 2.1197 25.815 2.00999 25.625C1.90028 25.435 1.84253 25.2194 1.84253 25C1.84253 24.7806 1.90029 24.565 2.01 24.375L13.9175 3.75001C14.0272 3.56 14.185 3.40221 14.375 3.29251C14.565 3.18281 14.7806 3.12506 15 3.12506C15.2194 3.12506 15.435 3.18281 15.625 3.29251C15.815 3.40221 15.9728 3.56 16.0825 3.75001V3.75001ZM5.2575 23.75H24.7425L15 6.87501L5.2575 23.75V23.75ZM13.75 20H16.25V22.5H13.75V20ZM13.75 11.25H16.25V17.5H13.75V11.25Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
