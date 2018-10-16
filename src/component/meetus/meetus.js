import React from 'react'
import {Popover} from 'antd';
import style from './meetus.css'
import BGIMG from './img/meetus_bg.jpg'
import TEAM from './img/sea_team.jpg'
import ItemImg from './img/itemImg.jpg'
import JOIN from './img/joinUs.jpg'


const content = (
    <div className={style.teamItemText}>
        <span><img src={ItemImg} alt=""/></span>
        <p>资深前端开发工程师</p>
        <p>资深平面设计师</p>
        <p>四年的工作经年，熟悉设计与开发的相关知识</p>
    </div>
)

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
                                <span>Hello!我是森林猫</span>
                                <h3>一个整体方案解决专家</h3>
                                <p>欢迎了解我们</p>
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
                            {/*<img src={TEAM} alt=""/>*/}
                        </div>
                    </div>
                </div>
                <div className={style.teamEvery}>
                    <div className={style.teamEveryImg}>
                        <img src={TEAM} alt=""/>
                    </div>
                    <div className={style.teamEveryMan}>
                        <div className={style.teamEveryManTitle}>
                            <h3>我们不仅仅只是开发者</h3>
                            <p>
                               创造你所想
                            </p>
                            <p>
                                完成你所求
                            </p>
                            <p>
                                以我们的技术基石去推动你所梦想的新世界
                            </p>
                        </div>
                        <div className={style.teamEveryManCon}>


                            <div className={style.teamEveryManConItem}>
                                <Popover
                                    content={content} title="Apple" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                            </div>


                            <div className={style.teamEveryManConItem}>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                            </div>

                            <div className={style.teamEveryManConItem}>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                            </div>

                            <div className={style.teamEveryManConItem}>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                            </div>
                            <div className={style.teamEveryManConItem}>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                            </div>


                        </div>
                    </div>
                </div>
                <div className={style.joinUs}>
                    <div className={style.joinUsSetWidth}>

                        <p className={style.joinUsTitle}>产品核心论</p>
                        <div className={style.joinUsText}>
                          我们善于将商业逻辑有序的以产品形态传递给消费者，协助从0-1的起跑者规划商业图谱与产品发展路径。
                        </div>
                        <div className={style.joinUsGraphic}>
                            <div className={style.joinUsGraphicLeft}>
                                <p>
                                    策略与产品之间不应该有任何介质与翻译。我们的任务就是将各行业丰富的行业通理与合作伙伴的业务特征与优势结合，打造每个领域中的杀手产品。
                                </p>
                                <div>
                                    <img src={JOIN} alt=""/>
                                </div>
                            </div>
                            <div className={style.joinUsGraphicRight}>
                                <p>
                                    优秀的产品扮演着商业路径中每一次跳跃的起点，我们将利用所有方式与经验将每个产品打造为品牌助推器。
                                </p>
                                <p>
                                    我们最自信的经验不来自于任何一个行业，它来自于所有行业。这有赖于我们引以为荣的团队学习能力，对于每个行业我们都着迷的想去了解它的运作机制，并贡献我们的经验参与塑造它的未来 。
                                </p>
                                <p>
                                    我们深入学习理解众多行业，与品牌伙伴一起成长。
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Meetus