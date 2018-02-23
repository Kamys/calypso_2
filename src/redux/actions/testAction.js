import {TEST} from "../EventName";

//TODO: add method API

const addTest = () => {
    return {type: TEST.ADD_TEST}
};

const deleteTest = (id) => {
    return {type: TEST.DELETE_TEST, payload: id}
};

const editTest = (test) => {
    return {type: TEST.EDIT_TEST, payload: test}
};

export {addTest, deleteTest, editTest};