import {TEST} from "../EventName";

//TODO: add method API

const addTest = () => dispatch => {
    dispatch({type: TEST.ADD_TEST})
};

const deleteTest = (id) => dispatch => {
    dispatch({type: TEST.DELETE_TEST, data: id})
};

const editTest = (test) => dispatch => {
    dispatch({type: TEST.EDIT_TEST, data: test})
};

export {addTest, deleteTest, editTest};