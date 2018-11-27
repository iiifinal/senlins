import React from 'react'
// import {Carousel, Row, Card, Icon, Rate} from 'antd'

import style from './home.css'
import {connect} from 'react-redux'
import {getHomeData,recommendSelect, SelectedSkill} from "../../redux/home.redux";


@connect(
    state => ({}),
    {recommendSelect}
)
class ThreeCases extends React.Component {

    selectedItem(value) {
        this.props.recommendSelect(value)
        this.props.history.push('./recommend')
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className={style.ConRight}>
                {this.props.caseList ? this.props.caseList.map((item) => {
                    return (
                        <div className={style.ConItem} key={item.sequence}>
                            <div className={style.title}>
                                <h5>{item.sequence}</h5>
                                <p>
                                    {item.detailed}
                                </p>
                            </div>
                            <figure className={style.imgCon}>
                                <div className={style.imgSetWidth}>
                                    <img src={require(`${item.imgUrl}`)} alt="" onClick={() => {
                                        this.selectedItem(item.sequence)
                                    }}/>
                                </div>
                                <p>{item.brief}</p>
                            </figure>
                        </div>)
                }) : null}
            </div>
        )
    }
}

@connect(
    state => state.homeState,
    {SelectedSkill,getHomeData}
)
class Home extends React.Component {

    componentDidMount(){
        this.props.getHomeData()

    }

    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }


    handleSkill(val) {
        this.props.SelectedSkill(val)
        this.props.history.push('./skill')
        window.scrollTo(0, 0)
    }

    handleCase() {
        this.props.history.push('/case')
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className={style.content}>

                <div className={style.bgImg}></div>

                <div className={style.cascade}>
                    <h3>森林猫（SENLINS）,专注于项目定制化整体方案的企业团队</h3>
                    <p>
                        SENLINS遵循着"产品是商业价值的核心容器"的观念，通过定制化研究，快速定义产品策略和方向。
                    </p>
                    <p>
                        SENLINS从商业诉求，行业动态，用户体验等多个维度思考，基于产品的核心需求与优势基因，打造有特色，可落地的创新产品。
                    </p>
                    <p>
                        SENLINS将帮助客户从0到1实现构建产品的商业模式，规划产品成长路径，协助培养客户团队创新能力，快速推动产品实现落地。
                    </p>
                </div>

                <div className={style.section}>
                    <div className={style.ConLeft}>
                        <div>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                        </div>
                    </div>
                    {this.props.homePageData ?
                        <ThreeCases caseList={this.props.homePageData} history={this.props.history}></ThreeCases>:null
                    }
                </div>


                <div className={style.others}>
                    <div className={style.otherSetWidth}>

                        <h3 className={style.othersTitle}>
                            服务
                        </h3>
                        <article className={style.othersCon}>

                            <div className={style.othersConItem} onClick={() => {
                                this.handleSkill('design')
                            }}>
                                <div className={style.othersConItemImg}>
                                    <img src={require('./img/design.png')} alt=""/>
                                </div>
                                <div className={style.othersConItemText}>
                                    <h3>设计与用户体验</h3>
                                    <p>
                                        通过数字艺术和战略内容架构创建的基于研究和魔术的用户旅程。 </p>
                                    <div className={style.othersConItemStore}>
                                        <span>阅读 ></span>
                                    </div>
                                </div>
                            </div>

                            <div className={style.othersConItem} onClick={() => {
                                this.handleSkill('tech')
                            }}>
                                <div className={style.othersConItemImg}>
                                    <img src={require('./img/tech.png')} alt=""/>
                                </div>
                                <div className={style.othersConItemText}>
                                    <h3>技术开发</h3>
                                    <p>
                                        丰富，身临其境，响应迅速的开发解决方案，植根于通信和转换。 </p>
                                    <div className={style.othersConItemStore}>
                                        <span>阅读 ></span>
                                    </div>
                                </div>
                            </div>

                            <div className={style.othersConItem} onClick={() => {
                                this.handleSkill('social')
                            }}>
                                <div className={style.othersConItemImg}>
                                    <img src={require('./img/social.png')} alt=""/>
                                </div>
                                <div className={style.othersConItemText}>
                                    <h3>社交互动参与</h3>
                                    <p>
                                        创意和战略团队共同努力设计体验美学，直接面向消费者的平台上进行交流。</p>
                                    <div className={style.othersConItemStore}>
                                        <span>阅读 ></span>
                                    </div>
                                </div>
                            </div>

                            <div className={style.othersConItem} onClick={() => {
                                this.handleSkill('holistic')
                            }}>
                                <div className={style.othersConItemImg}>
                                    <img src={require('./img/holistic.png')} alt=""/>
                                </div>
                                <div className={style.othersConItemText}>
                                    <h3>整体数字战略</h3>
                                    <p>
                                        规划，生产，资产，工具，数据驱动的见解以及超越发布的合作伙伴关系的结合。 </p>
                                    <div className={style.othersConItemStore}>
                                        <span>阅读 ></span>
                                    </div>
                                </div>
                            </div>


                        </article>
                    </div>
                </div>

                <div className={style.step}>
                    <div className={style.stepSetWidth}>
                        <h3 className={style.stepTitle}>
                            驱动商业创新的基础，不仅仅项目的实现过程，更重要的是协调生态圈伙伴关系，彼此携手共进
                        </h3>
                        <div className={style.stepItemCon}>
                            <div className={style.stepItem}>
                                <h5>了解</h5>
                                <p>360度了解分析企业与行业的背景</p>
                            </div>
                            <div className={style.stepItem}>
                                <h5>探索</h5>
                                <p>结合用户洞察与商业目标挖掘可塑点</p>
                            </div>
                            <div className={style.stepItem}>
                                <h5>战略</h5>
                                <p>制定企业发展的目标规划</p>
                            </div>
                            <div className={style.stepItem}>
                                <h5>执行</h5>
                                <p>推进企业解决方案与创新概念</p>
                            </div>
                        </div>
                        <p className={style.moreCase} onClick={() => {
                            this.handleCase()
                        }}>了解我们更多案例 ></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home