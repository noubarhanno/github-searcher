import React, { FC } from 'react';
import { Flex } from 'reflexbox';
import SearchControl from 'components/SearchControl';

const Search: FC = () => {
    return (
        <Flex margin="auto" as="main" flexDirection="column" justifyContent="center" alignItems="flex-start" flex="1">
            <SearchControl />
        </Flex>
    );
};

export default Search;
