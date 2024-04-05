import { getColor } from '@src/lib/common/getColor';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { IIP, TypeItemIconPosition, VC, VS } from '@src/lib/types/TypeBase';
import { VI } from '@src/lib/types/TypeInp';
import React, { useCallback, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { renderIconTextField } from '@src/lib/common/renderIconItem';
import { SBaseTextField, TBaseTextField } from '../base-text-field/BaseTextField';

type SimpleTextFieldProps = {
    icon?: React.ReactNode;
    iconPosition?: TypeItemIconPosition;
    iconOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void | Promise<void>;
} & TBaseTextField.Main;

type SIconContProps = {
    $iconPosition: TypeItemIconPosition;
    $useBtn: boolean;
    $disabled?: boolean;
};

export const SIconContainer = styled.div<SIconContProps>`
    background-color: transparent;
    border: none;
    padding: 0;
    margin: 0;
    ${(props) =>
        props.$disabled &&
        css`
            pointer-events: none;
        `};
    ${(props) =>
        props.$useBtn &&
        css`
            cursor: pointer;
        `};
    ${(props) => {
        if (props.$iconPosition === IIP.RIGHT) {
            return css`
                order: 1;
                margin-left: 6px;
            `;
        } else {
            return css`
                order: 0;
                margin-right: 6px;
            `;
        }
    }}
`;

export const SRoot = styled(SBaseTextField.Root)<TBaseTextField.SRoot>`
    display: inline-flex;
    align-items: center;
    min-width: 100px;
    ${SIconContainer} {
        svg {
            color: ${(props) =>
                getColor({
                    cs: props.$colors,
                    color: props.$color,
                    disabled: props.disabled,
                    variant: props.$colorVariant,
                    hover: props.$_isFocused,
                })};
        }
    }
    &:hover {
        ${SIconContainer} {
            svg {
                color: ${(props) =>
                    getColor({
                        cs: props.$colors,
                        color: props.$color,
                        disabled: props.disabled,
                        variant: props.$colorVariant,
                        hover: props.$_isActiveHover,
                    })};
            }
        }
    }
`;

export const SInput = styled(SBaseTextField.Input)<TBaseTextField.SInput>`
    &:disabled {
        color: ${(props) => props.$colors.disabled};
    }
    &::placeholder {
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
`;

export const SimpleTextField: React.FC<SimpleTextFieldProps> = React.memo(
    ({
        mr,
        icon,
        color,
        iconOnClick,
        _isActiveHover = true,
        iconPosition = IIP.LEFT,
        variant = VI.OUTLINED,
        sizeVariant = VS.L,
        colorVariant = VC.DEFAULT,
        $colors,
        $styles,
        ...rest
    }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['base', 'inp', 'typography', 'mr']);
        const [isFocused, setIsFocused] = useState(false);
        const handleFocus = useCallback(() => !rest.disabled && setIsFocused(true), []);
        const handleBlur = useCallback(() => !rest.disabled && setIsFocused(false), []);

        const renderIcon = useMemo(() => {
            return renderIconTextField({ icon: icon, size: styles.inp, sizeVariant, rest: { $colors: colors } });
        }, [icon, colors, styles]);

        return (
            <SRoot
                $mr={mr}
                $colors={colors}
                $styles={styles}
                $color={color}
                $colorVariant={colorVariant}
                $sizeVariant={sizeVariant}
                $variant={variant}
                $disabled={rest.disabled}
                disabled={rest.disabled}
                mr={mr}
                color={color}
                variant={variant}
                sizeVariant={sizeVariant}
                colorVariant={colorVariant}
                onFocus={handleFocus}
                onBlur={handleBlur}
                _isFocused={isFocused}
                _isActiveHover={_isActiveHover}
                $_isActiveHover={_isActiveHover}
                $_isFocused={isFocused}
                $blocked={rest.blocked}
            >
                {icon && (
                    <SIconContainer
                        as={iconOnClick ? 'button' : 'div'}
                        onClick={iconOnClick}
                        $disabled={rest.disabled}
                        $iconPosition={iconPosition}
                        $useBtn={Boolean(iconOnClick)}
                    >
                        {renderIcon}
                    </SIconContainer>
                )}

                <SInput
                    $styles={{ typography: styles.typography }}
                    $colors={colors}
                    $color={color}
                    $colorVariant={colorVariant}
                    {...rest}
                />
            </SRoot>
        );
    }
);

//export component
export const SSimpleTextField = {
    Root: SRoot,
    IconContainer: SIconContainer,
    Input: SInput,
};

//export type
export namespace TSimpleTextField {
    export type Main = SimpleTextFieldProps;
    export type SIconContainer = SIconContProps;
}
