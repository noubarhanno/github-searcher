import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Search from './pages/Search';
import Users from './pages/Users';
import Repos from './pages/Repos';
import configureStore from './store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Flex } from 'reflexbox';

const App: React.FunctionComponent<any> = () => {
    const { store, persistor } = configureStore({});
    const history = createBrowserHistory();
    return (
        <Provider store={store}>
            <Router history={history}>
                <PersistGate persistor={persistor}>
                    <Flex as="main" flex={1} flexDirection="column" padding="40px">
                        <Switch>
                            <Route exact component={Search} path="/" />
                            <Route component={Users} path="/users" />
                            <Route component={Repos} path="/repositories" />
                        </Switch>
                    </Flex>
                </PersistGate>
            </Router>
        </Provider>
    );
};

export default App;
