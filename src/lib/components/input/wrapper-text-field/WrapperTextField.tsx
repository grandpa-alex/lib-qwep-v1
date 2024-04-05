import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getColor } from '@src/lib/common/getColor';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeVariantColor, TypeMargin } from '@src/lib/types/TypeBase';
import { BOX_GAP_VARIANT } from '@src/lib/common-styled-component/StyledComponentBox';
import { TypeBoxGapVariant } from '@src/lib/types/TypeBox';
import { BaseText } from '../../typography';

type TypeStyles = {
    mr: TypeSSMR;
    box: TypeSSBox;
    typography: TypeSSTypography;
};

type TypeMessage = {
    text?: React.ReactNode;
    colorVariant?: TypeVariantColor;
};

type WrapperTextFieldProps = {
    mr?: TypeMargin;
    children?: React.ReactNode;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    label: string;
    id: string;
    boxGapVariant?: TypeBoxGapVariant;
    message?: TypeMessage;
    labelColor?: Hex;
    blocked?: boolean;
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
} & React.HTMLAttributes<HTMLElement>;

type SMessageProps = {
    $colors: TypeColorScheme;
    $colorVariant: TypeVariantColor;
};

type SRootProps = {
    $mr?: TypeMargin;
    $blocked?: boolean;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $boxGapVariant: TypeBoxGapVariant;
};

const SMessage = styled.span<SMessageProps>`
    position: absolute;
    font-size: 11px;
    bottom: -15px;
    left: 0px;
    color: ${(props) =>
        getColor({
            cs: props.$colors,
            variant: props.$colorVariant,
        })};
`;

const SRoot = styled.div<SRootProps>`
    position: relative;
    display: grid;
    ${(props) => BOX_GAP_VARIANT[props.$boxGapVariant](props.$styles.box)};
    ${(props) => getMargin(props.$styles.mr, props.$mr)}
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const WrapperTextField: React.FC<WrapperTextFieldProps> = React.memo(
    ({
        as,
        mr,
        id,
        children,
        blocked,
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

        const renderInput = useMemo(() => {
            return React.cloneElement(children as React.ReactElement, { id: id });
        }, [children, id]);

        return (
            <SRoot
                $colors={colors}
                $blocked={blocked}
                $styles={styles}
                as={as}
                $mr={mr}
                $boxGapVariant={boxGapVariant}
                {...rest}
            >
                <BaseText
                    style={{ cursor: 'pointer' }}
                    $colors={colors}
                    $styles={styles}
                    color={labelColor}
                    as={'label'}
                    htmlFor={id}
                >
                    {label}
                </BaseText>
                {renderInput}
                {message && (
                    <SMessage $colors={colors} $colorVariant={message.colorVariant ?? 'error'}>
                        {message.text}
                    </SMessage>
                )}
            </SRoot>
        );
    }
);

//export component
export const SWrapperTextField = {
    Root: SRoot,
    Message: SMessage,
};

//export type
export namespace TWrapperTextField {
    export type Styles = TypeStyles;
    export type Message = TypeMessage;
    export type Main = WrapperTextFieldProps;
    export type SRoot = SRootProps;
    export type SMessage = SMessageProps;
}
