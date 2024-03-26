import { useColorScheme } from '@src/lib/general/useColorScheme';
import * as Tooltip from '@radix-ui/react-tooltip';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import { TypeMargin } from '@src/lib/types/TypeBase';
import React from 'react';
import styled from 'styled-components';
import { TooltipProps, TooltipTriggerProps } from '@radix-ui/react-tooltip';
import { SBCTooltipContent, SBCTooltipContentProps } from '../base-tooltip-component/BaseTooltipComponent';

export type TypeStyleBaseTooltip = {
    mr: TypeSSMR;
    box: TypeSSBox;
};

export type BaseTooltipProps = {
    children: React.ReactNode;
    tooltip: string | React.ReactNode;
    mr?: TypeMargin;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleBaseTooltip;
    triggerStyle?: React.CSSProperties;
} & TooltipProps &
    SBCTooltipContentProps;

export type SBTooltipTriggerProps = {
    $mr?: TypeMargin;
    $styles: TypeStyleBaseTooltip;
} & TooltipTriggerProps;

export const SBTooltipTrigger = styled.div<SBTooltipTriggerProps>`
    display: inline-block;
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export type SBTooltipContentProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyleBaseTooltip;
} & SBCTooltipContentProps;

export const SBTooltipContent = styled(SBCTooltipContent)<SBTooltipContentProps>`
    background-color: ${(props) => props.$colors.backgroundTooltip};
    color: ${(props) => props.$colors.textItem};
    font-size: 13px;
    margin: 6px;
    line-height: normal;
    border-radius: ${(props) => props.$styles.box.boxBorderRadius_1};
    padding: ${(props) => props.$styles.box.boxPadding_1};
    box-shadow: ${(props) => `${props.$styles.box.boxShadow_1} ${props.$colors.shadowColor}`};
`;

export const BaseTooltip: React.FC<BaseTooltipProps> = React.memo(
    ({ children, mr, tooltip, triggerStyle, $colors, $styles, ...rest }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['mr', 'box']);

        return (
            <Tooltip.Provider>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                        <SBTooltipTrigger style={triggerStyle} $mr={mr} $styles={styles}>
                            {children}
                        </SBTooltipTrigger>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <SBTooltipContent $colors={colors} $styles={styles} side={rest.side ?? 'bottom'} {...rest}>
                            {tooltip}
                        </SBTooltipContent>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Provider>
        );
    }
);
