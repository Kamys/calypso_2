import { combineReducers } from 'redux';

import registration from './registrationReducer';
import autorisation from './autorisationReducer';
import testReducer from "./testReducer";

export default combineReducers({
	registration,
    autorisation,
    testReducer
});