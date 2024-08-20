import { TypeSSTypography } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React from 'react';
import styled from 'styled-components';
import { Hex } from '@src/lib/general/colors.ts';

type TypeStyles = {
    typography: TypeSSTypography;
};

type BaseInputProps = {
    inputAutofill?: Hex;
    $styles?: TypeStyles;
} & React.InputHTMLAttributes<HTMLInputElement>;

type SInputProps = {
    $styles: TypeStyles;
    $inputAutofill?: Hex;
} & React.InputHTMLAttributes<HTMLInputElement>;

const SInput = styled.input<SInputProps>`
    border: none;
    outline: 0;
    width: 100%;
    line-height: normal;
    background-color: transparent;
    font-size: ${({ $styles }) => $styles.typography.fontSizeItem};
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        box-shadow: 0 0 0 10px ${(props) => props.$inputAutofill ?? '#FFF'} inset !important;
    }
`;

export const BaseInput: React.FC<BaseInputProps> = React.memo(({ inputAutofill, $styles, ...rest }) => {
    const styles = useStyleScheme(['typography'], $styles);
    return <SInput $inputAutofill={inputAutofill} $styles={styles} {...rest} />;
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
