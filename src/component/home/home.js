import React from 'react'
import {Carousel, Row, Card, Icon,Rate} from 'antd'
import style from './home.css'
import IMG1 from './img/home_item_1.png'
import IMG2 from './img/home_item_2.png'
import IMG3 from './img/home_item_3.png'
import AVATAR from './img/avatar.jpeg'

class Home extends React.Component {
    render() {

        return (

            <div className={style.content}>
                <div className={style.bgImg}></div>
                <div className={style.cascade}>
                    <h3>SENLINS : 专注于产品定制化整体解决方案的知识创新咨询公司</h3>
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
                                    LUXCHAIN为个人奢侈品提供多因素身份验证。 LUXCHAIN使用基于人工智能和区块链的综合验证解决方案来识别假冒产品。
                                    借助数字资产，LUXCHAIN可以让买家和卖家一目了然地查看详细的产品信息。 数字资产就是产品真实性的证明，从而增强透明度和信任度。
                                    LUXCHAIN是奢侈品认证的下一代解决方案，对目前假货充斥的奢侈品市场提供真正有效可靠的方案，让人们更加放心购买。
                                </p>
                            </div>
                            <figure className={style.imgCon}>
                                <div className={style.imgSetWidth}>
                                    <img src={IMG1} alt=""/>
                                </div>
                                <p>LUXCHAIN，奢侈品认证的下一代解决方案</p>
                            </figure>
                        </div>
                        <div className={style.ConItem}>
                            <div className={style.title}>
                                <h5>B</h5>
                                <p>
                                    今金贷（91JINJINDAI.COM）系由西北大型金融企业甘肃金畅集团设立，总部位于兰州的网络借贷信息中介机构，运营主体为甘肃金畅网络科技有限公司，注册资金1亿元，于2015年5月16日上线运营。今金贷专注服务于西北地区实体经济，其发展规划被写入甘肃省政府下发的《甘肃省深入推进"互联网+"行动实施方案》中。平台持续创新与迭代金融服务意识，以先进的金融科技手段和大数据风控技术为“一带一路”沿线区域特别是西北地区中小微企业提供了专业高效、稳健合规的普惠金融服务。
                                </p>
                            </div>
                            <figure className={style.imgCon}>
                                <div className={style.imgSetWidth}>
                                    <img src={IMG2} alt=""/>
                                </div>
                                <p>今金贷，立足西北服务实体资金托管的P2P网贷平台</p>
                            </figure>
                        </div>
                        <div className={style.ConItem}>
                            <div className={style.title}>
                                <h5>C</h5>
                                <p>
                                    企鹅电竞是腾讯旗下规模最大的移动电竞平台。其定位于电竞生态的“连接器”，整合腾讯网、QQ手游、腾讯互娱团队资源，与QGC、TGA等职业电竞赛事深度合作，同时汇聚海量大牌游戏主播，集手游职业竞赛、互动视频直播、游戏礼包分享等功能于一身，为玩家用户提供一站式的次世代移动电竞体验。
                                </p>
                            </div>
                            <div className={style.imgCon}>
                                <figure className={style.imgSetWidth}>
                                    <img src={IMG3} alt=""/>
                                </figure>
                                <p>企鹅电竞，腾讯旗下规模最大的移动电竞平台</p>
                            </div>
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
                            <div className={style.stars}>
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