import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSBox, TypeSSMR, TypeSSSelect, TypeSSTypography } from '@src/lib/general/styleScheme';
import { TypeVariantColor, TypeMargin, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import { TypeBtnPosition, BP } from '@src/lib/types/TypeBtn';
import React from 'react';
import styled, { css } from 'styled-components';
import * as Select from '@radix-ui/react-select';
import { TypeBoxPaddingVariant, TypeBoxShadowVariant } from '@src/lib/types/TypeBox';
import { BOX_PADDING_VARIANT, BOX_SHADOW_VARIANT } from '@src/lib/common-styled-component/StyledComponentBox';
import {
    SelectProps,
    SelectTriggerProps,
    SelectContentProps,
    SelectViewportProps,
    SelectValueProps,
} from '@radix-ui/react-select';
import { Arrow } from '@src/lib/icons';
import { SBaseSelectComponent } from './BaseSelectComponent';
import { SBaseSelectGroup } from './BaseSelectGroup';
import { StyledScrollbarItem } from '@src/lib/common-styled-component/StyledBase';

type TypeStyles = {
    base: TypeSSBase;
    select: TypeSSSelect;
    typography: TypeSSTypography;
    mr: TypeSSMR;
    box: TypeSSBox;
};

type BaseSelectContentProps = {
    children?: React.ReactNode;
    mr?: TypeMargin;
    width?: string;
    sizeVariant?: TypeVariantSize;
    colorVariant?: TypeVariantColor;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    color?: Hex;
    blocked?: boolean;
    positionTrigger?: TypeBtnPosition;
    maxHeight?: string;
    _isActiveHover?: boolean;
} & (SelectProps & SelectValueProps & SelectContentProps & React.RefAttributes<HTMLDivElement>);

type STriggerProps = {
    $mr?: TypeMargin;
    $color?: Hex;
    $width?: string;
    $blocked?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $positionTrigger: TypeBtnPosition;
    $sizeVariant: TypeVariantSize;
    $colorVariant: TypeVariantColor;
    $_isActiveHover?: boolean;
} & SelectTriggerProps &
    React.RefAttributes<HTMLButtonElement>;

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
    [BP.CENTER]: 'center',
    [BP.LEFT]: 'space-between',
    [BP.RIGTH]: 'right',
};

const STrigger = styled(Select.Trigger)<STriggerProps>`
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
        ${SBaseSelectComponent.Icon} {
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

    ${SBaseSelectComponent.Icon} {
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

        ${SBaseSelectComponent.Icon} {
            transform: rotate(0deg);
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
            user-select: none;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
        }
    }
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

type SContentProps = {
    $color?: Hex;
    $width?: string;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $colorVariant: TypeVariantColor;
    $boxShadowVariant: TypeBoxShadowVariant;
    $boxPaddingVariant: TypeBoxPaddingVariant;
    $_isActiveHover?: boolean;
} & SelectContentProps &
    React.RefAttributes<HTMLDivElement>;

const SContent = styled(Select.Content)<SContentProps>`
    overflow: hidden;
    background-color: ${(props) => props.$colors.backgroundBox};
    font-size: ${(props) => props.$styles.typography.fontSizeItem};
    border-radius: ${(props) => props.$styles.base.borderRadiusItem};
    width: ${(props) => props.$width};

    ${SBaseSelectComponent.Item} {
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

    ${SBaseSelectGroup.Group} {
        color: ${(props) => props.$colors.disabled};
        border-color: ${(props) => props.$colors.disabled};
    }
`;

type SViewportProps = {
    $color?: Hex;
    $maxHeight?: string;
    $colors: TypeColorScheme;
    $colorVariant: TypeVariantColor;
    $_isActiveHover?: boolean;
} & SelectViewportProps &
    React.RefAttributes<HTMLDivElement>;

const SViewport = styled.div<SViewportProps>`
    max-height: ${(props) => props.$maxHeight ?? '300px'};
    overflow-y: auto;
    margin: 0 -4px;
    padding: 0 3px;
    ${(props) =>
        StyledScrollbarItem({
            $colors: props.$colors,
            $color: props.$color,
            $colorVariant: props.$colorVariant,
            $hover: props.$_isActiveHover,
        })}
`;

export const BaseSelectContent: React.FC<BaseSelectContentProps> = React.memo(
    ({
        children,
        mr,
        color,
        width,
        maxHeight,
        positionTrigger = BP.CENTER,
        sizeVariant = VS.L,
        colorVariant = VC.DEFAULT,
        boxPaddingVariant = 'p-1',
        boxShadowVariant = 'shd-1',
        blocked,
        $colors,
        $styles,
        _isActiveHover = true,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['base', 'box', 'select', 'typography', 'mr']);

        return (
            <Select.Root {...rest}>
                <STrigger
                    $mr={mr}
                    $colors={colors}
                    $styles={styles}
                    $color={color}
                    $width={width}
                    $sizeVariant={sizeVariant}
                    $colorVariant={colorVariant}
                    $positionTrigger={positionTrigger}
                    $_isActiveHover={_isActiveHover}
                    $blocked={blocked}
                    disabled={rest.disabled}
                >
                    <Select.Value placeholder={rest.placeholder} />
                    <SBaseSelectComponent.Icon>
                        <Arrow />
                    </SBaseSelectComponent.Icon>
                </STrigger>
                <Select.Portal>
                    <SContent
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
                        <SViewport
                            $colors={colors}
                            $color={color}
                            $colorVariant={colorVariant}
                            $maxHeight={maxHeight}
                            $_isActiveHover={_isActiveHover}
                        >
                            {children}
                        </SViewport>
                    </SContent>
                </Select.Portal>
            </Select.Root>
        );
    }
);

// //export component
export const SBaseSelectContent = {
    Trigger: STrigger,
    Viewport: SViewport,
    Content: SContent,
};

// //export type
export namespace TBaseSelectContent {
    export type Styles = TypeStyles;
    export type Main = BaseSelectContentProps;
    export type SViewport = SViewportProps;
    export type STrigger = STriggerProps;
    export type SContent = SContentProps;
}
