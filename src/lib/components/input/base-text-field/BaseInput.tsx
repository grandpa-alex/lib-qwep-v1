import { TypeSSTypography } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React from 'react';
import styled from 'styled-components';

export type TypeStyleBaseInput = {
    typography: TypeSSTypography;
};

export type BaseInputProps = {
    $styles?: TypeStyleBaseInput;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type SBInputProps = {
    $styles: TypeStyleBaseInput;
};

export const SBInput = styled.input<SBInputProps>`
    border: none;
    outline: 0;
    width: 100%;
    line-height: normal;
    background-color: transparent;
    font-size: ${({ $styles }) => $styles.typography.fontSizeItem};
`;

export const BaseInput: React.FC<BaseInputProps> = React.memo(({ $styles, ...rest }) => {
    const styles = $styles ?? useStyleScheme(['typography']);
    return <SBInput $styles={styles} {...rest} />;
});
