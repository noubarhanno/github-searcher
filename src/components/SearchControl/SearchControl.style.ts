import styled from '@emotion/styled';

export const Title = styled.h1`
    ${(props: any) => {
        const {
            theme: { fontSizes, colors, fontWeights },
        } = props;
        return `
            font-size: ${fontSizes[5]}px;
            color: ${colors.common.black};
            font-weight: ${fontWeights[4]};
        `;
    }}
`;

export const SubTitle = styled.p`
    ${(props: any) => {
        const {
            theme: { fontSizes, colors, fontWeights },
        } = props;
        return `
        font-size: ${fontSizes[2]}px;
        color: ${colors.text.dark};
        font-weight: ${fontWeights[4]};
    `;
    }}
`;

export const Error = styled.p`
    ${(props: any) => {
        const {
            theme: { fontSizes, colors, fontWeights },
        } = props;
        return `
            font-size: ${fontSizes[1]}px;
            color: ${colors.error.main};
            font-weight: ${fontWeights[4]};
            margin: 10px;
        `;
    }}
`;
