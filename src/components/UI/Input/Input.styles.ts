import styled from '@emotion/styled';
import { space, width } from 'styled-system';

export const InputBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    color: ${(props: any) => props.theme.colors.text.light};
    padding: 10px 12px 9px;
    border-radius: ${(props: any) => props.theme.radii[2]}px;
    border: 1px solid ${(props: any) => props.theme.colors.text.light};
    background: white;
    &::after {
        background: white;
        position: absolute;
        top: 12px;
        left: 8px;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 10px solid #ffffff;
        width: 0;
        height: 0;
    }
`;

export const StyledInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    color: ${(props: any) => props.theme.colors.text.dark};
    font-weight: ${(props: any) => props.theme.fontWeights[4]};
    &::placeholder {
        font-weight: ${(props: any) => props.theme.fontWeights[4]};
        color: ${(props: any) => props.theme.colors.text.main};
    }
`;

export const InputWrpper = styled.div`
    position: relative;
    display: inline-block;
    ${space};
    ${width};
`;
