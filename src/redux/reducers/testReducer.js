import {TEST} from "../EventName";
import uuidv1 from "uuid/v1";

function initState() {
    const defaultTests = [
        {id: 1, title: "Информатика", description: "Тест по информатики за 2 кус.", createdDate: Date.now() + 1},
        {id: 2, title: "История", description: "Тест по теме древний рим.", createdDate: Date.now() + 2},
        {id: 3, title: "Физика", description: "Тест по квантовой теории.", createdDate: Date.now() + 3},
    ];
    return JSON.parse(localStorage.getItem("tests")) || defaultTests;
}

function createTest() {
    return {id: uuidv1(), title: "Заголовок", description: "Описание", createdDate: Date.now()};
}

export default function testReducer(state = initState(), action) {
    switch (action.type) {
        case TEST.ADD_TEST:
            let newTest1 = createTest();
            return [...state, newTest1];
        case TEST.EDIT_TEST:
            return editTest(state, action);
        case TEST.DELETE_TEST:
            return deleteTest(state, action);
        default:
            return state
    }
}

const deleteTest = (state, action) => {
    let removedTestId = action.payload;
    let removedTestIndex = state.findIndex(test => test.id === removedTestId);
    return [
        ...state.slice(0, removedTestIndex),
        ...state.slice(removedTestIndex + 1)
    ];
};

const editTest = (state, action) => {
    let newTest = action.payload;
    return state.map(test => {
        if (test.id === newTest.id) {
            return newTest;
        }
        return test;
    })
};