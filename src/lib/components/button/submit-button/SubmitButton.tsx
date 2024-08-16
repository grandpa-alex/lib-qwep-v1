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
import { itemRippleEffect } from '@src/lib/common/itemRippleEffect.ts';

type SubmitButtonProps = {
    isLoading: boolean;
    loadingProps?: React.HTMLAttributes<HTMLSpanElement>;
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
} & React.HTMLAttributes<HTMLSpanElement>;

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

const LOADING_BTN_VARIANT = {
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
                    ${LOADING_BTN_VARIANT[props.$variant](props)}
                }

                ${StyledLoadingItemEffect}
            `;
        }
    }}
`;

export const SubmitButton: React.FC<SubmitButtonProps> = React.memo(
    ({
        isLoading,
        sizeVariant = VS.L,
        colorVariant = VC.DEFAULT,
        variant = VB.CONTAINED,
        position = BP.CENTER,
        iconPosition = IIP.LEFT,
        _isActiveHover = true,
        loadingProps,
        ...rest
    }) => {
        const colors = rest.$colors ?? useColorScheme();
        const styles = rest.$styles ?? useStyleScheme(['base', 'btn', 'typography', 'mr']);

        const renderIcon = useMemo(() => {
            return renderIconButton({ icon: rest.icon, size: styles.btn, sizeVariant, rest: { $colors: colors } });
        }, [rest.icon, colors, styles, sizeVariant]);

        const handleClick = async (event: React.MouseEvent<HTMLButtonElement>) => {
            itemRippleEffect(
                event,
                getColor({
                    cs: colors,
                    color: variant === VB.CONTAINED ? colors.alpha : rest.color,
                    variant: colorVariant,
                    opacity: '40',
                })
            );
            rest.onClick && (await rest.onClick(event));
        };

        return (
            <SButton
                $colors={colors}
                $styles={styles}
                onClick={handleClick}
                $sizeVariant={sizeVariant}
                $colorVariant={colorVariant}
                $variant={variant}
                $mr={rest.mr}
                $isLoading={isLoading}
                $blocked={rest.blocked}
                $color={rest.color}
                $_isActiveHover={!isLoading && _isActiveHover}
                {...rest}
            >
                {renderIcon && (
                    <SSimpleButton.IconContainer $iconPosition={iconPosition} {...rest.iconContainerProps}>
                        {renderIcon}
                    </SSimpleButton.IconContainer>
                )}
                <SSimpleButton.ContentContainer $position={position} {...rest.contentProps}>
                    {rest.children}
                </SSimpleButton.ContentContainer>
                <SLoading
                    $isLoading={isLoading}
                    $disabled={rest.disabled}
                    $colors={colors}
                    $styles={styles}
                    $sizeVariant={sizeVariant}
                    $colorVariant={colorVariant}
                    $variant={variant}
                    $color={rest.color}
                    {...loadingProps}
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
