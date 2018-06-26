import * as actionTypes from './actionTypes';
import { getTimers } from '../services';

export const getAllTimers = () => {
    return (dispatch) => {
        getTimers(`timers`)
        .then( (result) => {
            dispatch({
                type: actionTypes.GET_ALL_TIMERS,
                data: result 
            });
        } )
        .catch ( error => {
            console.log(error);
        } );
    }
};