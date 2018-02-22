import {AUTORISATION} from "../EventName";

function initState() {
    return {
        isAutorisationSuccessful: false,
        isLoading: true,
    }
}

export default function autorisationReducer(state = initState(), action) {
    switch (action.type) {
        case AUTORISATION.AUTORISATION_REQUEST:
            return {isAutorisationSuccessful: false, isLoading: true};
        case AUTORISATION.AUTORISATION_SUCCESS:
            const {fio:fullName} = action.payload;
            return {isAutorisationSuccessful: true, isLoading: false, fullName};
        case AUTORISATION.AUTORISATION_FAIL:
            return {isAutorisationSuccessful: false, isLoading: false};
    }
    return state;
}