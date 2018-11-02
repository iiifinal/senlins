import React from 'react'
import style from './item.css'
import {connect} from 'react-redux'


@connect(
    state => state.homeState
)


class Item extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props.caseName);
    }

    render() {

        const Allurl = [
            {
                itemName: '独书',
                itemUrl: [

                    {
                        url: require('./item-4.jpg'),
                        text: '案例1'
                    },
                    {
                        url: require('./item-5.jpg'),
                        text: '案例1'
                    }, {
                        url: require('./item-6.jpg'),
                        text: '案例1'
                    }
                ]
            },
            {
                itemName: '我懂了',
                itemUrl: [

                    {
                        url: require('./item-1.jpg'),
                        text: '案例2'
                    },
                    {
                        url: require('./item-2.jpg'),
                        text: '案例2'
                    }, {
                        url: require('./item-3.jpg'),
                        text: '案例2'
                    }
                ]
            },
            {
                itemName: 'UI100',
                itemUrl: [

                    {
                        url: require('./item-7.jpg'),
                        text: '案例3'
                    },
                    {
                        url: require('./item-8.jpg'),
                        text: '案例3'
                    }, {
                        url: require('./item-9.jpg'),
                        text: '案例3'
                    },
                    {
                        url: require('./item-10.jpg'),
                        text: '案例3'
                    },
                    {
                        url: require('./item-11.jpg'),
                        text: '案例3'
                    }, {
                        url: require('./item-12.jpg'),
                        text: '案例3'
                    },
                    {
                        url: require('./item-13.jpg'),
                        text: '案例3'
                    }
                ]
            }

        ]

        let index=Allurl.findIndex(v=>v.itemName===this.props.caseName)
        let imgList=Allurl[index].itemUrl
        return (
            <div className={style.itemListCon}>
                {/*<div>{this.props.caseName}</div>*/}
                {imgList.map((item, index) => {
                    return <img key={index} className={style.imgItem} src={item.url} alt={item.text}/>
                })}
            </div>
        )
    }

}


export default Item