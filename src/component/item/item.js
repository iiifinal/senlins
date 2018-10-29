import React from 'react'
// import {Carousel, Row, Card, Icon, Rate} from 'antd'
import style from './item.css'
class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        console.log(this.props.case);
        const imgList = [
           {
               url:require('./item-1.jpg')
           },
           {
               url:require('./item-2.jpg')
           } ,{
               url:require('./item-3.jpg')
           }
        ]

        return (
            <div className={style.itemListCon}>

                {imgList.map((item,index)=> {return <img key={index} className={style.imgItem} src={item.url} alt=""/>})}
            </div>
        )
    }

}

export default Item