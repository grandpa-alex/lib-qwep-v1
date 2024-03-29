import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { getColor } from '@src/lib/common/getColor';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBox, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { getMargin } from '@src/lib/common/getMargin';
import { TypeColorVariant, TypeMargin } from '@src/lib/types/TypeBase';
import { BOX_GAP_VARIANT } from '@src/lib/common-styled-component/StyledComponentBox';
import { TypeBoxGapVariant } from '@src/lib/types/TypeBox';
import { BaseText } from '../../typography';


export type TypeStyleWrapperTextField = {
    mr: TypeSSMR;
    box: TypeSSBox;
    typography: TypeSSTypography;
};

type TypeMessage = {
    text?: string;
    colorVariant?: TypeColorVariant;
}

export type WrapperTextFieldProps = {
    mr?: TypeMargin;
    children: React.ReactNode;
    $colors?: TypeColorScheme;
    $styles?: TypeStyleWrapperTextField;
    label: string;
    id: string;
    boxGapVariant?: TypeBoxGapVariant;
    message?: TypeMessage
    labelColor?: Hex;
    as?: keyof JSX.IntrinsicElements | React.ComponentType<any>;
} & React.HTMLAttributes<HTMLElement>;

export type SWrapperTextFieldMessageProps = {
    $colors: TypeColorScheme;
    $colorVariant: TypeColorVariant;
} 
export const SWrapperTextFieldMessage = styled.span<SWrapperTextFieldMessageProps>`
    position: absolute;
    font-size: 11px;
    bottom: -15px;
    left: 0px;
    color: ${props => getColor({
                        cs: props.$colors,
                        variant: props.$colorVariant,
                    })};
`;



export type SWrapperTextFieldRootProps = {
    $mr?: TypeMargin;
    $colors: TypeColorScheme;
    $styles: TypeStyleWrapperTextField;
    $boxGapVariant: TypeBoxGapVariant;
} 

export const SWrapperTextFieldRoot = styled.div<SWrapperTextFieldRootProps>`
    position: relative;
    display: grid;
    ${props => BOX_GAP_VARIANT[props.$boxGapVariant](props.$styles.box)};
    ${(props) => getMargin(props.$styles.mr, props.$mr)}
`;

export const WrapperTextField: React.FC<WrapperTextFieldProps> = React.memo(
    ({
        as,
        mr,
        id,
        children,
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
        }, [colors, styles]);


        return (
           <SWrapperTextFieldRoot
            $colors={colors} 
            $styles={styles} 
            as={as}
            $mr={mr}
            $boxGapVariant={boxGapVariant}
            {...rest}
            >
            <BaseText 
            $colors={colors} 
            $styles={styles} 
            color={labelColor}
            as={'label'}
            htmlFor={id}
            >{label}</BaseText>
            {renderInput}
            {
                message && <SWrapperTextFieldMessage
                $colors={colors} 
                $colorVariant={message.colorVariant ?? 'error'}
                >{message.text}</SWrapperTextFieldMessage>
            }
            
           </SWrapperTextFieldRoot>
        );
    }
);
