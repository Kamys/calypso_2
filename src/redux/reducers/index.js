import { combineReducers } from 'redux';

import registration from './registrationReducer';
import userAccount from './userAccountReducer';
import loading from './loadingReducer';
import testReducer from "./testReducer";

export default combineReducers({
	registration,
    userAccount,
    loading,
    testReducer

});