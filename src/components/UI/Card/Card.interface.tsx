import {
    SpaceProps,
    BorderProps,
    WidthProps,
    FlexboxProps,
    PositionProps,
    ZIndexProps,
    HeightProps,
    BackgroundColorProps,
} from 'styled-system';
import { HTMLAttributes, RefObject } from 'react';

export type CardPropsInterface = SpaceProps &
    BorderProps &
    WidthProps &
    HeightProps &
    FlexboxProps &
    PositionProps &
    ZIndexProps &
    BackgroundColorProps &
    HTMLAttributes<any> & {
        ref?: RefObject<HTMLElement>;
        testid?: string;
        children: React.ReactNode;
        style?: React.CSSProperties & object;
        elevation?: number;
        as?: string;
    };
