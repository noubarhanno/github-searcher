import React, { FC } from 'react';
import { Flex } from 'reflexbox';
import UserCard from './UserCard';

export type TProps = {
    userData: any[];
};
const UserCards: FC<TProps> = ({ userData }) => {
    return (
        <Flex flexDirection="row" alignItems="center" width="100%" flexWrap="wrap">
            {userData.map((data: any, index: number) => (
                <UserCard userData={data} key={index} />
            ))}
        </Flex>
    );
};

export default UserCards;
