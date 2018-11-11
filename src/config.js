import axios from 'axios'
// import {Spin} from 'antd'

// 拦截请求
axios.interceptors.request.use(function (config) {
    // Spin.loading()
    return config
})

// 拦截响应
axios.interceptors.response.use(function (config) {
    // Spin.hide()
    return config
})