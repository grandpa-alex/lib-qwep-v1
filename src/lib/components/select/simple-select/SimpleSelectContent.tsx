import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSBox, TypeSSMR, TypeSSSelect, TypeSSTypography } from '@src/lib/general/styleScheme';
import { TypeColorVariant, TypeMargin, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import { TypeBtnPosition, VP } from '@src/lib/types/TypeBtn';
import React from 'react';
import styled, { css } from 'styled-components';
import {
    StyledBaseSelectContent,
    StyledBaseSelectContentProps,
    StyledBaseSelectIcon,
    StyledBaseSelectItem,
    StyledBaseSelectPortal,
    StyledBaseSelectRoot,
    StyledBaseSelectRootProps,
    StyledBaseSelectTrigger,
    StyledBaseSelectTriggerProps,
    StyledBaseSelectValue,
    StyledBaseSelectValueProps,
    StyledBaseSelectViewportProps,
} from '../base-select-component/BaseSelectComponent';
import { Icon } from '@src/lib';

import { TypeBoxPaddingVariant, TypeBoxShadowVariant } from '@src/lib/types/TypeBox';
import { BOX_PADDING_VARIANT, BOX_SHADOW_VARIANT } from '@src/lib/common-styled-component/StuledComponentBox';
import { StyledSimpleSelectGroup } from './SimpleSelectGroup';

export type TypeStyleSimpleSelct = {
    base: TypeSSBase;
    select: TypeSSSelect;
    typography: TypeSSTypography;
    mr: TypeSSMR;
    box: TypeSSBox;
};

export type SimpleSelectContentProps = {
    children: React.ReactNode;
    mr?: TypeMargin;
    width?: string;
    sizeVariant?: TypeVariantSize;
    colorVariant?: TypeColorVariant;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleSimpleSelct;

    boxShadowVariant?: TypeBoxShadowVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    color?: Hex;
    positionTrigger?: TypeBtnPosition;
    maxHeight?: string;
    _isActiveHover?: boolean;
} & (StyledBaseSelectRootProps & StyledBaseSelectValueProps & StyledBaseSelectContentProps);

export type StyledSimpleSelectRootProps = {
    $mr?: TypeMargin;
    $color?: Hex;
    $colors: TypeColorScheme;
    $styles: TypeStyleSimpleSelct;
    $sizeVariant: TypeVariantSize;
    $colorVariant: TypeColorVariant;
} & StyledBaseSelectRootProps;

export type StyledSimpleSelectTriggerProps = {
    $mr?: TypeMargin;
    $color?: Hex;
    $width?: string;
    $colors: TypeColorScheme;
    $styles: TypeStyleSimpleSelct;
    $positionTrigger: TypeBtnPosition;
    $sizeVariant: TypeVariantSize;
    $colorVariant: TypeColorVariant;
    $_isActiveHover?: boolean;
} & StyledBaseSelectTriggerProps;

const SELECT_SIZE = {
    [VS.L]: (props: TypeSSSelect) => css`
        height: ${props.selectHeight_L};
        padding: ${`${props.selectPadding_Y_L} ${props.selectPadding_X_L}`};
    `,
    [VS.M]: (props: TypeSSSelect) => css`
        height: ${props.selectHeight_M};
        padding: ${`${props.selectPadding_Y_M} ${props.selectPadding_X_M}`};
    `,
};

const POSITION_TRIGGER = {
    [VP.CENTER]: 'center',
    [VP.LEFT]: 'space-between',
    [VP.RIGTH]: 'right',
};

export const StyledSimpleSelectTrigger = styled(StyledBaseSelectTrigger)<StyledSimpleSelectTriggerProps>`
    display: flex;
    overflow: hidden;
    align-items: center;
    justify-content: ${(props) => POSITION_TRIGGER[props.$positionTrigger]};
    border-radius: ${(props) => props.$styles.base.borderRadiusItem};
    font-weight: ${(props) => props.$styles.typography.fontWeightItem};
    border: 1px solid;
    color: ${(props) =>
        getColor({
            cs: props.$colors,
            color: props.$color,
            disabled: props.disabled,
            variant: props.$colorVariant,
        })};
    border-color: ${(props) =>
        getColor({
            cs: props.$colors,
            color: props.$color,
            disabled: props.disabled,
            variant: props.$colorVariant,
        })};
    transition: all 0.3s ease-in-out;
    background-color: transparent;
    outline: none;
    font-size: ${({ $styles }) => $styles.typography.fontSizeItem};
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    line-height: normal;
    width: ${(props) => props.$width};
    &:not([disabled]):hover {
        color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.disabled,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
        border-color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.disabled,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
        &[data-placeholder] {
            color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    disabled: props.disabled,
                    variant: props.$colorVariant,
                    hover: props.$_isActiveHover,
                })};
        }
        ${StyledBaseSelectIcon} {
            transition: all 0.3s ease-in-out;
            svg {
                stroke: ${(props) =>
                    getColor({
                        cs: props.$colors,
                        color: props.$color,
                        disabled: props.disabled,
                        variant: props.$colorVariant,
                        hover: props.$_isActiveHover,
                    })};
            }
        }
    }
    &[data-placeholder] {
        color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.disabled,
                variant: props.$colorVariant,
            })};
    }

    ${StyledBaseSelectIcon} {
        margin-left: 8px;
        margin-top: -3px;
        transform: rotate(180deg);
        svg {
            width: 15px;
            height: 15px;
            stroke: ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    disabled: props.disabled,
                    variant: props.$colorVariant,
                })};
        }
    }
    &[data-state='open'] {
        color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.disabled,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
        border-color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                disabled: props.disabled,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
        &[data-placeholder] {
            color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    disabled: props.disabled,
                    variant: props.$colorVariant,
                    hover: props.$_isActiveHover,
                })};
        }

        ${StyledBaseSelectIcon} {
            transform: rotate(0deg);
            margin-top: 5px;
            svg {
                stroke: ${(props) =>
                    getColor({
                        cs: props.$colors,
                        color: props.$color,
                        disabled: props.disabled,
                        variant: props.$colorVariant,
                        hover: props.$_isActiveHover,
                    })};
            }
        }
    }
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
    ${(props) => SELECT_SIZE[props.$sizeVariant](props.$styles.select)};
    span {
        &:nth-child(1) {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
`;

export type StyledSimpleSelectWrapperProps = {
    $color?: Hex;
    $width?: string;
    $colors: TypeColorScheme;
    $styles: TypeStyleSimpleSelct;
    $colorVariant: TypeColorVariant;
    $boxShadowVariant: TypeBoxShadowVariant;
    $boxPaddingVariant: TypeBoxPaddingVariant;
    $_isActiveHover?: boolean;
} & StyledBaseSelectContentProps;

export const StyledSimpleSelectContent = styled(StyledBaseSelectContent)<StyledSimpleSelectWrapperProps>`
    overflow: hidden;
    background-color: ${(props) => props.$colors.backgroundBox};
    font-size: ${(props) => props.$styles.typography.fontSizeItem};
    border-radius: ${(props) => props.$styles.base.borderRadiusItem};
    width: ${(props) => props.$width};

    ${StyledBaseSelectItem} {
        &[data-disabled] {
            color: ${(props) => props.$colors.disabled};
            svg {
                stroke: ${(props) => props.$colors.disabled};
            }
        }

        color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};

        svg {
            stroke: ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    variant: props.$colorVariant,
                    hover: props.$_isActiveHover,
                })};
        }

        &:not([data-disabled]):hover {
            transition: all 0.1s ease-in-out;
            background-color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    variant: props.$colorVariant,
                    hover: props.$_isActiveHover,
                })};

            color: ${(props) => props.$colors.backgroundBox};
            svg {
                stroke: ${(props) => props.$colors.backgroundBox};
            }
        }
    }
    ${(props) => BOX_PADDING_VARIANT[props.$boxPaddingVariant](props.$styles.box)};
    ${(props) =>
        props.$boxShadowVariant &&
        BOX_SHADOW_VARIANT[props.$boxShadowVariant]({
            $box: props.$styles.box,
            $colors: props.$colors,
        })}

    ${StyledSimpleSelectGroup} {
        color: ${(props) => props.$colors.disabled};
        border-color: ${(props) => props.$colors.disabled};
    }
`;

export type StyledSimpleSelectViewportProps = {
    $color?: Hex;
    $maxHeight?: string;
    $colors: TypeColorScheme;
    $colorVariant: TypeColorVariant;
    $_isActiveHover?: boolean;
} & StyledBaseSelectViewportProps;

export const StyledSimpleSelectViewport = styled.div<StyledSimpleSelectViewportProps>`
    max-height: ${(props) => props.$maxHeight ?? '300px'};
    overflow-y: auto;
    padding-right: 2px;

    &::-webkit-scrollbar-track {
        width: 3px;
    }
    &::-webkit-scrollbar {
        -webkit-appearance: none;
        width: 3px;
        max-height: 3px;
        border-radius: 3px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background-color: ${(props) =>
            getColor({
                cs: props.$colors,
                color: props.$color,
                variant: props.$colorVariant,
                hover: props.$_isActiveHover,
            })};
    }
`;

export const SimpleSelectContent: React.FC<SimpleSelectContentProps> = React.memo(
    ({
        children,
        mr,
        color,
        width,
        maxHeight,
        positionTrigger = VP.CENTER,
        sizeVariant = VS.L,
        colorVariant = VC.DEFAULT,
        boxPaddingVariant = 'p-1',
        boxShadowVariant = 'shd-1',
        $colors,
        $styles,
        _isActiveHover = true,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['base', 'box', 'select', 'typography', 'mr']);

        return (
            <StyledBaseSelectRoot {...rest}>
                <StyledSimpleSelectTrigger
                    $mr={mr}
                    $colors={colors}
                    $styles={styles}
                    $color={color}
                    $width={width}
                    $sizeVariant={sizeVariant}
                    $colorVariant={colorVariant}
                    $positionTrigger={positionTrigger}
                    $_isActiveHover={_isActiveHover}
                    disabled={rest.disabled}
                   
                >
                    <StyledBaseSelectValue placeholder={rest.placeholder} />
                    <StyledBaseSelectIcon>
                        <Icon.BaseArrow />
                    </StyledBaseSelectIcon>
                </StyledSimpleSelectTrigger>
                <StyledBaseSelectPortal>
                    <StyledSimpleSelectContent
                        side={rest.side ?? 'bottom'}
                        position="popper"
                        $colorVariant={colorVariant}
                        $colors={colors}
                        $styles={styles}
                        $color={color}
                        $width={width}
                        sideOffset={rest.sideOffset ?? 5}
                        $boxPaddingVariant={boxPaddingVariant}
                        $boxShadowVariant={boxShadowVariant}
                        $_isActiveHover={_isActiveHover}
                    >
                        <StyledSimpleSelectViewport
                            $colors={colors}
                            $color={color}
                            $colorVariant={colorVariant}
                            $maxHeight={maxHeight}
                            $_isActiveHover={_isActiveHover}
                        >
                            {children}
                        </StyledSimpleSelectViewport>
                    </StyledSimpleSelectContent>
                </StyledBaseSelectPortal>
            </StyledBaseSelectRoot>
        );
    }
);
