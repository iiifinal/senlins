import React from 'react'
import style from './case.css'
// import Apple from './img/apple.jpg'
class Case extends React.Component{
    render(){
        return(
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
                </div>
            </div>
        )
    }

}
export default Case