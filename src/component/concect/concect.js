import React from 'react'
import { Form, Input,Button, DatePicker, Col, TimePicker, Select, Cascader, InputNumber } from 'antd';
import style from './concect.css'
import HEADERImg from './img/contact_bg.jpg'


const FormItem = Form.Item;
const Option = Select.Option;
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
                <div className={style.about}>
                    <div className={style.aboutTop}>
                        <div className={style.aboutTopImg}>
                            <div className={style.aboutTopImgTitle}>
                                你准备好了吗？
                            </div>
                            <span className={style.aboutTopImgimg}>Icon</span>
                        </div>
                        <div className={style.aboutTopText}>
                            <h3>In 1989 an 8.2 earthquake almost flattened America</h3>
                            <div className={style.aboutTopTextCon}>
                                <p>
                                    killing over 30,000 people in less than four minutes. In the midst of utter
                                    devastation and chaos, a father left his wife safely at home and rushed to the
                                    school where his son was supposed to be, only to discover that the building was
                                    as flat as a pancake.
                                </p>
                                <p>
                                    After the unforgettably initial shock, he remembered the promise he had made to
                                    his son: "No matter what, I’ll always be there for you!" And tears began to fill
                                    his eyes. As he looked at the pile of ruins that once was the school, it looked
                                    hopeless, but he kept remembering his commitment to his son.
                                </p>
                                <p>
                                    He began to direct his attention towards where he walked his son to class at
                                    school each morning. Remembering his son s classroom would be in the back right
                                    corner of the building; he rushed there and started digging through the ruins.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={style.aboutCenter}>
                        <div className={style.aboutCenterLeft}>
                            <div className={style.aboutCenterLeftColor}></div>
                            <div className={style.aboutCenterLeftImg}>
                            </div>
                        </div>
                        <div className={style.aboutCenterRight}>
                            <h3>高級品市場は、常に力と洗練された嗜好を表してきた。</h3>
                            <p>
                                取引には多くの誠実な業者がいるかもしれないが、本当の価値を判断する信頼できるシステムがないことが、市場の信用度に悪影響を及ぼすということが事実である。当該高級品の所有者らはお金を失うことへの恐怖から、彼らが所有する商品を販売しようと考える時は消極的になった。所有者が本当の金銭的価値に全く気が付かないせいで、結果的に商品は地下室や屋根裏送りになりほこりをかぶることになる。
                            </p>
                            <span>Go it now!</span>
                        </div>
                    </div>


                    <div className={style.aboutBottom}>
                        <div className={style.aboutBottomLeft}>
                            <h3>高級品市場は、常に力と洗練された嗜好を表してきた。</h3>
                            <p>
                                取引には多くの誠実な業者がいるかもしれないが、本当の価値を判断する信頼できるシステムがないことが、市場の信用度に悪影響を及ぼすということが事実である。当該高級品の所有者らはお金を失うことへの恐怖から、彼らが所有する商品を販売しようと考える時は消極的になった。所有者が本当の金銭的価値に全く気が付かないせいで、結果的に商品は地下室や屋根裏送りになりほこりをかぶることになる。
                            </p>
                            <span>Go it now!</span>
                        </div>

                        <div className={style.aboutBottomRight}>
                            <div className={style.aboutBottomRightImg}></div>
                            <div className={style.aboutBottomRightColor}></div>
                        </div>
                    </div>
                </div>
                <div className={style.concect}>
                    <div className={style.concectSetWidth}>
                        <div className={style.concectTitle}>
                            <p>留言给我们</p>
                        </div>

                        <Form className={style.concectForm}>
                                <div className={style.concectFormLeft}>
                                    <FormItem className={style.concectFormItem}
                                        {...formItemLayout}
                                        label="姓名:"
                                    >
                                        <Input placeholder="请输入你的名字" id="Yname" />
                                    </FormItem>
                                    <FormItem className={style.concectFormItem}
                                        {...formItemLayout}
                                        label="电话号码:"
                                    >
                                        <Input placeholder="请输入你的电话" id="phone" />
                                    </FormItem>
                                    <FormItem className={style.concectFormItem}
                                              {...formItemLayout}
                                              label="电话号码:"
                                    >
                                        <Input placeholder="请输入你的电话" id="phone" />
                                    </FormItem>
                                    <FormItem className={style.concectFormItem}
                                              {...formItemLayout}
                                              label="电话号码:"
                                    >
                                        <Input placeholder="请输入你的电话" id="phone" />
                                    </FormItem>
                                    <FormItem className={style.concectFormItem}
                                              {...formItemLayout}
                                              label="电话号码:"
                                    >
                                        <Input placeholder="请输入你的电话" id="phone" />
                                    </FormItem>
                                </div>
                                <div className={style.concectFormRight}>
                                    <FormItem
                                        {...formItemLayout}
                                        label="项目需求:"
                                    >
                                        <TextArea  placeholder="请输入项目相关需求"
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