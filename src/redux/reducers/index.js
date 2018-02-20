import { combineReducers } from 'redux';

import registration from './registration';
import userAccount from './userAccount';
import loading from './loadingReducer';

export default combineReducers({
	registration,
    userAccount,
    loading

});