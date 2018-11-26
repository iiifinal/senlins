import React from 'react'

import {connect} from 'react-redux'
import {getArticleData} from "../../redux/home.redux";
import {Icon} from 'antd';
import style from './article.css'


function HeaderSkeleton() {
    return (
        <div className={style.articleHeader}>
            <div className={style.articleHeaderImg}>
                <img src={require('./img/article-1.jpg')} alt=""/>
            </div>
        </div>
    )
}

class Header extends React.Component {
    render() {
        return (
            <div className={style.articleHeader}>
                <div className={style.articleHeaderImg}>
                    <img src={require(`${this.props.data}`)} alt=""/>
                </div>
            </div>
        )
    }
}

function ContentSkeleton() {

    return (

        <div className={style.articleCon}>
            <div className={style.articleTitle}>
                <div className={style.articleTitleLeft}>
                    <p>规划师和制造者：友好的紧张局势</p>
                    <div className={style.articleTitleLeftPersonal}>
                        <span className={style.articleTitleLeftName}>火奴鲁鲁</span>
                        <div className={style.articleTitleLeftAvatar}>
                            <img src={require('./img/article-1.jpg')} alt=""/>
                        </div>
                    </div>
                </div>
                <div className={style.articleTitleRight}>
                    <div className={style.articleTitleRightIcon}>
                        <Icon style={{fontSize: 24, marginRight: 15}}
                              type="heart" theme="twoTone"/>
                    </div>
                    <span className={style.articleTitleRightLike}>
                       喜欢
                   </span>
                </div>
            </div>
            <div className={style.articleText}>
                <div className={style.articleTextItem}>
                    <p>
                        Bukwild成立于2001年，是一家数字制作公司。我们主要由设计师，开发人员和项目经理组成。我们的工作是让一群用户做出一些东西......使用。从第1天开始，我们就是心脏制造者。这与我们考虑的（通常虽然），“规划师”非常不同。是同样有价值但通常不一样。作为“制造者”，我们的核心愿望是创造美丽，巧妙设计和有用的东西。我们（并且今天）痴迷于有用性。我们（当时）并不痴迷于企业品牌战略，或者是我们推动用户使用的客户渠道。这是我们从生产供应商发展到创意合作伙伴的缺失结构。
                    </p>
                    <div className={style.articleTextItemImg}>
                        <img src={require('./img/articleText-1.jpg')} alt=""/>
                    </div>
                </div>

                <div className={style.articleTextItem}>
                    <p>
                        今天，我们自豪地由（通常是）两个小组组成：规划师和制造者。尖锐的和关键的战略家，研究人员和分析师，与折衷的艺术家和诗人独特地交织在一起。它是一种奇怪的混合，富有和固有的冲突导致最终的决议受到启发。你看，我们故意经营一个扁平化的组织。层次很小。这个想法是为了保持这两个群体之间自然存在的紧张关系。如果其中一个小组正在为另一个小组工作
                        - 它就是不起作用。在制定品牌和用户策略时所需要的头发的激情和分裂有时可能与艺术不一致 -
                        而这种斗争是我们的魔力。当两个人互相推，来回时，灵感就会发生。它不仅仅是独特的，它对于我们拥有战略家，电影制作人，设计师，技术专家，同一个房间的作家和分析师，在同一个级别，在同一张桌子上。我的目标是想象一场巨大的拔河比赛，如果这两个假想的比赛由这两个小组在他们的战略和创造中充满激情地进行
                        - 两个小组都不会赢。这将是一场不知疲倦的战斗，直到手的流血叫它平局。（...对不起..喜欢咖啡因和感觉。它。
                    </p>
                    <p>
                        维持这种紧张关系的目的是充分体现品牌想要说，销售和最终实现的同理心，以及为用户创造有价值和美好体验的洞察力和灵感 -
                        每一个体现在这些体验中重要但不同的群体。这场孜孜不倦的斗争产生了我们认为在当今喧嚣透明的销售宣传世界中至关重要且供不应求的信任。
                    </p>
                    <div className={style.articleTextItemImg}>
                        <img src={require('./img/articleText-1.jpg')} alt=""/>
                    </div>
                </div>

            </div>
            <div className={style.signature}>
                <div className={style.signatureSet}>
                    <div className={style.signatureImg}>
                        <img src={require('./img/article-1.jpg')} alt=""/>
                    </div>
                    <span className={style.signatureName}>火奴鲁鲁</span>
                    <p className={style.signatureMotto}>
                        一个（非常业余）运动员。在夏威夷尽可能经常。一个连续的企业家。沉迷于自由。
                    </p>
                    <div className={style.signatureShare}>
                        <Icon style={
                            {fontSize: 34, marginRight: 24}
                        }
                              type="twitter" theme="outlined"/>
                        <Icon style={
                            {fontSize: 34, marginRight: 24}
                        }
                              type="weibo" theme="outlined"/>
                        <Icon style={
                            {fontSize: 34}
                        }
                              type="github" theme="outlined"/>
                    </div>
                </div>

            </div>
        </div>
    )

}

