import { TypeSSTypography } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React from 'react';
import styled from 'styled-components';

type TypeStyles = {
    typography: TypeSSTypography;
};

type BaseInputAreaProps = {
    $styles?: TypeStyles;
    resize?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type STextareaProps = {
    $styles: TypeStyles;
    $resize?: boolean;
};

const STextarea = styled.textarea<STextareaProps>`
    outline: 0;
    background-color: transparent;
    line-height: 20px;
    font-size: ${(props) => props.$styles.typography.fontSizeItem};
    border: 0;
    height: 100%;
    resize: ${(props) => (props.$resize ? 'vertical' : 'none')};
`;

export const BaseInputArea: React.FC<BaseInputAreaProps> = React.memo(({ $styles, resize, ...rest }) => {
    const styles = $styles ?? useStyleScheme(['typography']);
    return <STextarea $styles={styles} $resize={resize} {...rest} />;
});

//export component
export const SBaseInputArea = {
    Textarea: STextarea,
};

//export type
export namespace TBaseInputArea {
    export type Main = BaseInputAreaProps;
    export type Styles = TypeStyles;
    export type STextarea = STextareaProps;
}
