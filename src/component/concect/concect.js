import React from 'react'
import { Form, Input,Button,Icon } from 'antd';
import {Route} from 'react-router-dom'
import style from './concect.css'


const FormItem = Form.Item;

const { TextArea } = Input

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 5 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 15 },
    },
};


class Information extends React.Component{
    render(){
        return(
            <div className={style.information}>
                <div className={style.informationTitle}>
                    <h3>联系</h3>
                </div>
                <div className={style.informationCon}>
                    <div className={style.informationConItem}>
                        <Icon type="compass"
                              style={
                                  {fontSize: 24}}
                              theme="outlined" />
                        <span>获取路线</span>
                    </div>

                    <div className={style.informationConItem}>
                        <Icon type="mail"
                              style={
                                  {fontSize: 24}}
                              theme="outlined" />
                        <span>maldek@qq.com</span>
                    </div>

                    <div className={style.informationConItem}>
                        <Icon type="phone"
                              style={
                                  {fontSize: 24}}
                              theme="outlined" />
                        <span>17603090160</span>
                    </div>

                    <div className={style.informationConItem}>

                        <Icon type="environment"
                              style={
                                  {fontSize: 24}}
                              theme="outlined" />
                        <span>深圳市龙岗区西湖路创业园C座312室</span>
                    </div>


                </div>
            </div>
        )
    }
}
class Concect extends React.Component {
    render() {
        return (
            <div className={style.page}>
                <div className={style.header}>
                    <div className={style.headerBgImg}>
                        <p>建立你的项目</p>
                        <h3>Create Design & App</h3>
                        <span>Do It!</span>
                    </div>
                </div>
                <Route component={Information}></Route>
                <div className={style.concect}>
                    <div className={style.concectSetWidth}>
                        <div className={style.concectTitle}>
                            <p>留言</p>
                        </div>

                        <Form className={style.concectForm}>
                                <div className={style.concectFormLeft}>
                                    <FormItem className={style.concectFormItem}
                                        {...formItemLayout}
                                        label="你的姓名:"
                                    >
                                        <Input placeholder="名字？" id="Yname" />
                                    </FormItem>
                                    <FormItem className={style.concectFormItem}
                                        {...formItemLayout}
                                        label="联系方式:"
                                    >
                                        <Input placeholder="电话？" id="phone" />
                                    </FormItem>
                                    <FormItem className={style.concectFormItem}
                                              {...formItemLayout}
                                              label="电子邮箱:"
                                    >
                                        <Input placeholder="邮箱？" id="phone" />
                                    </FormItem>
                                    <FormItem className={style.concectFormItem}
                                              {...formItemLayout}
                                              label="预算资金:"
                                    >
                                        <Input placeholder="金额？" id="phone" />
                                    </FormItem>
                                    <FormItem className={style.concectFormItem}
                                              {...formItemLayout}
                                              label="项目时间:"
                                    >
                                        <Input placeholder="时间？" id="phone" />
                                    </FormItem>
                                </div>
                                <div className={style.concectFormRight}>
                                    <FormItem
                                        {...formItemLayout}
                                        label=""
                                    >
                                        <TextArea  placeholder="项目的顶级描述"
                                                   className={style.concectFormTextArea}
                                         // autosize={{ minRows: 2, maxRows: 60 }}
                                        />
                                    </FormItem>
                                </div>
                        </Form>
                        <div className={style.concectButton}>
                            <Button type="primary" >确认提交</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Concect