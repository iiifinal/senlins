import React from 'react'
import style from './recommend.css'
import {connect} from 'react-redux'

@connect(
    state => state.homeState
)


class Recommend extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
        console.log(this.props.recommendName);
    }

    render() {

        const Allurl = [
            {
                itemName: 'A',
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
                itemName: 'B',
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
                itemName: 'C',
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

        let index=Allurl.findIndex(v=>v.itemName===this.props.recommendName)
        let imgList=Allurl[index].itemUrl
        return (
            <div className={style.itemListCon}>
                {imgList.map((item, index) => {
                    return <img key={index} className={style.imgItem} src={item.url} alt={item.text}/>
                })}
            </div>
        )
    }

}


export default Recommend