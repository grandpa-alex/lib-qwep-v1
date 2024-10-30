import { default as React } from '../../../../../node_modules/react';

type BaseLayoutProps = {
    children?: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const BaseLayout: React.MemoExoticComponent<React.ForwardRefExoticComponent<{
    children?: React.ReactNode;
    as?: keyof JSX.IntrinsicElements;
    rootProps?: React.HTMLAttributes<HTMLDivElement>;
} & React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>>;
export declare const SBaseLayout: {
    Root: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, React.HTMLAttributes<HTMLDivElement>>> & string;
    Layout: import('styled-components/dist/types').IStyledComponentBase<"web", import('styled-components/dist/types').Substitute<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, React.HTMLAttributes<HTMLDivElement>>> & string;
};
export declare namespace TBaseLayout {
    type Main = BaseLayoutProps;
    type SRoot = React.HTMLAttributes<HTMLDivElement>;
    type SWrapper = React.HTMLAttributes<HTMLDivElement>;
}
export {};
