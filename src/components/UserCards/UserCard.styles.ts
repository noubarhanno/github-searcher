import styled from '@emotion/styled';
import { Flex } from 'reflexbox';
import { Card } from '../UI';

export const Name = styled.h1`
    ${(props: any) => ({
        fontSize: props.theme.fontSizes[2],
        fontWeight: props.theme.fontWeights[4],
        color: props.theme.colors.primary.light,
    })}
`;

export const Link = styled.a`
    ${(props: any) => ({
        textDecoration: 'none',
        fontSize: props.theme.fontSizes[3],
        color: props.theme.colors.primary.light,
    })}
`;

export const Bio = styled.div`
    ${(props: any) => ({
        fontSize: props.theme.fontSizes[2],
        fontWeight: props.theme.fontWeights[3],
        color: props.theme.colors.text.dark,
        margin: `${props.theme.space[3]}px 0px`,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
    })}
`;

export const Title = styled.p`
    ${(props: any) => ({
        fontSize: props.theme.fontSizes[2],
        fontWeight: props.theme.fontWeights[4],
        color: props.theme.colors.common.black,
    })}
`;

export const SubTitle = styled.span`
    ${(props: any) => ({
        fontSize: props.theme.fontSizes[2],
        fontWeight: props.theme.fontWeights[4],
        color: props.theme.colors.text.main,
    })}
`;

export const HeaderWrapper = styled(Flex)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    ${(props: any) => ({
        borderBottom: `1px solid ${props.theme.colors.text.light}`,
        padding: `${props.theme.space[2]}px 0px`,
    })}
`;

export const StyledCard = styled(Card)`
    margin: 10px;
    width: 50%;
    padding: 10px;
    height: 100%;
    min-height: 200px;
    display: flex;
    flex: auto;
    flex-direction: column;
    justify-content: space-between;
    ${(props: any) => ({
        [props.theme.breakpoints[1]]: {
            width: '31%',
        },
    })}
`;
