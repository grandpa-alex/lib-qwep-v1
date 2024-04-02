import { getColor } from '@src/lib/common/getColor';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { IIP, TypeColorVariant, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import { VI } from '@src/lib/types/TypeInp';
import React, { useCallback, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';

import {
    SimpleTextFieldProps,
    SSTextFieldIconContainer,
    SSTextFieldIconContainerProps,
    SSTextFieldInput,
    SSTextFieldRoot,
} from '../simple-text-field/SimpleTextField';
import { renderIconTextField } from '@src/lib/common/renderIconItem';
import { StyledLoadingItemEffect } from '@src/lib/common-styled-component/StyledLoadingItem';
import { SBTextFieldInputProps, SBTextFieldRootProps } from '../base-text-field/BaseTextField';
import { TypeStyleTextField } from '../base-text-field/RootTextField';

export type SubmitTextFieldProps = {
    iconOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    isLoading: boolean;
} & SimpleTextFieldProps;

export type SSUBTextFieldInputProps = {
    $isLoading?: boolean;
} & SBTextFieldInputProps;

export type SSUBTextFieldRootProps = {
    $isLoading: boolean;
} & SBTextFieldRootProps;

export const SSUBTextFieldIconContainer = styled(SSTextFieldIconContainer)<SSTextFieldIconContainerProps>`
    background-color: transparent;
    border: none;
    padding: 0;
`;

export const SSUBTextFieldInput = styled(SSTextFieldInput)<SSUBTextFieldInputProps>`
    ${(props) =>
        props.$isLoading &&
        css`
            pointer-events: none;
        `}
`;

export type SSUBTextFieldLoadingProps = {
    $color?: Hex;
    $isLoading?: boolean;
    $disabled?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyleTextField;
    $colorVariant: TypeColorVariant;
    $sizeVariant: TypeVariantSize;
};

const LOADING_SIZE = {
    [VS.L]: (props: SSUBTextFieldLoadingProps) => css`
        width: ${props.$styles.inp.inpIconSize_L};
        height: ${props.$styles.inp.inpIconSize_L};
    `,
    [VS.M]: (props: SSUBTextFieldLoadingProps) => css`
        width: ${props.$styles.inp.inpIconSize_M};
        height: ${props.$styles.inp.inpIconSize_M};
    `,
};

export const SSUBTextFieldLoading = styled.span<SSUBTextFieldLoadingProps>`
    margin: 0 6px 2px 6px;
    ${(props) => LOADING_SIZE[props.$sizeVariant](props)}
    ${(props) => {
        if (props.$isLoading && !props.$disabled) {
            return css`
                &::after {
                    ${LOADING_SIZE[props.$sizeVariant](props)}
                    border: 1px solid ${getColor({
                        cs: props.$colors,
                        color: props.$color,
                        variant: props.$colorVariant,
                    })};
                }
                ${StyledLoadingItemEffect}
            `;
        }
    }}
`;

export const SubmitTextField: React.FC<SubmitTextFieldProps> = React.memo(
    ({
        mr,
        icon,
        color,
        iconOnClick,
        _isActiveHover = true,
        isLoading = false,
        iconPosition = IIP.LEFT,
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
        const handleFocus = useCallback(() => (!rest.disabled || isLoading) && setIsFocused(true), []);
        const handleBlur = useCallback(() => (!rest.disabled || isLoading) && setIsFocused(false), []);

        const renderIcon = useMemo(() => {
            return renderIconTextField({ icon: icon, size: styles.inp, sizeVariant, rest: { $colors: colors } });
        }, [icon, colors, styles]);

        return (
            <SSTextFieldRoot
                $mr={mr}
                $colors={colors}
                $styles={styles}
                $color={color}
                $colorVariant={colorVariant}
                $sizeVariant={sizeVariant}
                $variant={variant}
                $disabled={rest.disabled}
                disabled={rest.disabled}
                mr={mr}
                color={color}
                variant={variant}
                sizeVariant={sizeVariant}
                colorVariant={colorVariant}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={rest.style}
                _isFocused={isFocused}
                $_isFocused={isFocused}
                _isActiveHover={!isLoading && _isActiveHover}
                $_isActiveHover={!isLoading && _isActiveHover}
            >
                {icon && (
                    <SSUBTextFieldIconContainer
                        as="button"
                        disabled={rest.disabled || isLoading}
                        onClick={iconOnClick}
                        $iconPosition={iconPosition}
                    >
                        {renderIcon}
                    </SSUBTextFieldIconContainer>
                )}

                <SSUBTextFieldInput
                    $styles={{ typography: styles.typography }}
                    $colors={colors}
                    $color={color}
                    $colorVariant={colorVariant}
                    $isLoading={isLoading}
                    disabled={rest.disabled}
                    {...rest}
                    style={{}}
                />

                <SSUBTextFieldLoading
                    $styles={styles}
                    $colors={colors}
                    $color={color}
                    $colorVariant={colorVariant}
                    $isLoading={isLoading}
                    $sizeVariant={sizeVariant}
                    $disabled={rest.disabled}
                />
            </SSTextFieldRoot>
        );
    }
);
