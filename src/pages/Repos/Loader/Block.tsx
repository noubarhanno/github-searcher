import React from 'react';
import { List } from 'react-content-loader';
import { Card } from 'components/UI';
import { Flex } from 'reflexbox';

const Block: React.FC<any> = (props) => {
    return (
        <Flex width="30%" margin="10px">
            <Card width="100%">
                <List
                    speed={2}
                    width="100%"
                    height="100%"
                    backgroundColor="#f3f3f3"
                    foregroundColor="#ecebeb"
                    {...props}
                />
            </Card>
        </Flex>
    );
};

export default Block;
