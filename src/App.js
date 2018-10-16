import React, {Component} from 'react';
import {Menu, Icon, Row, Col} from 'antd'
import styles from './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './component/home/home'
import Case from './component/case/case'
import Concect from './component/concect/concect'
import Meetus from './component/meetus/meetus'

class App extends Component {

    render() {
        const SubMenu = Menu.SubMenu;
        const MenuItemGroup = Menu.ItemGroup;
        return (
            <BrowserRouter>
                <div className={styles.page}>
                    <div className={styles.header}>
                        <Row type="flex" justify='center'>
                            <Col span={10} push={1}>
                                <div className={styles.senlins}>
                                    <Link to='/'>SENLINS</Link>
                                </div>
                            </Col>

                            <Col pull={1}>
                                <Menu className={styles.menu}
                                      onClick={this.handleClick}
                                      mode="horizontal"
                                >
                                    <Menu.Item key="app" className={styles.menuitem}>
                                        <Link to={'/'}><Icon type="appstore"/>首页</Link>
                                    </Menu.Item>

                                    <Menu.Item key="case" className={styles.menuitem}>
                                        <Link to={'/case'}><Icon type="search"/>案例</Link>
                                    </Menu.Item>
                                    {/*<SubMenu title={<span className={styles.flagSpan}><Icon type="search"/><Link*/}
                                        {/*to={'/case'}>Case</Link></span>} className={styles.menuitem}>*/}
                                        {/*<MenuItemGroup title="Item 1">*/}
                                            {/*<Menu.Item key="setting:1">Option 1</Menu.Item>*/}
                                            {/*<Menu.Item key="setting:2">Option 2</Menu.Item>*/}
                                        {/*</MenuItemGroup>*/}
                                        {/*<MenuItemGroup title="Item 2">*/}
                                            {/*<Menu.Item key="setting:3">Option 3</Menu.Item>*/}
                                            {/*<Menu.Item key="setting:4">Option 4</Menu.Item>*/}
                                        {/*</MenuItemGroup>*/}
                                    {/*</SubMenu>*/}



                                    <Menu.Item key="meetus" className={styles.menuitem}>
                                        <Link to={'/meetus'}><Icon type="book"/>我们</Link>
                                    </Menu.Item>
                                    <Menu.Item key="concect" className={styles.menuitem}>
                                        <Link to={'/concect'}><Icon type="phone"/>联系</Link>
                                    </Menu.Item>

                                </Menu>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.component}>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/case' component={Case}/>
                        <Route exact path='/concect' component={Concect}/>
                        <Route exact path='/meetus' component={Meetus}/>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.FooterSetWidth}>
                            <div className={styles.FooterItem}>
                                <h3 className={styles.FooterItemTitle}>商务电话</h3>

                                <div>17603090160</div>
                            </div>
                            <div className={styles.FooterItem}>
                                <h3 className={styles.FooterItemTitle}>商务邮箱</h3>

                                <div>senlins.com</div>
                            </div>
                            <div className={styles.FooterItem}>
                                <h3 className={styles.FooterItemTitle}>媒体联系</h3>

                                <div>17603090160</div>
                            </div>
                            <div className={styles.FooterItemFlag}>
                                <h3 className={styles.FooterFlagTitle}>关注我们</h3>
                                <span>想了解我们的最新动态？可以点击关注哦</span>
                                <div className={styles.FooterItemFlagCon}>
                                <div>v</div>
                                <div>v</div>
                            </div>

                            </div>
                        </div>
                        <div className={styles.senlinCat}>
                            <p>深圳市森林猫网络科技有限公司@..SenLinsCat@qq.com</p>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
