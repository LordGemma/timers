import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './store';

const configureStore = preloadedState => {
    const logger = createLogger();

    const store = createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunk,
            logger
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./store', () => {
        store.replaceReducer(rootReducer);
        });
    }

    return store;
};

export default configureStore;