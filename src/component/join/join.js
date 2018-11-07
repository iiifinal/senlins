import React from 'react'
import { Icon } from 'antd';
import {Route} from 'react-router-dom'
import style from './join.css'


function JoinBanner() {
    return (
        <div className={style.joinBanner}>
            <div className={style.joinBannerCon}>
                <h3>招聘</h3>
                <p>我们是一群紧密团结的行动者，他们以大思维茁壮成长，享受数字化的所有事物。准备迎接挑战了吗？看看下面的机会。</p>
            </div>
        </div>
    )
}

function JoinReason() {
    return (
        <div className={style.joinReason}>
            <div className={style.joinReasonTitle}>
                <h5>有很多理由在这里工作</h5>
                <p>我们要求我们的团队列举一些......</p>
            </div>
            <div className={style.joinReasonCon}>

                <div className={style.joinReasonConItem}>
                    <div className={style.joinReasonConItemText}>
                        <p>BKWLD真正体现了“两个人比一个人好”的谚语。每个团队成员都有发言权。项目由我见过的一些最有才华的人共同赢得和完成。</p>
                    </div>
                </div>

                <div className={style.joinReasonConItem}>
                    <div className={style.joinReasonConItemText}>
                        <p>BKWLD真正体现了“两个人比一个人好”的谚语。每个团队成员都有发言权。项目由我见过的一些最有才华的人共同赢得和完成。</p>
                    </div>
                </div>

                <div className={style.joinReasonConItem}>
                    <div className={style.joinReasonConItemText}>
                        <p>BKWLD真正体现了“两个人比一个人好”的谚语。每个团队成员都有发言权。项目由我见过的一些最有才华的人共同赢得和完成。</p>
                    </div>
                </div>

                <div className={style.joinReasonConItem}>
                    <div className={style.joinReasonConItemText}>
                        <p>BKWLD真正体现了“两个人比一个人好”的谚语。每个团队成员都有发言权。项目由我见过的一些最有才华的人共同赢得和完成。</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function JoinPosition() {
    return(
        <div className={style.joinPosition}>
            <div className={style.joinPositionTitle}>
                <h3>目前职位</h3>
            </div>
            <div className={style.joinPositionCon}>
                <div className={style.joinPositionConSet}>
                    <div className={style.joinPositionConItem}>
                        <span>高级UI/UE交互设计师</span>
                        <Icon type="arrow-right" theme="outlined" />
                    </div>
                    <div className={style.joinPositionConItem}>
                        <span>前端工程师</span>
                        <Icon type="arrow-right" theme="outlined" />
                    </div>
                    <div className={style.joinPositionConItem}>
                        <span>PHP后端工程师</span>
                        <Icon type="arrow-right" theme="outlined" />
                    </div>
                    <div className={style.joinPositionConItem}>
                        <span>项目管理</span>
                        <Icon type="arrow-right" theme="outlined" />
                    </div>
                    <div className={style.joinPositionConItem}>
                        <span>业务经理</span>
                        <Icon type="arrow-right" theme="outlined" />
                    </div>
                </div>

            </div>
        </div>
    )
}

class Join extends React.Component {
    render() {
        return (
            <div className={style.page}>
                <Route component={JoinBanner}></Route>
                <Route component={JoinReason}></Route>
                <Route component={JoinPosition}></Route>
            </div>
        )
    }

}

export default Join