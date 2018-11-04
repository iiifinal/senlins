// 设置订阅状态
const RECOMMEND_DATA = 'RECOMMEND_DATA'
const SKILL_DATA='SKILL_DATA'
const CASE_DATA='CASE_DATA'
// 初始化状态
const initState = {
    recommendName: '',
    skillName:'',
    selectedCase:''
}

export function homeState(state = initState, action) {
    switch (action.type) {
        case RECOMMEND_DATA:
            return {...state, recommendName: action.payload}
        case  SKILL_DATA:
            return{...state,skillName:action.payload}
        case  CASE_DATA:
            return{...state,selectedCase:action.payload}
        default:
            return state
    }
}

function Success(data) {
    return {type: RECOMMEND_DATA, payload: data}
}

export function TestF(data) {
    return dispatch => {
        dispatch(Success(data))
    }
}

export function Skillchange(data) {
    return dispatch=>{
        dispatch({type:CASE_DATA,payload:data})
    }
}
export function SelectdCase(data) {
    return dispatch=>{
        dispatch({type:SKILL_DATA,payload:data})
    }
}

// export default connect(mapStateToProps)(Item)
