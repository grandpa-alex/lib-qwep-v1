import * as Avatar from '@radix-ui/react-avatar';
import { AvatarFallbackProps, AvatarImageProps, AvatarProps } from '@radix-ui/react-avatar';
import { Hex, TypeColorScheme } from '@src/lib/general/colors';
import { TypeSSAvatar, TypeSSMR } from '@src/lib/general/styleScheme';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { useStyleScheme } from '@src/lib/general/useStyleScheme';
import { TypeMargin } from '@src/lib/types/TypeBase';
import React, { useCallback } from 'react';
import styled, { css } from 'styled-components';
import { TypeVariantSizeAvatar, VSA } from '@src/lib/types/TypeAvatar';
import { getMargin } from '@src/lib/common/getMargin';

type TypeStyles = {
    avatar: TypeSSAvatar;
    mr: TypeSSMR;
};

type BaseAvatarProps = {
    mr?: TypeMargin;
    src?: string;
    alt: string;
    sizeVariant?: TypeVariantSizeAvatar;
    color?: Hex;
    bg?: Hex;
    $colors?: TypeColorScheme;
    $styles?: TypeStyles;
} & AvatarProps;

type SRootProps = {
    $color?: Hex;
    $bg?: Hex;
    $mr?: TypeMargin;
    $colors: TypeColorScheme;
    $styles: TypeStyles;
    $sizeVariant: TypeVariantSizeAvatar;
} & AvatarProps &
    React.RefAttributes<HTMLSpanElement>;

const SIZE = {
    [VSA.S]: (props: TypeSSAvatar) => css`
        width: ${props.avatarSize_1};
        min-width: ${props.avatarSize_1};
        height: ${props.avatarSize_1};
        font-size: ${props.avatarFontSize_1};
    `,
    [VSA.M]: (props: TypeSSAvatar) => css`
        width: ${props.avatarSize_2};
        min-width: ${props.avatarSize_2};
        height: ${props.avatarSize_2};
        font-size: ${props.avatarFontSize_2};
    `,
    [VSA.L]: (props: TypeSSAvatar) => css`
        width: ${props.avatarSize_3};
        min-width: ${props.avatarSize_3};
        height: ${props.avatarSize_3};
        font-size: ${props.avatarFontSize_3};
    `,
};

const SFallback = styled(Avatar.Fallback)`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    text-transform: uppercase;
`;

const SImg = styled(Avatar.Image)`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`;

const SRoot = styled(Avatar.Root)<SRootProps>`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    border-radius: 100%;
    ${(props) => SIZE[props.$sizeVariant](props.$styles.avatar)}
    ${SFallback} {
        background-color: ${(props) => props.$bg ?? props.$colors.lightElem};
        color: ${(props) => props.$color ?? props.$colors.textItem};
        font-weight: ${(props) => props.$styles.avatar.avatarFontWeight};
    }
    ${(props) => getMargin(props.$styles?.mr, props.$mr)};
`;

export const BaseAvatar: React.FC<BaseAvatarProps> = React.memo(
    ({ mr, color, bg, src, alt, sizeVariant = VSA.L, $colors, $styles, ...rest }) => {
        const colors = $colors ?? useColorScheme();
        const styles = $styles ?? useStyleScheme(['avatar', 'mr']);

        const getFallbackText = useCallback((altText: string) => {
            const words = altText.split(' ').slice(0, 2);
            return words.map((word) => word.slice(0, Math.min(1, word.length))).join('');
        }, []);

        return (
            <SRoot $colors={colors} $styles={styles} $color={color} $mr={mr} $bg={bg} $sizeVariant={sizeVariant}>
                <SImg src={src} alt={alt} {...rest} />
                <SFallback delayMs={600}>{getFallbackText(alt)}</SFallback>
            </SRoot>
        );
    }
);

//export component
export const SBaseAvatar = {
    Root: SRoot,
    Img: SImg,
    Fallback: SFallback,
};

//export type
export namespace TBaseAvatar {
    export type Styles = TypeStyles;
    export type Main = BaseAvatarProps;
    export type SRoot = SRootProps;
    export type SImg = AvatarImageProps & React.RefAttributes<HTMLImageElement>;
    export type SFallback = AvatarFallbackProps & React.RefAttributes<HTMLSpanElement>;
}
