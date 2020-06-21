import React, { FunctionComponent } from 'react';
import { Iicon } from './Icons.types';

const ArrowUp: FunctionComponent<Iicon> = ({ style }) => (
    <svg data-name="Layer 1" viewBox="0 0 24 24" style={style}>
        <path fill="none" stroke="#4d4d4d" strokeLinejoin="round" d="M2 16.81l9.873-9.873L22 17.063" />
        <path fill="none" d="M0 0h24v24H0z" />
    </svg>
);

export default ArrowUp;
