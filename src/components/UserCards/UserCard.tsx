import React, { FC } from 'react';
import { Image } from '../UI';
import { Flex } from 'reflexbox';
import { IUser } from '../../pages/Users/redux/users.interface';
import { Name, Bio, Title, SubTitle, HeaderWrapper, StyledCard } from './UserCard.styles';

export type TProps = {
    userData: IUser;
};
const UserCard: FC<TProps> = ({ userData }) => {
    const {
        avatar_url,
        login,
        html_url,
        details: { company, bio, location },
    } = userData;

    return (
        <StyledCard as="div">
            <Flex as="div" flexDirection="column">
                <HeaderWrapper>
                    <a href={html_url}>
                        <Image radii={50} url={avatar_url} name={login} height="50px" width="50px" />
                    </a>
                    <Name>{login}</Name>
                </HeaderWrapper>
                <Flex flexDirection="column" justifyContent="space-between">
                    <div>
                        <Title>Bio</Title>
                        <Bio>{bio ? bio : '---'}</Bio>
                    </div>
                </Flex>
            </Flex>
            <Flex flexDirection="row" justifyContent="space-between">
                <div>
                    <Title>Company</Title>
                    <SubTitle>{company ? company : '---'}</SubTitle>
                </div>
                <div>
                    <Title>Location</Title>
                    <SubTitle>{location ? location : '---'}</SubTitle>
                </div>
            </Flex>
        </StyledCard>
    );
};

export default UserCard;
