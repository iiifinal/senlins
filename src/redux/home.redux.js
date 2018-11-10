import axios from 'axios'

// 设置所有数据状态
const   HOME_DATA = 'HOME_DATA'
const   SKILL_DATA = 'SKILL_DATA'

// 设置选择推荐案例状态
const RECOMMEND_NAME = 'RECOMMEND_NAME'

const SKILL_ID = 'SKILL_ID'

// 初始化状态
const initState = {
    homePageData:[],
    skillPageData:[],


    recommendName: 'A',
    selectedSkillId: 'design',

}

export function homeState(state = initState, action) {
    switch (action.type) {
        case HOME_DATA:
            return {...state, homePageData:action.payload}
        case SKILL_DATA:
            return {...state, skillPageData:action.payload}
        case RECOMMEND_NAME:
            return {...state, recommendName: action.payload}
        case  SKILL_ID:
            return {...state, selectedSkillId: action.payload}
        default:
            return state
    }
}



export function recommendSelect(data) {
    return dispatch => {
        dispatch({type: RECOMMEND_NAME, payload: data})
    }
}


export function SelectedSkill(data) {
    return dispatch => {
        dispatch({type: SKILL_ID, payload: data})
    }
}

export function getHomeData() {
    return (dispatch) => {
        axios.get('http://localhost:3000/dataCenter/senlins.json').then(res => {
            dispatch({type: HOME_DATA, payload: res.data.home})
        })
    }
}

export function getSkillData() {
    return (dispatch) => {
        axios.get('http://localhost:3000/dataCenter/senlins.json').then(res => {
            dispatch({type: SKILL_DATA, payload: res.data.skills})
        })
    }
}
