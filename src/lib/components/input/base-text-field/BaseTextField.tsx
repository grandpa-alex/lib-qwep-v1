import { getColor } from '@src/lib/common/getColor';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeVariantColor, TypeMargin, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import { TypeInpVariant, VI } from '@src/lib/types/TypeInp';
import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { BaseInput, RootTextField } from '..';
import { TypeSSBase, TypeSSInp, TypeSSMR, TypeSSTypography } from '@src/lib/general';
import { TBaseInput } from './BaseInput';
import { TRootTextField } from './RootTextField';

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
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    color?: Hex;
    blocked?: boolean;
    _isActiveHover?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

type SInpProps = {
    $color?: Hex;
    $colors: TypeColorScheme;
    $colorVariant: TypeVariantColor;
} & TBaseInput.SInput;

type SRProps = {
    $_isActiveHover?: boolean;
    $blocked?: boolean;
} & TRootTextField.SRoot;

const SInput = styled(BaseInput)<SInpProps>`
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

const SRoot = styled(RootTextField)<SRProps>`
    display: inline-flex;
    align-items: center;
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const BaseTextField: React.FC<BaseTextFieldProps> = React.memo(
    ({
        mr,
        color,
        _isActiveHover = true,
        variant = VI.OUTLINED,
        sizeVariant = VS.L,
        colorVariant = VC.DEFAULT,
        blocked,
        $colors,
        $styles,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['base', 'inp', 'typography', 'mr']);
        const [isFocused, setIsFocused] = useState(false);
        const handleFocus = useCallback(() => !rest.disabled && setIsFocused(true), []);
        const handleBlur = useCallback(() => !rest.disabled && setIsFocused(false), []);

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
                disabled={rest.disabled}
                mr={mr}
                variant={variant}
                color={color}
                sizeVariant={sizeVariant}
                colorVariant={colorVariant}
                onFocus={handleFocus}
                onBlur={handleBlur}
                _isFocused={isFocused}
                _isActiveHover={_isActiveHover}
                $blocked={blocked}
            >
                <SInput
                    $styles={{ typography: styles.typography }}
                    $colors={colors}
                    $color={color}
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
    export type SInput = SInpProps;
    export type SRoot = SRProps;
}
