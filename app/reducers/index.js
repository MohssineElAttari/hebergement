import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import InscriptionReducer from './InscriptionReducer';
export default combineReducers({
    auth: AuthReducer,
    insc: InscriptionReducer,
});