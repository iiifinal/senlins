import React from 'react'
import style from './detailedCase.css'
import {connect} from 'react-redux'
import {getDetailedCaseData} from "../../redux/home.redux";



function IntroductionSkeleton() {
    return (
        <div className={style.introduction}>
            <div className={style.introductionText}>

                <div className={style.introductionTextItem}>
                    <h5>他们是谁</h5>
                    <p>
                        科切拉谷音乐和艺术节是北美最着名，最受欢迎和最引人注目的现场活动之一。它的母公司Goldenvoice非常保护Coachella品牌，他们的工作非常努力，并要求网络体验与他们的旗舰产品相媲美，但却完全没有分散现实生活中的经验。节日本身。
                    </p>
                </div>

                <div className={style.introductionTextItem}>
                    <h5>挑战</h5>
                    <p>
                        Coachella团队需要在后端和前端进行数字刷新。深度和大量的文本内容已经发展并转移了几年的网站迭代次数，使用户很难找到他们需要的信息。同样，从管理的角度来看，信息的管理和更新变得不雅观和笨拙。
                    </p>
                </div>

                <div className={style.introductionTextItem}>
                    <h5>解决方案</h5>
                    <p>
                        科切拉谷音乐和艺术节是北美最着名，最受欢迎和最引人注目的现场活动之一。它的母公司Goldenvoice非常保护Coachella品牌，他们的工作非常努力，并要求网络体验与他们的旗舰产品相媲美，但却完全没有分散现实生活中的经验。节日本身。
                    </p>
                </div>

                <div className={style.introductionTextItem}>
                    <h5>解决方案</h5>
                    <p>
                        简而言之，我们认为这项工作不言而喻。特别是对于这个项目，显而易见的是，我们实施的系统需要非常智能，但完全不会以牺牲外观和感觉为代价来感受奢华和轻松。
                    </p>
                    <p>
                        我们首先创建了一系列关于网站生命周期如何运作的假设：网站的某些阶段会导致高额活动的门票销售以及用户需要采取非常集中的行动，其次是销售门票的时间跨度并且计划旅程和节日本身将是网站用户的首要考虑因素。这导致我们走上了一条道路，在那里我们创建了一些设计简单的UX原型，可以用目标用户段进行测试。我们做了测试。
                    </p>
                    <p>
                        一旦我们了解了模块化的主题指南，可以根据网站的时刻创建，移动和重新利用，相对于节日时间线，我们知道我们有自己的策略。我们将其与网站范围内的搜索相结合，这是Coachella团队的新功能：我们不再需要将用户引导到网站的特定部分，然后才能提出他们的问题...我们反而有一个功能来满足他们的需求。
                    </p>
                    <p>
                        该网站本身建立在Wordpress上，但它并不止于此。我们与Goldenvoice的技术团队密切合作，确保所有高质量的负载平衡和基础设施细节围绕一个站点，在2天的工作中保持2MM用户的正常运行时间。我们为了创造一种既能设计前进的体验，又不以牺牲浏览器/服务器性能为代价的Webpack来实现javascript，css，字体和其他资产的缩小。此外，作为一种面向未来的形式，为了创造富有表现力的动画和负载，我们使用了Vue.js，它还具有允许'花式'浏览器技巧和变换的额外好处，同时还可以与SEO玩友好。
                    </p>
                    <p>
                        当我们将Wordpress用于网站时，我们利用其优势并添加来自当今网络的最佳实践工作流程来弥补其弱点。当我们使用它时，我们正确使用它。
                    </p>
                </div>
            </div>
            <div className={style.introductionImg}>
                <img src={require(`./img/introduction.png`)} alt=""/>
            </div>
        </div>
    )
}
class Introduction extends React.Component {

    render() {
        const data = this.props.data
        return (
            <div className={style.introduction}>
                <div className={style.introductionText}>

                    {data.case_analysis_text.map(item =>

                        <div className={style.introductionTextItem} key={item.title}>
                            <h5>{item.title}</h5>
                            {item.content.map((v,key) => <p key={key}>{v}</p>)}
                        </div>
                    )}

                </div>
                <div className={style.introductionImg}>
                    <img src={require(`${data.case_analysis_img}`)} alt=""/>
                </div>
            </div>
        )
    }

}

function ResultSkeleton() {
    return (
        <div className={style.result}>
            <div className={style.resultTitle}>
                <h3>成果</h3>
            </div>
            <div className={style.resultCon}>
                <div className={style.resultConItem}>
                    <span>200万次浏览量</span>
                    <h5>48小时</h5>
                </div>

                <div className={style.resultConItem}>
                    <span>活动销售一空</span>
                    <h5>3小时</h5>
                </div>
            </div>
        </div>
    )
}
class Result extends React.Component {
    render() {
        return (
            <div className={style.result}>
                <div className={style.resultTitle}>
                    <h3>成果</h3>
                </div>
                <div className={style.resultCon}>
                    {this.props.data.map((item, index) =>
                        <div className={style.resultConItem} key={index}>
                            <span>{item.start}</span>
                            <h5>{item.end}</h5>
                        </div>
                    )}
                </div>
            </div>
        )
    }

}


