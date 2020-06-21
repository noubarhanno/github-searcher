import React from 'react';
import { render, RenderOptions } from '@testing-library/react';
import ThemeProvider from 'components/themeProvider';
import { Provider } from 'react-redux';
import createMockStore from 'redux-mock-store';
import initialAppState from 'store/initialState';
import thunk from 'redux-thunk';

const AllTheProviders: React.FC = (props) => <ThemeProvider includeReset={false} {...props} />;

const customRender = (ui: React.ReactElement, options?: RenderOptions) => {
    return render(ui, { wrapper: AllTheProviders, ...options });
};

const renderWithRedux = (component: React.ReactNode, storeState = {}): any => {
    const getStore = createMockStore([thunk]);
    const store = getStore({ ...initialAppState, ...storeState });
    return {
        ...customRender(
            <Provider store={store}>
                <ThemeProvider includeReset={false}>{component}</ThemeProvider>
            </Provider>,
        ),
        store,
    };
};

/**
 * This method creates a mock store for testing purposes
 * @param state : any redux state
 */
export const getMockStore = (state?: any) => {
    const mockStore = createMockStore([thunk]);
    return mockStore({ ...initialAppState, ...state });
};

export * from '@testing-library/react';
export { customRender as render, renderWithRedux };
