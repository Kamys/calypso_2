import {TEST} from "../EventName";

//TODO: add method API

export const addTest = () => {
    return {type: TEST.ADD_TEST}
};

export const deleteTest = (id) => {
    return {type: TEST.DELETE_TEST, payload: id}
};

export const editTest = (test) => {
    return {type: TEST.EDIT_TEST, payload: test}
};