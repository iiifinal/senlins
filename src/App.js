import React, {Component} from 'react';
import {Menu, Icon, Row, Col} from 'antd'
import styles from './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './component/home/home'
import Case from './component/case/case'
import Concect from './component/concect/concect'

class App extends Component {

    render() {
        const SubMenu = Menu.SubMenu;
        const MenuItemGroup = Menu.ItemGroup;
        return (
            <BrowserRouter>
                <div className={styles.header}>
                    <Row type="flex" justify='center'>
                        <Col span={14} push={1}>
                            <div className={styles.senlins}>
                                <Link to='/'>Senlins</Link>
                            </div>
                        </Col>
                        <Col span={8} pull={1}>
                            <Menu className={styles.menu}
                                  onClick={this.handleClick}
                                // selectedKeys={[this.state.current]}
                                  mode="horizontal"
                            >
                                <Menu.Item key="app" className={styles.menuitem}>
                                    <Link  to={'/'}><Icon type="appstore"/>Home</Link>
                                </Menu.Item>
                                <SubMenu title={<span className={styles.flagSpan}><Icon type="search"/><Link to={'/case'}>Case</Link></span>} className={styles.menuitem}>
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
                            </Menu>
                        </Col>
                    </Row>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/case' component={Case}/>
                    <Route exact path='/concect' component={Concect}/>
                </div>

            </BrowserRouter>
        );
    }
}

export default App;
