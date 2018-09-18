import React from 'react'
import {Carousel, Row, Card} from 'antd'
import style from './home.css'
import sliderImg from './slider_1.jpg'
import conImg from './content_1.jpg'


class Home extends React.Component {
    render() {
        const url = 'https://datastudio.google.com/embed/reporting/1QzNDWdMPVzCc7bsox8uNWjL-RRoMBxvj/page/pFcY'

        return (
            <div>
                <Carousel className={style.slider} autoplay>
                    <div className={style.sliderItem}><img src={sliderImg}/></div>
                    <div className={style.sliderItem}><img src={sliderImg}/></div>
                    <div className={style.sliderItem}><img src={sliderImg}/></div>
                </Carousel>

                <div className={style.content}>

                </div>

            </div>
        )
    }

}

export default Home