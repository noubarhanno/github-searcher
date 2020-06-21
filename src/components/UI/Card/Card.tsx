import React, { FunctionComponent, forwardRef } from 'react';
import { CardWrapper } from './Card.styles';
import { CardPropsInterface } from './Card.interface';

const setProps = (props: any) => {
    const { elevation, width, ...rest } = props;
    return {
        p: 3,
        m: 3,
        elevation,
        borderRadius: 1,
        width,
        ...rest,
    };
};

const Card: FunctionComponent<CardPropsInterface> = forwardRef((props, ref) => {
    const { children, testid } = props;
    return (
        <CardWrapper ref={ref} data-testid={testid} {...setProps(props)}>
            {children}
        </CardWrapper>
    );
});

Card.defaultProps = {
    m: 3,
    elevation: 4,
};

export default Card;
