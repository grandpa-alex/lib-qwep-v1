import { Hex, TypeColorScheme } from '../../../general/colors';
import { default as React } from '../../../../../node_modules/react';

type BaseContainerProps = {
    as?: keyof JSX.IntrinsicElements;
    bg?: Hex;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;
type SContainerProps = {
    $bg?: Hex;
    $colors: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const BaseContainer: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    as?: keyof JSX.IntrinsicElements;
    bg?: Hex;
    $colors?: TypeColorScheme;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>>;
export declare const SBaseContainer: {
    Container: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, SContainerProps>> & string;
};
export declare namespace TBaseContainer {
    type Main = BaseContainerProps;
    type SContainer = SContainerProps;
}
export {};
