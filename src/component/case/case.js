import React from 'react'
import {Input, Drawer, Button} from 'antd';
import style from './case.css'
import App1 from './img/app_1.jpg'
import App2 from './img/app_2.jpg'
import App3 from './img/app_3.jpg'
import DetailedCase1 from './img/DetailedCase_1.jpg'
import DetailedCase2 from './img/DetailedCase_2.jpg'


class Case extends React.Component {

    state = {visible: false};

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div className={style.caseContent}>
                <div className={style.caseConSetWidth}>
                    <div className={style.FirstCase}>
                        <div className={style.FirstCaseLeft}>
                            <span>HELLO</span>
                            <h3>I"m Apple</h3>
                            <h5>A freelance web Designer & Developer</h5>
                            <p> HIRE ME</p>
                        </div>
                        <div className={style.FirstCaseRight}>
                        </div>
                    </div>
                    <div className={style.Cooperation}>
                        <div>Cooperation brand</div>
                        <div>Cooperation brand</div>
                        <div>Cooperation brand</div>
                        <div>Cooperation brand</div>
                    </div>
                    <div className={style.CaseList}>
                        <div className={style.CaseListTitle}>
                            <h3>Case Collection</h3>
                            <p>
                                "Oh, Daddy, it's not empty at all. I blew kisses into the box. They're all for you,
                                Daddy."
                            </p>
                        </div>
                        <div className={style.CaseListCon}>
                            <div className={style.CaseListItem}>
                                <div className={style.CaseListItemImg}>
                                    <img src={App2} alt=""/>
                                </div>
                                <h3>Apple is a kind of fruit that can be eaten.</h3>
                                <h5>Avatar: <span>Apple</span></h5>
                                <span className={style.CaseListItemLine}></span>
                                <p>苹果（学名：Malus pumila）是水果的一种，是蔷薇科苹果亚科苹果属植物，其树为落叶乔木。苹果的果实富含矿物质和维生素，是人们经常食用的水果之一。</p>
                            </div>
                            <div className={style.CaseListItem}>
                                <div className={style.CaseListItemImg}>
                                    <img src={App1} alt=""/>
                                </div>
                                <h3>Apple is a kind of fruit that can be eaten.</h3>
                                <h5>Avatar: <span>Apple</span></h5>
                                <span className={style.CaseListItemLine}></span>
                                <p>苹果（学名：Malus pumila）是水果的一种，是蔷薇科苹果亚科苹果属植物，其树为落叶乔木。苹果的果实富含矿物质和维生素，是人们经常食用的水果之一。</p>
                            </div>
                            <div className={style.CaseListItem}>
                                <div className={style.CaseListItemImg}>
                                    <img src={App1} alt=""/>
                                </div>
                                <h3>Apple is a kind of fruit that can be eaten.</h3>
                                <h5>Avatar: <span>Apple</span></h5>
                                <span className={style.CaseListItemLine}></span>
                                <p>苹果（学名：Malus pumila）是水果的一种，是蔷薇科苹果亚科苹果属植物，其树为落叶乔木。苹果的果实富含矿物质和维生素，是人们经常食用的水果之一。</p>
                            </div>
                            <div className={style.CaseListItem}>
                                <div className={style.CaseListItemImg}>
                                    <img src={App3} alt=""/>
                                </div>
                                <h3>Apple is a kind of fruit that can be eaten.</h3>
                                <h5>Avatar: <span>Apple</span></h5>
                                <span className={style.CaseListItemLine}></span>
                                <p>苹果（学名：Malus pumila）是水果的一种，是蔷薇科苹果亚科苹果属植物，其树为落叶乔木。苹果的果实富含矿物质和维生素，是人们经常食用的水果之一。</p>
                            </div>
                            <div className={style.CaseListItem}>
                                <div className={style.CaseListItemImg}>
                                    <img src={App1} alt=""/>
                                </div>
                                <h3>Apple is a kind of fruit that can be eaten.</h3>
                                <h5>Avatar: <span>Apple</span></h5>
                                <span className={style.CaseListItemLine}></span>
                                <p>苹果（学名：Malus pumila）是水果的一种，是蔷薇科苹果亚科苹果属植物，其树为落叶乔木。苹果的果实富含矿物质和维生素，是人们经常食用的水果之一。</p>
                            </div>
                            <div className={style.CaseListItem}>
                                <div className={style.CaseListItemImg}>
                                    <img src={App2} alt=""/>
                                </div>
                                <h3>Apple is a kind of fruit that can be eaten.</h3>
                                <h5>Avatar: <span>Apple</span></h5>
                                <span className={style.CaseListItemLine}></span>
                                <p>苹果（学名：Malus pumila）是水果的一种，是蔷薇科苹果亚科苹果属植物，其树为落叶乔木。苹果的果实富含矿物质和维生素，是人们经常食用的水果之一。</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={style.detailedCase}>
                    <div className={style.detailedCaseLeft}>
                        <h3>Latest Work</h3>
                        <p className={style.detailedCaseLeftSubtitle}>
                            Finally the woman realized what the child meant,and why she was crying.Kneeling down she
                            gently cradled the child in her arms and together they cried for the mommy that was gone.
                        </p>
                        <p className={style.detailedCaseLeftText}>
                            Then suddenly the little girl did something that the woman thought was a bit strange.She
                            stopped crying,stepped back from the woman and began to sing.She sang so softly that it was
                            almost a whisper. It was the sweetest sound the woman had ever heard,almost like the song of
                            a very small bird.
                        </p>
                        <span>
                            SEE MORE
                        </span>

                    </div>
                    <div className={style.detailedCaseRight}>
                        <img src={DetailedCase1} alt=""/>
                    </div>
                </div>
                <div className={style.workProcess}>
                    <div className={style.workProcessLeft}>
                        <img src={DetailedCase2} alt=""/>
                    </div>
                    <div className={style.workProcessRight}>
                        <h3>HOW TO WORD !</h3>
                        <p>Pointing to a spot on her dress,she said,"Right here is where my mommy kissed my dress,and
                            here,"pointing to another spot,"and here is another kiss, and here,and here.Mommy said that
                            she put all those kisses on my dress so that I would have her kisses for every booboo'that
                            made me cry."</p>
                        <span>GO IT !</span>
                    </div>
                </div>
                <div className={style.searchCon}>
                    <div className={style.searchConSetWidth}>


                        <p>
                            Can't find the project case you want to know ? Please try it out and see more cases ...
                        </p>
                        <div className={style.search}>
                            <Input className={style.input}/>
                            <Button type="primary" className={style.button}
                                    onClick={this.showDrawer}>
                                Search More
                            </Button>
                        </div>
                        <Drawer
                            title="显示结果"
                            placement="right"
                            closable={false}
                            onClose={this.onClose}
                            visible={this.state.visible}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Drawer>
                    </div>
                </div>
            </div>
        )
    }

}

export default Case