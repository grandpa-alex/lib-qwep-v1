import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getColor } from '@src/lib/common/getColor';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox } from '@src/lib/general/styleScheme';
import React from 'react';
import styled, { css } from 'styled-components';
import {
    SBDialogContent,
    SBDialogContentProps,
    SBDialogOverlay,
    SBDialogOverlayProps,
    SBDialogPortal,
    SBDialogRoot,
    SBDialogRootProps,
} from '../base-dialog-components/BaseDialogComponents';
import {
    TypeBoxGapVariant,
    TypeBoxPaddingVariant,
    TypeBoxRadiusVariant,
    TypeBoxShadowVariant,
    TypeBoxWidthVariant,
} from '@src/lib/types/TypeBox';
import {
    BOX_BORDER_RADIUS,
    BOX_GAP_VARIANT,
    BOX_PADDING_VARIANT,
    BOX_SHADOW_VARIANT,
    BOX_WIDTH_VARIANT,
} from '@src/lib/common-styled-component/StuledComponentBox';

export type TypeStyleSimpleDialog = {
    box: TypeSSBox;
};

export type SimpleDialogProps = {
    children: React.ReactNode;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleSimpleDialog;
    bg?: Hex;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxRadiusVariant?: TypeBoxRadiusVariant;
    boxWidthVariant?: TypeBoxWidthVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    overlayBlur?: string;
} & SBDialogRootProps &
    SBDialogContentProps;

export type SSDialogOverlayProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyleSimpleDialog;
    $overlayBlur?: string;
} & SBDialogOverlayProps;

export const SSDialogOverlay = styled(SBDialogOverlay)<SSDialogOverlayProps>`
    backdrop-filter: blur(${(props) => props.$overlayBlur ?? '0px'});
    background-color: ${(props) => getColor({ cs: props.$colors, color: props.$colors.omaga, opacity: '90' })};
`;

export type SSDialogContentProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyleSimpleDialog;
    $boxPaddingVariant: TypeBoxPaddingVariant;
    $boxShadowVariant: TypeBoxShadowVariant;
    $boxRadiusVariant: TypeBoxRadiusVariant;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxWidthVariant?: TypeBoxWidthVariant;
    $boxGapVariant?: TypeBoxGapVariant;
    $bg?: Hex;
} & SBDialogContentProps;

export const SSDialogContent = styled(SBDialogContent)<SSDialogContentProps>`
    background-color: ${(props) => props.$bg ?? props.$colors.backgroundBox};
    ${(props) => {
        if (props.$boxGapVariant) {
            return css`
                display: grid;
                ${BOX_GAP_VARIANT[props.$boxGapVariant](props.$styles.box)};
            `;
        }
    }}

    ${(props) => BOX_PADDING_VARIANT[props.$boxPaddingVariant](props.$styles.box)};
    ${(props) => props.$boxWidthVariant && BOX_WIDTH_VARIANT[props.$boxWidthVariant](props.$styles.box)};
    ${(props) => props.$boxRadiusVariant && BOX_BORDER_RADIUS[props.$boxRadiusVariant](props.$styles.box)};
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

export const SimpleDialog: React.FC<SimpleDialogProps> = React.memo(
    ({
        children,
        bg,
        boxBorderColor,
        boxShadowColor,
        boxShadowVariant = 'shd-2',
        boxRadiusVariant = 'br-2',
        boxPaddingVariant = 'p-3',
        boxWidthVariant,
        boxGapVariant,
        overlayBlur,

        $colors,
        $styles,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['box']);

        return (
            <SBDialogRoot {...rest}>
                <SBDialogPortal>
                    <SSDialogOverlay $colors={colors} $styles={styles} $overlayBlur={overlayBlur}>
                        <SSDialogContent
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
                        </SSDialogContent>
                    </SSDialogOverlay>
                </SBDialogPortal>
            </SBDialogRoot>
        );
    }
);
