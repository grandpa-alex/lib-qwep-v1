import * as Tabs from '@radix-ui/react-tabs';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBtn, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { TypeMargin, TypeVariantSize, VS } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';
import { TabsTriggerProps } from '@radix-ui/react-tabs';
import { useColorScheme } from '@src/lib/general';

type TypeStyles = {
    mr: TypeSSMR;
    btn: TypeSSBtn;
    typography: TypeSSTypography;
};

type BaseTabProps = {
    mr?: TypeMargin;
    color?: Hex;
    sizeVariant?: TypeVariantSize;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    blocked?: boolean;
} & TabsTriggerProps &
    React.RefAttributes<HTMLButtonElement>;

type STabProps = {
    $mr?: TypeMargin;
    $blocked?: boolean;
    $sizeVariant: TypeVariantSize;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
} & TabsTriggerProps &
    React.RefAttributes<HTMLButtonElement>;

const TAB_SIZE = {
    [VS.L]: (btn: TypeSSBtn) => css`
        height: ${btn.btnHeight_L};
        padding: ${`${btn.btnPadding_Y_L} ${btn.btnPadding_X_L}`};
    `,
    [VS.M]: (btn: TypeSSBtn) => css`
        height: ${btn.btnHeight_M};
        padding: ${`${btn.btnPadding_Y_M} ${btn.btnPadding_X_M}`};
    `,
};

const STab = styled(Tabs.Trigger)<STabProps>`
    display: block;
    user-select: none;
    position: relative;
    overflow: hidden;
    line-height: normal;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid transparent;
    outline: 0;
    transition: all 400ms;
    font-size: ${({ $styles }) => $styles.typography.fontSizeItem};
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    ${(props) => TAB_SIZE[props.$sizeVariant](props.$styles.btn)};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};

    &[data-state='active'] {
        color: ${(props) => props.$colors.primaryItemActive};
        border-color: ${(props) => props.$colors.primaryItemActive};

        &:disabled {
            border-color: ${(props) => props.$colors.disabled};
        }
        &:not([disabled]):hover {
            color: ${(props) => props.$colors.primaryItemActive};
            border-color: ${(props) => props.$colors.primaryItemActive};
        }
    }
    &:not([disabled]):hover {
        color: ${(props) => props.$colors.primaryItem};
        border-color: ${(props) => props.$colors.primaryItem};
    }
    &:disabled {
        color: ${(props) => props.$colors.disabled};
    }
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const BaseTab: React.FC<BaseTabProps> = React.memo(
    ({ mr, sizeVariant = VS.L, blocked, $colors, $styles, ...rest }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['mr', 'btn', 'typography']);

        return (
            <STab
                $mr={mr}
                $styles={styles}
                $colors={colors}
                $blocked={blocked}
                $sizeVariant={sizeVariant}
                {...rest}
                value={rest.value}
            >
                {rest.children}
            </STab>
        );
    }
);

//export component
export const SBaseTab = {
    Tab: STab,
};

//export type
export namespace TBaseTab {
    export type Main = BaseTabProps;
    export type Styles = TypeStyles;
    export type STab = STabProps;
}
