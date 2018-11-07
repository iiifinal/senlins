import React from 'react'
import {Route} from 'react-router-dom'
import { Icon } from 'antd';
import style from './dynamic.css'



function banner() {
    return(
        <div className={style.banner}>
            <div className={style.bannerSet}>
                <div className={style.bannerLeft}>
                    <span>洞察</span>
                    <p>我们学习东西。我们被激怒了。我们想分享。</p>
                </div>
                <div className={style.bannerRight}>
                    <Icon type="down-circle"
                          style={
                              {fontSize: 54,color:'white'}}
                          theme="outlined" />
                </div>
            </div>
        </div>
    )
}

class Article extends React.Component {
    render() {
        return (
            <div className={style.article}>

                <div className={style.articleItem}>
                    <div className={style.articleItemImg}>
                        <img src={require('./img/article-1.jpg')} alt=""/>
                    </div>
                    <div className={style.articleItemText}>
                        <p>规划师和制造者：友好的紧张局势</p>
                        <Icon type="right" theme="outlined"
                              style={
                                  {fontSize: 14,color:'#666666'}}/>
                    </div>
                    <div className={style.articleItemAvatar}>
                        <span className={style.articleItemAvatarName}>腐烂苹果</span>
                        <div className={style.articleItemAvatarImg}>
                            <img src={require('./img/avatar-1.jpg')} alt=""/>
                        </div>
                    </div>
                </div>

                <div className={style.articleItem}>
                    <div className={style.articleItemImg}>
                        <img src={require('./img/article-1.jpg')} alt=""/>
                    </div>
                    <div className={style.articleItemText}>
                        <p>规划师和制造者：友好的紧张局势</p>
                        <Icon type="right" theme="outlined"
                              style={
                                  {fontSize: 14,color:'#666666'}}/>
                    </div>
                    <div className={style.articleItemAvatar}>
                        <span className={style.articleItemAvatarName}>腐烂苹果</span>
                        <div className={style.articleItemAvatarImg}>
                            <img src={require('./img/avatar-1.jpg')} alt=""/>
                        </div>
                    </div>
                </div>

                <div className={style.articleItem}>
                    <div className={style.articleItemImg}>
                        <img src={require('./img/article-1.jpg')} alt=""/>
                    </div>
                    <div className={style.articleItemText}>
                        <p>规划师和制造者：友好的紧张局势</p>
                        <Icon type="right" theme="outlined"
                              style={
                                  {fontSize: 14,color:'#666666'}}/>
                    </div>
                    <div className={style.articleItemAvatar}>
                        <span className={style.articleItemAvatarName}>腐烂苹果</span>
                        <div className={style.articleItemAvatarImg}>
                            <img src={require('./img/avatar-1.jpg')} alt=""/>
                        </div>
                    </div>
                </div>

                <div className={style.articleItem}>
                    <div className={style.articleItemImg}>
                        <img src={require('./img/article-1.jpg')} alt=""/>
                    </div>
                    <div className={style.articleItemText}>
                        <p>规划师和制造者：友好的紧张局势</p>
                        <Icon type="right" theme="outlined"
                              style={
                                  {fontSize: 14,color:'#666666'}}/>
                    </div>
                    <div className={style.articleItemAvatar}>
                        <span className={style.articleItemAvatarName}>腐烂苹果</span>
                        <div className={style.articleItemAvatarImg}>
                            <img src={require('./img/avatar-1.jpg')} alt=""/>
                        </div>
                    </div>
                </div>

                <div className={style.articleItem}>
                    <div className={style.articleItemImg}>
                        <img src={require('./img/article-1.jpg')} alt=""/>
                    </div>
                    <div className={style.articleItemText}>
                        <p>规划师和制造者：友好的紧张局势</p>
                        <Icon type="right" theme="outlined"
                              style={
                                  {fontSize: 14,color:'#666666'}}/>
                    </div>
                    <div className={style.articleItemAvatar}>
                        <span className={style.articleItemAvatarName}>腐烂苹果</span>
                        <div className={style.articleItemAvatarImg}>
                            <img src={require('./img/avatar-1.jpg')} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class Dynamic extends React.Component {
    render() {
        return (
            <div className={style.page}>
                <Route component={banner}></Route>
                <Route component={Article}></Route>
                <div className={style.loadMore}>
                    <Icon type="cloud-download"
                          style={{fontSize: 34,color:'#666666'}}
                          theme="outlined" />
                    <span>加载更多</span>
                </div>
            </div>
        )
    }

}

export default Dynamic