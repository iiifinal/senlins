import React from 'react'
import {Carousel,Icon} from 'antd'
import style from './personal.css'
import {connect} from 'react-redux'

@connect(
    state => state.homeState
)

class PersonalText extends React.Component{
    render(){
        return(
            <div className={style.personalText}>

            </div>
        )
    }
}


class Personal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {

    }

    render() {

        return (
            <div className={style.personal}>
                <Carousel effect={'fade'} autoplay  vertical={true}>
                <div className={style.carouseItem}><img src={require('./img/personal-1.jpg')} alt=""/></div>
                <div className={style.carouseItem}><img src={require('./img/personal-2.jpg')} alt=""/></div>
                <div className={style.carouseItem}><img src={require('./img/personal-3.jpg')} alt=""/></div>
                <div className={style.carouseItem}><img src={require('./img/personal-4.jpg')} alt=""/></div>
                </Carousel>
                <div className={style.personalText}>
                    <h3>Martin</h3>
                    <span>技术总监</span>
                    <div className={style.personalTextP}>
                        <p>数字通才逐渐成为流程和运营的管家。在任何给定时间至少打开7个电子表格。爸爸的笑话笑话和及时的讽刺。制造数据驱动的决策和便携式食品。骑自行车的人似乎总是向后停车。  </p>
                    </div>
                    <div className={style.personalTextSwop}>
                        <Icon  style={
                            {fontSize: 30, marginRight:24}
                        }
                               type="twitter" theme="outlined" />
                        <Icon  style={
                            {fontSize: 30, marginRight:24}
                        }
                               type="weibo" theme="outlined" />
                        <Icon  style={
                            {fontSize: 30, marginRight:24}
                        }
                               type="github" theme="outlined" />
                    </div>
                </div>
            </div>
        )
    }

}


export default Personal