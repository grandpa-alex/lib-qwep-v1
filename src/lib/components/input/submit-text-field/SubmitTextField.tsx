import { getColor } from '@src/lib/common/getColor';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSInp, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { IIP, TypeColorVariant, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import { VI } from '@src/lib/types/TypeInp';
import React, { useCallback, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';

import {
    SimpleTextFieldProps,
    StyledSimpleTextFieldIconContainer,
    StyledSimpleTextFieldIconContainerProps,
    StyledSimpleTextFieldInput,
    StyledSimpleTextFieldInputProps,
    StyledSimpleTextFieldRoot,
    StyledSimpleTextFieldRootProps,
} from '../simple-text-field/SimpleTextField';
import { renderIconTextField } from '@src/lib/common/renderIconItem';
import { StyledLoadingItemEffect } from '@src/lib/common-styled-component/StyledLoadingItem';

export type TypeStyleSubmitTextField = {
    base: TypeSSBase;
    inp: TypeSSInp;
    typography: TypeSSTypography;
    mr: TypeSSMR;
};

export type SubmitTextFieldProps = {
    iconOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    isLoading: boolean;
} & SimpleTextFieldProps;

export type StyledSubmitTextFieldInputProps = {} & StyledSimpleTextFieldInputProps;

export type StyledSubmitTextFieldRootProps = {
    $isLoading: boolean;
} & StyledSimpleTextFieldRootProps;

export type StyledSubmitTextFieldIconContainerProps = {} & StyledSimpleTextFieldIconContainerProps;

export const StyledSubmitTextFieldIconContainer = styled(
    StyledSimpleTextFieldIconContainer
)<StyledSubmitTextFieldIconContainerProps>`
    background-color: transparent;
    border: none;
    padding: 0;
`;

export const StyledSubmitTextFieldRoot = styled(StyledSimpleTextFieldRoot)<StyledSubmitTextFieldRootProps>`
    ${(props) => {
        if (props.$isLoading) {
            return css`
                &:hover {
                }
            `;
        }
    }}
`;

export const StyledSubmitTextFieldInput = styled(StyledSimpleTextFieldInput)<StyledSubmitTextFieldInputProps>``;

export type StyledSubmitTextFieldInputPropsrProps = {
    $color?: Hex;
    $isLoading?: boolean;
    $disabled?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyleSubmitTextField;
    $colorVariant: TypeColorVariant;
    $sizeVariant: TypeVariantSize;
};

const LOADING_SIZE = {
    [VS.L]: (props: StyledSubmitTextFieldInputPropsrProps) => css`
        width: ${props.$styles.inp.inpIconSize_L};
        height: ${props.$styles.inp.inpIconSize_L};
    `,
    [VS.M]: (props: StyledSubmitTextFieldInputPropsrProps) => css`
        width: ${props.$styles.inp.inpIconSize_M};
        height: ${props.$styles.inp.inpIconSize_M};
    `,
};

export const StyledSubmitTextFieldLoading = styled.span<StyledSubmitTextFieldInputPropsrProps>`
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
            <StyledSubmitTextFieldRoot
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
                $isLoading={isLoading}
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
                    <StyledSubmitTextFieldIconContainer
                        as="button"
                        disabled={rest.disabled || isLoading}
                        onClick={iconOnClick}
                        $iconPosition={iconPosition}
                    >
                        {renderIcon}
                    </StyledSubmitTextFieldIconContainer>
                )}

                <StyledSubmitTextFieldInput
                    $styles={{ typography: styles.typography }}
                    $colors={colors}
                    $color={color}
                    $colorVariant={colorVariant}
                    disabled={rest.disabled || isLoading}
                    {...rest}
                    style={{}}
                />

                <StyledSubmitTextFieldLoading
                    $styles={styles}
                    $colors={colors}
                    $color={color}
                    $colorVariant={colorVariant}
                    $isLoading={isLoading}
                    $sizeVariant={sizeVariant}
                    $disabled={rest.disabled}
                />
            </StyledSubmitTextFieldRoot>
        );
    }
);
