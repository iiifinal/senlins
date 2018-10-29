import React from 'react'
// import {Carousel, Row, Card, Icon, Rate} from 'antd'

import {connect} from 'react-redux'
import {TestF} from "../../redux/user.redux";
import style from './home.css'
import {Link} from 'react-router-dom'

@connect(
    state => state.user,
    {TestF}
)

// function imgItem(props) {
//     return (
//         <div className={style.ConItem}>
//             <div className={style.title}>
//                 <h5>{props.number}</h5>
//                 <p>
//                     {props.text}
//                 </p>
//             </div>
//             <figure className={style.imgCon}>
//                 <Link to="./item" className={style.imgSetWidth} onClick={this.handleTestF}>
//                     <img src={require('./img/home_item_1.jpg')} alt=""/>
//                 </Link>
//                 <p>独书app，共同分享阅读各自不一样的快乐</p>
//             </figure>
//         </div>
//     )
// }

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            caseName: '1'
        }
        this.handleTestF = this.handleTestF.bind(this)
    }


    handleChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    handleTestF() {
        this.handleChange('caseName', '2')
        this.props.TestF(this.state.caseName)
    }

    render() {
        return (
            <div className={style.content}>

                <div className={style.bgImg}></div>

                <div className={style.cascade}>
                    <h3>森林猫（Senlins）,一个专注项目定制化整体方案解决的企业</h3>
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
                    <div className={style.ConRight}>
                        <div className={style.ConItem}>
                            <div className={style.title}>
                                <h5>A</h5>
                                <p>
                                    独书是一款汇聚当下最优秀最震撼人心的书籍的阅读APP,为你开启文艺社区新旅程。每天推出精选内容,诗歌、文学、艺术、电影、音乐等,带给你精神上的饱满体验！
                                    在这里你不但可以认识书里更为辽阔新奇有趣的世界，还可以找到与你志同道合的小伙伴，与他们一起共同分享彼此阅读的乐趣。
                                </p>
                            </div>
                            <figure className={style.imgCon}>
                                <Link to="./item" className={style.imgSetWidth} onClick={this.handleTestF}
                                      case={'传递成功'}>
                                    <img src={require('./img/home_item_1.jpg')} alt=""/>
                                </Link>
                                <p>独书app，共同分享阅读各自不一样的快乐</p>
                            </figure>
                        </div>
                        <div className={style.ConItem}>
                            <div className={style.title}>
                                <h5>B</h5>
                                <p>
                                    "哦懂了"是一款为广大的学生群体免费提供优质的同步课堂视频的APP，视频内容涵盖了小学初中高中所有科目的所有课程，旨在解决学生预习复习的需求，为普及基础教育做贡献。
                                </p>
                            </div>
                            <figure className={style.imgCon}>
                                <Link to="./item" className={style.imgSetWidth}>
                                    <img src={require('./img/home_item_2.jpg')} alt=""/>
                                </Link>
                                <p>"哦懂了"，你的掌上教学APP</p>
                            </figure>
                        </div>
                        <div className={style.ConItem}>
                            <div className={style.title}>
                                <h5>C</h5>
                                <p>
                                    UI100Days是一款提供给广大的设计师作品浏览与交流互动的轻量级应用，旨在为设计师们短时间内高效地欣赏社区内各个领域优秀的作品，帮助设计师们互动交流，不同的思维碰撞，让彼此的设计水平可以达到快速有效的成长。
                                </p>
                            </div>
                            <figure className={style.imgCon}>
                                <Link to="./item" className={style.imgSetWidth}>
                                    <img src={require('./img/home_item_3.jpg')} alt=""/>
                                </Link>
                                <p>UI100天APP，设计师的交流社区中心</p>
                            </figure>
                        </div>
                    </div>
                </div>


                <div className={style.others}>
                    <div className={style.otherSetWidth}>

                        <h3 className={style.othersTitle}>
                            服务
                        </h3>
                        <article className={style.othersCon}>

                            <div className={style.othersConItem}>
                                <div className={style.othersConItemImg}>
                                    {/*<img src={require('./')} alt=""/>*/}
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

                            <div className={style.othersConItem}>
                                <div className={style.othersConItemImg}>
                                    {/*<img src={require('./')} alt=""/>*/}
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

                            <div className={style.othersConItem}>
                                <div className={style.othersConItemImg}>
                                    {/*<img src={require('./')} alt=""/>*/}
                                </div>
                                <div className={style.othersConItemText}>
                                    <h3>社交内容和参与</h3>
                                    <p>
                                        创意和战略团队共同努力设计美学，声音和路线图，以便在地球上最直接面向消费者的平台上进行交流。 </p>
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
                            设计、数据、流量和资本是驱动商业创新的基础，协调生态圈伙伴关系，为客户带来更大的商业价值
                        </h3>
                        <div className={style.stepItemCon}>
                            <div className={style.stepItem}></div>
                            <div className={style.stepItem}></div>
                            <div className={style.stepItem}></div>
                            <div className={style.stepItem}></div>
                        </div>
                        <p className={style.moreCase}>了解我们更多案例 ></p>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home