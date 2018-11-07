import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom'


import {Menu, Icon, Row, Col} from 'antd'
import styles from './App.css';

import Home from './component/home/home'
import Case from './component/case/case'
import Concect from './component/concect/concect'
import Meetus from './component/meetus/meetus'
import Recommend from './component/recommend/recommend'
import Skill from './component/skill/skill'
import DetailedCase from './component/detailedCase/detailedCase'
import Personal from './component/personal/personal'
import Dynamic from './component/dynamic/dynamic'
import Join from './component/join/join'


function Header() {
    return (
        <div className={styles.header}>
            <Row type="flex" justify='center'>
                <Col span={10} push={1}>
                    <div className={styles.senlins}>
                        <Link to='/' className={styles.senlinsLink}>
                            <img src={require('./common/images/senlins.png')} alt=""/>
                        </Link>
                    </div>
                </Col>

                <Col pull={1}>
                    <Menu className={styles.menu}

                          mode="horizontal"
                    >
                        <Menu.Item key="app" className={styles.menuitem}>
                            <Link to={'/'}><Icon type="home" theme="outlined" />首页</Link>
                        </Menu.Item>

                        <Menu.Item key="case" className={styles.menuitem}>
                            <Link to={'/case'}><Icon type="ordered-list" theme="outlined" />案例</Link>
                        </Menu.Item>

                        <Menu.Item key="dynamic" className={styles.menuitem}>
                            <Link to={'/dynamic'}><Icon type="loading" theme="outlined" />动态</Link>
                        </Menu.Item>

                        <Menu.Item key="meetus" className={styles.menuitem}>
                            <Link to={'/meetus'}><Icon type="team" theme="outlined" />我们</Link>
                        </Menu.Item>

                        <Menu.Item key="concect" className={styles.menuitem}>
                            <Link to={'/concect'}><Icon type="phone"/>联系</Link>
                        </Menu.Item>

                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerSetWidth}>
                <div className={styles.footerLift}>
                    <div className={styles.footerLiftLogo}>
                        <h5>SENLINS</h5>
                        <p>项目定制化整体方案解决的企业</p>
                    </div>
                    <div className={styles.footerLiftPhone}>
                        <h5>senlins@qq.com</h5>
                        <span>保持联系</span>
                    </div>
                </div>
                <div className={styles.footerRight}>
                    <div className={styles.footerRightMenu}>
                        <div className={styles.footerRightMenuItem}>首页</div>
                        <div className={styles.footerRightMenuItem}>案例</div>
                        <div className={styles.footerRightMenuItem}>关于</div>
                        <div className={styles.footerRightMenuItem}>联系</div>
                        <div className={styles.footerRightMenuItem}>招聘</div>
                    </div>
                    <div className={styles.footerRightMedia}>
                        <Icon
                              style={
                                  {fontSize: 24, paddingBottom: 6, paddingLeft: 16, paddingTop: 6, paddingRight: 16}
                              } type="weibo" theme="outlined"/>

                        <Icon
                              style={
                                  {fontSize: 24, paddingBottom: 6, paddingLeft: 16, paddingTop: 6, paddingRight: 16}
                              }
                              type="zhihu" theme="outlined"/>

                        <Icon
                              style={
                                  {fontSize: 24, paddingBottom: 6, paddingLeft: 16, paddingTop: 6}}
                              type="twitter" theme="outlined"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

class App extends Component {

    render() {
        return (

            <BrowserRouter>
                <div className={styles.page}>
                    <Route component={Header}></Route>
                    <div className={styles.component}>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/case' component={Case}/>
                        <Route exact path='/concect' component={Concect}/>
                        <Route exact path='/meetus' component={Meetus}/>
                        <Route exact path='/recommend' component={Recommend}/>
                        <Route exact path='/skill' component={Skill}/>
                        <Route exact path='/detailedCase' component={DetailedCase}/>
                        <Route exact path='/personal' component={Personal}/>
                        <Route exact path='/dynamic' component={Dynamic}/>
                        <Route exact path='/join' component={Join}/>
                    </div>
                    <Route component={Footer}></Route>
                </div>
            </BrowserRouter>


        );
    }
}

export default App;
