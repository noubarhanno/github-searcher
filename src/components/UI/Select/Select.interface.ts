import { SpaceProps, WidthProps } from 'styled-system';
import { ESearchEntity } from 'store/store.interface';

export type TOption = {
    id: number;
    label: string;
    value: ESearchEntity;
};
export type TSelect = SpaceProps &
    WidthProps & {
        ref?: any;
        testid?: string;
        style?: React.CSSProperties & object;
        id?: string;
        options: TOption[];
        value: string;
        onChange: (option: TOption) => void;
    };
