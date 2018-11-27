import React from 'react'
import {Carousel} from 'antd'
import style from './skill.css'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getSkillData,SelectedCaseItem,SelectedSkill} from "../../redux/home.redux";


function Design() {
    return(
        <div className={style.carouselItemDesign}>
            <div className={style.Design_1}>
                <img src={require(`./img/design-teal.gif`)} alt=""/>
            </div>
            <div className={style.Design_2}>
                <img src={require(`./img/design-purple.gif`)} alt=""/>
            </div>
        </div>
    )
}
function Tech() {
    return(
        <div className={style.carouselItemTech}>
            <div className={style.carouselItemTechGif}></div>
        </div>
    )
}
function Social() {
    return(
        <div className={style.carouselItemSocial}>
            <div className={style.carouselItemSocial_1}>
                <div className={style.carouselItemSocial_2}></div>
            </div>
        </div>
    )
}
function Holistic() {
    return(
        <div className={style.carouselItemHolistic}>
            <div className={style.carouselItemHolisticGif}></div>
        </div>
    )
}

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
                        {Carousedata.id==='design'?<Design></Design>:null}
                        {Carousedata.id==='tech'?<Tech></Tech>:null}
                        {Carousedata.id==='social'?<Social></Social>:null}
                        {Carousedata.id==='holistic'?<Holistic></Holistic>:null}
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


@connect(
    state => ({}),
    {SelectedCaseItem}
)
class RelatedWork extends React.Component {
    constructor(props){
        super(props)
    }
    selectedCaseItem(id){
        this.props.SelectedCaseItem(id)
        this.props.history.push('./detailedCase')
        window.scrollTo(0, 0)
    }

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
                                <div className={style.relatedWorkConItemLinkCon}
                                     onClick={()=>{
                                         this.selectedCaseItem(item.case_id)
                                     }}>
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

@connect(
    state => ({}),
    {SelectedSkill}
)

class OtherService extends React.Component {

    selectedTypeItem(id){
        this.props.SelectedSkill(id)
        this.props.history.push('./skill')
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className={style.otherService}>
                <h3 className={style.otherServiceTitle}>其他服务</h3>
                <div className={style.otherServiceCon}>
                    {this.props.data.map((item,index)=>{
                        return (
                            <div className={style.otherServiceConItem} key={index}
                            onClick={()=>{this.selectedTypeItem(item.skill_id)}}
                            >
                                <div className={style.otherServiceConItemImg}>
                                    <img src={require(`${item.img}`)} alt=""/>
                                </div>
                                <div className={style.otherServiceConItemText}>
                                    <h5>{item.title}</h5>
                                    <p>{item.contentText}</p>
                                </div>
                            </div>
                        )
                    })}
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
                <Link to='./meetus'>了解更多</Link>
                {/*<span>了解更多</span>*/}
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
                        subject_img: pageData.subject_img,
                        id: pageData.skill_id
                    }}
                ></CarouselItem> : null}

                {pageData ? <TextContent
                    data={pageData.main_data}

                ></TextContent> : null}

                {pageData ? <RelatedWork
                    data={pageData.about_case}
                    history={this.props.history}
                ></RelatedWork> : null}

                {pageData?<OtherService history={this.props.history}
                    data={pageData.other_skill}></OtherService>:null}

                <TeamLink></TeamLink>

            </div>
        )
    }

}

export default Skill