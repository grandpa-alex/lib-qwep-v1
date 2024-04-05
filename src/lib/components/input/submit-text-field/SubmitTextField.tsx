import { getColor } from '@src/lib/common/getColor';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { IIP, TypeVariantColor, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import { VI } from '@src/lib/types/TypeInp';
import React, { useCallback, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';

import { SSimpleTextField, TSimpleTextField } from '../simple-text-field/SimpleTextField';
import { renderIconTextField } from '@src/lib/common/renderIconItem';
import { StyledLoadingItemEffect } from '@src/lib/common-styled-component/StyledLoadingItem';
import { TBaseTextField } from '../base-text-field/BaseTextField';

type SubmitTextFieldProps = {
    iconOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
    isLoading: boolean;
} & TSimpleTextField.Main;

type SInpProps = {
    $isLoading?: boolean;
} & TBaseTextField.SInput;

type SLoaderProps = {
    $color?: Hex;
    $isLoading?: boolean;
    $disabled?: boolean;
    $colors: TypeColorScheme;
    $styles: TBaseTextField.Styles;
    $colorVariant: TypeVariantColor;
    $sizeVariant: TypeVariantSize;
};

const SInput = styled(SSimpleTextField.Input)<SInpProps>`
    ${(props) =>
        props.$isLoading &&
        css`
            pointer-events: none;
        `}
`;

const LOADING_SIZE = {
    [VS.L]: (props: SLoaderProps) => css`
        width: ${props.$styles.inp.inpIconSize_L};
        height: ${props.$styles.inp.inpIconSize_L};
    `,
    [VS.M]: (props: SLoaderProps) => css`
        width: ${props.$styles.inp.inpIconSize_M};
        height: ${props.$styles.inp.inpIconSize_M};
    `,
};

const SLoading = styled.span<SLoaderProps>`
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
            <SSimpleTextField.Root
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
                $blocked={rest.blocked}
                _isFocused={isFocused}
                $_isFocused={isFocused}
                _isActiveHover={!isLoading && _isActiveHover}
                $_isActiveHover={!isLoading && _isActiveHover}
            >
                {icon && (
                    <SSimpleTextField.IconContainer
                        as={iconOnClick ? 'button' : 'div'}
                        disabled={rest.disabled || isLoading}
                        onClick={iconOnClick}
                        $iconPosition={iconPosition}
                        $disabled={rest.disabled || isLoading}
                        $useBtn={Boolean(iconOnClick)}
                    >
                        {renderIcon}
                    </SSimpleTextField.IconContainer>
                )}

                <SInput
                    $styles={{ typography: styles.typography }}
                    $colors={colors}
                    $color={color}
                    $colorVariant={colorVariant}
                    $isLoading={isLoading}
                    disabled={rest.disabled}
                    {...rest}
                    style={{}}
                />

                <SLoading
                    $styles={styles}
                    $colors={colors}
                    $color={color}
                    $colorVariant={colorVariant}
                    $isLoading={isLoading}
                    $sizeVariant={sizeVariant}
                    $disabled={rest.disabled}
                />
            </SSimpleTextField.Root>
        );
    }
);

//export component
export const SSubmitTextField = {
    Input: SInput,
    Loading: SLoading,
};

//export type
export namespace TSubmitTextField {
    export type Main = SubmitTextFieldProps;
    export type SInput = SInpProps;
    export type SLoading = SLoaderProps;
}
