import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR } from '@src/lib/general/styleScheme';
import { TypeMargin } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';
import { TooltipArrowProps, TooltipContentProps, TooltipProps, TooltipTriggerProps } from '@radix-ui/react-tooltip';
import {
    SBTooltipArrow,
    SBTooltipContent,
    SBTooltipPortal,
    SBTooltipProvider,
    SBTooltipRoot,
    SBTooltipTrigger,
} from '../base-tooltip-component/BaseTooltipComponent';
import {
    TypeBoxGapVariant,
    TypeBoxPaddingVariant,
    TypeBoxRadiusVariant,
    TypeBoxShadowVariant,
} from '@src/lib/types/TypeBox';
import {
    BOX_BORDER_RADIUS,
    BOX_GAP_VARIANT,
    BOX_PADDING_VARIANT,
    BOX_SHADOW_VARIANT,
} from '@src/lib/common-styled-component/StuledComponentBox';

export type TypeStyleSimpleTooltip = {
    box: TypeSSBox;
    mr: TypeSSMR;
};

export type SimpleTooltipProps = {
    children: React.ReactNode;
    content: React.ReactNode | string;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    mr?: TypeMargin;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxRadiusVariant?: TypeBoxRadiusVariant;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleSimpleTooltip;
    bg?: Hex;
} & (TooltipContentProps & TooltipProps);

export type SSTooltipProps = {
    $bg?: Hex;
    $boxGapVariant?: TypeBoxGapVariant;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TypeBoxShadowVariant;
    $boxRadiusVariant: TypeBoxRadiusVariant;
    $boxPaddingVariant: TypeBoxPaddingVariant;
    $colors: TypeColorScheme;
    $styles: TypeStyleSimpleTooltip;
} & TooltipContentProps;

export type SSTooltipArrayProps = {
    $bg?: Hex;
    $colors: TypeColorScheme;
} & TooltipArrowProps;

export type SSTooltipTriggerProps = {
    $mr?: TypeMargin;
    $styles: TypeStyleSimpleTooltip;
} & TooltipTriggerProps;

export const SSTooltipTrigger = styled(SBTooltipTrigger)<SSTooltipTriggerProps>`
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const SSTooltipContent = styled(SBTooltipContent)<SSTooltipProps>`
    background-color: ${(props) => props.$bg ?? props.$colors.backgroundTooltip};
    font-size: 13px;
    margin: 8px;
    line-height: normal;
    color: ${(props) => props.$colors.textItem};
    ${(props) => {
        if (props.$boxGapVariant) {
            return css`
                display: grid;
                ${BOX_GAP_VARIANT[props.$boxGapVariant](props.$styles.box)};
            `;
        }
    }}
    ${(props) => BOX_PADDING_VARIANT[props.$boxPaddingVariant](props.$styles.box)};

    ${(props) => BOX_BORDER_RADIUS[props.$boxRadiusVariant](props.$styles.box)};
    ${(props) =>
        props.$boxShadowVariant &&
        BOX_SHADOW_VARIANT[props.$boxShadowVariant]({
            $box: props.$styles.box,
            $colors: props.$colors,
            $boxShadowColor: props.$boxShadowColor,
        })}
    ${(props) =>
        props.$boxBorderColor &&
        css`
            border: 1px solid;
            border-color: ${props.$boxBorderColor};
        `}
`;

export const SSTooltipArrow = styled(SBTooltipArrow)<SSTooltipArrayProps>`
    fill: ${(props) => props.$bg ?? props.$colors.backgroundTooltip};
`;

export const SimpleTooltip: React.FC<SimpleTooltipProps> = React.memo(
    ({
        children,
        mr,
        bg,
        content,
        boxPaddingVariant = 'p-1',
        boxGapVariant,
        boxBorderColor,
        boxShadowColor,
        boxShadowVariant = 'shd-1',
        boxRadiusVariant = 'br-1',

        $colors,
        $styles,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['box', 'mr']);

        return (
            <SBTooltipProvider>
                <SBTooltipRoot>
                    <SSTooltipTrigger $mr={mr} $styles={styles}>
                        {children}
                    </SSTooltipTrigger>
                    <SBTooltipPortal>
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
                            {...rest}
                        >
                            {content}
                            <SSTooltipArrow $bg={bg} $colors={colors} />
                        </SSTooltipContent>
                    </SBTooltipPortal>
                </SBTooltipRoot>
            </SBTooltipProvider>
        );
    }
);
