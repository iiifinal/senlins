import React from 'react'
import {Carousel} from 'antd'
import style from './skill.css'
import {connect} from 'react-redux'
import {getSkillData, recommendSelect, SelectedSkill} from "../../redux/home.redux";


class CarouselItem extends React.Component {

    render() {
        const Carousedata = this.props.data
        return (
            <div>
                <Carousel className={style.carouselList}>
                    <div className={style.carouselItem}>
                        <div className={style.carouselItemTitle}>
                            <h3>{Carousedata.subject}</h3>
                            <p>{Carousedata.subtopic}</p>
                        </div>
                        <div className={style.carouselItemImg}>
                            <img src={require(`${Carousedata.subject_img}`)} alt=""/>
                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }

}

class TextContent extends React.Component {
    render() {
        const Textdata = this.props.data
        return (
            <div className={style.textContent}>
                <h3 className={style.textContentTitle}>
                    {Textdata.main_title}
                </h3>
                <div className={style.textContentText}>
                    {Textdata.main_list.map((item, index) =>
                        <div className={style.textContentTextItem} key={index}>
                            <h5>{item.title}</h5>
                            <p>{item.content}</p>
                        </div>
                    )}
                </div>
            </div>
        )
    }

}

class RelatedWork extends React.Component {

    render() {
        const Relatedata = this.props.data

        return (
            <div className={style.relatedWork}>
                <h3 className={style.relatedWorkTitle}>相关工作</h3>
                <div className={style.relatedWorkCon}>


                    {Relatedata.map((item, index) =>

                        < div className={style.relatedWorkConItem} key={index}>
                            <div className={style.relatedWorkConItemImg}>
                                <img src={require(`${item.case_img}`)} alt=""/>
                            </div>
                            <div className={style.relatedWorkConItemLink}>
                                <div className={style.relatedWorkConItemLinkCon}>
                                    <span>{item.case_type}</span>
                                    <span className={style.relatedWorkConItemLinkConFlag}>
                                        {item.case_name}
                                    </span>
                                    <span>{item.case_short}</span>
                                </div>
                            </div>
                        </div>)
                    }


                </div>
            </div>
        )
    }

}

class OtherService extends React.Component {
    render() {

        return (
            <div className={style.otherService}>
                <h3 className={style.otherServiceTitle}>其他服务</h3>
                <div className={style.otherServiceCon}>

                    <div className={style.otherServiceConItem}>
                        <div className={style.otherServiceConItemImg}>
                            <img src={require('./img/skill-3.jpg')} alt=""/>
                        </div>
                        <div className={style.otherServiceConItemText}>
                            <h5>社交内容和参与</h5>
                            <p>创意和战略团队共同努力设计美学，声音和路线图，以便在地球上最直接面向消费者的平台上进行交流。 </p>
                        </div>
                    </div>

                    <div className={style.otherServiceConItem}>
                        <div className={style.otherServiceConItemImg}>
                            <img src={require('./img/skill-3.jpg')} alt=""/>
                        </div>
                        <div className={style.otherServiceConItemText}>
                            <h5>社交内容和参与</h5>
                            <p>创意和战略团队共同努力设计美学，声音和路线图，以便在地球上最直接面向消费者的平台上进行交流。 </p>
                        </div>
                    </div>

                    <div className={style.otherServiceConItem}>
                        <div className={style.otherServiceConItemImg}>
                            <img src={require('./img/skill-3.jpg')} alt=""/>
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

}

function TeamLink() {
    return (
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
    state => state.homeState,
    {getSkillData}
)

class Skill extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        this.props.getSkillData()
    }

    render() {
        const pageData = this.props.skillPageData.find(item => item.skill_id === this.props.selectedSkillId)
        return (
            <div className={style.skillCon}>
                {pageData ? <CarouselItem
                    data={{
                        subject: pageData.subject,
                        subtopic: pageData.subtopic,
                        subject_img: pageData.subject_img
                    }}
                ></CarouselItem> : null}

                {pageData ? <TextContent
                    data={pageData.main_data}
                ></TextContent> : null}

                {pageData ? <RelatedWork
                    data={pageData.about_case}
                ></RelatedWork> : null}

                <OtherService></OtherService>
                <TeamLink></TeamLink>

            </div>
        )
    }

}

export default Skill