import EventName from "../EventName";


const addTest = (title, description) => dispatch => {
    dispatch({
        type: EventName.TEST.ADD_TEST,
        data: {title, description}
    })
};

const deleteTest = (id) => dispatch => {
    dispatch({type: EventName.TEST.DELETE_TEST, data: id})
};

const editTest = (test) => dispatch => {
    dispatch({type: EventName.TEST.EDIT_TEST, data: test})
};

export {addTest, deleteTest, editTest};