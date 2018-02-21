import EventName from "../EventName";

function initState() {
    return [
        {id: 1, title: "Информатика", description: "Тест по информатики за 2 кус."},
        {id: 2, title: "История", description: "Тест по теме древний рим."},
        {id: 3, title: "Физика", description: "Тест по квантовой теории."},
    ]
}

export default function testReducer(state = initState(), action) {
    if (action.type === EventName.TEST.ADD_TEST) {
        return [...state, action.data];
    } else if (action.type === EventName.TEST.EDIT_TEST) {
        let newTest = action.data;
        let newState = state.filter(test => test.id !== newTest.id);
        return [...newState, newTest].sort((testFirst, testSecond) => testFirst.id - testSecond.id)
    } else if (action.type === EventName.TEST.DELETE_TEST) {
        let removedTestId = action.data;
        let newState = state.filter(test => test.id !== removedTestId);
        return [...newState].sort((testFirst, testSecond) => testFirst.id - testSecond.id)
    }

    return state;
}