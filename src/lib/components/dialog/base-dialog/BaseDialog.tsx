import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getColor } from '@src/lib/common/getColor';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox } from '@src/lib/general/styleScheme';
import React from 'react';
import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import { DialogProps } from '@radix-ui/react-dialog';
import {
    TypeBoxGapVariant,
    TypeBoxPaddingVariant,
    TypeBoxRadiusVariant,
    TypeBoxShadowVariant,
    TypeBoxWidthVariant,
} from '@src/lib/types/TypeBox';
import { CSSBaseBox, CSSSimpleBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { SBaseDialogComponent, TBaseDialogComponent } from './BaseDialogComponents';

type TypeStyles = {
    box: TypeSSBox;
};

type BaseDialogProps = {
    children: React.ReactNode;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
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
} & (DialogProps & TBaseDialogComponent.SContent);

type SOverlayProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $overlayBlur?: string;
    $overlayColor?: Hex;
} & TBaseDialogComponent.SOverlay;

const SOverlay = styled(SBaseDialogComponent.Overlay)<SOverlayProps>`
    backdrop-filter: blur(${(props) => props.$overlayBlur ?? '0px'});
    background-color: ${(props) =>
        getColor({ cs: props.$colors, color: props.$overlayColor ?? props.$colors.omaga, opacity: '90' })};
`;

type SContentProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $boxPaddingVariant: TypeBoxPaddingVariant;
    $boxShadowVariant?: TypeBoxShadowVariant;
    $boxRadiusVariant: TypeBoxRadiusVariant;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxWidthVariant?: TypeBoxWidthVariant;
    $boxGapVariant?: TypeBoxGapVariant;
    $bg?: Hex;
} & TBaseDialogComponent.SContent;

const SContent = styled(SBaseDialogComponent.Content)<SContentProps>`
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
                    <SOverlay $colors={colors} $styles={styles} $overlayColor={overlayColor} $overlayBlur={overlayBlur}>
                        <SContent
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
                        </SContent>
                    </SOverlay>
                </Dialog.Portal>
            </Dialog.Root>
        );
    }
);

//export component
export const SBaseDialog = {
    Overlay: SOverlay,
    Content: SContent,
};

//export type
export namespace TBaseDialog {
    export type Main = BaseDialogProps;
    export type Styles = TypeStyles;

    export type SOverlay = SOverlayProps;
    export type SContent = SContentProps;
}