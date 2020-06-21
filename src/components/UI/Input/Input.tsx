import React, { FunctionComponent, useRef } from 'react';
import { StyledInput, InputWrpper, InputBox } from './Input.styles';
import Iinput from './Input.interface';

const Input: FunctionComponent<Iinput> = ({ label, onChangeHandler, value, ...rest }) => {
    /**
     * Ref
     */
    const ref = useRef(null);

    return (
        <InputWrpper ref={ref} {...rest}>
            <InputBox>
                <StyledInput
                    data-testid="input-styled"
                    value={value}
                    placeholder={label}
                    onChange={onChangeHandler}
                    autoFocus
                />
            </InputBox>
        </InputWrpper>
    );
};

Input.defaultProps = {
    m: 1,
};

export default Input;
