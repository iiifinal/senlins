import React from 'react'
import {Carousel, Row, Card, Icon,Rate} from 'antd'
import style from './home.css'
import IMG1 from './img/home_item_1.jpg'
import IMG2 from './img/home_item_2.jpg'
import IMG3 from './img/home_item_3.png'
import AVATAR from './img/avatar.jpeg'
import {Link} from 'react-router-dom'
class Home extends React.Component {
    render() {

        return (

            <div className={style.content}>
                {/*<Carousel  effect="fade">*/}
                    <div className={style.bgImg}></div>
                {/*</Carousel>*/}

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
                                  独书是一款汇聚当下最优秀最震撼人心的书籍的阅读APP,为你开启文艺社区新旅程。每天推出精选内容,诗歌、文学、艺术、电影、音乐等,带给你精神上的饱满体验！ 在这里你不但可以认识书里更为辽阔新奇有趣的世界，还可以找到与你志同道合的小伙伴，与他们一起共同分享彼此阅读的乐趣。
                                </p>
                            </div>
                            <figure className={style.imgCon}>
                                <Link to="./item" className={style.imgSetWidth}>
                                    <img src={IMG1} alt=""/>
                                </Link>
                                <p>独书app，共同分享阅读各自不一样的快乐</p>
                            </figure>
                        </div>
                        <div className={style.ConItem}>
                            <div className={style.title}>
                                <h5>B</h5>
                                <p>
                                    独书是一款汇聚当下最优秀最震撼人心的书籍的阅读APP,为你开启文艺社区新旅程。每天推出精选内容,诗歌、文学、艺术、电影、音乐等,带给你精神上的饱满体验！ 在这里你不但可以认识书里更为辽阔新奇有趣的世界，还可以找到与你志同道合的小伙伴，与他们一起共同分享彼此阅读的乐趣。
                                </p>
                            </div>
                            <figure className={style.imgCon}>
                                <Link to="./item" className={style.imgSetWidth}>
                                    <img src={IMG2} alt=""/>
                                </Link>
                                <p>独书app，共同分享阅读各自不一样的快乐</p>
                            </figure>
                        </div>
                        <div className={style.ConItem}>
                            <div className={style.title}>
                                <h5>A</h5>
                                <p>
                                    独书是一款汇聚当下最优秀最震撼人心的书籍的阅读APP,为你开启文艺社区新旅程。每天推出精选内容,诗歌、文学、艺术、电影、音乐等,带给你精神上的饱满体验！ 在这里你不但可以认识书里更为辽阔新奇有趣的世界，还可以找到与你志同道合的小伙伴，与他们一起共同分享彼此阅读的乐趣。
                                </p>
                            </div>
                            <figure className={style.imgCon}>
                                <Link to="./item" className={style.imgSetWidth}>
                                    <img src={IMG1} alt=""/>
                                </Link>
                                <p>独书app，共同分享阅读各自不一样的快乐</p>
                            </figure>
                        </div>
                    </div>
                </div>
                <div className={style.nameItem}>
                    <div className={style.nameSetWidth}>
                        <article className={style.nameLeft}>
                            <div className={style.avatar}>
                                <img src={AVATAR} alt=""/>
                            </div>
                            <h3>定制方案解决专家</h3>
                            <h5>custom holistic solution specialist</h5>
                            <div className={style.star}>
                                <Rate disabled defaultValue={5} />
                            </div>
                        </article>
                        <article className={style.nameRight}>
                            <div className={style.contact}>
                                <div className={style.email}>
                                    <h3 className={style.EmailTitle}>电子邮箱:</h3>
                                    <p>maldek@qq.com</p>
                                </div>
                                <div className={style.phone}>
                                    <h3 className={style.PhoneTitle}>电话号码:</h3>
                                    <p>17603090160</p>
                                </div>
                            </div>
                            <div className={style.label}>
                                <h3 className={style.LabelTitle}>
                                    印象标签:
                                </h3>
                                <div className={style.impression}>
                                    <span>负责人</span>
                                    <span>技术精湛</span>
                                    <span>按时完成</span>
                                    <span>合作愉快</span>
                                    <span>懂技术，会优化</span>
                                    <span>后端哥哥666</span>
                                    <span>UI/UX满分</span>
                                    <span>大牌人气站酷设计师</span>
                                    <span>项目经理优秀</span>
                                    <span>前端妹纸可爱</span>
                                    <span>前端小哥辛苦了</span>
                                    <span>同行合作愉快</span>
                                    <span>不错的团队</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className={style.others}>
                    <div className={style.otherSetWidth}>

                        <h3 className={style.othersTitle}>
                            OTHERS
                        </h3>
                        <article className={style.othersCon}>
                            <div className={style.othersConItem}>
                                <div className={style.othersConItemImg}>
                                    {/*<img src={AVATAR} alt=""/>*/}
                                </div>
                                <div className={style.othersConItemText}>
                                    <h3>Cat</h3>
                                    <h5>
                                        The story goes that some time ago.
                                    </h5>
                                    <p>Money was tight and he became infuriated when the child tried </p>
                                    <div className={style.othersConItemStore}>
    <span className={style.othersConItemStoreLike}>
    <Icon type='heart'></Icon><span>123456</span>
        </span>
                                        <span className={style.othersConItemStoreLook}>
    <Icon type='eye'></Icon><span>123456</span>
        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.othersConItem}>
                                <div className={style.othersConItemImg}>
                                    {/*<img src={AVATAR} alt=""/>*/}
                                </div>
                                <div className={style.othersConItemText}>
                                    <h3>Cat</h3>
                                    <h5>
                                        The story goes that some time ago.
                                    </h5>
                                    <p>Money was tight and he became infuriated when the child tried </p>
                                    <div className={style.othersConItemStore}>
    <span className={style.othersConItemStoreLike}>
    <Icon type='heart'></Icon><span>123456</span>
        </span>
                                        <span className={style.othersConItemStoreLook}>
    <Icon type='eye'></Icon><span>123456</span>
        </span>
                                    </div>
                                </div>
                            </div>
                            <div className={style.othersConItem}>
                                <div className={style.othersConItemImg}>
                                    {/*<img src={AVATAR} alt=""/>*/}
                                </div>
                                <div className={style.othersConItemText}>
                                    <h3>Cat</h3>
                                    <h5>
                                        The story goes that some time ago.
                                    </h5>
                                    <p>Money was tight and he became infuriated when the child tried </p>
                                    <div className={style.othersConItemStore}>
    <span className={style.othersConItemStoreLike}>
    <Icon type='heart'></Icon><span>123456</span>
        </span>
                                        <span className={style.othersConItemStoreLook}>
    <Icon type='eye'></Icon><span>123456</span>
        </span>
                                    </div>
                                </div>
                            </div>

                        </article>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home