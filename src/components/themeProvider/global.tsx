import React from 'react';
import { Global, css } from '@emotion/core';
import emotionNormalize from 'emotion-normalize';

const GlobalStyles: React.FC = () => (
    <Global
        styles={css`
            ${emotionNormalize}

            html {
                box-sizing: border-box;
            }

            body {
                color: #ffffff;
                font-family: 'Roboto', sans-serif;
                font-size: 14px;
                font-weight: normal;
                line-height: 1.3;
                -webkit-font-smoothing: antialiased;
                background-color: #e4e4e4;
            }

            *,
            *:before,
            *:after {
                box-sizing: inherit;
            }

            h1,
            h2,
            h3,
            h4,
            h5,
            h6,
            a,
            p,
            ol,
            ul {
                margin: 0;
                padding: 0;
                font-weight: 400;
            }

            #root {
                height: 100vh;
            }
            main {
                height: 100%;
                width: 100%;
            }
        `}
    />
);

export default GlobalStyles;
