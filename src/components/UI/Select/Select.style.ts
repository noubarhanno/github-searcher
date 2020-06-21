import { space, width } from 'styled-system';
import Card from '../Card';
import styled from '@emotion/styled';
import { animated } from 'react-spring';

export const SelectBox = styled.div<{ open: boolean }>`
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

export const SelectBoxLabel = styled.span`
    color: ${(props: any) => props.theme.colors.text.dark};
    font-size: 14px;
    font-weight: ${(props: any) => props.theme.fontWeights[4]};
    margin-inline-end: 16px;
`;

/**
 * Select Options
 */
Card.defaultProps = { elevation: 2, p: 2, m: 0, as: 'ul' };
export const SelectOptions: any = styled(animated(Card))`
    z-index: 1;
    position: absolute;
    width: 100%;
    max-height: 200px;
    scroll-behavior: auto;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    border: 1px solid ${(props: any) => props.theme.colors.text.light};
    text-align: center;
    &::-webkit-scrollbar {
        height: 6px;
        width: 6px;
    }

    &::-webkit-scrollbar-thumb {
        background: ${(props: any) => props.theme.colors.body.default};
        cursor: grab;
    }

    &::-webkit-scrollbar-track {
        background: 0;
    }
`;

export const SelectOption = styled.li<{ selected: boolean }>`
    color: ${(props: any) => props.theme.colors.text.dark};
    font-weight: ${(props: any) => props.theme.fontWeights[4]};
    padding: ${(props: any) => props.theme.space[2]}px;
    border-radius: 4px;
    cursor: pointer;
    margin: 2px;
    ${(props: any) => {
        const {
            selected,
            theme: { colors },
        } = props;

        if (selected) {
            return `
      color: ${colors.primary.light};
      font-weight: bold;
      background: ${colors.text.light};
    `;
        }
    }}

    &:hover {
        background-color: ${(props: any) => props.theme.colors.text.light};
    }
`;

export const SelectWrapper = styled.div`
    cursor: pointer;
    position: relative;
    display: inline-block;
    ${space};
    ${width};
`;

export const SelectArrow = styled.i`
    ${space}
`;
