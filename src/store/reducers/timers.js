import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility.js';

const initialState = [];

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case actionTypes.GET_ALL_TIMERS:
            return [...state, ...action.data];
    }
    return state;
};

export default reducer;