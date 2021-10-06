import {React,useState} from 'react'
import { Link,useLocation } from "react-router-dom"
import easyBg from "../images/easyBg.jpg"
import "../componentsCSS/Submit.css"
import { FaHome } from "react-icons/fa";
import { Button,} from 'styled-button-component';
import Showanswer from './Showanswer';


export default function Submit() {
    const[answersNeeded,setAnswersNeeded] = useState(false)
    const location = useLocation()
    const {crt,final,rememberSelected} = location.state
    
    let m = 0
    let c = 0
    let TM = 0
    for (let k = 0; k< crt.length; k++){
        if (crt[k] === true){
            m += final[k].marks
            c += 1
        }
        TM += final[k].marks
    }

    const changeAnswerNeed = () => {
        setAnswersNeeded(!answersNeeded)
        console.log(crt,final,rememberSelected)
    }
    return (
        <>
         <div>
                <img className="submit-main-bg-image" src={easyBg} alt=" "/>
        </div>
        <div className="home-icon">
        <Link to="/">
            <FaHome className="fahome-icon" size="2rem" onClick={()=>console.log("icon da")}/>
        </Link>
        </div>
        <div className="score-answera-main-div">
            <div className="score-board-card-main">
               <div className="score-board-card">
                    <h3>Total correct    : {c}</h3>
                    <h3>Total questions  : {final.length}</h3>
                    <h3>Total marks      : {m}</h3>
                    <h3>Total percentage : {(m/TM)*100} % </h3>
               </div>
            </div>
            <div className="show-answer-button-div">
                {!answersNeeded ? 
                <Button m1  info lg className="btn" onClick={changeAnswerNeed}>
                        Show Answers
                </Button>: 
                <Button m1  info lg className="btn" onClick={changeAnswerNeed}>
                        Hide Answers
                </Button>
                }
            </div>
            <div>
                {!answersNeeded ? "": 
                    final.map((individual,idx)=>(<Showanswer key={individual.uniqueID} qnsNum={idx+1} totalQns={final.length} specificQns={individual} userRememberArray={rememberSelected[idx]} />))
                    
                }
            </div>
        </div>
        </>
    )
}
