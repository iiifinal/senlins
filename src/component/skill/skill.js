import React from 'react'
import {Route} from 'react-router-dom'
import {Carousel} from 'antd'
import style from './skill.css'
import {connect} from 'react-redux'


function carouselItem() {
    return (
        <div>
            <Carousel className={style.carouselList}>
                <div className={style.carouselItem}>
                    <div className={style.carouselItemTitle}>
                        <h3>设计和用户体验</h3>
                        <p>通过数字艺术和战略内容架构创建的基于研究和魔术的用户旅程。</p>
                    </div>
                    <div className={style.carouselItemImg}>
                        <img src={require('./skill-1.png')} alt=""/>
                    </div>
                </div>
            </Carousel>
        </div>

    )
}

function textContent() {
    return (
        <div className={style.textContent}>
            <h3 className={style.textContentTitle}>
                与您的想法相反，“设计”不仅仅是我们制作它的过程。它实际上是由数据，事实和经验驱动的数百个审美决策的结果
            </h3>
            <div className={style.textContentText}>
                <div className={style.textContentTextItem}>
                    <h5>
                        创意战略，方向和概念
                    </h5>
                    <p>
                        我们的创意是由表达和创新驱动的。通过真实和情感的区分与用户建立联系对于我们的流程同样重要，因为需要为客户带来新的更好的体验。
                    </p>
                </div>

                <div className={style.textContentTextItem}>
                    <h5>
                        用户体验UX
                    </h5>
                    <p>
                        规划用户的体验是试验和错误。我们必须计划，原型，失败和迭代。您应该期望我们在我们的武器库中使用许多规划工具，如线框图和用户流程。但是你也应该期待我们分享疯狂的想法，与你合作，与友人和陌生人一起测试，然后再回到白板。                    </p>
                </div>

                <div className={style.textContentTextItem}>
                    <h5>
                        用户体验UX
                    </h5>
                    <p>
                        规划用户的体验是试验和错误。我们必须计划，原型，失败和迭代。您应该期望我们在我们的武器库中使用许多规划工具，如线框图和用户流程。但是你也应该期待我们分享疯狂的想法，与你合作，与友人和陌生人一起测试，然后再回到白板。                    </p>
                </div>


                <div className={style.textContentTextItem}>
                    <h5>
                        内容策略与执行
                    </h5>
                    <p>
                        我们有意建立了一个代理模型，将战略家与内容创建者和体验设计师放在同一个房间。内容策略需要这些群组之间的对话。我们使用数据，设计，语音和自定义内容编写，摄影，录像和动画，在适当的时间为正确的用户提供正确的信息，CTA，教育和娱乐。
                    </p>
                </div>

                <div className={style.textContentTextItem}>
                    <h5>
                        网站设计
                    </h5>
                    <p>
                        事实是：我们在2001年开始作为一家网页设计公司，并且已经看到了山地的进化。我们比以往任何时候都受到用例，设备和数据的影响。从电子商务到基于产品，再到内容发布平台，我们将与您合作，提供以目标为导向，灵活且用户至上的计划，强调您对客户体验的专注。                    </p>
                </div>

                <div className={style.textContentTextItem}>
                    <h5>
                        产品与应用设计
                    </h5>
                    <p>
                        自2001年以来，基于Web的产品设计已成为我们核心产品的一部分。从游戏开发到效率平台，我们可以设计并快速制作产品开发原型并完成。                    </p>
                </div>
            </div>
        </div>
    )
}

