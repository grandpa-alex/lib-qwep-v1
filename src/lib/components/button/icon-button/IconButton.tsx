import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { VC, VS } from '@src/lib/types/TypeBase';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { getColor } from '@src/lib/common/getColor';
import { VB } from '@src/lib/types/TypeBtn';
import { renderIconButton } from '@src/lib/common/renderIconItem';
import { SBaseButton, TBaseButton } from '../base-button/BaseButton';
import { TypeSSBtn } from '@src/lib/general/styleScheme';
import { itemRippleEffect } from '@src/lib/common/itemRippleEffect.ts';

type IconButtonProps = { borderRadius?: 'default' | 'round' } & TBaseButton.Main;

type VariantProps = {
    hover: boolean;
} & TBaseButton.SButton;

const BTN_ICON_VARIANT = {
    [VB.CONTAINED]: (props: VariantProps) => css`
        color: ${props.$colors.textItem};
    `,
    [VB.TEXT]: (props: VariantProps) => css`
        color: ${getColor({
            cs: props.$colors,
            disabled: props.disabled,
            color: props.$color,
            variant: props.$colorVariant,
            hover: props.hover,
        })};
    `,
    [VB.OUTLINED]: (props: VariantProps) => css`
        color: ${getColor({
            cs: props.$colors,
            color: props.$color,
            disabled: props.disabled,
            variant: props.$colorVariant,
            hover: props.hover,
        })};
    `,
};

const SIZE_VARIANT_ROUND = {
    [VS.L]: (btn: TypeSSBtn) => css`
        width: ${btn.btnHeight_L};
        height: ${btn.btnHeight_L};
    `,
    [VS.M]: (btn: TypeSSBtn) => css`
        width: ${btn.btnHeight_M};
        height: ${btn.btnHeight_M};
    `,
};

type SButtonProps = {
    $borderRadius: 'default' | 'round';
} & TBaseButton.SButton;

const SButton = styled(SBaseButton.Button)<SButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
        props.$borderRadius === 'round' &&
        css`
            border-radius: 50%;
            ${SIZE_VARIANT_ROUND[props.$sizeVariant](props.$styles.btn)}
        `}
    svg {
        ${(props) => BTN_ICON_VARIANT[props.$variant]({ ...props, hover: false })};
    }

    &:not([disabled]):hover {
        svg {
            ${(props) => BTN_ICON_VARIANT[props.$variant]({ ...props, hover: props.$_isActiveHover })};
        }
    }
`;

export const IconButton: React.FC<IconButtonProps> = React.memo(
    ({
        borderRadius = 'default',
        sizeVariant = VS.L,
        colorVariant = VC.DEFAULT,
        variant = VB.CONTAINED,
        _isActiveHover = true,
        ...rest
    }) => {
        const colors = rest.$colors ?? useColorScheme();
        const styles = rest.$styles ?? useStyleScheme(['base', 'btn', 'typography', 'mr']);

        const renderIcon = useMemo(() => {
            return renderIconButton({ icon: rest.children, size: styles.btn, sizeVariant, rest: { $colors: colors } });
        }, [rest.children, colors, styles, sizeVariant]);

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
                $color={rest.color}
                color={rest.color}
                $blocked={rest.blocked}
                $mr={rest.mr}
                $sizeVariant={sizeVariant}
                $colorVariant={colorVariant}
                $variant={variant}
                $borderRadius={borderRadius}
                $_isActiveHover={_isActiveHover}
                {...rest}
            >
                {renderIcon && renderIcon}
            </SButton>
        );
    }
);

//export component
export const SIconButton = {
    Button: SButton,
};

//export type
export namespace TIconButton {
    export type Main = IconButtonProps;
}
