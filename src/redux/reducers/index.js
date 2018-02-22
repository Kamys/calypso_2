import { combineReducers } from 'redux';

import registration from './registrationReducer';
import autorisation from './autorisationReducer';
import testReducer from "./testReducer";
import teacherPanel from "./teacherPanelReducer";

export default combineReducers({
	registration,
    autorisation,
    testReducer,
    teacherPanel
});