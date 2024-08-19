import { TypeSSTypography } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React from 'react';
import styled from 'styled-components';

type TypeStyles = {
    typography: TypeSSTypography;
};

type BaseInputProps = {
    $styles?: TypeStyles;
} & React.InputHTMLAttributes<HTMLInputElement>;

type SInputProps = {
    $styles: TypeStyles;
};

const SInput = styled.input<SInputProps>`
    border: none;
    outline: 0;
    width: 100%;
    line-height: normal;
    background-color: transparent;
    font-size: ${({ $styles }) => $styles.typography.fontSizeItem};
`;

export const BaseInput: React.FC<BaseInputProps> = React.memo(({ $styles, ...rest }) => {
    const styles = useStyleScheme(['typography'], $styles);
    return <SInput $styles={styles} {...rest} style={{}} />;
});

//export component
export const SBaseInput = {
    Input: SInput,
};

//export type
export namespace TBaseInput {
    export type Main = BaseInputProps;
    export type Styles = TypeStyles;
    export type SInput = SInputProps;
}
