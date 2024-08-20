import React from 'react';
import styled from 'styled-components';
import { useColorScheme } from '@src/lib/general/useColorScheme';
import { getColor } from '@src/lib/common/getColor';
import { TypeColorScheme } from '@src/lib/general/colors';
import { TypeVariantColor } from '@src/lib/types/TypeBase';

type TypeMessage = {
    text?: React.ReactNode;
    colorVariant?: TypeVariantColor;
};

type MessageBoxProps = {
    $colors?: TypeColorScheme;
    message?: TypeMessage;
} & React.HTMLAttributes<HTMLSpanElement>;

type SMessageProps = {
    $colors: TypeColorScheme;
    $colorVariant: TypeVariantColor;
} & React.HTMLAttributes<HTMLSpanElement>;

const SMessage = styled.span<SMessageProps>`
    position: absolute;
    font-size: 10px;
    top: calc(100% + 2px);
    left: 0;
    color: ${(props) =>
        getColor({
            cs: props.$colors,
            variant: props.$colorVariant,
        })};
`;

export const MessageBox: React.FC<MessageBoxProps> = React.memo(({ $colors, message, ...rest }) => {
    const colors = useColorScheme($colors);
    if (!message) return;
    return (
        <SMessage $colors={colors} $colorVariant={message.colorVariant ?? 'error'} {...rest}>
            {message.text}
        </SMessage>
    );
});

//export component
export const SMessageBox = {
    Message: SMessage,
};

//export type
export namespace TMessageBox {
    export type Message = TypeMessage;
    export type Main = MessageBoxProps;
    export type SMessage = SMessageProps;
}
