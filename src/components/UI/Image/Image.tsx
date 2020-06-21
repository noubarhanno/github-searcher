import React from 'react';
import { ImageWrapper } from './Image.styles';
import { SpaceProps } from 'styled-system';

export type IProps = {
    url: string;
    name: string;
    height?: string | number;
    width?: string | number;
    testId?: string;
    radii?: number;
    onErrorCb?: () => void;
} & SpaceProps;

const Image: React.FunctionComponent<IProps> = ({
    url,
    name,
    height = 'auto',
    width = '100%',
    testId,
    radii = 5,
    onErrorCb,
    ...rest
}) => {
    return (
        <ImageWrapper
            radii={radii}
            height={height}
            width={width}
            src={url}
            alt={name}
            onError={onErrorCb}
            data-testid={testId}
            {...rest}
        />
    );
};

export default Image;
