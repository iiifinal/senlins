import React from 'react'
import {Route} from 'react-router-dom'
import {Icon} from 'antd';
import style from './recruitment.css'



class Header extends React.Component {
    render() {
        return (
            <div className={style.header}>
                <img src={require('./img/recruitmentHead.jpg')} alt=""/>
            </div>
        )
    }
}


class Content extends React.Component {
    render() {
        return (
            <div className={style.content}>
                <div className={style.jobTitle}>
                    <span>后端工程师/开发者</span>
                </div>
                <div className={style.foreword}>
                    <p>
                        首先：知道我们正在挖掘对真正的人最重要的事情，然后努力以最美丽和最有用的方式实现这一目标。如果这与你产生共鸣，请继续阅读。
                    </p>
                </div>
                <div className={style.summary}>
                    <p>
                        Bukwild正在寻找一位经验丰富的开发人员，专门创建Shopify体验，推动Shopify的界限，销售独特的尖端产品。要提前做好，有一定程度的单调维护（y）类型的任务与工作 - 然而，这通过在项目开始时的初始技术策略的良好参与程度以及大量的在整个过程中与我们的战略，设计，内容和生产团队合作。
                    </p>
                </div>

                <div className={style.aboutYou}>
                    <div className={style.aboutYouItem}>
                        <div className={style.aboutYouItemTitle}>
                            <span>关于你（你好）：</span>
                        </div>
                        <ul className={style.aboutYouItemCon}>
                            <li>您喜欢成为计划者和制造者团队的一员</li>
                            <li>你把自己的观点带到了桌面上</li>
                            <li>当批判性思考解决问题时，你会茁壮成长</li>
                            <li>你已经注意到了美学</li>
                            <li>你不是在企业政治，等级制度，自我或恐惧</li>
                            <li>您喜欢教导他人并与团队分享知识</li>
                        </ul>
                    </div>

                    <div className={style.aboutYouItem}>
                        <div className={style.aboutYouItemTitle}>
                            <span>关于你（你好）：</span>
                        </div>
                        <ul className={style.aboutYouItemCon}>
                            <li>您喜欢成为计划者和制造者团队的一员</li>
                            <li>你把自己的观点带到了桌面上</li>
                            <li>当批判性思考解决问题时，你会茁壮成长</li>
                            <li>你已经注意到了美学</li>
                            <li>你不是在企业政治，等级制度，自我或恐惧</li>
                            <li>您喜欢教导他人并与团队分享知识</li>
                        </ul>
                    </div>

                    <div className={style.aboutYouItem}>
                        <div className={style.aboutYouItemTitle}>
                            <span>关于你（你好）：</span>
                        </div>
                        <ul className={style.aboutYouItemCon}>
                            <li>您喜欢成为计划者和制造者团队的一员</li>
                            <li>你把自己的观点带到了桌面上</li>
                            <li>当批判性思考解决问题时，你会茁壮成长</li>
                            <li>你已经注意到了美学</li>
                            <li>你不是在企业政治，等级制度，自我或恐惧</li>
                            <li>您喜欢教导他人并与团队分享知识</li>
                        </ul>
                    </div>

                    <div className={style.aboutYouItem}>
                        <div className={style.aboutYouItemTitle}>
                            <span>关于你（你好）：</span>
                        </div>
                        <ul className={style.aboutYouItemCon}>
                            <li>您喜欢成为计划者和制造者团队的一员</li>
                            <li>你把自己的观点带到了桌面上</li>
                            <li>当批判性思考解决问题时，你会茁壮成长</li>
                            <li>你已经注意到了美学</li>
                            <li>你不是在企业政治，等级制度，自我或恐惧</li>
                            <li>您喜欢教导他人并与团队分享知识</li>
                        </ul>
                    </div>

                </div>

                <div className={style.apply}>
                    <h5>如何申请</h5>
                    <p>提供您的简历，工作样本和求职信，让我们知道您为什么非常适合。
                        将这些全部发送到careers@bukwild.com</p>
                </div>
                <div className={style.item}>
                    <h5>为什么选择Bukwild：</h5>
                    <p>
                        我们的使命是将品牌最引人注目的真理转化为对真实人物至关重要的美丽故事和有用体验。我们通过胆量去寻找值得为之奋斗的东西来做到这一点。
                    </p>
                    <p>
                        我们有无限制的带薪休假，完整的健康保险，小吃店，灵活的在家工作计划，公司午餐，学习活动等等。
                    </p>
                    <p>
                        我们通过一家培养灵感和协作的人力资源公司。我们为客户的谈话，客户体验，工作和我们的工作价值带来了高度的期望和卓越。我们选择现实生活而不是工作。我们感到自豪的是，我们知道我们做了什么事情，对我们的日常工作感到满意，并为一个大于一的团队做出贡献。但是，在我们的墙内发生的一切都不比你的家庭，你的健康和你今生的冒险更重要。在Bukwild，我们互相帮助。
                    </p>
                </div>
            </div>
        )
    }
}

class Action extends React.Component{
    render(){
        return(
            <div className={style.action}>
                <div className={style.actionSet}>
                    <h3>行动</h3>
                    <p>让我们知道您是谁以及为什么这听起来像是适合您的工作。用你最喜欢的作品和其他任何能够展现你个性的作品来打败我们</p>
                    <div className={style.actionMail}>
                        <Icon type="mail" theme="outlined"
                              style={
                                  {fontSize: 22}
                              }
                        />
                        <span>senlins.@senlins.com</span>
                    </div>


                </div>
            </div>
        )
    }
}

class Recruitment extends React.Component {
    render() {
        return (
            <div className={style.page}>
                <Route component={Header}></Route>
                <Route component={Content}></Route>
                <Route component={Action}></Route>
            </div>
        )
    }

}

export default Recruitment