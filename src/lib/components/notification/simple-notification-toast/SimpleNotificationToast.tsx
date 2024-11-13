import { useColorScheme } from '@src/lib/general';
import { TypeSSBase, TypeSSBox, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { EVariantToast } from '@src/lib/types/TypeBase';
import React from 'react';
import { styled } from 'styled-components';
import { SBaseNotificationToast, TBaseNotificationToast } from '../base-notification-toast/BaseNotificationToast';
import { BaseTitle, TBaseTitle } from '../../typography/base/BaseTitle';
import { TypeTitleVariant } from '@src/lib/types/TypeText';
import { Icon } from '@src/lib';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';

type TypeStyles = {
    mr: TypeSSMR;
    typography: TypeSSTypography;
    box: TypeSSBox;
    base: TypeSSBase;
} & TBaseNotificationToast.Styles;

type SimpleNotificationToastProps = {
    title?: string;
    colorTitle?: Hex;
    sizeTitle?: TypeTitleVariant;
    $styles?: TypeStyles;
    titleProps?: TBaseTitle.Main;
} & TBaseNotificationToast.Main;

type SNotificationToastProps = {
    $styles: TypeStyles;
} & TBaseNotificationToast.SNotificationToast;

const SNotificationToast = styled(SBaseNotificationToast.NotificationToast)<SNotificationToastProps>``;

type SHeaderProps = {
    $styles: TypeStyles;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

const SHeader = styled.div<SHeaderProps>`
    display: flex;
    align-items: center;
    gap: 10px;
    padding-bottom: 5px;
    border-bottom: 1px solid;
`;

export const SimpleNotificationToast: React.FC<SimpleNotificationToastProps> = React.memo(
    ({
        bg,
        title,
        variant = EVariantToast.ERROR,
        boxPaddingVariant = 'p-3',
        boxGapVariant = 'g-1',
        $styles,
        $colors,
        titleProps,
        ...rest
    }) => {
        const colors = useColorScheme($colors);
        const styles = useStyleScheme(['box', 'mr', 'typography', 'base'], $styles);

        return (
            <SNotificationToast
                $bg={bg}
                $styles={styles}
                $colors={colors}
                $variant={variant}
                $boxPaddingVariant={boxPaddingVariant}
                $boxGapVariant={boxGapVariant}
                {...rest}
            >
                <SHeader $styles={styles} $colors={colors}>
                    <Icon.Error colorVariant={variant} />
                    <BaseTitle {...titleProps} as={'h5'} $colors={colors} $styles={styles}>
                        {title}
                    </BaseTitle>
                </SHeader>

                {rest.children}
            </SNotificationToast>
        );
    }
);

//export component
export const SSimpleNotificationToast = {
    NotificationToast: SNotificationToast,
};

//export type
export namespace TSimpleNotificationToast {
    export type Main = SimpleNotificationToastProps;
    export type Styles = TypeStyles;
    export type SNotificationToast = SNotificationToastProps;
}
