import React from 'react';
import { IconSVGContainerProps, IconSVGContainer } from './IconSVGContainer';

export type QuestionAnswerProps = IconSVGContainerProps;

export const QuestionAnswer: React.FC<QuestionAnswerProps> = ({ ...rest }) => {
    return (
        <IconSVGContainer viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" {...rest}>
            <path
                d="M6.81875 18.75L1.25 23.125V3.75C1.25 3.41848 1.3817 3.10054 1.61612 2.86612C1.85054 2.6317 2.16848 2.5 2.5 2.5H21.25C21.5815 2.5 21.8995 2.6317 22.1339 2.86612C22.3683 3.10054 22.5 3.41848 22.5 3.75V18.75H6.81875ZM5.95375 16.25H20V5H3.75V17.9813L5.95375 16.25ZM10 21.25H22.7962L25 22.9813V10H26.25C26.5815 10 26.8995 10.1317 27.1339 10.3661C27.3683 10.6005 27.5 10.9185 27.5 11.25V28.125L21.9313 23.75H11.25C10.9185 23.75 10.6005 23.6183 10.3661 23.3839C10.1317 23.1495 10 22.8315 10 22.5V21.25Z"
                fill="currentColor"
            />
        </IconSVGContainer>
    );
};
