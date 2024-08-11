import { TypeSSBox, TypeSSBtn, TypeSSMR, TypeSSTypography } from '@src/lib/general/styleScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import React, { useCallback, useMemo, useState } from 'react';
import { css, styled } from 'styled-components';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { CSSBaseBox, CSSSimpleBox } from '@src/lib/common-styled-component/StyledComponentBox';
import { getMargin } from '@src/lib/common/getMargin';
import { OC, TypeMargin, TypeOrientationContent, TypeVariantSize, VS } from '@src/lib/types/TypeBase';
import {
    TypeBoxGapVariant,
    TypeBoxPaddingVariant,
    TypeBoxRadiusVariant,
    TypeBoxShadowVariant,
    TypeBoxWidthVariant,
} from '@src/lib/types/TypeBox';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { opacity } from '@src/lib/common/getColor';

type TypeStyles = {
    box: TypeSSBox;
    mr: TypeSSMR;
    btn: TypeSSBtn;
    typography: TypeSSTypography;
};

type BaseMenuGroupProps = {
    //group
    children?: React.ReactNode;
    mr?: TypeMargin;
    orientation?: TypeOrientationContent;
    boxWidthVariant?: TypeBoxWidthVariant;
    boxPaddingVariant?: TypeBoxPaddingVariant;
    boxGapVariant?: TypeBoxGapVariant;
    bg?: Hex;
    boxBorderColor?: Hex;
    boxShadowColor?: Hex;
    boxShadowVariant?: TypeBoxShadowVariant;
    boxRadiusVariant?: TypeBoxRadiusVariant;
    onChangeActiveItem?: (value: string) => void | Promise<void>;
    activeItem?: string;

    //items
    itemSizeVariant?: TypeVariantSize;
    itemColor?: Hex;
    itemOpacityHover?: opacity;
    itemOpacityActive?: opacity;
    itemTextColor?: Hex;
    itemTextColorActive?: Hex;

    $styles?: TypeStyles;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;

type SRootProps = {
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $bg?: Hex;
    $orientation: TypeOrientationContent;
    $boxBorderColor?: Hex;
    $boxShadowColor?: Hex;
    $boxShadowVariant?: TypeBoxShadowVariant;
    $boxRadiusVariant?: TypeBoxRadiusVariant;
    $boxWidthVariant?: TypeBoxWidthVariant;
    $boxPaddingVariant?: TypeBoxPaddingVariant;
    $boxGapVariant?: TypeBoxGapVariant;
    $mr?: TypeMargin;
} & React.HTMLAttributes<HTMLDivElement>;

const ORIENTATION = {
    [OC.HORIZONTAL]: css`
        display: inline-flex;
        align-items: center;
    `,
    [OC.VERTICAL]: css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: fit-content;
    `,
};

const SRoot = styled.div<SRootProps>`
    position: relative;
    background-color: ${(props) => props.$bg ?? props.$colors.secondary};
    ${(props) =>
        CSSSimpleBox({
            $colors: props.$colors,
            $boxBorderColor: props.$boxBorderColor,
            $boxShadowColor: props.$boxShadowColor,
            $boxShadowVariant: props.$boxShadowVariant,
            $boxRadiusVariant: props.$boxRadiusVariant,
            $styles: props.$styles.box,
        })};
    ${(props) =>
        CSSBaseBox({
            $boxWidthVariant: props.$boxWidthVariant,
            $boxPaddingVariant: props.$boxPaddingVariant,
            $boxGapVariant: props.$boxGapVariant,
            $styles: props.$styles.box,
        })};
    ${(props) => ORIENTATION[props.$orientation]}
    ${(props) => getMargin(props.$styles.mr, props.$mr)};
`;

export const BaseMenuGroup: React.FC<BaseMenuGroupProps> = React.memo(
    ({
        children,
        mr,
        boxWidthVariant,
        boxPaddingVariant = 'p-1',
        bg,
        boxGapVariant = 'g-1',
        boxBorderColor,
        boxRadiusVariant = 'br-1',
        boxShadowVariant = 'shd-1',
        boxShadowColor,
        orientation = OC.HORIZONTAL,
        onChangeActiveItem,
        activeItem,

        itemSizeVariant = VS.L,
        itemColor,
        itemOpacityHover,
        itemOpacityActive,
        itemTextColor,
        itemTextColorActive,

        $styles,
        $colors,
        ...rest
    }) => {
        const styles = $styles ?? useStyleScheme(['box', 'mr', 'btn', 'typography']);
        const colors = $colors ?? useColorScheme();

        const [activeValue, setActiveValue] = useState<string>(activeItem ?? '');

        const handleClick = useCallback(
            (event: React.MouseEvent<HTMLButtonElement>) => {
                const newValue = event.currentTarget.getAttribute('value');
                setActiveValue(newValue || '');
                onChangeActiveItem && onChangeActiveItem(newValue || '');
            },
            [onChangeActiveItem]
        );

        const renderItems = useMemo(() => {
            return React.Children.map(children, (child: React.ReactNode) => {
                if (React.isValidElement(child) && child.props.value) {
                    return React.cloneElement(child, {
                        onClick: handleClick,
                        active: Boolean(child.props.value === activeValue),
                        sizeVariant: itemSizeVariant,
                        color: itemColor,
                        opacityHover: itemOpacityHover,
                        opacityActive: itemOpacityActive,
                        textColor: itemTextColor,
                        textColorActive: itemTextColorActive,
                        $styles,
                        $colors,
                        tabIndex: 0,
                        'aria-pressed': child.props.value === activeValue ? 'true' : 'false',
                        ...child.props,
                    });
                }
                return child;
            });
        }, [
            children,
            handleClick,
            activeValue,
            itemSizeVariant,
            itemColor,
            $styles,
            $colors,
            itemOpacityActive,
            itemOpacityHover,
            itemTextColor,
            itemTextColorActive,
        ]);

        return (
            <SRoot
                $styles={styles}
                $colors={colors}
                $mr={mr}
                $boxWidthVariant={boxWidthVariant}
                $boxPaddingVariant={boxPaddingVariant}
                $boxGapVariant={boxGapVariant}
                $bg={bg}
                $boxBorderColor={boxBorderColor}
                $boxRadiusVariant={boxRadiusVariant}
                $boxShadowVariant={boxShadowVariant}
                $boxShadowColor={boxShadowColor}
                $orientation={orientation}
                {...rest}
            >
                {renderItems}
            </SRoot>
        );
    }
);
//export component
export const SBaseMenuGroup = {
    Root: SRoot,
};

//export type
export namespace TBaseMenuGroup {
    export type Main = BaseMenuGroupProps;
    export type Styles = TypeStyles;
    export type SRoot = SRootProps;
}
