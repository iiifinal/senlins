import React from 'react'
import {Route} from 'react-router-dom'
import {Tabs} from 'antd';
import style from './case.css'
import {connect} from 'react-redux'
import {SelectdCase} from '../../redux/home.redux'





function caseTitle() {
    return (
        <div className={style.caseListTitle}>
            <h3>最近的工作</h3>
            <p>超过10亿用户，在使用我们设计的产品与服务100+合作伙伴，100+项目案例，80%项目落地</p>
        </div>
    )
}



@connect(
    state => state.homeState,
    {SelectdCase}
)

class caseList extends React.Component{
    constructor(props){
        super(props)
    }
    selectCaseItem(val){
        this.props.SelectdCase(val)
        this.props.history.push('./detailedCase')
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div className={style.caseListCon}>

                <div className={style.caseListConItem}>
                    <div className={style.caseListConItemImg}>
                        <img src={require('./img/app_1.jpg')} alt=""/>
                    </div>
                    <div className={style.caseListConItemText} onClick={() => {this.selectCaseItem('独书')}}>
                        <div className={style.caseListConItemTextSetBg}>
                            <h5>阅读类</h5>
                            <span >独书APP ></span>
                            <p>汇聚当下最优秀最震撼人心的书籍阅读社区</p>
                        </div>
                    </div>
                </div>

                <div className={style.caseListConItem}>
                    <div className={style.caseListConItemImg}>
                        <img src={require('./img/app_1.jpg')} alt=""/>
                    </div>
                    <div className={style.caseListConItemText} onClick={() => {this.selectCaseItem('我懂了')}}>
                        <div className={style.caseListConItemTextSetBg}>
                            <h5>教育类分享</h5>
                            <span>我懂了APP ></span>
                            <p>汇聚当下最优秀最震撼人心的书籍阅读社区</p>
                        </div>
                    </div>
                </div>

                <div className={style.caseListConItem}>
                    <div className={style.caseListConItemImg}>
                        <img src={require('./img/app_1.jpg')} alt=""/>
                    </div>
                    <div className={style.caseListConItemText} onClick={() => {this.selectCaseItem('UI100')}}>
                        <div className={style.caseListConItemTextSetBg}>
                            <h5>社交平台</h5>
                            <span >UI100></span>
                            <p>汇聚当下最优秀最震撼人心的书籍阅读社区</p>
                        </div>
                    </div>
                </div>


                <div className={style.caseListConItem}>
                    <div className={style.caseListConItemImg}>
                        <img src={require('./img/app_1.jpg')} alt=""/>
                    </div>
                    <div className={style.caseListConItemText} onClick={() => {this.selectCaseItem('独书')}}>
                        <div className={style.caseListConItemTextSetBg}>
                            <h5>阅读类</h5>
                            <span >独书APP ></span>
                            <p>汇聚当下最优秀最震撼人心的书籍阅读社区</p>
                        </div>
                    </div>
                </div>

                <div className={style.caseListConItem}>
                    <div className={style.caseListConItemImg}>
                        <img src={require('./img/app_1.jpg')} alt=""/>
                    </div>
                    <div className={style.caseListConItemText} onClick={() => {this.selectCaseItem('我懂了')}}>
                        <div className={style.caseListConItemTextSetBg}>
                            <h5>教育类分享</h5>
                            <span>我懂了APP ></span>
                            <p>汇聚当下最优秀最震撼人心的书籍阅读社区</p>
                        </div>
                    </div>
                </div>

                <div className={style.caseListConItem}>
                    <div className={style.caseListConItemImg}>
                        <img src={require('./img/app_1.jpg')} alt=""/>
                    </div>
                    <div className={style.caseListConItemText} onClick={() => {this.selectCaseItem('UI100')}}>
                        <div className={style.caseListConItemTextSetBg}>
                            <h5>社交平台</h5>
                            <span >UI100></span>
                            <p>汇聚当下最优秀最震撼人心的书籍阅读社区</p>
                        </div>
                    </div>
                </div>


                <div className={style.caseListConItem}>
                    <div className={style.caseListConItemImg}>
                        <img src={require('./img/app_1.jpg')} alt=""/>
                    </div>
                    <div className={style.caseListConItemText} onClick={() => {this.selectCaseItem('独书')}}>
                        <div className={style.caseListConItemTextSetBg}>
                            <h5>阅读类</h5>
                            <span >独书APP ></span>
                            <p>汇聚当下最优秀最震撼人心的书籍阅读社区</p>
                        </div>
                    </div>
                </div>

                <div className={style.caseListConItem}>
                    <div className={style.caseListConItemImg}>
                        <img src={require('./img/app_1.jpg')} alt=""/>
                    </div>
                    <div className={style.caseListConItemText} onClick={() => {this.selectCaseItem('我懂了')}}>
                        <div className={style.caseListConItemTextSetBg}>
                            <h5>教育类分享</h5>
                            <span>我懂了APP ></span>
                            <p>汇聚当下最优秀最震撼人心的书籍阅读社区</p>
                        </div>
                    </div>
                </div>

                <div className={style.caseListConItem}>
                    <div className={style.caseListConItemImg}>
                        <img src={require('./img/app_1.jpg')} alt=""/>
                    </div>
                    <div className={style.caseListConItemText} onClick={() => {this.selectCaseItem('UI100')}}>
                        <div className={style.caseListConItemTextSetBg}>
                            <h5>社交平台</h5>
                            <span >UI100></span>
                            <p>汇聚当下最优秀最震撼人心的书籍阅读社区</p>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

@connect(
    state => state.homeState,
    {SelectdCase}
)
class Process extends React.Component {
   constructor(props){
       super(props)
   }
    selectProcessItem(val){
        this.props.SelectdCase(val)
        this.props.history.push('./detailedCase')
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div>
                <div className={style.workProcess}>
                    <div className={style.workProcessLeft}>
                        <img src={require('./img/DetailedCase_1.jpg')} alt=""/>
                    </div>
                    <div className={style.workProcessRight}>
                        <h3>德雷塞尔大学网站</h3>
                        <p>通过高度可共享的视频内容建立品牌知名度</p>
                        <p>德雷塞尔大学是一所私立研究型大学，在费城和萨克拉门托设有校区。当地萨克拉门托机构Misfit要求Bukwild与他们合作，创建一个数字宣传活动，旨在利用鼓舞人心的校友故事招募新生。</p>
                        <span onClick={() => {this.selectProcessItem('独书')}}>GO IT !</span>
                    </div>
                </div>
                <div className={style.detailedCase}>
                    <div className={style.detailedCaseLeft}>
                        <h3>百年杯网站</h3>
                        <p className={style.detailedCaseLeftSubtitle}>
                            面向目标的战略，设计和发展为世界上最受欢迎的运动。
                        </p>
                        <p className={style.detailedCaseLeftText}>
                            COPA是由美国足球和CONCACAF（两个国际足联赞助的国际职业足球组织）组成的合作实体，以促进世界上最大的足球锦标赛之一。
                        </p>
                        <span onClick={() => {this.selectProcessItem('独书')}}>GO IT !</span>

                    </div>
                    <div className={style.detailedCaseRight}>
                        <img src={require('./img/DetailedCase_2.jpg')} alt=""/>
                    </div>
                </div>
            </div>
        )
    }
}



class Case extends React.Component {
    constructor(props) {
        super(props)
        this.state = {visible: false};
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };


    render() {
        return (
            <div className={style.caseContent}>
                <div className={style.caseConSetWidth}>
                    <div className={style.FirstCase}>
                        <div className={style.FirstCaseLeft}>
                            <span>HELLO</span>
                            <h3>我是森林猫</h3>
                            <h5>一个专注于品牌项目实现的推动者。</h5>
                            <p> HIRE ME</p>
                        </div>
                        <div className={style.FirstCaseRight}>
                        </div>
                    </div>
                    <div className={style.Cooperation}>
                        <div>合作品牌1</div>
                        <div>合作品牌1</div>
                        <div>合作品牌1</div>
                        <div>合作品牌1</div>
                    </div>
                </div>
                <div className={style.caseList}>
                    <Route component={caseTitle}></Route>
                    <Route component={caseList}></Route>

                </div>

                {/*<Route component={Process}></Route>*/}



            </div>
        )
    }

}

export default Case