class ContentText extends React.Component {

    render() {
        const data=this.props.data
        return (
            <div className={style.articleCon}>
                <div className={style.articleTitle}>
                    <div className={style.articleTitleLeft}>
                        <p>{data.title}</p>
                        <div className={style.articleTitleLeftPersonal}>
                            <span className={style.articleTitleLeftName}>{data.unit_name}</span>
                            <div className={style.articleTitleLeftAvatar}>
                                <img src={require(`${data.unit_img}`)} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className={style.articleTitleRight}>
                        <div className={style.articleTitleRightIcon}>
                            <Icon style={{fontSize: 24, marginRight: 15}}
                                  type="heart" theme="twoTone"/>
                        </div>
                        <span className={style.articleTitleRightLike}>
                       喜欢
                   </span>
                    </div>
                </div>
                <div className={style.articleText}>
                    {data.content_list.map((item,index)=>
                        <div className={style.articleTextItem} key={index}>
                            {item.text.map((v,_index)=><p key={_index}>{v}</p>)}
                            {item.img.map((k,j)=> <div className={style.articleTextItemImg} key={j} >
                                <img src={require(`${k}`)} alt=""/>
                            </div>)}
                        </div>
                    )}



                </div>

                <div className={style.signature}>
                    <div className={style.signatureSet}>
                        <div className={style.signatureImg}>
                            <img src={require(`${data.unit_img}`)} alt=""/>
                        </div>
                        <span className={style.signatureName}>{data.unit_name}</span>
                        <p className={style.signatureMotto}>
                            {data.unit_motto}
                        </p>
                        <div className={style.signatureShare}>

                            <a href={`${data.unit_contact.weibo}`}>
                                <Icon style={
                                    {fontSize: 34, marginRight: 24}
                                }
                                      type="weibo" theme="outlined"/>
                            </a>
                            <a href={`${data.unit_contact.facebook}`}>
                                <Icon style={
                                    {fontSize: 34, marginRight: 24}
                                }
                                      type="facebook" theme="outlined"/>
                            </a>

                            <a href={`${data.unit_contact.github}`}>
                                <Icon style={
                                    {fontSize: 34}
                                }
                                      type="github" theme="outlined"/>
                            </a>

                        </div>
                    </div>

                </div>
            </div>
        )
    }

}


@connect(
    state => state.homeState,
    {getArticleData}
)
class Article extends React.Component {

    componentDidMount() {
        this.props.getArticleData()
    }

    render() {
        const data = this.props.articlePageData.find(item => item.article_id === this.props.articleId)

        return (
            <div className={style.page}>

                {/*{data ? <Header data={data.title_img}></Header> : <HeaderSkeleton></HeaderSkeleton>}*/}
                {data ? <Header data={data.title_img}></Header> : null}
                {/*{data ? <ContentText data={data}></ContentText> : <ContentSkeleton></ContentSkeleton>}*/}
                {data ? <ContentText data={data}></ContentText> : null}

            </div>
        )
    }

}

export default Article