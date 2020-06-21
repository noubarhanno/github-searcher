import styled from '@emotion/styled';
import { space } from 'styled-system';

export const ImageWrapper = styled.img<{ height: string | number; width: string | number; radii: number }>`
    ${(props) => ({
        width: props.width,
        height: props.height,
        borderRadius: props.radii,
    })}
    ${space};
`;
