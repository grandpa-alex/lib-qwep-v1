import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { VC, VS } from '@src/lib/types/TypeBase';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { BaseButton } from '..';
import { getColor } from '@src/lib/common/getColor';
import { VB } from '@src/lib/types/TypeBtn';
import { renderIconButton } from '@src/lib/common/renderIconItem';
import { TBaseButton } from '../base-button/BaseButton';
import { TypeSSBtn } from '@src/lib/general/styleScheme';

type IconButtonProps = { borderRadius?: 'default' | 'round' } & TBaseButton.Main;

const BTN_VARIANT = {
    [VB.CONTAINED]: (
        props: TBaseButton.SButton & { hover: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>
    ) => css`
        color: ${props.$colors.textItem};
    `,
    [VB.TEXT]: (props: TBaseButton.SButton & { hover: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) => css`
        color: ${getColor({
            cs: props.$colors,
            disabled: props.disabled,
            color: props.$color,
            variant: props.$colorVariant,
            hover: props.hover,
        })};
    `,
    [VB.OUTLINED]: (
        props: TBaseButton.SButton & { hover: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>
    ) => css`
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

const SButton = styled(BaseButton)<SButtonProps>`
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
        ${(props) => BTN_VARIANT[props.$variant]({ ...props, hover: false })};
    }

    &:not([disabled]):hover {
        svg {
            ${(props) => BTN_VARIANT[props.$variant]({ ...props, hover: props.$_isActiveHover })};
        }
    }
`;

export const IconButton: React.FC<IconButtonProps> = React.memo(
    ({
        children,
        mr,
        color,
        borderRadius = 'default',
        sizeVariant = VS.L,
        colorVariant = VC.DEFAULT,
        variant = VB.CONTAINED,
        $colors,
        $styles,
        _isActiveHover = true,

        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['base', 'btn', 'typography', 'mr']);

        const renderIcon = useMemo(() => {
            return renderIconButton({ icon: children, size: styles.btn, sizeVariant, rest: { $colors: colors } });
        }, [children, colors, styles, sizeVariant]);

        return (
            <SButton
                $colors={colors}
                $styles={styles}
                $sizeVariant={sizeVariant}
                $colorVariant={colorVariant}
                $variant={variant}
                $color={color}
                $borderRadius={borderRadius}
                color={color}
                $mr={mr}
                $blocked={rest.blocked}
                sizeVariant={sizeVariant}
                colorVariant={colorVariant}
                variant={variant}
                mr={mr}
                _isActiveHover={_isActiveHover}
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
