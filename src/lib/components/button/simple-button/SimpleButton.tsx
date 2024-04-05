import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { IIP, TypeItemIconPosition, VC, VS } from '@src/lib/types/TypeBase';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { BaseButton } from '..';
import { getColor } from '@src/lib/common/getColor';
import { TypeBtnPosition, VB, BP } from '@src/lib/types/TypeBtn';
import { renderIconButton } from '@src/lib/common/renderIconItem';
import { TBaseButton } from '../base-button/BaseButton';

type SimpleButtonProps = {
    position?: TypeBtnPosition;
    icon?: React.ReactNode;
    iconPosition?: TypeItemIconPosition;
} & TBaseButton.Main;

type SIconContainerProps = {
    $iconPosition: TypeItemIconPosition;
};

type SContentContainerProps = {
    $position: TypeBtnPosition;
};

const SIconContainer = styled.div<SIconContainerProps>`
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

const SButton = styled(BaseButton)<TBaseButton.SButton>`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    min-width: 70px;
    ${SIconContainer} {
        svg {
            ${(props) => BTN_VARIANT[props.$variant]({ ...props, hover: false })};
        }
    }
    &:not([disabled]):hover {
        ${SIconContainer} {
            svg {
                ${(props) => BTN_VARIANT[props.$variant]({ ...props, hover: props.$_isActiveHover })};
            }
        }
    }
`;

const SContentContainer = styled.div<SContentContainerProps>`
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
                $color={color}
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
                {renderIcon && <SIconContainer $iconPosition={iconPosition}>{renderIcon}</SIconContainer>}
                <SContentContainer $position={position}>{children}</SContentContainer>
            </SButton>
        );
    }
);

//export component
export const SSimpleButton = {
    Button: SButton,
    IconContainer: SIconContainer,
    ContentContainer: SContentContainer,
};

//export type
export namespace TSimpleButton {
    export type Main = SimpleButtonProps;
    export type SIconContainer = SIconContainerProps;
    export type SContentContainer = SContentContainerProps;
}
