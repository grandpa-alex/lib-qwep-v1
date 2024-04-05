import * as Select from '@radix-ui/react-select';
import { styled } from 'styled-components';
import { SelectIconProps, SelectItemProps } from '@radix-ui/react-select';

// content
type SIconProps = SelectIconProps & React.RefAttributes<HTMLSpanElement>;
const SIcon = styled(Select.Icon)`
    margin-left: 8px;
    svg {
        width: 20px;
        height: 20px;
    }
`;

// item
type SItemProps = SelectItemProps & React.RefAttributes<HTMLDivElement>;
const SItem = styled(Select.Item)`
    position: relative;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    outline: none;
    line-height: normal;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
`;

//export component
export const SBaseSelectComponent = {
    Icon: SIcon,
    Item: SItem,
};

//export type
export namespace TBaseSelectComponent {
    export type SIcon = SIconProps;
    export type SItem = SItemProps;
}
