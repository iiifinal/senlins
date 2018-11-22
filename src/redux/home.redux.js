import axios from 'axios'



const debug = process.env.NODE_ENV !== 'production';
const url = debug ? 'http://localhost:3000/dataCenter/senlins.json' : 'https://www.senlins.com/dataCenter/senlins.json';

// 设置各个页面数据状态
const HOME_DATA = 'HOME_DATA'
const SKILL_DATA = 'SKILL_DATA'
const CASE_DATA = 'CASE_DATA'
const DYNAMIC_DATA = 'DYNAMIC_DATA'
const MEETUS_DATA = 'MEETUS_DATA'
const DETAILCASE_DATA = 'DETAILCASE_DATA'
const ARTICLE_DATA = 'ARTICLE_DATA'

// 设置状态管理
const RECOMMEND_NAME = 'RECOMMEND_NAME'
const SKILL_ID = 'SKILL_ID'
const SELECTCASE_ID = 'SELECTCASE_ID'
const PERSONAL_ID = 'PERSONAL_ID'
const ARTICLE_ID = 'ARTICLE_ID'

// 初始化状态
const initState = {
    homePageData: [],
    skillPageData: [],
    casePageData: [],
    dynamicPageData: [],
    meetusPageData: [],
    detailedCaseData: [],
    articlePageData:[],

    recommendName: 'A',
    selectedSkillId: 'design',
    selectedCaseId: 'case_001',
    articleId:'',
    personalId: '0'

}

export function homeState(state = initState, action) {
    switch (action.type) {
        case HOME_DATA:
            return {...state, homePageData: action.payload}
        case SKILL_DATA:
            return {...state, skillPageData: action.payload}
        case CASE_DATA:
            return {...state, casePageData: action.payload}
        case DYNAMIC_DATA:
            return {...state, dynamicPageData: action.payload}
        case MEETUS_DATA:
            return {...state, meetusPageData: action.payload}
        case DETAILCASE_DATA:
            return {...state, detailedCaseData: action.payload}
        case ARTICLE_DATA:
            return {...state, articlePageData: action.payload}



        case RECOMMEND_NAME:
            return {...state, recommendName: action.payload}
        case  SKILL_ID:
            return {...state, selectedSkillId: action.payload}
        case  SELECTCASE_ID:
            return {...state, selectedCaseId: action.payload}
        case  PERSONAL_ID:
            return {...state, personalId: action.payload}
        case  ARTICLE_ID:
            return {...state, articleId: action.payload}
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

export function SelectedCaseItem(data) {
    return dispatch => {
        dispatch({type: SELECTCASE_ID, payload: data})
    }
}

export function SelectedPersonal(data) {
    return dispatch => {
        dispatch({type: PERSONAL_ID, payload: data})
    }
}


export function SelectedArticle(data) {
    return dispatch => {
        dispatch({type: ARTICLE_ID, payload: data})
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

export function getCaseData() {
    return (dispatch) => {
        axios.get('http://localhost:3000/dataCenter/senlins.json').then(res => {
            dispatch({type: CASE_DATA, payload: res.data.case})
        })
    }
}

export function getDynamicData() {
    return (dispatch) => {
        axios.get('http://localhost:3000/dataCenter/senlins.json').then(res => {
            dispatch({type: DYNAMIC_DATA, payload: res.data.dynamic})
        })
    }
}

export function getTeamData() {
    return (dispatch) => {
        axios.get('http://localhost:3000/dataCenter/senlins.json').then(res => {
            dispatch({type: MEETUS_DATA, payload: res.data.team})
        })
    }
}


export function getDetailedCaseData() {
    return (dispatch) => {
        axios.get('http://localhost:3000/dataCenter/senlins.json').then(res => {
            dispatch({type: DETAILCASE_DATA, payload: res.data.detailed})
        })
    }
}

export function getArticleData() {
    return (dispatch) => {
        axios.get('http://localhost:3000/dataCenter/senlins.json').then(res => {
            dispatch({type: ARTICLE_DATA, payload: res.data.article})
        })
    }
}