import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { VC, VS } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';
import { BaseCheckbox } from '..';
import { BaseCheckboxProps, SBRootCheckboxProps } from '../base-checkbox/BaseCheckbox';
import { getColor } from '@src/lib/common/getColor';
import { TypeSSCheckbox } from '@src/lib/general/styleScheme';
import { StyledLoadingItemEffect } from '@src/lib/common-styled-component/StyledLoadingItem';

export type SubmitCheckboxProps = {
    isLoading: boolean;
} & BaseCheckboxProps;

export type SSUBCheckboxProps = {
    $isLoading: boolean;
} & SBRootCheckboxProps;

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

export const SSUBCheckboxProps = styled(BaseCheckbox)<SSUBCheckboxProps>`
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
                    top: 0%;
                    left: 0%;
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
    ({
        mr,
        color,
        isLoading = false,
        colorVariant = VC.DEFAULT,
        sizeVariant = VS.L,

        $colors,
        $styles,
        _isActiveHover = true,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['base', 'checkbox', 'mr']);

        return (
            <SSUBCheckboxProps
                $color={color}
                $mr={mr}
                $colors={colors}
                $styles={styles}
                $colorVariant={colorVariant}
                $sizeVariant={sizeVariant}
                $isLoading={isLoading}
                mr={mr}
                color={color}
                colorVariant={colorVariant}
                sizeVariant={sizeVariant}
                _isActiveHover={_isActiveHover}
                $_isActiveHover={_isActiveHover}
                {...rest}
            />
        );
    }
);
