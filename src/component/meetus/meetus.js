import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {getTeamData,SelectedPersonal} from '../../redux/home.redux'

import style from './meetus.css'
import BGIMG from './img/meetus_bg.jpg'
import TEAM from './img/sea_team.jpg'


@connect(
    state => state.homeState,
    {getTeamData,SelectedPersonal}
)
class TeamList extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        this.props.getTeamData()
    }

    // getTeamData
    selectPersonal = (val) => {
        this.props.SelectedPersonal(val)
        this.props.history.push('./personal')
        window.scrollTo(0, 0)
    }
    selectJoin = () => {
        this.props.history.push('./join')
        window.scrollTo(0, 0)
    }

    render() {
        const data = this.props.meetusPageData
        return (
            <div className={style.teamList}>
                <div className={style.teamListTitle}>
                    <h3>我们自豪地由两个小组组成：规划师和制造者。</h3>
                    <p>剃刀锋利的战略家，研究人员和分析师，与折衷的艺术家和诗人独特地交织在一起。这是一个非常奇怪的混合体，丰富而内在的张力导致了灵感的解决方案。</p>
                </div>
                <div className={style.teamListCon}>

                    {data ? data.map((item, index) =>
                        <div className={style.teamListConItem} key={index}
                             onClick={() => {
                            this.selectPersonal(item.member_id)
                        }}>
                            <img src={require(`${item.member_avatar}`)} alt=""/>
                            <div className={style.teamListConItemText}>
                                <div className={style.teamListConItemTextLeft}>
                                    <span className={style.teamListConItemTextName}>{item.member_name}</span>
                                    <span className={style.teamListConItemTextCareer}>{item.member_position}</span>
                                </div>
                                <div className={style.teamListConItemTextRight}> ></div>
                            </div>
                        </div>) : null}


                    <div className={style.teamListConItem} onClick={() => {
                        this.selectJoin()
                    }}>
                        <div className={style.joinTeam}>
                            <h5>加入我们</h5>
                            <span>查看当前的工作</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


class Meetus extends React.Component {
    render() {
        return (
            <div className={style.meetusPage}>
                <div className={style.meetusHeader}>
                    <div className={style.meetusHeaderSet}>
                        <div className={style.meetusHeaderLeft}>
                            <div className={style.meetusHeaderLeftImg}>
                                <img src={BGIMG} alt=""/>
                            </div>

                        </div>
                        <div className={style.meetusHeaderRight}>

                            <div className={style.meetusHeaderText}>
                                <span>欢迎认识我们</span>
                                <h3>我们是规划师和制造者团队</h3>
                                <p>梦想家，实干家和甜甜圈爱好者。（有些人更喜欢当地种植的水果和蔬菜，但我们很清楚。）</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={style.summary}>
                    <div className={style.summaryLeft}>
                        <h3>森林猫科技有限公司，成立于2018年10月1日，一个提供整体化项目方案的专业研发团队。</h3>
                        <p>
                            我们以人为本，以专业技术为指导方向，快速实现客户的项目从0到1的实现。senlins的团队拥有丰富的开发实战经验，尤其对金融平台、视频直播、数据可视化、社交、o2o商城等项目开发尤为熟悉。

                        </p>
                    </div>
                    <div className={style.summaryRight}>
                        <div className={style.summaryRightTitle}>
                            <p>团队位置照片</p>
                        </div>
                        <div className={style.summaryRightImg}>
                            <img src={require('./img/summary.jpg')} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={style.teamEvery}>
                    <div className={style.teamEveryImg}>
                        <img src={TEAM} alt=""/>
                    </div>

                    <Route component={TeamList}></Route>
                </div>

            </div>
        )
    }

}

export default Meetus