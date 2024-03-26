import * as Popover from '@radix-ui/react-popover';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSMR } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';

import { PopoverContentProps, PopoverTriggerProps } from '@radix-ui/react-popover';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeMargin } from '@src/lib/types/TypeBase';

export type TypeStyleBaseDialog = {
    mr: TypeSSMR;
};

export type BasePopupProps = {
    children: React.ReactNode;
    popupComponent: React.ReactNode;
    mr?: TypeMargin;
    bg?: Hex;
    triggerStyle?: React.CSSProperties;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleBaseDialog;
};

export type SBPopoverTriggerProps = {
    $mr?: TypeMargin;
    $styles: TypeStyleBaseDialog;
} & PopoverTriggerProps &
    React.RefAttributes<HTMLButtonElement>;
export const SBPopoverTrigger = styled.div<SBPopoverTriggerProps>`
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const SBPopoverArrow = styled(Popover.Arrow)``;

export type SBPopoverContentProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyleBaseDialog;
    $bg?: Hex;
} & PopoverContentProps &
    React.RefAttributes<HTMLDivElement>;

export const SBPopoverContent = styled(Popover.Content)<SBPopoverContentProps>`
    background-color: ${(props) => props.$bg ?? props.$colors.backgroundBox};
    ${SBPopoverArrow} {
        fill: ${(props) => props.$bg ?? props.$colors.backgroundBox};
    }
    font-size: 14px;
`;

export const BasePopup: React.FC<BasePopupProps> = React.memo(
    ({ mr, children, triggerStyle, popupComponent, bg, $colors, $styles, ...rest }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['mr']);

        return (
            <Popover.Root {...rest}>
                <Popover.Trigger asChild>
                    <SBPopoverTrigger style={triggerStyle} $mr={mr} $styles={styles}>
                        {children}
                    </SBPopoverTrigger>
                </Popover.Trigger>
                <Popover.Portal>
                    <SBPopoverContent sideOffset={6} $colors={colors} $styles={styles} $bg={bg} {...rest}>
                        {popupComponent}
                        <SBPopoverArrow />
                    </SBPopoverContent>
                </Popover.Portal>
            </Popover.Root>
        );
    }
);
