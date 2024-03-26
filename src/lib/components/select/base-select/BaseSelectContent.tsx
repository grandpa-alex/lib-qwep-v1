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
import * as Select from '@radix-ui/react-select';
import {
    SBCSelectIcon
} from './BaseSelectComponent';

import { TypeBoxPaddingVariant, TypeBoxShadowVariant } from '@src/lib/types/TypeBox';
import { BOX_PADDING_VARIANT, BOX_SHADOW_VARIANT } from '@src/lib/common-styled-component/StyledComponentBox';
import { SBSelectGroup } from './BaseSelectGroup';
import {
    SelectProps,
    SelectTriggerProps,
    SelectContentProps,
    SelectViewportProps,
    SelectValueProps,
} from '@radix-ui/react-select';
import { BaseArrow } from '@src/lib/icons';
import { SBSelectItem } from './BaseSelectItem';

export type TypeStyleBaseSelect = {
    base: TypeSSBase;
    select: TypeSSSelect;
    typography: TypeSSTypography;
    mr: TypeSSMR;
    box: TypeSSBox;
};

export type BaseSelectContentProps = {
    children: React.ReactNode;
    mr?: TypeMargin;
    width?: string;
    sizeVariant?: TypeVariantSize;
    colorVariant?: TypeColorVariant;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleBaseSelect;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    color?: Hex;
    positionTrigger?: TypeBtnPosition;
    maxHeight?: string;
    _isActiveHover?: boolean;
} & (SelectProps & SelectValueProps & SelectContentProps & React.RefAttributes<HTMLDivElement>);

export type SBSelectTriggerProps = {
    $mr?: TypeMargin;
    $color?: Hex;
    $width?: string;
    $colors: TypeColorScheme;
    $styles: TypeStyleBaseSelect;
    $positionTrigger: TypeBtnPosition;
    $sizeVariant: TypeVariantSize;
    $colorVariant: TypeColorVariant;
    $_isActiveHover?: boolean;
} & SelectTriggerProps & React.RefAttributes<HTMLButtonElement>;;

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

export const SBSelectTrigger = styled(Select.Trigger)<SBSelectTriggerProps>`
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
        ${SBCSelectIcon} {
            transition: all 0.3s ease-in-out;
            svg {
                color: ${(props) =>
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

    ${SBCSelectIcon} {
        transform: rotate(180deg);
        svg {
            color: ${(props) =>
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

        ${SBCSelectIcon} {
            transform: rotate(0deg);
            margin-top: 5px;
            svg {
                color: ${(props) =>
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

export type SBSelectWrapperProps = {
    $color?: Hex;
    $width?: string;
    $colors: TypeColorScheme;
    $styles: TypeStyleBaseSelect
    $colorVariant: TypeColorVariant;
    $boxShadowVariant: TypeBoxShadowVariant;
    $boxPaddingVariant: TypeBoxPaddingVariant;
    $_isActiveHover?: boolean;
} & SelectContentProps & React.RefAttributes<HTMLDivElement>;;

export const SBSelectContent = styled(Select.Content)<SBSelectWrapperProps>`
    overflow: hidden;
    background-color: ${(props) => props.$colors.backgroundBox};
    font-size: ${(props) => props.$styles.typography.fontSizeItem};
    border-radius: ${(props) => props.$styles.base.borderRadiusItem};
    width: ${(props) => props.$width};

    ${SBSelectItem} {
        &[data-disabled] {
            color: ${(props) => props.$colors.disabled};
            svg {
                color: ${(props) => props.$colors.disabled};
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
            color: ${(props) =>
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
                color: ${(props) => props.$colors.backgroundBox};
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

    ${SBSelectGroup} {
        color: ${(props) => props.$colors.disabled};
        border-color: ${(props) => props.$colors.disabled};
    }
`;

export type SBSelectViewportProps = {
    $color?: Hex;
    $maxHeight?: string;
    $colors: TypeColorScheme;
    $colorVariant: TypeColorVariant;
    $_isActiveHover?: boolean;
} & SelectViewportProps & React.RefAttributes<HTMLDivElement>;;

export const SBSelectViewport = styled.div<SBSelectViewportProps>`
    max-height: ${(props) => props.$maxHeight ?? '300px'};
    overflow-y: auto;
    margin: 0 -3px;
    padding: 0 3px;

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

export const BaseSelectContent: React.FC<BaseSelectContentProps> = React.memo(
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
            <Select.Root {...rest}>
                <SBSelectTrigger
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
                    <Select.Value placeholder={rest.placeholder} />
                    <SBCSelectIcon>
                        <BaseArrow />
                    </SBCSelectIcon>
                </SBSelectTrigger>
                <Select.Portal>
                    <SBSelectContent
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
                        <SBSelectViewport
                            $colors={colors}
                            $color={color}
                            $colorVariant={colorVariant}
                            $maxHeight={maxHeight}
                            $_isActiveHover={_isActiveHover}
                        >
                            {children}
                        </SBSelectViewport>
                    </SBSelectContent>
                </Select.Portal>
            </Select.Root>
        );
    }
);
