const LOAD_DATA = 'LOAD_DATA'

const initState = {
    caseName: '',
    url: ''
}

export function user(state = initState, action) {
    switch (action.type) {
        case LOAD_DATA:
            return {...state, caseName:action.payload}
        default:
            return state
    }
}
function Success(data) {
    return{type:LOAD_DATA,payload:data}
}

export function TestF(data) {
    return dispatch => {
        dispatch(Success(data))
    }
}
