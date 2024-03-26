import { DialogContentProps, DialogOverlayProps } from '@radix-ui/react-dialog';
import { styled } from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';

export type SBCDialogOverlayProps = DialogOverlayProps & React.RefAttributes<HTMLDivElement>;
export const SBCDialogOverlay = styled(Dialog.Overlay)<SBCDialogOverlayProps>`
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

export type SBCDialogContentProps = DialogContentProps & React.RefAttributes<HTMLDivElement>;
export const SBCDialogContent = styled(Dialog.Content)<SBCDialogContentProps>`
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
