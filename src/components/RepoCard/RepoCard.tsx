import React, { FC } from 'react';
import { Flex } from 'reflexbox';
import { Bio, Title, SubTitle, HeaderWrapper, StyledCard, Link, Badge } from './RepoCard.styled';
import { IRepo } from 'pages/Repos/redux/repos.interface';

export type TProps = {
    userData: IRepo;
};
const RepoCard: FC<TProps> = ({ userData }) => {
    const { full_name, html_url, description, stargazers_count, owner, language } = userData;

    return (
        <StyledCard as="div" testid="repo-card">
            <Flex as="div" flexDirection="column">
                <HeaderWrapper>
                    <Link href={html_url} target="_blank">
                        {full_name}
                    </Link>
                </HeaderWrapper>
                <Flex flexDirection="column" justifyContent="space-between">
                    <div>
                        <Title>Description</Title>
                        <Bio>{description ? description : '---'}</Bio>
                    </div>
                </Flex>
            </Flex>
            <Flex as="div" flexDirection="row" justifyContent="space-between">
                <div>
                    <Title>
                        Stars: <SubTitle>{stargazers_count ? ` ${stargazers_count}` : '---'}</SubTitle>
                    </Title>
                </div>
                <div>
                    <Link href={owner.html_url || '/'}>
                        Author: <SubTitle>{owner && owner.login ? ` ${owner.login}` : '---'}</SubTitle>
                    </Link>
                </div>
            </Flex>
            <Flex marginTop="10px">{language && <Badge data-testid="language-badge">{language}</Badge>}</Flex>
        </StyledCard>
    );
};

export default RepoCard;
