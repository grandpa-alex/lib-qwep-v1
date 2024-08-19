import * as Popover from '@radix-ui/react-popover';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSMR } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';
import { PopoverArrowProps, PopoverContentProps, PopoverProps, PopoverTriggerProps } from '@radix-ui/react-popover';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeMargin } from '@src/lib/types/TypeBase';

type TypeStyles = {
    mr: TypeSSMR;
};

type BasePopupProps = {
    children: React.ReactNode;
    trigger: React.ReactNode;
    mr?: TypeMargin;
    bg?: Hex;
    triggerStyle?: React.CSSProperties;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & (PopoverProps & PopoverContentProps);

type STriggerProps = {
    $mr?: TypeMargin;
    $styles: TypeStyles;
} & PopoverTriggerProps &
    React.RefAttributes<HTMLButtonElement>;

const STrigger = styled.div<STriggerProps>`
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

const SArrow = styled(Popover.Arrow)<PopoverArrowProps & React.RefAttributes<SVGSVGElement>>``;

type SContentProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $bg?: Hex;
} & PopoverContentProps &
    React.RefAttributes<HTMLDivElement>;

const SContent = styled(Popover.Content)<SContentProps>`
    background-color: ${(props) => props.$bg ?? props.$colors.backgroundBox};
    ${SArrow} {
        fill: ${(props) => props.$bg ?? props.$colors.backgroundBox};
    }
`;

export const BasePopup: React.FC<BasePopupProps> = React.memo(
    ({ mr, children, triggerStyle, trigger, bg, $colors, $styles, ...rest }) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['mr'], $styles);

        return (
            <Popover.Root {...rest}>
                <Popover.Trigger asChild>
                    <STrigger style={triggerStyle} $mr={mr} $styles={styles}>
                        {trigger}
                    </STrigger>
                </Popover.Trigger>
                <Popover.Portal>
                    <SContent $colors={colors} $styles={styles} $bg={bg} sideOffset={8} {...rest}>
                        {children}
                        <SArrow />
                    </SContent>
                </Popover.Portal>
            </Popover.Root>
        );
    }
);

//export component
export const SBasePopup = {
    SContent: SContent,
    Trigger: STrigger,
    Arrow: SArrow,
};

//export type
export namespace TBasePopup {
    export type Main = BasePopupProps;
    export type Styles = TypeStyles;
    export type SContent = SContentProps;
    export type STrigger = STriggerProps;
    export type SArrow = PopoverArrowProps & React.RefAttributes<SVGSVGElement>;
}
