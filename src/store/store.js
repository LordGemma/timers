import { combineReducers } from 'redux';
import userData from './reducers/userData';
import timers from './reducers/timers';

import { CLEAR_STORE } from './actions';

const reducers = combineReducers({
    userData: userData,
    timers: timers
});

const rootReducer = (state, action) => {
    if (action.type === CLEAR_STORE) {
        state = undefined;
    }
    return reducers(state, action);
};

export default rootReducer;