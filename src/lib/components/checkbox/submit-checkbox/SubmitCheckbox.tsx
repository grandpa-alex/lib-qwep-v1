import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { VC, VS } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';
import { getColor } from '@src/lib/common/getColor';
import { TypeSSCheckbox } from '@src/lib/general/styleScheme';
import { StyledLoadingItemEffect } from '@src/lib/common-styled-component/StyledLoadingItem';
import { SBaseCheckbox, TBaseCheckbox } from '../base-checkbox/BaseCheckbox';
import { useColorScheme } from '@src/lib/general';

type SubmitCheckboxProps = {
    isLoading: boolean;
} & TBaseCheckbox.Main;

type SRootProps = {
    $isLoading: boolean;
} & TBaseCheckbox.SRoot;

const LOADING_SIZE = {
    [VS.L]: (props: TypeSSCheckbox) => css`
        width: ${props.checkboxLoadingSize_L};
        height: ${props.checkboxLoadingSize_L};
    `,
    [VS.M]: (props: TypeSSCheckbox) => css`
        width: ${props.checkboxLoadingSize_M};
        height: ${props.checkboxLoadingSize_M};
    `,
};

const SRoot = styled(SBaseCheckbox.Root)<SRootProps>`
    ${(props) => {
        if (props.$isLoading && !props.disabled) {
            return css`
                pointer-events: none;
                border-color: transparent;
                svg {
                    stroke: ${getColor({
                        cs: props.$colors,
                        color: props.$color,
                        variant: props.$colorVariant,
                    })};
                }
                &::after {
                    top: 0;
                    left: 0;
                    ${LOADING_SIZE[props.$sizeVariant](props.$styles.checkbox)}
                    border: 1px solid ${getColor({
                        cs: props.$colors,
                        color: props.$color,
                        variant: props.$colorVariant,
                    })};
                }
                ${StyledLoadingItemEffect}
            `;
        }
    }}
`;

export const SubmitCheckbox: React.FC<SubmitCheckboxProps> = React.memo(
    ({ isLoading, colorVariant = VC.DEFAULT, sizeVariant = VS.L, _isActiveHover = true, ...rest }) => {
        const colors = useColorScheme(rest.$colors);
        const styles = useStyleScheme(['base', 'checkbox', 'mr'], rest.$styles);

        return (
            <SRoot
                $isLoading={isLoading}
                $color={rest.color}
                $mr={rest.mr}
                $colors={colors}
                $blocked={rest.blocked}
                $styles={styles}
                $colorVariant={colorVariant}
                $sizeVariant={sizeVariant}
                $_isActiveHover={_isActiveHover}
                {...rest}
            >
                <SBaseCheckbox.Indicator {...rest.indicatorProps}>
                    <SBaseCheckbox.Icon
                        $colors={colors}
                        $disabled={rest.disabled}
                        $colorVariant={colorVariant}
                        viewBox="0 0 24 24"
                        {...rest.iconProps}
                    >
                        <polyline points="20 6 9 17 4 12" {...rest.polylineProps} />
                    </SBaseCheckbox.Icon>
                </SBaseCheckbox.Indicator>
            </SRoot>
        );
    }
);

//export component
export const SSubmitCheckbox = {
    Root: SRoot,
    Icon: SBaseCheckbox.Icon,
    Indicator: SBaseCheckbox.Indicator,
};

//export type
export namespace TSubmitCheckbox {
    export type Main = SubmitCheckboxProps;
    export type SRoot = SRootProps;
    export type SIcon = TBaseCheckbox.SIcon;
    export type Styles = TBaseCheckbox.Styles;
    export type SIndicator = TBaseCheckbox.SIndicator;
}
