import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import api from './api.reducers';
import params from 'components/SearchControl/redux/reducers';
import users from 'pages/Users/redux/users.reducers';
import repositories from 'pages/Repos/redux/repos.reducers';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['users', 'repositories'],
};

const rootReducer = combineReducers({
    api,
    params,
    users,
    repositories,
});

export default persistReducer(persistConfig, rootReducer) as any;
