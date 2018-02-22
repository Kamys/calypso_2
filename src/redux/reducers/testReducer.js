import {TEST} from "../EventName";
import uuidv1 from "uuid/v1";

function initState() {
    const defaultTests = [
        {id: 1, title: "Информатика", description: "Тест по информатики за 2 кус."},
        {id: 2, title: "История", description: "Тест по теме древний рим."},
        {id: 3, title: "Физика", description: "Тест по квантовой теории."},
    ];

    return JSON.parse(localStorage.getItem("tests")) || defaultTests;
}

function saveInStore(newState) {
    localStorage.setItem("tests", JSON.stringify(newState));
}

export default function testReducer(state = initState(), action) {
    if (action.type === TEST.ADD_TEST) {
        let newState = [...state, {id: uuidv1(), title: "Заголовок", description: "Описание"}];
        saveInStore(newState);
        return newState;
    } else if (action.type === TEST.EDIT_TEST) {
        let newTest = action.data;
        let filterState = state.filter(test => test.id !== newTest.id);
        let newState = [...filterState, newTest].sort((testFirst, testSecond) => testFirst.id - testSecond.id);
        saveInStore(newState);
        return newState;

    } else if (action.type === TEST.DELETE_TEST) {
        let removedTestId = action.data;
        let filterState = state.filter(test => test.id !== removedTestId);
        let newState = [...filterState].sort((testFirst, testSecond) => testFirst.id - testSecond.id);
        saveInStore(newState);
        return newState;
    }

    return state;
}