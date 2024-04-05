import { SimpleTooltip, SSimpleTooltip, TSimpleTooltip } from './simple-tooltip/SimpleTooltip';
import { BaseTooltip, SBaseTooltip, TBaseTooltip } from './base-tooltip/BaseTooltip';
import { SBaseTooltipComponent, TBaseTooltipComponent } from './base-tooltip/BaseTooltipComponent';

export { SimpleTooltip, BaseTooltip };

export const TooltipStyledComponent = {
    BaseTooltipComponent: SBaseTooltipComponent,
    BaseTooltip: SBaseTooltip,
    SimpleTooltip: SSimpleTooltip,
};

export namespace TypeTooltip {
    export namespace BaseTooltipComponent {
        export type SContent = TBaseTooltipComponent.SContent;
    }

    export namespace BaseTooltip {
        export type Main = TBaseTooltip.Main;
        export type Styles = TBaseTooltip.Styles;
        export type SContent = TBaseTooltip.SContent;
        export type STrigger = TBaseTooltip.STrigger;
    }

    export namespace SimpleTooltip {
        export type Main = TSimpleTooltip.Main;
        export type SArrow = TSimpleTooltip.SArrow;
        export type SContent = TSimpleTooltip.SContent;
    }
}
