import { useColorScheme } from '@src/lib/general/useColorScheme';
import * as Tooltip from '@radix-ui/react-tooltip';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex } from '@src/lib/general/colors';
import React from 'react';
import styled from 'styled-components';
import {
    TypeBoxGapVariant,
    TypeBoxPaddingVariant,
    TypeBoxRadiusVariant,
    TypeBoxShadowVariant,
} from '@src/lib/types/TypeBox';
import { CSSBaseBox, CSSSimpleBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { TBaseTooltip, SBaseTooltip } from '../base-tooltip/BaseTooltip';
import { TooltipArrowProps } from '@radix-ui/react-tooltip';
import { SBaseTooltipComponent } from '../base-tooltip/BaseTooltipComponent';

type SimpleTooltipProps = {
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxRadiusVariant?: TypeBoxRadiusVariant;
    bg?: Hex;
    arrow?: boolean;
} & TBaseTooltip.Main;

type SContentProps = {
    $bg?: Hex;
    $boxGapVariant?: TypeBoxGapVariant;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TypeBoxShadowVariant;
    $boxRadiusVariant: TypeBoxRadiusVariant;
    $boxPaddingVariant: TypeBoxPaddingVariant;
} & TBaseTooltip.SContent;

const SArrow = styled(Tooltip.Arrow)``;

const SContent = styled(SBaseTooltipComponent.Content)<SContentProps>`
    ${(props) =>
        CSSBaseBox({
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
        })};
    ${(props) =>
        CSSSimpleBox({
            $colors: props.$colors,
            $boxBorderColor: props.$boxBorderColor,
            $boxShadowColor: props.$boxShadowColor,
            $boxShadowVariant: props.$boxShadowVariant,
            $boxRadiusVariant: props.$boxRadiusVariant,
            $styles: props.$styles.box,
        })};
    background-color: ${(props) => props.$bg ?? props.$colors.backgroundTooltip};
    font-size: 13px;
    margin: 6px;
    line-height: normal;
    color: ${(props) => props.$colors.textItem};
    ${SArrow} {
        fill: ${(props) => props.$bg ?? props.$colors.backgroundTooltip};
    }
`;

export const SimpleTooltip: React.FC<SimpleTooltipProps> = React.memo(
    ({
        children,
        mr,
        bg,
        tooltip,
        boxPaddingVariant = 'p-1',
        boxGapVariant,
        boxBorderColor,
        boxShadowColor,
        boxShadowVariant = 'shd-1',
        boxRadiusVariant = 'br-1',
        triggerStyle,
        arrow = true,
        $colors,
        $styles,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['box', 'mr']);

        return (
            <Tooltip.Provider>
                <Tooltip.Root>
                    <Tooltip.Trigger asChild>
                        <SBaseTooltip.Trigger style={triggerStyle} $mr={mr} $styles={styles}>
                            {children}
                        </SBaseTooltip.Trigger>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <SContent
                            $bg={bg}
                            $colors={colors}
                            $styles={styles}
                            $boxPaddingVariant={boxPaddingVariant}
                            $boxGapVariant={boxGapVariant}
                            $boxBorderColor={boxBorderColor}
                            $boxShadowColor={boxShadowColor}
                            $boxShadowVariant={boxShadowVariant}
                            $boxRadiusVariant={boxRadiusVariant}
                            side={rest.side ?? 'bottom'}
                            {...rest}
                        >
                            {tooltip}
                            {arrow && <SArrow />}
                        </SContent>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Provider>
        );
    }
);

//export component
export const SSimpleTooltip = {
    Content: SContent,
    Arrow: SArrow,
};

//export type
export namespace TSimpleTooltip {
    export type Main = SimpleTooltipProps;
    export type SContent = SContentProps;
    export type SArrow = TooltipArrowProps & React.RefAttributes<SVGSVGElement>;
}
