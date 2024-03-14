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

export type StyledBaseInputProps = {
    $styles: TypeStyleBaseInput;
};

export const StyledBaseInput = styled.input<StyledBaseInputProps>`
    border: none;
    outline: 0;
    width: 100%;
    line-height: normal;
    background-color: transparent;
    font-size: ${({ $styles }) => $styles.typography.fontSizeItem};
`;

export const BaseInput: React.FC<BaseInputProps> = React.memo(({ $styles, ...rest }) => {
    const styles = $styles ?? useStyleScheme(['typography']);
    return <StyledBaseInput $styles={styles} {...rest} />;
});
