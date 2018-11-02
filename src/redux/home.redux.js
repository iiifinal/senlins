// 设置订阅状态
const LOAD_DATA = 'LOAD_DATA'

// 初始化状态
const initState = {
    caseName: '',

}

export function homeState(state = initState, action) {
    switch (action.type) {
        case LOAD_DATA:
            return {...state, caseName: action.payload}
        default:
            return state
    }
}

function Success(data) {
    return {type: LOAD_DATA, payload: data}
}

export function TestF(data) {
    return dispatch => {
        dispatch(Success(data))
    }
}

export function getItemName(state) {
    return {}

}

// export default connect(mapStateToProps)(Item)
