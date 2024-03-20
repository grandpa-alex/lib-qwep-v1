
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getMargin } from '@src/lib/common/getMargin';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR,  } from '@src/lib/general/styleScheme';
import { TypeMargin } from '@src/lib/types/TypeBase';
import React from 'react';
import styled, { css } from 'styled-components';
import { TooltipArrowProps, TooltipContentProps, TooltipProps, TooltipTriggerProps } from '@radix-ui/react-tooltip';
import {
    StyledBaseTooltipArrow,
    StyledBaseTooltipContent,
    StyledBaseTooltipPortal,
    StyledBaseTooltipProvider,
    StyledBaseTooltipRoot,
    StyledBaseTooltipTrigger,
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

export type StyledSimpleTooltipProps = {
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

export type StyledSimpleTooltipArrayProps = {
    $bg?: Hex;
    $colors: TypeColorScheme;
} & TooltipArrowProps;

export type StyledSimpleTooltipTriggerProps = {
    $mr?: TypeMargin;
    $styles: TypeStyleSimpleTooltip;
} & TooltipTriggerProps;

export const StyledSimpleTooltipTrigger = styled(StyledBaseTooltipTrigger)<StyledSimpleTooltipTriggerProps>`
    ${(props) => getMargin(props.$styles.mr, props.$mr)};

`;

export const StyledSimpleTooltipContent = styled(StyledBaseTooltipContent)<StyledSimpleTooltipProps>`
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

export const StyledSimpleTooltipArrow = styled(StyledBaseTooltipArrow)<StyledSimpleTooltipArrayProps>`
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
            <StyledBaseTooltipProvider>
                <StyledBaseTooltipRoot>
                    <StyledSimpleTooltipTrigger $mr={mr} $styles={styles}>
                        {children}
                    </StyledSimpleTooltipTrigger>
                    <StyledBaseTooltipPortal>
                        <StyledSimpleTooltipContent
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
                            <StyledSimpleTooltipArrow $bg={bg} $colors={colors}  />
                        </StyledSimpleTooltipContent>
                    </StyledBaseTooltipPortal>
                </StyledBaseTooltipRoot>
            </StyledBaseTooltipProvider>
        );
    }
);
