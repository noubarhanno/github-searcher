import React, { FunctionComponent } from 'react';
import { Iicon } from './Icons.types';

const ArrowDown: FunctionComponent<Iicon> = ({ style }) => (
    <svg viewBox="0 0 24 24" style={style}>
        <path fill="none" stroke="#4d4d4d" strokeLinejoin="round" d="M22 7.19l-9.873 9.873L2 6.937" />
        <path fill="none" d="M0 0h24v24H0z" />
    </svg>
);

export default ArrowDown;
