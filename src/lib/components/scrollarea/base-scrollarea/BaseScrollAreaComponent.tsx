import * as ScrollArea from '@radix-ui/react-scroll-area';
import {
    ScrollAreaProps,
    ScrollAreaScrollbarProps,
    ScrollAreaThumbProps,
    ScrollAreaViewportProps,
} from '@radix-ui/react-scroll-area';
import { styled } from 'styled-components';

type SRootProps = ScrollAreaProps & React.RefAttributes<HTMLDivElement>;
const SRoot = styled(ScrollArea.Root)<SRootProps>`
    overflow: hidden;
`;

type SViewportProps = ScrollAreaViewportProps & React.RefAttributes<HTMLDivElement>;
const SViewport = styled(ScrollArea.Viewport)<SViewportProps>`
    width: 100%;
    height: 100%;
    border-radius: inherit;
`;

type SScrollbarProps = ScrollAreaScrollbarProps & React.RefAttributes<HTMLDivElement>;
const SScrollbar = styled(ScrollArea.Scrollbar)<SScrollbarProps>`
    cursor: pointer;
    display: flex;
    user-select: none;
    touch-action: none;
`;

type SThumbProps = ScrollAreaThumbProps & React.RefAttributes<HTMLDivElement>;
const SThumb = styled(ScrollArea.Thumb)<SThumbProps>`
    flex: 1;
    position: relative;
    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50% -50%);
        width: 100%;
        height: 100%;
        min-width: 30px;
        min-height: 30px;
    }
`;

//export component
export const SBaseScrollAreaComponent = {
    Root: SRoot,
    Viewport: SViewport,
    Scrollbar: SScrollbar,
    Thumb: SThumb,
};

//export type
export namespace TBaseScrollAreaComponent {
    export type SRoot = SRootProps;
    export type SViewport = SViewportProps;
    export type SScrollbar = SScrollbarProps;
    export type SThumb = SThumbProps;
}
