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
import { SBaseTooltipComponent, TBaseTooltipComponent } from './BaseTooltipComponent';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
};

type BaseTooltipProps = {
    children: React.ReactNode;
    tooltip: string | React.ReactNode;
    mr?: TypeMargin;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    triggerStyle?: React.CSSProperties;
} & TooltipProps &
    TBaseTooltipComponent.SContent;

type STriggerProps = {
    $mr?: TypeMargin;
    $styles: TypeStyles;
} & TooltipTriggerProps;

const STrigger = styled.div<STriggerProps>`
    display: inline-block;
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

type SContentProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
} & TBaseTooltipComponent.SContent;

const SContent = styled(SBaseTooltipComponent.Content)<SContentProps>`
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
                        <STrigger style={triggerStyle} $mr={mr} $styles={styles}>
                            {children}
                        </STrigger>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <SContent $colors={colors} $styles={styles} side={rest.side ?? 'bottom'} {...rest}>
                            {tooltip}
                        </SContent>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Provider>
        );
    }
);

//export component
export const SBaseTooltip = {
    Content: SContent,
    Trigger: STrigger,
};

//export type
export namespace TBaseTooltip {
    export type Main = BaseTooltipProps;
    export type Styles = TypeStyles;
    export type STrigger = STriggerProps;
    export type SContent = SContentProps;
}
