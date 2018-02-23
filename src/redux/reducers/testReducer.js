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

function sortByCreateDataTest(tests) {
    return tests.sort((testFirst, testSecond) => testFirst.createdDate - testSecond.createdDate);
}

export default function testReducer(state = initState(), action) {
    switch (action.type){
        case TEST.ADD_TEST:
            let newTest1 = createTest();
            //saveInStore(newState);
            return [...state, newTest1];
        case TEST.EDIT_TEST:
            let newTest = action.payload;
            let filterState1 = state.filter(test => test.id !== newTest.id);
            return sortByCreateDataTest([...filterState1, newTest]);
        case TEST.DELETE_TEST:
            let removedTestId = action.payload;
            let filterState = state.filter(test => test.id !== removedTestId);
            return sortByCreateDataTest(filterState);
        default:
            return state
    }
}