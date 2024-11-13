import { Icon } from '@src/lib';
import { CSSBaseBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { getColor } from '@src/lib/common/getColor';
import { getMargin } from '@src/lib/common/getMargin';
import { useColorScheme } from '@src/lib/general';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSBase, TypeSSBox, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { ENotificationPosition, EVariantToast, TypeMargin, VS } from '@src/lib/types/TypeBase';
import { TypeBoxGapVariant, TypeBoxPaddingVariant } from '@src/lib/types/TypeBox';
import React from 'react';
import { styled } from 'styled-components';

type TypeStyles = {
    mr: TypeSSMR;
    typography: TypeSSTypography;
    box: TypeSSBox;
    base: TypeSSBase;
};

type BaseNotificationToastProps = {
    id?: string;
    position?: ENotificationPosition;
    count?: number;
    onClose?: (id: string, position: ENotificationPosition) => void;
    title?: string;
    message?: React.ReactNode;
    variant?: EVariantToast;
    iconSizeVariant?: VS;
    isClose?: boolean;
    icon?: React.ReactNode;
    bg?: Hex;
    mr?: TypeMargin;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

type SNotificationToastProps = {
    $mr?: TypeMargin;
    $bg?: Hex;
    $variant: EVariantToast;
    $boxPaddingVariant?: TypeBoxPaddingVariant;
    $boxGapVariant?: TypeBoxGapVariant;
    $styles: TypeStyles;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

const COLOR_VARIANT = {
    [EVariantToast.INFO]: (colors: TypeColorScheme) =>
        `linear-gradient(180deg, ${colors.infoItem}2d, ${colors.infoItem}03)`,
    [EVariantToast.WARNING]: (colors: TypeColorScheme) =>
        `linear-gradient(180deg, ${colors.warningItem}2d, ${colors.warningItem}03)`,
    [EVariantToast.ERROR]: (colors: TypeColorScheme) =>
        `linear-gradient(180deg, ${colors.errorItem}2d, ${colors.errorItem}03)`,
    [EVariantToast.SUCCESS]: (colors: TypeColorScheme) =>
        `linear-gradient(180deg, ${colors.successItem}2d, ${colors.successItem}03)`,
};

const SNotificationToast = styled.div<SNotificationToastProps>`
    box-sizing: border-box;
    position: relative;
    display: flex;
    border-radius: ${({ $styles }) => $styles.base.borderRadiusItem};
    color: ${({ $colors }) => $colors.text};
    font-size: 12px;
    max-width: 400px;
    min-width: 250px;
    height: 100%;
    border: 2px solid ${(props) => props.$colors.background};
    box-shadow: ${({ $styles }) => $styles.box.boxShadow_1} ${({ $colors }) => $colors.shadowColor};
    background: ${({ $colors, $variant }) => COLOR_VARIANT[$variant]($colors)};
    ${(props) =>
        CSSBaseBox({
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
        })};
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
    opacity: 0.8;
    &:hover {
        transition: all 0.3s ease-in-out;
        opacity: 1;
    }
`;

type SIconContentProps = {
    $variant: EVariantToast;
    $bg?: Hex;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
} & React.HTMLAttributes<HTMLDivElement>;

const SCount = styled.p`
    position: absolute;
    top: -2px;
    left: -2px;
    font-size: 8px;
    font-weight: 600;
    color: black;
`;

const SIconContent = styled.div<SIconContentProps>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    min-height: 36px;
    min-width: 36px;
    border-radius: 50%;
    background: ${({ $colors, $variant }) => COLOR_VARIANT[$variant]($colors)};
    box-shadow: ${({ $styles }) => $styles.box.boxShadow_1} ${({ $colors }) => $colors.shadowColor};
    ${SCount} {
        background-color: ${(props) =>
            getColor({
                cs: props.$colors,
                variant: props.$variant,
                opacity: 'dd',
            })};
        color: ${(props) => props.$colors.alpha};
        width: 13px;
        height: 13px;
        min-height: 13px;
        min-width: 13px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;

const STitle = styled.p`
    font-size: 14px;
    font-weight: 450;
`;

const SContent = styled.div`
    margin-left: 12px;
    width: 100%;
`;

const SHeader = styled.div`
    margin-bottom: 6px;
    display: flex;
    align-items: start;
    justify-content: space-between;
`;

const SCloseBtn = styled.button`
    all: unset;
    cursor: pointer;
`;

const iconVariant = {
    [EVariantToast.ERROR]: (colorVariant: EVariantToast, sizeVariant: VS) => (
        <Icon.Error colorVariant={colorVariant} sizeVariant={sizeVariant} />
    ),
    [EVariantToast.INFO]: (colorVariant: EVariantToast, sizeVariant: VS) => (
        <Icon.Info colorVariant={colorVariant} sizeVariant={sizeVariant} />
    ),
    [EVariantToast.SUCCESS]: (colorVariant: EVariantToast, sizeVariant: VS) => (
        <Icon.Success colorVariant={colorVariant} sizeVariant={sizeVariant} />
    ),
    [EVariantToast.WARNING]: (colorVariant: EVariantToast, sizeVariant: VS) => (
        <Icon.Warning colorVariant={colorVariant} sizeVariant={sizeVariant} />
    ),
};

export const BaseNotificationToast: React.FC<BaseNotificationToastProps> = React.memo(
    ({
        id = '1',
        mr = 'mx-2',
        title,
        count = 1,
        message,
        position = ENotificationPosition.BOTTOM_RIGHT,
        onClose,
        variant = EVariantToast.ERROR,
        iconSizeVariant = VS.M,
        boxPaddingVariant = 'p-2',
        isClose = true,
        icon,
        bg,
        boxGapVariant,
        $styles,
        $colors,
        ...rest
    }) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['box', 'mr', 'typography', 'base'], $styles);

        return (
            <SNotificationToast
                $bg={bg}
                $mr={mr}
                $styles={styles}
                $colors={colors}
                $variant={variant}
                $boxPaddingVariant={boxPaddingVariant}
                $boxGapVariant={boxGapVariant}
                {...rest}
            >
                <SIconContent $styles={styles} $colors={colors} $variant={variant}>
                    {count > 1 && <SCount>{count}</SCount>}
                    {icon ? icon : iconVariant[variant](variant, iconSizeVariant)}
                </SIconContent>
                <SContent>
                    <SHeader>
                        <STitle>{title}</STitle>
                        {isClose && (
                            <SCloseBtn onClick={() => onClose && onClose(id, position)}>
                                <Icon.Close sizeVariant={iconSizeVariant} colorVariant={variant} />
                            </SCloseBtn>
                        )}
                    </SHeader>
                    {message}
                </SContent>
            </SNotificationToast>
        );
    }
);

//export component
export const SBaseNotificationToast = {
    NotificationToast: SNotificationToast,
};

//export type
export namespace TBaseNotificationToast {
    export type Main = BaseNotificationToastProps;
    export type Styles = TypeStyles;
    export type SNotificationToast = SNotificationToastProps;
}
