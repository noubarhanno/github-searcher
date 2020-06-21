import { applyMiddleware, compose, createStore, StoreEnhancer } from 'redux';
import apiMiddleware from './middleware/api.middleware';
import rootReducer from './reducers';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore } from 'redux-persist';

/**
 *
 * @param initialState to be changed later to proper state types
 */
export default function configureStore(initialState: any) {
    const middlewares = [apiMiddleware, reduxThunk];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const storeEnhancers = [middlewareEnhancer];
    if (process.env.NODE_ENV === 'development') {
        storeEnhancers.push(composeWithDevTools());
    }
    const composedEnhancers = compose(...storeEnhancers);

    const store = createStore(rootReducer, initialState, composedEnhancers as StoreEnhancer);
    const persistor = persistStore(store);

    return { store, persistor };
}
