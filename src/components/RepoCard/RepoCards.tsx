import React, { FC } from 'react';
import { Flex } from 'reflexbox';
import RepoCard from './RepoCard';
// import { CardWrapper } from './RepoCard.styled';
import { IRepo } from 'pages/Repos/redux/repos.interface';

export type TProps = {
    userData: IRepo[];
};
const UserCards: FC<TProps> = ({ userData }) => {
    return (
        <Flex flexDirection="row" alignItems="center" width="100%" flexWrap="wrap">
            {userData.map((data: IRepo, index: number) => (
                <RepoCard userData={data} key={index} />
            ))}
        </Flex>
    );
};

export default UserCards;
