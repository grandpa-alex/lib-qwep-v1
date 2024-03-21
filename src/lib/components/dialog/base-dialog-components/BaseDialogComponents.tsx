import {
    DialogCloseProps,
    DialogContentProps,
    DialogOverlayProps,
    DialogPortalProps,
    DialogProps,
} from '@radix-ui/react-dialog';
import { styled } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export type SBDialogRootProps = DialogProps;
export const SBDialogRoot = styled(Dialog.Root)<SBDialogRootProps>``;

export type SBDialogPortalProps = DialogPortalProps;
export const SBDialogPortal = styled(Dialog.Portal)<SBDialogPortalProps>``;

export type SBDialogOverlayProps = DialogOverlayProps & React.RefAttributes<HTMLDivElement>;
export const SBDialogOverlay = styled(Dialog.Overlay)<SBDialogOverlayProps>`
    position: fixed;
    inset: 0;
    animation: overlayShow_BaseDialog 150ms cubic-bezier(0.16, 1, 0.3, 1);
    @keyframes overlayShow_BaseDialog {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

export type SBDialogContentProps = DialogContentProps & React.RefAttributes<HTMLDivElement>;
export const SBDialogContent = styled(Dialog.Content)<SBDialogContentProps>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: contentShow_BaseDialog 150ms cubic-bezier(0.16, 1, 0.3, 1);
    @keyframes contentShow_BaseDialog {
        from {
            opacity: 0;
            transform: translate(-50%, -48%) scale(0.96);
        }
        to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
        }
    }
`;

export type SBDialogCloseProps = DialogCloseProps & React.RefAttributes<HTMLButtonElement>;
export const SBDialogClose = styled(Dialog.Close)<SBDialogCloseProps>``;
