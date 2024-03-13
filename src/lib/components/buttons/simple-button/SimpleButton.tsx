import { TypeSSIcon } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { IIP, TypeItemIconPosition, VC, VS } from '@src/lib/types/TypeBase';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { BaseButton } from '..';
import { getColor } from '@src/lib/common/getColor';
import { TypeBtnPosition, VB, VP } from '@src/lib/types/TypeBtn';
import { BaseButtonProps, StyledBaseButtonProps, TypeStyleBaseBtn } from '../base-button/BaseButton';

// export type TypeStyleSimpleBtn = {
//     icon: TypeSSIcon;
// } & TypeStyleBaseBtn;

export type SimpleButtonProps = {
    position?: TypeBtnPosition;
    icon?: React.ReactNode;
    iconPosition?: TypeItemIconPosition;
    // $styles?: TypeStyleSimpleBtn;
} & BaseButtonProps;

export type StyledSimpleButtonIconContainerProps = {
    $iconPosition: TypeItemIconPosition;
};

export type StyledSimpleButtonContentContainerProps = {
    $position: TypeBtnPosition;
};

export type StyledSimpleButtonProps = {} & StyledBaseButtonProps;

export const StyledSimpleButtonIconContainer = styled.div<StyledSimpleButtonIconContainerProps>`
    ${(props) => {
        if (props.$iconPosition === IIP.RIGHT) {
            return css`
                order: 1;
                margin-left: 6px;
                /* padding-left: 10px; */
                /* border-left: 1px solid red; */
            `;
        } else {
            return css`
                order: 0;
                margin-right: 6px;
                /* padding-right: 10px; */
                /* border-right: 1px solid red; */
            `;
        }
    }}
`;

const BTN_VARIANT = {
    [VB.CONTAINED]: (
        props: StyledSimpleButtonProps & { hover: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>
    ) => css`
        fill: ${props.$colors.textItem};
    `,
    [VB.TEXT]: (
        props: StyledSimpleButtonProps & { hover: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>
    ) => css`
        fill: ${getColor({
            cs: props.$colors,
            disabled: props.disabled,
            color: props.$color,
            variant: props.$colorVariant,
            hover: props.hover,
        })};
    `,
    [VB.OUTLINED]: (
        props: StyledSimpleButtonProps & { hover: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>
    ) => css`
        fill: ${getColor({
            cs: props.$colors,
            color: props.$color,
            disabled: props.disabled,
            variant: props.$colorVariant,
            hover: props.hover,
        })};
    `,
};

export const StyledSimpleButton = styled(BaseButton)<StyledSimpleButtonProps>`
    display: flex;
    align-items: center;
    line-height: normal;
    font-weight: ${(props) => props.$styles.typography.fontWeightItem};

    ${StyledSimpleButtonIconContainer} {
        svg {
            ${(props) => BTN_VARIANT[props.$variant]({ ...props, hover: false })};
        }
    }
    &:not([disabled]):hover {
        ${StyledSimpleButtonIconContainer} {
            svg {
                ${(props) => BTN_VARIANT[props.$variant]({ ...props, hover: true })};
            }
        }
    }
`;

export const StyledSimpleButtonContentContainer = styled.div<StyledSimpleButtonContentContainerProps>`
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: ${(props) => props.$position};
`;

export const SimpleButton: React.FC<SimpleButtonProps> = React.memo(
    ({
        children,
        mr,
        icon,
        sizeVariant = VS.L,
        colorVariant = VC.DEFAULT,
        variant = VB.CONTAINED,
        position = VP.CENTER,
        iconPosition = IIP.LEFT,
        $colors,
        $styles,

        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['base', 'btn', 'typography', 'mr']);

        const renderIcon = useMemo(() => {
            if (!icon) return null;
            const sizeIcon = {
                [VS.L]: {
                    width: styles.btn.btnIconSize_L,
                    height: styles.btn.btnIconSize_L,
                },
                [VS.M]: {
                    width: styles.btn.btnIconSize_M,
                    height: styles.btn.btnIconSize_M,
                },
            };
            return React.cloneElement(icon as React.ReactElement, {
                //@ts-ignore
                _importantColor: Boolean(icon?.props.color),
                $colors: colors,
                style: {
                    ...sizeIcon[sizeVariant],
                },
                //@ts-ignore
                ...icon?.props,
            });
        }, [icon, colors, styles]);

        return (
            <StyledSimpleButton
                $colors={colors}
                $styles={styles}
                $sizeVariant={sizeVariant}
                $colorVariant={colorVariant}
                $variant={variant}
                $mr={mr}
                sizeVariant={sizeVariant}
                colorVariant={colorVariant}
                variant={variant}
                mr={mr}
                {...rest}
            >
                <StyledSimpleButtonIconContainer $iconPosition={iconPosition}>
                    {renderIcon}
                </StyledSimpleButtonIconContainer>
                <StyledSimpleButtonContentContainer $position={position}>{children}</StyledSimpleButtonContentContainer>
            </StyledSimpleButton>
        );
    }
);
