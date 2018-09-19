import React from 'react'
import {Carousel, Row, Card,Icon} from 'antd'
import style from './home.css'
import IMG1 from './img/home_item_1.jpeg'
import AVATAR from './img/avatar.jpeg'

class Home extends React.Component {
    render() {

        return (

            <div className={style.content}>
                <div className={style.bgImg}></div>
                <div className={style.cascade}>
                    <h3>I am apple, this a good idea.</h3>
                    <p>Her voice was so sweet as it broke the hypnotic trance we were all caught in, “Mom, let's run
                        through the rain." she said.</p>
                    <p>What? Mom asked.</p>
                    <p>Let's run through the rain! She repeated.</p>
                </div>

                <div className={style.section}>
                    <div className={style.ConLeft}>
                        <div>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                        </div>
                    </div>
                    <div className={style.ConRight}>
                        <div className={style.ConItem}>
                            <div className={style.title}>
                                <h5>A</h5>
                                <p>
                                    She had been shopping with her Mom in Wal-Mart. She must have been 6 years old, this
                                    beautiful brown haired, freckle-faced image of innocence. It was pouring outside.
                                    The kind of rain that gushes over the top of rain gutters, so much in a hurry to hit
                                    the Earth, it has no time to flow down the spout.
                                    We all stood there under the awning and just inside the door of the Wal-Mart. We all
                                    waited, some patiently, others irritated, because nature messed up their hurried
                                    day. I am always mesmerized by rainfall. I get lost in the sound and sight of the
                                    heavens washing away the dirt and dust of the world. Memories of running, splashing
                                    so carefree as a child come pouring in as a welcome reprieve from the worries of my
                                    day.
                                </p>
                            </div>
                            <figure className={style.imgCon}>
                                <div className={style.imgSetWidth}>
                                    <img src={IMG1} alt=""/>
                                </div>
                                <p>世间万物皆有自己的季节，做任何事情也有一个恰当的时机。希望你有机会在雨中狂奔一回。</p>
                            </figure>
                        </div>
                        <div className={style.ConItem}>
                            <div className={style.title}>
                                <h5>B</h5>
                                <p>
                                    She had been shopping with her Mom in Wal-Mart. She must have been 6 years old, this
                                    beautiful brown haired, freckle-faced image of innocence. It was pouring outside.
                                    The kind of rain that gushes over the top of rain gutters, so much in a hurry to hit
                                    the Earth, it has no time to flow down the spout.
                                    We all stood there under the awning and just inside the door of the Wal-Mart. We all
                                    waited, some patiently, others irritated, because nature messed up their hurried
                                    day.
                                </p>
                            </div>
                            <figure className={style.imgCon}>
                                <div className={style.imgSetWidth}>
                                    <img src={IMG1} alt=""/>
                                </div>
                                <p>世间万物皆有自己的季节，做任何事情也有一个恰当的时机。希望你有机会在雨中狂奔一回。</p>
                            </figure>
                        </div>
                        <div className={style.ConItem}>
                            <div className={style.title}>
                                <h5>C</h5>
                                <p>
                                    She had been shopping with her Mom in Wal-Mart. She must have been 6 years old, this
                                    beautiful brown haired, freckle-faced image of innocence. It was pouring outside.
                                    We all stood there under the awning and just inside the door of the Wal-Mart. We all
                                    waited, some patiently, others irritated, because nature messed up their hurried
                                    day. I am always mesmerized by rainfall. I get lost in the sound and sight of the
                                    heavens washing away the dirt and dust of the world. Memories of running, splashing
                                    so carefree as a child come pouring in as a welcome reprieve from the worries of my
                                    day.
                                </p>
                            </div>
                            <div className={style.imgCon}>
                                <figure className={style.imgSetWidth}>
                                    <img src={IMG1} alt=""/>
                                </figure>
                                <p>世间万物皆有自己的季节，做任何事情也有一个恰当的时机。希望你有机会在雨中狂奔一回。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.nameItem}>
                    <div className={style.nameSetWidth}>
                        <article className={style.nameLeft}>
                            <div className={style.avatar}>
                                <img src={AVATAR} alt=""/>
                            </div>
                            <h3>I am a bad apple!</h3>
                            <h5>Why do or not to do in every time.</h5>
                            <p>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </p>
                        </article>
                        <article className={style.nameRight}>
                            <div className={style.contact}>
                                <div className={style.email}>
                                    <h3 className={style.EmailTitle}>Email:</h3>
                                    <p>FruitOfWisdom@google.com</p>
                                </div>
                                <div className={style.phone}>
                                    <h3 className={style.PhoneTitle}>Phone:</h3>
                                    <p>123456789</p>
                                </div>
                            </div>
                            <div className={style.label}>
                                <h3 className={style.LabelTitle}>
                                    Impression:
                                </h3>
                                <div className={style.impression}>
                                    <span>despair</span>
                                    <span>confusion</span>
                                    <span>lonesome</span>
                                    <span>despair</span>
                                    <span>confusion</span>
                                    <span>lonesome</span>
                                    <span>despair</span>
                                    <span>confusion</span>
                                    <span>lonesome</span>
                                    <span>despair</span>
                                    <span>confusion</span>
                                    <span>lonesome</span>
                                    <span>despair</span>
                                    <span>confusion</span>
                                    <span>lonesome</span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
                <div className={style.others}>
                    <div className={style.otherSetWidth}>

                        <h3 className={style.othersTitle}>
                            OTHERS
                        </h3>
                        <article className={style.othersCon}>
                            <div className={style.othersConItem}>
                                <div className={style.othersConItemImg}>
                                    <img src={AVATAR} alt=""/>
                                </div>
                                <h3>Cat</h3>
                                <h5>
                                    The story goes that some time ago, for
                                    wasting a roll of gold wrapping paper.
                                </h5>
                                <p>Money was tight and he became infuriated when the child tried to decorate a box to
                                    put under the Christmas tree. </p>
                                <div className={style.othersConItemStore}>
                                    <span className={style.othersConItemStoreLike}>
                                        <Icon type='heart'></Icon><span>123456</span>
                                    </span>
                                    <span className={style.othersConItemStoreLook}>
                                        <Icon type='eye'></Icon><span>123456</span>
                                    </span>
                                </div>
                            </div>
                            <div className={style.othersConItem}>
                                <div className={style.othersConItemImg}>
                                    <img src={AVATAR} alt=""/>
                                </div>
                                <h3>Cat</h3>
                                <h5>
                                    The story goes that some time ago.
                                </h5>
                                <p>Money was tight and he became infuriated when the child tried to decorate a box to
                                    put under the Christmas tree. Nevertheless, the little girl brought
                                </p>
                                <div className={style.othersConItemStore}>
                                    <span className={style.othersConItemStoreLike}>
                                        <Icon type='heart'></Icon><span>123456</span>
                                    </span>
                                    <span className={style.othersConItemStoreLook}>
                                        <Icon type='eye'></Icon><span>123456</span>
                                    </span>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        )
    }

}

export default Home