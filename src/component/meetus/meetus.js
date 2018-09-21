import React from 'react'
import {Popover} from 'antd';
import style from './meetus.css'
import BGIMG from './img/meetus_bg.jpg'
import TEAM from './img/sea_team.jpg'
import ItemImg from './img/itemImg.jpg'
import JOIN from './img/joinUs.jpg'


const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
)

class Meetus extends React.Component {
    render() {
        return (
            <div className={style.meetusPage}>
                <div className={style.meetusHeader}>
                    <div className={style.meetusHeaderSet}>
                        <div className={style.meetusHeaderLeft}>
                            <div className={style.meetusHeaderLeftImg}>
                                <img src={BGIMG} alt=""/>
                            </div>

                        </div>
                        <div className={style.meetusHeaderRight}>

                            <div className={style.meetusHeaderText}>
                                <span>JARE WIDRED</span>
                                <h3>WEBDING PLAANNER</h3>
                                <p>She no longer saw a little girl in a simple dress.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <div className={style.summary}>
                    <div className={style.summaryLeft}>
                        <h3>She no longer saw a little girl in a simple dress. She saw a child wrapped…in her mother's
                            love.</h3>
                        <p>
                            Then suddenly the little girl did something that the woman thought was a bit strange.She
                            stopped crying,stepped back from the woman and began to sing.She sang so softly that it was
                            almost a whisper. It was the sweetest sound the woman had ever heard,almost like the song of
                            a very small bird.
                        </p>
                    </div>
                    <div className={style.summaryRight}>
                        <div className={style.summaryRightTitle}>
                            <p>"what do you want me to see?"</p>
                        </div>
                        <div className={style.summaryRightImg}>
                            {/*<img src={SUM} alt=""/>*/}
                        </div>
                    </div>
                </div>
                <div className={style.teamEvery}>
                    <div className={style.teamEveryImg}>
                        <img src={TEAM} alt=""/>
                    </div>
                    <div className={style.teamEveryMan}>
                        <div className={style.teamEveryManTitle}>
                            <h3>Featured Gallery</h3>
                            <p>
                                Catch the star that holds your destiny, the one that forever twinkles within your heart.
                                Take advantage of precious opportunities while they still sparkle before you.
                            </p>
                        </div>
                        <div className={style.teamEveryManCon}>


                            <div className={style.teamEveryManConItem}>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                            </div>


                            <div className={style.teamEveryManConItem}>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                            </div>

                            <div className={style.teamEveryManConItem}>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                            </div>

                            <div className={style.teamEveryManConItem}>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                            </div>
                            <div className={style.teamEveryManConItem}>
                                <Popover
                                    content={content} title="Title" trigger="click"
                                    className={style.teamEveryManConItemImg}>
                                    <img src={ItemImg} alt=""/>
                                </Popover>
                            </div>


                        </div>
                    </div>
                </div>
                <div className={style.joinUs}>
                    <div className={style.joinUsSetWidth}>

                        <p className={style.joinUsTitle}>LALAKHAL</p>
                        <div className={style.joinUsText}>
                            Take pride in your accomplishments, as they are stepping stones to your dreams. Understand that
                            you may make mistakes, but don't let them discourage you. Value your capabilities and talents
                            for they are what make you truly unique.
                        </div>
                        <div className={style.joinUsGraphic}>
                            <div className={style.joinUsGraphicLeft}>
                                <p>
                                    The greatest gifts in life are not purchased, but acquired through hard work and
                                    determination. Find the star that twinkles in your heart. For you alone are capable of
                                    making your brightest dreams come true.
                                </p>
                                <div>
                                    <img src={JOIN} alt=""/>
                                </div>
                            </div>
                            <div className={style.joinUsGraphicRight}>
                                <p>
                                    Wherever you are, and whoever you may be, there is one thing in which you and I are just
                                    alike at this monment, and in all the moments of our existence. We are not at rest, we
                                    are on a journey. Our life is a movement, a tendency, a steady, and ceaseless progress
                                    towards an unseen goal.
                                </p>
                                <p>
                                    We are gaining something, or losing something, everyday. Even when our position and our
                                    character seem to remain precisely the same, but in fact, they are changing. For the
                                    mereadvance of time is a change. It is not the same thing to have a bare field in
                                    January and in July. The season makes the difference. The limitations that are childlike
                                    in the child, but childish in the man.
                                </p>
                                <p>
                                    Everything that we do is a step in one direction or another. Even the failure to do
                                    something is in itself a deed. it sets us forward or backward. the action of the
                                    negative pole of a magnetic needle is just as real as the action of the positive pole.
                                    To decline is to accept--the other alternative.
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Meetus