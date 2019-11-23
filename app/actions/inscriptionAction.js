import {
    INSCRIPTION_ATTEMPT,
    INSCRIPTION_SUCCESS,
    INSCRIPTION_FAILED
}
    from './types';
// import RNFetchBlob from 'react-native-fetch-blob'
import FormData from 'form-data'
import { API_URLS } from '../config/api.url.config';
import axios from 'axios';

const onInscriptionSuccess = (dispatch, etat) => {
    dispatch({ type: INSCRIPTION_SUCCESS, etat })
};

const onInscriptionFailed = (dispatch, errorMessage) => {
    dispatch({ type: INSCRIPTION_FAILED, error: errorMessage })
};

const handleResponse = (dispatch, data) => {
    if (data.success == false ) {
        onInscriptionFailed(dispatch, data.message);
        console.log(data);
    } else {
        onInscriptionSuccess(dispatch, data.etat);
        console.log(data);
        console.log(data.etat);

    }
}

export const inscriptionUser = ({ codeHebergement, nom, paye, ville, adress, adressMap, responsable, description, logo, type, telephon, email, password }) => {
    // console.log(`username is : ${username} and password is : ${password}`);
    // return {
    //     type: inscription_ATTEMPT
    // }

    // RNFetchBlob.fetch('POST', API_URLS.INSCRIPTION_URL, {
    //     Authorization: "Bearer access-token",
    //     otherHeader: "foo",
    //     'Content-Type': 'multipart/form-data',
    // }, [
    //     // custom content type
    //     { name: 'image', filename: 'image.png', type: 'image/png', data: logo },
    // ]).then((resp) => {
    //     console.log(resp)
    // }).catch((err) => {
    //     // ...
    // })



    return (dispatch) => {
        dispatch({ type: INSCRIPTION_ATTEMPT });

        //Call the back-end API
        //Please do not spam/abuse it so others can use it as well.
        let data = new FormData();
        data.append('codeHebergement', codeHebergement);
        data.append('nom', nom);
        data.append('paye', paye);
        data.append('ville', ville);
        data.append('adress', adress);
        data.append('adressMap', adressMap);
        data.append('responsable', responsable);
        data.append('description', description);
        data.append('image', logo, logo.name);
        data.append('imageName', type);
        data.append('telephon', telephon);
        data.append('email', email);
        data.append('password', password);
        axios.post(API_URLS.INSCRIPTION_URL,
            data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(resp => handleResponse(dispatch, resp.data))
            .catch(error => console.error(error));



        // RNFetchBlob.fetch('POST', API_URLS.INSCRIPTION_URL, {
        //     Authorization: "Bearer access-token",
        //     otherHeader: "foo",
        //     'Content-Type': 'multipart/form-data',
        // }, [
        //     // custom content type
        //     { nom, paye, ville, adress, name: 'image', filename: 'image.png', type: 'image/png', data: logo },
        // ]).then((resp) => {
        //     console.log(resp)
        // }).catch((err) => {
        //     // ...
        // })
    };


}