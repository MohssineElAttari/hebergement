import {
    INSCRIPTION_ATTEMPT,
    INSCRIPTION_SUCCESS,
    INSCRIPTION_FAILED
}
    from './types';
import { API_URLS } from '../config/api.url.config';
import axios from 'axios';

const onInscriptionSuccess = (dispatch, etat) => {
    dispatch({ type: INSCRIPTION_SUCCESS, etat })
};

const onInscriptionFailed = (dispatch, errorMessage) => {
    dispatch({ type: INSCRIPTION_FAILED, error: errorMessage })
};

const handleResponse = (dispatch, data) => {
    if (!data.success) {
        onInscriptionFailed(dispatch, data.message);
        console.log(data);
    } else {
        onInscriptionSuccess(dispatch, data.etat);
        console.log(data);
    }
}

export const inscriptionUser = ({ codeHebergement, nom, paye, ville, adress, adressMap, responsable, description, logo, telephon, email, password }) => {
    // console.log(`username is : ${username} and password is : ${password}`);
    // return {
    //     type: inscription_ATTEMPT
    // }

    return (dispatch) => {
        dispatch({ type: INSCRIPTION_ATTEMPT });

        //Call the back-end API
        //Please do not spam/abuse it so others can use it as well.
        axios.post(API_URLS.INSCRIPTION_URL,
            { codeHebergement, nom, paye, ville, adress, adressMap, responsable, description, logo, telephon, email, password })
            .then(resp => handleResponse(dispatch, resp.data))
            .catch(error => console.error(error));

    };
}