function AnalysisSkeleton() {
    return (
        <div className={style.analysis}>
            <div className={style.analysisBanner}>
                <img src={require('./img/Analysis-banner.png')} alt=""/>
            </div>
            <div className={style.analysisItem}>
                <div className={style.analysisItemTitle}>
                    <p>除了所有这些想法之外，我们还希望能够为整个网站制作一个绚丽的移动视图，这样就不会有任何人被排除在外 - 无论他们在哪里浏览 -
                        我们都知道我们正在做些什么。我们为这个网站不仅看起来的方式感到自豪，而且感觉它的感觉也是如此。</p>
                </div>
                <div className={style.analysisItemImg}>
                    <img src={require('./img/Analysis-item1.jpg')} alt=""/>
                    <img src={require('./img/Analysis-item2.jpg')} alt=""/>
                </div>
            </div>

            <div className={style.analysisItem}>
                <div className={style.analysisItemTitle}>
                    <p>
                        我们对来自加州大学戴维斯分校设计组的22名学生进行了初步概念的实际用户测试，这些学生直接进入了Coachella的目标受众。
                        看到用户与原型进行交互挑战了我们最初的UI假设，但最重要的是，虽然普通用户知道Coachella是什么，但他们没有任何背景知道他们应该在网站上寻找什么。
                        这种洞察力促使我们创建了一个模块化的指南系统，可以根据在任何特定时刻最重要的信息不断重新排序，并将用户手持到他们需要的内容。
                    </p>
                </div>
                <div className={style.analysisItemImg}>
                    <img src={require('./img/Analysis-item1.jpg')} alt=""/>
                    <img src={require('./img/Analysis-item2.jpg')} alt=""/>
                </div>
            </div>

            <div className={style.analysisItem}>
                <div className={style.analysisItemTitle}>
                    <p>
                        通过逻辑内容分组和引导用户流程，我们能够将用户的旅行计划时间缩短37％。
                    </p>
                </div>
                <div className={style.analysisItemImg}>
                    <img src={require('./img/Analysis-item1.jpg')} alt=""/>
                    <img src={require('./img/Analysis-item2.jpg')} alt=""/>
                </div>
            </div>

            <div className={style.analysisItem}>
                <div className={style.analysisItemTitle}>
                    <p>
                        简而言之，我们认为这项工作不言而喻。特别是对于这个项目，显而易见的是，我们实施的系统需要非常智能，但完全不会以牺牲外观和感觉为代价来感受奢华和轻松。
                    </p>
                </div>
                <div className={style.analysisItemImg}>
                    <img src={require('./img/Analysis-item1.jpg')} alt=""/>
                    <img src={require('./img/Analysis-item2.jpg')} alt=""/>
                </div>
            </div>
        </div>
    )

}
class Analysis extends React.Component {

    render() {
        return (
            <div className={style.analysis}>
                <div className={style.analysisBanner}>
                    <img src={require(`${this.props.case_figure}`)} alt=""/>
                </div>
                {this.props.data.map((item, index) =>
                    <div className={style.analysisItem} key={index}>
                        <div className={style.analysisItemTitle}>
                            {item.explain.map((v,key) => <p key={key}>{v}</p>)}

                        </div>
                        <div className={style.analysisItemImg}>
                            {item.img.map((k,key) =><img key={key} src={require(`${k}`)} alt=""/>)}
                        </div>
                    </div>
                )}
            </div>
        )
    }


}

@connect(
    state => state.homeState,
    {getDetailedCaseData}
)
class DetailedCase extends React.Component {

    componentDidMount() {
        this.props.getDetailedCaseData()
    }

    render() {

        const caseData = this.props.detailedCaseData.find(item => item.case_id === this.props.selectedCaseId)


        return (
            <div className={style.detailedCase}>

                <div className={style.titleCon}>
                    {caseData ? <div className={style.titleConText}>
                        <span>{caseData.case_name}</span>
                        <p>{caseData.case_brief}</p>
                        <a href={`${caseData.case_href}`}>启动项目</a>
                    </div> : <div className={style.titleConText}>暂无数据</div>}

                    <div className={style.titleConImg}>
                        {caseData ? <img src={require(`${caseData.case_title_img}`)} alt=""/> : null}
                    </div>
                </div>

                <div className={style.pageDemand}>
                    {caseData ? <p>{caseData.case_demand}</p> : null}
                </div>

                {caseData ? <Introduction data={caseData.case_analysis}></Introduction> :
                    <IntroductionSkeleton></IntroductionSkeleton>}
                {caseData ? <Result data={caseData.case_result}></Result> : <ResultSkeleton></ResultSkeleton>}

                <div className={style.summary}>
                    <p>{caseData ? caseData.case_to_sum_up : null}</p>
                </div>

                {caseData ? <Analysis case_figure={caseData.case_figure}
                                      data={caseData.case_show}
                ></Analysis> : <AnalysisSkeleton></AnalysisSkeleton>}

            </div>
        )
    }

}


export default DetailedCase