import * as actionTypes from './actionTypes';
import { getUserData } from '../services';


export const userData = () => {
    return (dispatch) => {
        getUserData(`users/1`)
        .then( (result) => {
            dispatch({
                type: actionTypes.GET_USER_DATA,
                data: result 
            });
        } )
        .catch ( error => {
            console.log(error);
        } );
    }
};