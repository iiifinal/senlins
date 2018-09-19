import React, {Component} from 'react';
import {Menu, Icon, Row, Col} from 'antd'
import styles from './App.css';
import {BrowserRouter, Route, Link} from 'react-router-dom'
import Home from './component/home/home'
import Case from './component/case/case'
import Concect from './component/concect/concect'

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
                                    <Link to='/'>Senlins</Link>
                                </div>
                            </Col>

                            <Col pull={1}>
                                <Menu className={styles.menu}
                                      onClick={this.handleClick}
                                      mode="horizontal"
                                >
                                    <Menu.Item key="app" className={styles.menuitem}>
                                        <Link to={'/'}><Icon type="appstore"/>Home</Link>
                                    </Menu.Item>
                                    <SubMenu title={<span className={styles.flagSpan}><Icon type="search"/><Link
                                        to={'/case'}>Case</Link></span>} className={styles.menuitem}>
                                        <MenuItemGroup title="Item 1">
                                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                                        </MenuItemGroup>
                                        <MenuItemGroup title="Item 2">
                                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                                        </MenuItemGroup>
                                    </SubMenu>
                                    <Menu.Item key="alipay" className={styles.menuitem}>
                                        <Link to={'/concect'}><Icon type="phone"/>Contact</Link>
                                    </Menu.Item>
                                    <Menu.Item key="book" className={styles.menuitem}>
                                        <Link to={''}><Icon type="book"/>Book</Link>
                                    </Menu.Item>
                                </Menu>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.component}>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/case' component={Case}/>
                        <Route exact path='/concect' component={Concect}/>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.FooterSetWidth}>
                            <div className={styles.FooterItem}>
                                <h3 className={styles.FooterItemTitle}>CHASE</h3>
                                <div>maldek</div>
                                <div>iiifinal</div>
                                <div>google</div>
                                <div>baidu</div>
                                <div>biddren</div>
                            </div>
                            <div className={styles.FooterItem}>
                                <h3 className={styles.FooterItemTitle}>CHASE</h3>
                                <div>maldek</div>
                                <div>iiifinal</div>
                                <div>google</div>
                                <div>baidu</div>
                                <div>biddren</div>
                            </div>
                            <div className={styles.FooterItem}>
                                <h3 className={styles.FooterItemTitle}>CHASE</h3>
                                <div>maldek</div>
                                <div>iiifinal</div>
                                <div>google</div>
                                <div>baidu</div>
                            </div>
                            <div className={styles.FooterItemFlag}>
                                <h3 className={styles.FooterFlagTitle}>CHASE</h3>
                                <div className={styles.FooterItemFlagCon}>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
