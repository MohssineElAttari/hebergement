import {
    LOGIN_ATTEMPT,
    LOGIN_SUCCESS,
    LOGIN_FAILED
} from './types';
export const loginUser = ({ username, password }) => {
    console.log(`username is : ${username} and password is : ${password}`);
    return {
        type: LOGIN_ATTEMPT
    }
}