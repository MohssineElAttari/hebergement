import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILED
}
    from './types';
import { API_URLS } from '../config/api.url.config';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

// const onLoginSuccess = (dispatch, user) => {
//     AsyncStorage.setItem('app_token', JSON.stringify(user))
//         .then(() => {
//             dispatch({ type: LOGIN_SUCCESS, user })
//         });
// };

// const onLoginFailed = (dispatch, errorMessage) => {
//     dispatch({ type: LOGIN_FAILED, error: errorMessage })
// };

// const handleResponse = (dispatch, data) => {
//     if (!data.success) {
//         onLoginFailed(dispatch, data.message);
//         console.log(data);
//     } else {
//         onLoginSuccess(dispatch, data.user);
//         console.log(data);
//     }
// }

export const inscriptionUser = ({ codeHebergement, nom, paye, ville, adress, adressMap, responsable, description, logo, telephon, email, password }) => {
    // console.log(`username is : ${username} and password is : ${password}`);
    // return {
    //     type: LOGIN_ATTEMPT
    // }

    return (dispatch) => {
        dispatch({ type: LOGIN_ATTEMPT });

        //Call the back-end API
        //Please do not spam/abuse it so others can use it as well.
        axios.post(API_URLS.INSCRIPTION_URL,
            { codeHebergement, nom, paye, ville, adress, adressMap, responsable, description, logo, telephon, email, password })
            .then(resp => console.log(resp.data))
            .catch(error => console.error(error));

    };
}