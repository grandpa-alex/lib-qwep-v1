import { getColor } from '@src/lib/common/getColor';
import { TypeSSSwitch } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { VC, VS } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';
import { BaseSwitch, BaseSwitchProps, StyledRootBaseSwitchProps, TypeStyleBaseSwitch } from '../base-switch/BaseSwitch';

export type TypeStyleSubmitSwitch = {} & TypeStyleBaseSwitch;

export type SubmitSwitchProps = {
    isLoading: boolean;
} & BaseSwitchProps;

export type StyledSubmitSwitchProps = {
    $isLoading: boolean;
} & StyledRootBaseSwitchProps;

const LOADING_SIZE = {
    [VS.L]: (props: TypeSSSwitch) => css`
        width: ${props.switchThumbSize_L};
        height: ${props.switchThumbSize_L};
    `,
    [VS.M]: (props: TypeSSSwitch) => css`
        width: ${props.switchThumbSize_M};
        height: ${props.switchThumbSize_M};
    `,
};

export const StyledSubmitSwitch = styled(BaseSwitch)<StyledSubmitSwitchProps>`
    ${(props) => {
        if (props.$isLoading && !props.disabled) {
            return css`
                pointer-events: none;
                &::after {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    top: 0%;
                    ${props.checked ? 'right: 0%' : 'left: 0%'};
                    ${LOADING_SIZE[props.$sizeVariant](props.$styles.switch)}
                    border: 1px solid ${getColor({
                        cs: props.$colors,
                        color: props.$color,
                        variant: props.$colorVariant,
                    })};
                    animation: 0.8s linear infinite show_Switch;
                    @keyframes show_Switch {
                        0% {
                            transform: scale(0);
                        }
                        100% {
                            transform: scale(1);
                        }
                    }
                }
            `;
        }
    }}
`;

export const SubmitSwitch: React.FC<SubmitSwitchProps> = React.memo(
    ({
        mr,
        color,
        isLoading,
        colorVariant = VC.DEFAULT,
        sizeVariant = VS.L,

        $colors,
        $styles,
        _isActiveHover = true,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['switch', 'mr']);

        return (
            <StyledSubmitSwitch
                $color={color}
                $mr={mr}
                $colors={colors}
                $styles={styles}
                $colorVariant={colorVariant}
                $sizeVariant={sizeVariant}
                $_isActiveHover={_isActiveHover}
                $isLoading={isLoading}
                mr={mr}
                color={color}
                colorVariant={colorVariant}
                sizeVariant={sizeVariant}
                _isActiveHover={_isActiveHover}
                {...rest}
            />
        );
    }
);
