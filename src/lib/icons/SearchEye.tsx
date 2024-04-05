import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type SearchEyeProps = IconSVGContainerProps;

export const SearchEye: React.FC<SearchEyeProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M22.5388 20.7713L27.8925 26.1238L26.1238 27.8925L20.7713 22.5388C18.7797 24.1353 16.3025 25.0036 13.75 25C7.54 25 2.5 19.96 2.5 13.75C2.5 7.54 7.54 2.5 13.75 2.5C19.96 2.5 25 7.54 25 13.75C25.0036 16.3025 24.1353 18.7797 22.5388 20.7713ZM20.0312 19.8438C21.6176 18.2124 22.5036 16.0255 22.5 13.75C22.5 8.915 18.5838 5 13.75 5C8.915 5 5 8.915 5 13.75C5 18.5838 8.915 22.5 13.75 22.5C16.0255 22.5036 18.2124 21.6176 19.8438 20.0312L20.0312 19.8438V19.8438ZM15.2225 8.97C14.8539 9.1365 14.5312 9.38994 14.2821 9.70857C14.033 10.0272 13.8649 10.4015 13.7923 10.7994C13.7197 11.1973 13.7447 11.6068 13.8651 11.9929C13.9856 12.379 14.1979 12.7301 14.4839 13.0161C14.7699 13.3021 15.121 13.5144 15.5071 13.6349C15.8932 13.7553 16.3027 13.7803 16.7006 13.7077C17.0985 13.6351 17.4728 13.467 17.7914 13.2179C18.1101 12.9688 18.3635 12.6461 18.53 12.2775C18.8585 13.3445 18.8204 14.4908 18.4218 15.5337C18.0233 16.5766 17.2871 17.456 16.3307 18.032C15.3743 18.6079 14.2526 18.8472 13.1444 18.7117C12.0362 18.5762 11.0052 18.0737 10.2158 17.2842C9.42635 16.4948 8.92383 15.4638 8.78831 14.3556C8.65278 13.2474 8.89206 12.1257 9.46801 11.1693C10.044 10.2129 10.9234 9.47673 11.9663 9.07815C13.0092 8.67958 14.1555 8.6415 15.2225 8.97V8.97Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};