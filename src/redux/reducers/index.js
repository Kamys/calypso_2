import { combineReducers } from 'redux';

import registration from './registration';
import userAccount from './userAccount';
import loading from './loadingReducer';
import testReducer from "./testReducer";

export default combineReducers({
	registration,
    userAccount,
    loading,
    testReducer

});