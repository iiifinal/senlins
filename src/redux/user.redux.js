
const LOAD_DATA = 'LOAD_DATA'

const initState={
    users:'',
    url:''
}

export function user(state = initState, action) {
    // console.log(action.type);
    switch (action.type) {
        case LOAD_DATA:
            return {...state, ...action.payload}
        default:
            return state
    }
}

export function TestF() {
    console.log(11111);
}