function relatedWork() {
    return(
        <div className={style.relatedWork}>
            <h3 className={style.relatedWorkTitle}>相关工作</h3>
            <div className={style.relatedWorkCon}>

                <div className={style.relatedWorkConItem}>
                    <div className={style.relatedWorkConItemImg}>
                        <img src={require('./skill-2.jpg')} alt=""/>
                    </div>
                    <div className={style.relatedWorkConItemLink}>
                        <div className={style.relatedWorkConItemLinkCon}>
                            <span>技术</span>
                            <span className={style.relatedWorkConItemLinkConFlag}>科切拉网站 ></span>
                            <span>一个数字目的地，旨在与世界上最受欢迎的现场活动之一和谐共处。</span>
                        </div>
                    </div>
                </div>

                <div className={style.relatedWorkConItem}>
                    <div className={style.relatedWorkConItemImg}>
                        <img src={require('./skill-2.jpg')} alt=""/>
                    </div>
                    <div className={style.relatedWorkConItemLink}>
                        <div className={style.relatedWorkConItemLinkCon}>
                            <span>技术</span>
                            <span className={style.relatedWorkConItemLinkConFlag}>科切拉网站 ></span>
                            <span>一个数字目的地，旨在与世界上最受欢迎的现场活动之一和谐共处。</span>
                        </div>
                    </div>
                </div>

                <div className={style.relatedWorkConItem}>
                    <div className={style.relatedWorkConItemImg}>
                        <img src={require('./skill-2.jpg')} alt=""/>
                    </div>
                    <div className={style.relatedWorkConItemLink}>
                        <div className={style.relatedWorkConItemLinkCon}>
                            <span>技术</span>
                            <span className={style.relatedWorkConItemLinkConFlag}>科切拉网站 ></span>
                            <span>一个数字目的地，旨在与世界上最受欢迎的现场活动之一和谐共处。</span>
                        </div>
                    </div>
                </div>

                <div className={style.relatedWorkConItem}>
                    <div className={style.relatedWorkConItemImg}>
                        <img src={require('./skill-2.jpg')} alt=""/>
                    </div>
                    <div className={style.relatedWorkConItemLink}>
                        <div className={style.relatedWorkConItemLinkCon}>
                            <span>技术</span>
                            <span className={style.relatedWorkConItemLinkConFlag}>科切拉网站 ></span>
                            <span>一个数字目的地，旨在与世界上最受欢迎的现场活动之一和谐共处。</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

function otherService() {
    return(
        <div className={style.otherService}>
            <h3 className={style.otherServiceTitle}>其他服务</h3>
            <div className={style.otherServiceCon}>

                <div className={style.otherServiceConItem}>
                    <div className={style.otherServiceConItemImg}>
                        <img src={require('./skill-3.jpg')} alt=""/>
                    </div>
                    <div className={style.otherServiceConItemText}>
                        <h5>社交内容和参与</h5>
                        <p>创意和战略团队共同努力设计美学，声音和路线图，以便在地球上最直接面向消费者的平台上进行交流。 </p>
                    </div>
                </div>

                <div className={style.otherServiceConItem}>
                    <div className={style.otherServiceConItemImg}>
                        <img src={require('./skill-3.jpg')} alt=""/>
                    </div>
                    <div className={style.otherServiceConItemText}>
                        <h5>社交内容和参与</h5>
                        <p>创意和战略团队共同努力设计美学，声音和路线图，以便在地球上最直接面向消费者的平台上进行交流。 </p>
                    </div>
                </div>

                <div className={style.otherServiceConItem}>
                    <div className={style.otherServiceConItemImg}>
                        <img src={require('./skill-3.jpg')} alt=""/>
                    </div>
                    <div className={style.otherServiceConItemText}>
                        <h5>社交内容和参与</h5>
                        <p>创意和战略团队共同努力设计美学，声音和路线图，以便在地球上最直接面向消费者的平台上进行交流。 </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

function teamLink() {
    return(
        <div className={style.teamLink}>
            <div className={style.teamLinkCon}>
                <h3>规划师和制造者团队</h3>
                <p>在追求艺术与目标的协调中，健康的紧张是我们文化的必要组成部分。</p>
                <span>阅读更多</span>
            </div>
        </div>
    )
}

@connect(
    state => state.homeState
)

class Skill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {

        return (
            <div className={style.skillCon}>
                <Route component={carouselItem}></Route>
                <Route component={textContent}></Route>
                <Route component={relatedWork}></Route>
                <Route component={otherService}></Route>
                <Route component={teamLink}></Route>
            </div>
        )
    }

}

export default Skill