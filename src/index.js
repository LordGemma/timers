import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import configureStore from './store/configureStore';
import * as localStorage from './/store/utility';
import { getAllTimers } from './store/actions/timers';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { CLEAR_STORE } from './store/actions';


const persistedState = localStorage.loadItem('state');
const store = configureStore(persistedState);

store.dispatch({type: CLEAR_STORE});
store.dispatch(getAllTimers());

store.subscribe(throttle(() => {
    localStorage.saveItem('state',
        {
            timers: store.getState().timers,
        });
}, 1000));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
