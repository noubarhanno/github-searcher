import React from 'react';
import Block from './Block';
import { Flex } from 'reflexbox';

const Loader: React.FC<any> = () => {
    return (
        <Flex flexDirection="row" justifyContent="space-between" flexWrap="wrap">
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
            <Block />
        </Flex>
    );
};

export default Loader;
