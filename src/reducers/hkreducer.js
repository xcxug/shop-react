let aKeywords = localStorage['hk'] !== undefined ? JSON.parse(localStorage['hk']) : [];
function hkReducer(state = { keywords: aKeywords }, action) {
    switch (action.type) {
        case "addHk":
            return Object.assign({}, state, action.data);
        default:
            return state;
    }
}

export default hkReducer;