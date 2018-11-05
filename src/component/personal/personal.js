import React from 'react'
import {Carousel} from 'antd'
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
            </div>
        )
    }

}


export default Personal