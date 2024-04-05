import { getColor } from '@src/lib/common/getColor';
import { TypeSSSwitch } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { VC, VS } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';
import { BaseSwitch, TBaseSwitch } from '../base-switch/BaseSwitch';

type SubmitSwitchProps = {
    isLoading: boolean;
} & TBaseSwitch.Main;

type SSwitchProps = {
    $isLoading: boolean;
} & TBaseSwitch.SRoot;

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

const SSwitch = styled(BaseSwitch)<SSwitchProps>`
    ${(props) => {
        if (props.$isLoading && !props.disabled) {
            return css`
                pointer-events: none;
                &::after {
                    content: '';
                    position: absolute;
                    border-radius: 50%;
                    top: 0%;
                    ${props.checked || props.defaultChecked ? 'right: 0%' : 'left: 0%'};
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
            <SSwitch
                $color={color}
                $mr={mr}
                $colors={colors}
                $styles={styles}
                $colorVariant={colorVariant}
                $sizeVariant={sizeVariant}
                $_isActiveHover={_isActiveHover}
                $isLoading={isLoading}
                mr={mr}
                $blocked={rest.blocked}
                color={color}
                colorVariant={colorVariant}
                sizeVariant={sizeVariant}
                _isActiveHover={_isActiveHover}
                {...rest}
            />
        );
    }
);

//export component
export const SSubmitSwitch = {
    Switch: SSwitch,
};

//export type
export namespace TSubmitSwitch {
    export type Main = SubmitSwitchProps;
    export type SSwitch = SSwitchProps;
}
