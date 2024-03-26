import { useColorScheme } from '@src/lib/general/useColorScheme';
import * as Tooltip from '@radix-ui/react-tooltip';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex } from '@src/lib/general/colors';

import React from 'react';
import styled from 'styled-components';

import { SBCTooltipContent } from '../base-tooltip-component/BaseTooltipComponent';
import {
    TypeBoxGapVariant,
    TypeBoxPaddingVariant,
    TypeBoxRadiusVariant,
    TypeBoxShadowVariant,
} from '@src/lib/types/TypeBox';
import { CSSBaseBox, CSSSimpleBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { BaseTooltipProps, SBTooltipContentProps, SBTooltipTrigger } from '../base-tooltip-component/BaseTooltip';

export type SimpleTooltipProps = {
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxRadiusVariant?: TypeBoxRadiusVariant;
    bg?: Hex;
    arrow?: boolean;
} & BaseTooltipProps;

export type SSTooltipContentsProps = {
    $bg?: Hex;
    $boxGapVariant?: TypeBoxGapVariant;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TypeBoxShadowVariant;
    $boxRadiusVariant: TypeBoxRadiusVariant;
    $boxPaddingVariant: TypeBoxPaddingVariant;
} & SBTooltipContentProps;

export const SSTooltipArrow = styled(Tooltip.Arrow)``;

export const SSTooltipContent = styled(SBCTooltipContent)<SSTooltipContentsProps>`
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
    ${SSTooltipArrow} {
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
        trigerStyle,
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
                        <SBTooltipTrigger style={trigerStyle} $mr={mr} $styles={styles}>
                            {children}
                        </SBTooltipTrigger>
                    </Tooltip.Trigger>
                    <Tooltip.Portal>
                        <SSTooltipContent
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
                            {arrow && <SSTooltipArrow />}
                        </SSTooltipContent>
                    </Tooltip.Portal>
                </Tooltip.Root>
            </Tooltip.Provider>
        );
    }
);
