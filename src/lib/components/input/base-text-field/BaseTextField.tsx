import { getColor } from '@src/lib/common/getColor';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeColorVariant, TypeMargin, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import { TypeInpVariant, VI } from '@src/lib/types/TypeInp';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { BaseInput, RootTextField } from '..';
import { SBInputProps } from './BaseInput';
import { SRootTextFieldProps, TypeStyleTextField } from './RootTextField';

export type BaseTextFieldProps = {
    mr?: TypeMargin;
    sizeVariant?: TypeVariantSize;
    variant?: TypeInpVariant;
    colorVariant?: TypeColorVariant;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleTextField;
    color?: Hex;
    _isActiveHover?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export type SBTextFieldInputProps = {
    $color?: Hex;
    $colors: TypeColorScheme;
    $colorVariant: TypeColorVariant;
} & SBInputProps;

export type SBTextFieldRootProps = {
    $_isActiveHover?: boolean;
} & SRootTextFieldProps;

export const SBTextFieldInput = styled(BaseInput)<SBTextFieldInputProps>`
    &:disabled {
        color: ${(props) => props.$colors.disabled};
    }
    &::placeholder {
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

export const SBTextFieldRoot = styled(RootTextField)<SBTextFieldRootProps>`
    display: inline-flex;
    align-items: center;
`;

export const BaseTextField: React.FC<BaseTextFieldProps> = React.memo(
    ({
        mr,
        color,
        _isActiveHover = true,
        variant = VI.OUTLINED,
        sizeVariant = VS.L,
        colorVariant = VC.DEFAULT,
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
            <SBTextFieldRoot
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
            >
                <SBTextFieldInput
                    $styles={{ typography: styles.typography }}
                    $colors={colors}
                    $color={color}
                    $colorVariant={colorVariant}
                    {...rest}
                />
            </SBTextFieldRoot>
        );
    }
);
