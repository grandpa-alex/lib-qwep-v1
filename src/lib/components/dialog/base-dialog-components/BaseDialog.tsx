import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getColor } from '@src/lib/common/getColor';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import {
    SBCDialogContent,
    SBCDialogContentProps,
    SBCDialogOverlay,
    SBCDialogOverlayProps,
} from './BaseDialogComponents';
import { DialogContentProps, DialogProps } from '@radix-ui/react-dialog';
import {
    TypeBoxGapVariant,
    TypeBoxPaddingVariant,
    TypeBoxRadiusVariant,
    TypeBoxShadowVariant,
    TypeBoxWidthVariant,
} from '@src/lib/types/TypeBox';
import { CSSBaseBox, CSSSimpleBox } from '@src/lib/common-styled-component/StyledComponentBox';

export type TypeStyleBaseDialog = {
    box: TypeSSBox;
};

export type BaseDialogProps = {
    children: React.ReactNode;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleBaseDialog;
    bg?: Hex;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxRadiusVariant?: TypeBoxRadiusVariant;
    boxWidthVariant?: TypeBoxWidthVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    overlayBlur?: string;
    overlayColor?: Hex;
} & DialogProps &
    DialogContentProps &
    React.RefAttributes<HTMLDivElement>;

export type SBDialogOverlayProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyleBaseDialog;
    $overlayBlur?: string;
    $overlayColor?: Hex;
} & SBCDialogOverlayProps;

export const SBDialogOverlay = styled(SBCDialogOverlay)<SBDialogOverlayProps>`
    backdrop-filter: blur(${(props) => props.$overlayBlur ?? '0px'});
    background-color: ${(props) => getColor({ cs: props.$colors, color: props.$overlayColor ?? props.$colors.omaga, opacity: '90' })};
`;

export type SBDialogContentProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyleBaseDialog;
    $boxPaddingVariant: TypeBoxPaddingVariant;
    $boxShadowVariant?: TypeBoxShadowVariant;
    $boxRadiusVariant: TypeBoxRadiusVariant;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxWidthVariant?: TypeBoxWidthVariant;
    $boxGapVariant?: TypeBoxGapVariant;
    $bg?: Hex;
} & SBCDialogContentProps;

export const SBDialogContent = styled(SBCDialogContent)<SBDialogContentProps>`
    background-color: ${(props) => props.$bg ?? props.$colors.backgroundBox};
    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
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
`;

export const BaseDialog: React.FC<BaseDialogProps> = React.memo(
    ({
        children,
        bg,
        boxBorderColor,
        boxShadowColor,
        boxShadowVariant,
        boxRadiusVariant = 'br-2',
        boxPaddingVariant = 'p-3',
        boxWidthVariant,
        boxGapVariant,
        overlayBlur,
        overlayColor,
        $colors,
        $styles,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['box']);

        return (
            <Dialog.Root {...rest}>
                <Dialog.Portal>
                    <SBDialogOverlay
                        $colors={colors}
                        $styles={styles}
                        $overlayColor={overlayColor}
                        $overlayBlur={overlayBlur}
                    >
                        <SBDialogContent
                            $colors={colors}
                            $styles={styles}
                            $boxPaddingVariant={boxPaddingVariant}
                            $bg={bg}
                            $boxBorderColor={boxBorderColor}
                            $boxShadowColor={boxShadowColor}
                            $boxShadowVariant={boxShadowVariant}
                            $boxRadiusVariant={boxRadiusVariant}
                            $boxWidthVariant={boxWidthVariant}
                            $boxGapVariant={boxGapVariant}
                            style={rest.style}
                        >
                            {children}
                        </SBDialogContent>
                    </SBDialogOverlay>
                </Dialog.Portal>
            </Dialog.Root>
        );
    }
);
