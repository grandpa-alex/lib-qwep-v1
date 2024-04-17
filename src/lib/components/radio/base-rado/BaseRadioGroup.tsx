import * as RadioGroup from '@radix-ui/react-radio-group';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import React from 'react';
import styled, { css } from 'styled-components';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeMargin, TypeOrientationContent, OC } from '@src/lib/types/TypeBase';
import { BOX_GAP_VARIANT } from '@src/lib/common-styled-component/StyledComponentBox';
import { TypeBoxGapVariant } from '@src/lib/types/TypeBox';
import { BaseText } from '../../typography';
import { RadioGroupProps } from '@radix-ui/react-radio-group';
import { MessageBox, TMessageBox } from '../../input/wrapper-input/MessageBox';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
    typography: TypeSSTypography;
};

type BaseRadioGroupProps = {
    mr?: TypeMargin;
    orientation?: TypeOrientationContent;
    label?: string;
    labelColor?: Hex;
    boxGapVariant?: TypeBoxGapVariant;
    message?: TMessageBox.Message;
    boxGapVariantLabel?: TypeBoxGapVariant;
    blocked?: boolean;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & RadioGroupProps &
    React.RefAttributes<HTMLDivElement>;

type SRootProps = {
    $mr?: TypeMargin;
    $styles: TypeStyles;
    $blocked?: boolean;
    $boxGapVariantLabel: TypeBoxGapVariant;
} & React.RefAttributes<HTMLDivElement>;

type SGroupProps = {
    $styles: TypeStyles;
    $orientation: TypeOrientationContent;
    $boxGapVariant: TypeBoxGapVariant;
} & RadioGroupProps &
    React.RefAttributes<HTMLDivElement>;

const ORIENTATION = {
    [OC.HORIZONTAL]: css`
        flex-direction: row;
        align-items: center;
    `,
    [OC.VERTICAL]: css`
        flex-direction: column;
        align-items: start;
    `,
};

const SGroup = styled(RadioGroup.Root)<SGroupProps>`
    position: relative;
    display: flex;
    ${(props) => BOX_GAP_VARIANT[props.$boxGapVariant](props.$styles.box)};
    ${(props) => ORIENTATION[props.$orientation]};
`;

const SRoot = styled.div<SRootProps>`
    position: relative;
    display: grid;
    ${(props) => BOX_GAP_VARIANT[props.$boxGapVariantLabel](props.$styles.box)};
    ${(props) => getMargin(props.$styles.mr, props.$mr)}
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const BaseRadioGroup: React.FC<BaseRadioGroupProps> = React.memo(
    ({
        mr,
        blocked,
        $colors,
        $styles,
        labelColor,
        label,
        boxGapVariantLabel = 'g-1',
        boxGapVariant = 'g-1',
        orientation = OC.VERTICAL,
        message,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['mr', 'box', 'typography']);

        return (
            <SRoot $mr={mr} $styles={styles} $blocked={blocked} $boxGapVariantLabel={boxGapVariantLabel}>
                <BaseText $colors={colors} $styles={styles} color={labelColor}>
                    {label}
                </BaseText>
                <SGroup $styles={styles} $boxGapVariant={boxGapVariant} $orientation={orientation} {...rest}>
                    {rest.children}
                </SGroup>
                <MessageBox $colors={colors} message={message} />
            </SRoot>
        );
    }
);

//export component
export const SBaseRadioGroup = {
    Root: SRoot,
    Group: SGroup,
};

//export type
export namespace TBaseRadioGroup {
    export type Styles = TypeStyles;
    export type Main = BaseRadioGroupProps;
    export type SRoot = SRootProps;
    export type SGroup = SGroupProps;
}
