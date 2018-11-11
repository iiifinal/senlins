import React from 'react'
import {Carousel, Icon} from 'antd'
import style from './personal.css'
import {connect} from 'react-redux'
import {getTeamData} from '../../redux/home.redux'




@connect(
    state => state.homeState,
    {getTeamData}
)

class Personal extends React.Component {

    componentDidMount() {
        this.props.getTeamData()
    }

    render() {
        const data = this.props.meetusPageData.find(item => item.member_id === this.props.personalId)
        return (
            <div className={style.personal}>
                <Carousel effect={'fade'} autoplay>
                    {data ? data.member_photo.map(
                        (item, index) => <div key={index} className={style.carouseItem}>
                            <img src={require(`${item}`)} alt=""/>
                        </div>
                    ) : <div className={style.carouseItem}>
                        <img src={require('./img/personal-1.jpg')} alt=""/>
                    </div>}

                </Carousel>
                {data?
                    <div className={style.personalText}>
                        <h3>{data.member_name}</h3>
                        <span>{data.member_position}</span>
                        <div className={style.personalTextP}>
                            <p>{data.member_motto} </p>
                        </div>
                        <div className={style.personalTextSwop}>
                            <a href={`${data.member_contact.facebook}`}>
                                <Icon style={
                                    {fontSize: 30, marginRight: 24}
                                }
                                      type="twitter" theme="outlined"/>
                            </a>

                            <a href={`${data.member_contact.weibo}`}>

                                <Icon style={
                                    {fontSize: 30, marginRight: 24}
                                }
                                      type="github" theme="outlined"/>
                            </a>

                            <a href={`${data.member_contact.github}`}>
                                <Icon style={
                                    {fontSize: 30, marginRight: 24}
                                }
                                      type="twitter" theme="outlined"/>
                            </a>




                        </div>
                    </div>:null}

            </div>
        )
    }

}


export default Personal