import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {getDynamicData, SelectedArticle} from '../../redux/home.redux'

import {Icon} from 'antd';
import style from './dynamic.css'


function banner() {
    return (
        <div className={style.banner}>
            <div className={style.bannerSet}>
                <div className={style.bannerLeft}>
                    <span>洞察</span>
                    <p>我们学习东西。我们被激怒了。我们想分享。</p>
                </div>
                <div className={style.bannerRight}>
                    <Icon type="down-circle"
                          style={
                              {fontSize: 54, color: 'white'}}
                          theme="outlined"/>
                </div>
            </div>
        </div>
    )
}


@connect(
    state => state.homeState,
    {getDynamicData, SelectedArticle}
)

class Dynamic extends React.Component {

    componentDidMount() {
        this.props.getDynamicData()
    }

    selectedItem(val) {
        this.props.SelectedArticle(val)
        this.props.history.push('./article')
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className={style.page}>
                <Route component={banner}></Route>
                <div className={style.article}>
                    {this.props.dynamicPageData ? this.props.dynamicPageData.map((item, index) =>
                            <div className={style.articleItem} key={index} onClick={() => {
                                this.selectedItem(item.dynamicItem_id)
                            }}>
                                <div className={style.articleItemImg}>
                                    <img src={require(`${item.dynamicItem_img}`)} alt=""/>
                                </div>
                                <div className={style.articleItemText}>
                                    <p>{item.dynamicItem_text}</p>
                                    <Icon type="right" theme="outlined"
                                          style={
                                              {fontSize: 14, color: '#666666'}}/>
                                </div>
                                <div className={style.articleItemAvatar}>
                                    <span className={style.articleItemAvatarName}>
                                        {item.dynamicItem_name}
                                    </span>
                                    <div className={style.articleItemAvatarImg}>
                                        <img src={require(`${item.dynamicItem_avatar}`)} alt=""/>
                                    </div>
                                </div>
                            </div>) :
                        null}
                </div>

                <div className={style.loadMore}>
                    <Icon type="cloud-download"
                          style={{fontSize: 34, color: '#666666'}}
                          theme="outlined"/>
                    <span>加载更多</span>
                </div>
            </div>
        )
    }

}

export default Dynamic