import {
    INSCRIPTION_ATTEMPT,
    INSCRIPTION_SUCCESS,
    INSCRIPTION_FAILED
} from '../actions/types';

const INITIAL_STATE = { etat: null, loading: false, error: '' }
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INSCRIPTION_ATTEMPT:
            return { ...state, loading: true }
        case INSCRIPTION_FAILED:
            return { ...INITIAL_STATE, loading: false, error: action.error }
        case INSCRIPTION_SUCCESS:
            return { ...INITIAL_STATE, loading: false, etat: action.etat }
        default:
            return state;
    }
}