import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type AwardProps = IconSVGContainerProps;

export const Award: React.FC<AwardProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M21.25 19.0562V27.6463C21.25 27.7568 21.2207 27.8654 21.165 27.961C21.1094 28.0565 21.0294 28.1356 20.9332 28.1901C20.8369 28.2447 20.728 28.2727 20.6174 28.2713C20.5068 28.27 20.3986 28.2393 20.3038 28.1825L15 25L9.69625 28.1825C9.6013 28.2394 9.49295 28.2701 9.38227 28.2713C9.27159 28.2726 9.16255 28.2445 9.0663 28.1898C8.97006 28.1352 8.89006 28.0559 8.83449 27.9602C8.77891 27.8645 8.74976 27.7557 8.75 27.645V19.0575C7.13269 17.7626 5.95749 15.9973 5.38682 14.0057C4.81616 12.014 4.87819 9.89423 5.56436 7.93934C6.25053 5.98444 7.52695 4.29093 9.21723 3.09285C10.9075 1.89476 12.9282 1.25125 15 1.25125C17.0718 1.25125 19.0925 1.89476 20.7828 3.09285C22.473 4.29093 23.7495 5.98444 24.4356 7.93934C25.1218 9.89423 25.1838 12.014 24.6132 14.0057C24.0425 15.9973 22.8673 17.7626 21.25 19.0575V19.0562ZM11.25 20.5225V24.335L15 22.085L18.75 24.335V20.5225C17.5586 21.0044 16.2852 21.2514 15 21.25C13.7148 21.2514 12.4414 21.0044 11.25 20.5225ZM15 18.75C16.9891 18.75 18.8968 17.9598 20.3033 16.5533C21.7098 15.1468 22.5 13.2391 22.5 11.25C22.5 9.26088 21.7098 7.35322 20.3033 5.9467C18.8968 4.54018 16.9891 3.75 15 3.75C13.0109 3.75 11.1032 4.54018 9.6967 5.9467C8.29018 7.35322 7.5 9.26088 7.5 11.25C7.5 13.2391 8.29018 15.1468 9.6967 16.5533C11.1032 17.9598 13.0109 18.75 15 18.75Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};