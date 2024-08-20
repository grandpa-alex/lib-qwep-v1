import { BaseDialog, SBaseDialog, TBaseDialog } from './base-dialog/BaseDialog';
import { SBaseDialogComponent, TBaseDialogComponent } from './base-dialog/BaseDialogComponents';

export { BaseDialog };

export const DialogStyledComponent = {
    BaseDialogComponent: SBaseDialogComponent,
    BaseDialog: SBaseDialog,
};

export namespace TypeDialog {
    export namespace BaseDialogComponent {
        export type SContent = TBaseDialogComponent.SContent;
        export type SOverlay = TBaseDialogComponent.SOverlay;
    }

    export namespace BaseDialog {
        export type Main = TBaseDialog.Main;
        export type Styles = TBaseDialog.Styles;
        export type SContent = TBaseDialog.SContent;
        export type SOverlay = TBaseDialog.SOverlay;
        export type SPortal = TBaseDialog.SPortal;
        export type SRoot = TBaseDialog.SRoot;
    }
}
