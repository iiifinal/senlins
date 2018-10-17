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
                                设计和用户体验
                            </div>
                            <span className={style.aboutTopImgimg}>Icon</span>
                        </div>
                        <div className={style.aboutTopText}>
                            <h3>通过数字艺术和战略内容架构创建的基于研究和魔术的用户旅程</h3>
                            <div className={style.aboutTopTextCon}>
                                <p>
                                    与您的想法相反，“设计”不仅仅是我们制作它的过程。它实际上是由数据，事实和经验驱动的数百个审美决策的结果。
                                </p>
                                <p>
                                    我们的创意是由表达和创新驱动的。通过真实和情感的区分与用户建立联系对于我们的流程同样重要，因为需要为客户带来新的更好的体验。
                                </p>
                                <p>
                                    规划用户的体验是试验和错误。我们必须计划，原型，失败和迭代。您应该期望我们在我们的武器库中使用许多规划工具，如线框图和用户流程。但是你也应该期待我们分享疯狂的想法，与你合作，与友人和陌生人一起测试，然后再回到白板。
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
                            <h3>全栈技术开发</h3>
                            <p>
                                丰富，身临其境，响应迅速的开发解决方案，植根于通信和转换。
                                是的，我们建立的网站运作良好，运作良好，并保留（甚至增加）其价值。但是我们的开发人员也是熟练的问题解决者，他们不仅仅是在浏览器中使事情看起来很好。
                                我们在这个过程中的角色是为我们的客户充当技术专家，这样你就可以成为自己的专家。
                            </p>
                            <span>阅读更多</span>
                        </div>
                    </div>


                    <div className={style.aboutBottom}>
                        <div className={style.aboutBottomLeft}>
                            <h3>整体数字战略</h3>
                            <p>
                                规划，生产，资产，工具，数据驱动的见解以及超越发布的合作伙伴关系的结合。全程为长期。
                                扩展的伙伴关系不应该感觉到完全不同于点菜，项目到项目。这只意味着我们能够在工作上线后继续使用，监控其性能，并确保我们能够微调以获得最佳成功。
                            </p>
                            <span>阅读更多</span>
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
                                        label="项目的顶级描述:"
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