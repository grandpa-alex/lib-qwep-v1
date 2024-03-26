import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { IIP, TypeColorVariant, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { TypeBtnVariant, VB, VP } from '@src/lib/types/TypeBtn';
import {
    SSButton,
    SSButtonContentContainer,
    SSButtonIconContainer,
    SimpleButtonProps,
} from '../simple-button/SimpleButton';
import { SBButtonProps, TypeStyleBaseBtn } from '../base-button/BaseButton';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBtn } from '@src/lib/general/styleScheme';
import { StyledLoadingItemEffect } from '@src/lib/common-styled-component/StyledLoadingItem';
import { getColor } from '@src/lib/common/getColor';
import { renderIconButton } from '@src/lib/common/renderIconItem';

export type SubmitButtonProps = {
    isLoading: boolean;
} & SimpleButtonProps;

const LOADING_SIZE = {
    [VS.L]: (props: TypeSSBtn) => css`
        width: ${props.btnIconSize_L};
        height: ${props.btnIconSize_L};
    `,
    [VS.M]: (props: TypeSSBtn) => css`
        width: ${props.btnIconSize_M};
        height: ${props.btnIconSize_M};
    `,
};

export type SSUBButtonProps = {
    $isLoading?: boolean;
} & SBButtonProps;

export const SSUBButton = styled(SSButton)<SSUBButtonProps>`
    ${(props) =>
        props.$isLoading &&
        css`
            pointer-events: none;
        `}
`;

export type SSUBButtonLoadingProps = {
    $color?: Hex;
    $isLoading?: boolean;
    $disabled?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyleBaseBtn;
    $colorVariant: TypeColorVariant;
    $sizeVariant: TypeVariantSize;
    $variant: TypeBtnVariant;
};

const BTN_VARIANT = {
    [VB.CONTAINED]: (props: SSUBButtonLoadingProps) => css`
        border-color: ${props.$colors.textItem};
    `,
    [VB.TEXT]: (props: SSUBButtonLoadingProps) => css`
        border-color: ${getColor({
            cs: props.$colors,
            color: props.$color,
            variant: props.$colorVariant,
        })};
    `,
    [VB.OUTLINED]: (props: SSUBButtonLoadingProps) => css`
        border-color: ${getColor({
            cs: props.$colors,
            color: props.$color,
            variant: props.$colorVariant,
        })};
    `,
};

export const SSUBButtonLoading = styled.span<SSUBButtonLoadingProps>`
    position: relative;
    margin: 0 6px 2px 6px;
    ${(props) => LOADING_SIZE[props.$sizeVariant](props.$styles.btn)}
    ${(props) => {
        if (props.$isLoading && !props.$disabled) {
            return css`
                &::after {
                    border: 1px solid;
                    left: 3px;
                    ${LOADING_SIZE[props.$sizeVariant](props.$styles.btn)}
                    ${BTN_VARIANT[props.$variant](props)}
                }
                ${StyledLoadingItemEffect}
            `;
        }
    }}
`;

export const SubmitButton: React.FC<SubmitButtonProps> = React.memo(
    ({
        children,
        isLoading,
        mr,
        icon,
        color,
        sizeVariant = VS.L,
        colorVariant = VC.DEFAULT,
        variant = VB.CONTAINED,
        position = VP.CENTER,
        iconPosition = IIP.LEFT,
        $colors,
        $styles,
        _isActiveHover = true,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['base', 'btn', 'typography', 'mr']);

        const renderIcon = useMemo(() => {
            return renderIconButton({ icon: icon, size: styles.btn, sizeVariant, rest: { $colors: colors } });
        }, [icon, colors, styles]);

        return (
            <SSUBButton
                $colors={colors}
                $styles={styles}
                $sizeVariant={sizeVariant}
                $colorVariant={colorVariant}
                $variant={variant}
                $mr={mr}
                $isLoading={isLoading}
                sizeVariant={sizeVariant}
                colorVariant={colorVariant}
                variant={variant}
                $color={color}
                color={color}
                mr={mr}
                _isActiveHover={!isLoading && _isActiveHover}
                $_isActiveHover={!isLoading && _isActiveHover}
                {...rest}
            >
                {renderIcon && <SSButtonIconContainer $iconPosition={iconPosition}>{renderIcon}</SSButtonIconContainer>}
                <SSButtonContentContainer $position={position}>{children}</SSButtonContentContainer>
                <SSUBButtonLoading
                    $isLoading={isLoading}
                    $disabled={rest.disabled}
                    $colors={colors}
                    $styles={styles}
                    $sizeVariant={sizeVariant}
                    $colorVariant={colorVariant}
                    $variant={variant}
                    $color={color}
                />
            </SSUBButton>
        );
    }
);
