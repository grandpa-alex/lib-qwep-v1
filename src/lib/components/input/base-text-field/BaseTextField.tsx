import { getColor } from '@src/lib/common/getColor';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeVariantColor, TypeMargin, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import { TypeInpVariant, VI } from '@src/lib/types/TypeInp';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { SBaseInput, TBaseInput } from './BaseInput';
import { SRootTextField, TRootTextField } from './RootTextField';
import { TypeSSBase, TypeSSInp, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';

type TypeStyles = {
    base: TypeSSBase;
    inp: TypeSSInp;
    typography: TypeSSTypography;
    mr: TypeSSMR;
};

type BaseTextFieldProps = {
    mr?: TypeMargin;
    sizeVariant?: TypeVariantSize;
    variant?: TypeInpVariant;
    colorVariant?: TypeVariantColor;
    color?: Hex;
    blocked?: boolean;
    inputAutofill?: Hex;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    _isActiveHover?: boolean;
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
} & React.InputHTMLAttributes<HTMLInputElement>;

type SInputProps = {
    $color?: Hex;
    $colors: TypeColorScheme;
    $colorVariant: TypeVariantColor;
} & TBaseInput.SInput;

const SInput = styled(SBaseInput.Input)<SInputProps>`
    &:disabled {
        color: ${(props) => props.$colors.disabled};
    }
    &::placeholder {
        user-select: none;
        color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.disabled,
                variant: props.$colorVariant,
            })};
    }
    &:not([disabled]) {
        color: ${(props) => props.$colors.prompt};
    }
`;

const SRoot = styled(SRootTextField.Root)<TRootTextField.SRoot>`
    display: inline-flex;
    align-items: center;
`;

export const BaseTextField: React.FC<BaseTextFieldProps> = React.memo(
    ({
        mr,
        blocked,
        color,
        inputAutofill,
        variant = VI.OUTLINED,
        sizeVariant = VS.L,
        colorVariant = VC.DEFAULT,
        _isActiveHover = true,
        $colors,
        $styles,
        rootProps,
        ...rest
    }) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['base', 'inp', 'typography', 'mr'], $styles);
        const [isFocused, setIsFocused] = useState(false);
        const handleFocus = useCallback(() => !rest.disabled && setIsFocused(true), [rest.disabled]);
        const handleBlur = useCallback(() => !rest.disabled && setIsFocused(false), [rest.disabled]);

        return (
            <SRoot
                $mr={mr}
                $colors={colors}
                $styles={styles}
                $color={color}
                $colorVariant={colorVariant}
                $variant={variant}
                $sizeVariant={sizeVariant}
                $disabled={rest.disabled}
                $_isFocused={isFocused}
                $_isActiveHover={_isActiveHover}
                $blocked={blocked}
                onFocus={handleFocus}
                onBlur={handleBlur}
                {...rootProps}
            >
                <SInput
                    $styles={{ typography: styles.typography }}
                    $colors={colors}
                    $color={color}
                    $inputAutofill={inputAutofill}
                    $colorVariant={colorVariant}
                    {...rest}
                />
            </SRoot>
        );
    }
);

//export component
export const SBaseTextField = {
    Root: SRoot,
    Input: SInput,
};

//export type
export namespace TBaseTextField {
    export type Styles = TypeStyles;
    export type Main = BaseTextFieldProps;
    export type SInput = SInputProps;
    export type SRoot = TRootTextField.SRoot;
}
