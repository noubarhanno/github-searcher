import { SpaceProps, WidthProps } from 'styled-system';
import { ChangeEvent } from 'react';
type Iinput = SpaceProps &
    WidthProps & {
        label: string;
        onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
        value: string;
    };

export default Iinput;
