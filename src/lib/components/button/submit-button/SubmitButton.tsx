import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { IIP, TypeVariantColor, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { TypeVariantBtn, VB, BP } from '@src/lib/types/TypeBtn';
import { SSimpleButton, TSimpleButton } from '../simple-button/SimpleButton';
import { TBaseButton } from '../base-button/BaseButton';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBtn } from '@src/lib/general/styleScheme';
import { StyledLoadingItemEffect } from '@src/lib/common-styled-component/StyledLoadingItem';
import { getColor } from '@src/lib/common/getColor';
import { renderIconButton } from '@src/lib/common/renderIconItem';

type SubmitButtonProps = {
    isLoading: boolean;
} & TSimpleButton.Main;

type SButtonProps = {
    $isLoading?: boolean;
} & TBaseButton.SButton;

type SLoadingProps = {
    $color?: Hex;
    $isLoading?: boolean;
    $disabled?: boolean;
    $colors: TypeColorScheme;
    $styles: TBaseButton.Styles;
    $colorVariant: TypeVariantColor;
    $sizeVariant: TypeVariantSize;
    $variant: TypeVariantBtn;
};

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

const BTN_VARIANT = {
    [VB.CONTAINED]: (props: SLoadingProps) => css`
        border-color: ${props.$colors.textItem};
    `,
    [VB.TEXT]: (props: SLoadingProps) => css`
        border-color: ${getColor({
            cs: props.$colors,
            color: props.$color,
            variant: props.$colorVariant,
        })};
    `,
    [VB.OUTLINED]: (props: SLoadingProps) => css`
        border-color: ${getColor({
            cs: props.$colors,
            color: props.$color,
            variant: props.$colorVariant,
        })};
    `,
};

const SButton = styled(SSimpleButton.Button)<SButtonProps>`
    ${(props) =>
        props.$isLoading &&
        css`
            pointer-events: none;
        `}
`;

const SLoading = styled.span<SLoadingProps>`
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
        position = BP.CENTER,
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
        }, [icon, colors, styles, sizeVariant]);

        return (
            <SButton
                $colors={colors}
                $styles={styles}
                $sizeVariant={sizeVariant}
                $colorVariant={colorVariant}
                $variant={variant}
                $mr={mr}
                $isLoading={isLoading}
                sizeVariant={sizeVariant}
                colorVariant={colorVariant}
                $blocked={rest.blocked}
                variant={variant}
                $color={color}
                color={color}
                mr={mr}
                _isActiveHover={!isLoading && _isActiveHover}
                $_isActiveHover={!isLoading && _isActiveHover}
                {...rest}
            >
                {renderIcon && (
                    <SSimpleButton.IconContainer $iconPosition={iconPosition}>{renderIcon}</SSimpleButton.IconContainer>
                )}
                <SSimpleButton.ContentContainer $position={position}>{children}</SSimpleButton.ContentContainer>
                <SLoading
                    $isLoading={isLoading}
                    $disabled={rest.disabled}
                    $colors={colors}
                    $styles={styles}
                    $sizeVariant={sizeVariant}
                    $colorVariant={colorVariant}
                    $variant={variant}
                    $color={color}
                />
            </SButton>
        );
    }
);

//export component
export const SSubmitButton = {
    Button: SButton,
    Loading: SLoading,
};

//export type
export namespace TSubmitButton {
    export type Main = SubmitButtonProps;
    export type SButton = SButtonProps;
    export type SLoading = SLoadingProps;
}
