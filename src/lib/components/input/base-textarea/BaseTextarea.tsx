import { getColor } from '@src/lib/common/getColor';
import { Hex, TypeColorScheme, useColorScheme } from '@src/lib/general';
import { TypeSSBase, TypeSSInp, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeMargin, TypeVariantColor, TypeVariantSize, VC, VS } from '@src/lib/types/TypeBase';
import React, { useCallback, useState } from 'react';
import styled, { css } from 'styled-components';
import { RootTextarea, TRootTextarea } from './RootTextarea';
import { BaseInputArea, TBaseInputArea } from './BaseInputArea';
import { StyledScrollbarItem } from '@src/lib/common-styled-component/StyledBase';

type TypeStyles = {
    typography: TypeSSTypography;
    base: TypeSSBase;
    inp: TypeSSInp;
    mr: TypeSSMR;
};

type BaseTextareaProps = {
    mr?: TypeMargin;
    resize?: boolean;
    sizeVariant?: TypeVariantSize;
    colorVariant?: TypeVariantColor;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
    color?: Hex;
    _isActiveHover?: boolean;
    blocked?: boolean;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const STextarea = styled(BaseInputArea)<TBaseInputArea.STextarea>`
    padding: 0 3px;
    margin: 0 -6px;
`;

type SRootProps = {
    $blocked?: boolean;
} & TRootTextarea.SRoot;

const SRoot = styled(RootTextarea)<SRootProps>`
    ${STextarea} {
        ${(props) =>
            StyledScrollbarItem({
                $colors: props.$colors,
                $color: props.$color,
                $colorVariant: props.$colorVariant,
                $hover: props.$_isActiveHover,
            })}
        &:disabled {
            color: ${(props) => props.$colors.disabled};
        }
        &::placeholder {
            user-select: none;
            color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    disabled: props.disabled,
                    variant: props.$colorVariant,
                })};
        }
        &:not([disabled]) {
            color: ${(props) => props.$colors.prompt};
        }
    }
    ${(props) =>
        props.$blocked &&
        css`
            pointer-events: none;
        `}
`;

export const BaseTextarea: React.FC<BaseTextareaProps> = React.memo(
    ({
        mr,
        color,
        sizeVariant = VS.L,
        colorVariant = VC.DEFAULT,
        $colors,
        $styles,
        _isActiveHover = true,
        resize,
        blocked,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['base', 'mr', 'typography', 'inp']);
        const [isFocused, setIsFocused] = useState(false);
        const handleFocus = useCallback(() => !rest.disabled && setIsFocused(true), []);
        const handleBlur = useCallback(() => !rest.disabled && setIsFocused(false), []);

        return (
            <SRoot
                $mr={mr}
                $styles={styles}
                $colors={colors}
                $color={color}
                $colorVariant={colorVariant}
                $sizeVariant={sizeVariant}
                $disabled={rest.disabled}
                $_isActiveHover={_isActiveHover}
                onFocus={handleFocus}
                onBlur={handleBlur}
                _isFocused={isFocused}
                disabled={rest.disabled}
                mr={mr}
                color={color}
                sizeVariant={sizeVariant}
                colorVariant={colorVariant}
                $blocked={blocked}
            >
                <STextarea $resize={resize} resize={resize} $styles={styles} {...rest} />
            </SRoot>
        );
    }
);

//export component
export const SBaseTextarea = {
    Root: SRoot,
    Textarea: STextarea,
};

//export type
export namespace TBaseTextarea {
    export type Main = BaseTextareaProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
