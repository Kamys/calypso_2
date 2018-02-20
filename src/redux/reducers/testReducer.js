import EventName from "../EventName";

function initState() {
    return [
        {title: "Информатика", description: "Тест по информатики за 2 кус."},
        {title: "История", description: "Тест по теме древний рим."},
        {title: "Физика", description: "Тест по квантовой теории."},
    ]
}

export default function testReducer(state = initState(), action) {
    if (action.type === EventName.TEST.ADD_TEST) {
        return [...state, action.data];
    }
    return state;
}