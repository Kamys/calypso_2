import EventName from "../EventName";

//TODO: add method API

const addTest = () => dispatch => {
    dispatch({type: EventName.TEST.ADD_TEST})
};

const deleteTest = (id) => dispatch => {
    dispatch({type: EventName.TEST.DELETE_TEST, data: id})
};

const editTest = (test) => dispatch => {
    dispatch({type: EventName.TEST.EDIT_TEST, data: test})
};

export {addTest, deleteTest, editTest};