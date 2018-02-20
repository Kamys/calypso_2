import EventName from "../EventName";


const addTest = (title, description) => dispatch => {
    dispatch({
        type: EventName.TEST.ADD_TEST,
        data: {title, description}
    })
};

const deleteTest = (id) => dispatch => {
    dispatch({type: EventName.TEST.ADD_TEST})
};

export {addTest, deleteTest};