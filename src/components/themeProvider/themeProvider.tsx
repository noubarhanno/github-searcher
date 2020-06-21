import React from 'react';
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming';

import GlobalStyle from './global';
import theme from '../../theme';

const ThemeProvider: React.FC<any> = ({ children, ...rest }) => (
    <EmotionThemeProvider theme={theme} {...rest}>
        <GlobalStyle />
        {children}
    </EmotionThemeProvider>
);

export default ThemeProvider;
