import { getColor } from '@src/lib/common/getColor';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { IIP, TypeItemIconPosition, VC, VS } from '@src/lib/types/TypeBase';
import { VI } from '@src/lib/types/TypeInp';
import React, { useCallback, useMemo, useState } from 'react';
import styled, { css } from 'styled-components';
import { BaseInput } from '..';
import { renderIconTextField } from '@src/lib/common/renderIconItem';
import {
    BaseTextFieldProps,
    SBTextFieldInputProps,
    SBTextFieldRoot,
    SBTextFieldRootProps,
} from '../base-text-field/BaseTextField';
import { TypeStyleTextField } from '../base-text-field/RootTextField';

export type SimpleTextFieldProps = {
    icon?: React.ReactNode;
    iconPosition?: TypeItemIconPosition;
    $styles?: TypeStyleTextField;
} & BaseTextFieldProps;

export type SSTextFieldIconContainerProps = {
    $iconPosition: TypeItemIconPosition;
};

export const SSTextFieldIconContainer = styled.div<SSTextFieldIconContainerProps>`
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

export const SSTextFieldRoot = styled(SBTextFieldRoot)<SBTextFieldRootProps>`
    display: inline-flex;
    align-items: center;
    min-width: 100px;
    ${SSTextFieldIconContainer} {
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
        ${SSTextFieldIconContainer} {
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

export const SSTextFieldInput = styled(BaseInput)<SBTextFieldInputProps>`
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
            <SSTextFieldRoot
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
            >
                {icon && <SSTextFieldIconContainer $iconPosition={iconPosition}>{renderIcon}</SSTextFieldIconContainer>}

                <SSTextFieldInput
                    $styles={{ typography: styles.typography }}
                    $colors={colors}
                    $color={color}
                    $colorVariant={colorVariant}
                    {...rest}
                />
            </SSTextFieldRoot>
        );
    }
);
