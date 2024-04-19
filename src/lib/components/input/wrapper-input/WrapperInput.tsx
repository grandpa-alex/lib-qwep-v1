import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeMargin } from '@src/lib/types/TypeBase';
import { BOX_GAP_VARIANT } from '@src/lib/common-styled-component/StyledComponentBox';
import { TypeBoxGapVariant } from '@src/lib/types/TypeBox';
import { BaseText } from '../../typography';
import { PIL, TypePositionInpLabel } from '@src/lib/types/TypeInp';
import { MessageBox, TMessageBox } from './MessageBox';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
    typography: TypeSSTypography;
};

type WrapperInputProps = {
    label?: string;
    id: string;
    positionLabel?: TypePositionInpLabel;
    mr?: TypeMargin;
    children?: React.ReactNode;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    boxGapVariant?: TypeBoxGapVariant;
    message?: TMessageBox.Message;
    labelColor?: Hex;
    blocked?: boolean;
    as?: keyof JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLElement>;

type SRootProps = {
    $mr?: TypeMargin;
    $blocked?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $positionLabel: TypePositionInpLabel;
    $boxGapVariant: TypeBoxGapVariant;
};

const POSITION = {
    [PIL.TOP]: css`
        display: grid;
    `,
    [PIL.RIGTH]: css`
        display: flex;
        align-items: center;
        flex-direction: row-reverse;
    `,
    [PIL.LEFT]: css`
        display: flex;
        align-items: center;
    `,
};

const SRoot = styled.div<SRootProps>`
    position: relative;
    width: fit-content;
    ${(props) => BOX_GAP_VARIANT[props.$boxGapVariant](props.$styles.box)};
    ${(props) => getMargin(props.$styles.mr, props.$mr)}
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
    ${(props) => POSITION[props.$positionLabel]}
`;

export const WrapperInput: React.FC<WrapperInputProps> = React.memo(
    ({
        as,
        mr,
        id,
        children,
        blocked,
        positionLabel = PIL.TOP,
        $colors,
        $styles,
        label,
        message,
        boxGapVariant = 'g-1',
        labelColor,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['box', 'mr', 'typography']);

        const renderItem = useMemo(() => {
            return React.cloneElement(children as React.ReactElement, { id: id });
        }, [children, id]);

        return (
            <SRoot
                $colors={colors}
                $blocked={blocked}
                $styles={styles}
                as={as}
                $mr={mr}
                $positionLabel={positionLabel}
                $boxGapVariant={boxGapVariant}
                {...rest}
            >
                <BaseText
                    style={{ cursor: 'pointer', userSelect: 'none' }}
                    $colors={colors}
                    $styles={styles}
                    color={labelColor}
                    as={'label'}
                    htmlFor={id}
                >
                    {label}
                </BaseText>
                {renderItem}
                <MessageBox $colors={colors} message={message} />
            </SRoot>
        );
    }
);

//export component
export const SWrapperInput = {
    Root: SRoot,
};

//export type
export namespace TWrapperInput {
    export type Styles = TypeStyles;
    export type Main = WrapperInputProps;
    export type SRoot = SRootProps;
}
