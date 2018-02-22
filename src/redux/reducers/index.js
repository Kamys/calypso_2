import { combineReducers } from 'redux';

import registration from './registrationReducer';
import autorisation from './autorisationReducer';
import loading from './loadingReducer';
import testReducer from "./testReducer";

export default combineReducers({
	registration,
    autorisation,
    loading,
    testReducer

});