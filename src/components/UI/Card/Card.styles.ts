import styled from '@emotion/styled';
import { width, space, border, flexbox, position, height, maxHeight, overflow } from 'styled-system';

export const CardWrapper = styled.section<{ backgroundColor: string; elevation: string }>`
    background-color: ${(props: any) =>
        props.backgroundColor ? props.backgroundColor : props.theme.colors.common.white};
    box-shadow: ${(props: any) => props.theme.elevations[props.elevation]};
    ${border};
    ${width};
    ${height};
    ${space};
    ${flexbox};
    ${position};
    ${maxHeight};
    ${overflow}
`;
