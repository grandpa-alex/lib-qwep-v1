import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { IIP, TypeItemIconPosition, VC, VS } from '@src/lib/types/TypeBase';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { BaseButton } from '..';
import { getColor } from '@src/lib/common/getColor';
import { TypeBtnPosition, VB, VP } from '@src/lib/types/TypeBtn';
import { BaseButtonProps, SBButtonProps } from '../base-button/BaseButton';
import { renderIconButton } from '@src/lib/common/renderIconItem';

export type SimpleButtonProps = {
    position?: TypeBtnPosition;
    icon?: React.ReactNode;
    iconPosition?: TypeItemIconPosition;
} & BaseButtonProps;

export type SSButtonIconContainerProps = {
    $iconPosition: TypeItemIconPosition;
};

export type SSButtonContentContainerProps = {
    $position: TypeBtnPosition;
};

export const SSButtonIconContainer = styled.div<SSButtonIconContainerProps>`
    ${(props) => {
        if (props.$iconPosition === IIP.RIGHT) {
            return css`
                order: 1;
                margin-left: 6px;
            `;
        } else {
            return css`
                order: 0;
                margin-right: 6px;
            `;
        }
    }}
`;

const BTN_VARIANT = {
    [VB.CONTAINED]: (props: SBButtonProps & { hover: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) => css`
        color: ${props.$colors.textItem};
    `,
    [VB.TEXT]: (props: SBButtonProps & { hover: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) => css`
        color: ${getColor({
            cs: props.$colors,
            disabled: props.disabled,
            color: props.$color,
            variant: props.$colorVariant,
            hover: props.hover,
        })};
    `,
    [VB.OUTLINED]: (props: SBButtonProps & { hover: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) => css`
        color: ${getColor({
            cs: props.$colors,
            color: props.$color,
            disabled: props.disabled,
            variant: props.$colorVariant,
            hover: props.hover,
        })};
    `,
};

export const SSButton = styled(BaseButton)<SBButtonProps>`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    min-width: 70px;
    ${SSButtonIconContainer} {
        svg {
            ${(props) => BTN_VARIANT[props.$variant]({ ...props, hover: false })};
        }
    }
    &:not([disabled]):hover {
        ${SSButtonIconContainer} {
            svg {
                ${(props) => BTN_VARIANT[props.$variant]({ ...props, hover: props.$_isActiveHover })};
            }
        }
    }
`;

export const SSButtonContentContainer = styled.div<SSButtonContentContainerProps>`
    flex-grow: 1;
    display: inline-block;
    align-items: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    text-align: ${(props) => props.$position};
`;

export const SimpleButton: React.FC<SimpleButtonProps> = React.memo(
    ({
        children,
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
        }, [icon, colors, styles, sizeVariant]);

        return (
            <SSButton
                $colors={colors}
                $styles={styles}
                $sizeVariant={sizeVariant}
                $colorVariant={colorVariant}
                $variant={variant}
                $color={color}
                color={color}
                $mr={mr}
                sizeVariant={sizeVariant}
                colorVariant={colorVariant}
                variant={variant}
                mr={mr}
                _isActiveHover={_isActiveHover}
                $_isActiveHover={_isActiveHover}
                {...rest}
            >
                {renderIcon && <SSButtonIconContainer $iconPosition={iconPosition}>{renderIcon}</SSButtonIconContainer>}
                <SSButtonContentContainer $position={position}>{children}</SSButtonContentContainer>
            </SSButton>
        );
    }
);
