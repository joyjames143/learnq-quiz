import {React, useState, useEffect} from 'react'
import "../componentsCSS/MainSkeleton.css"
import { Button,} from 'styled-button-component';
import { Link } from "react-router-dom"
import { FaHome } from "react-icons/fa";
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
        ["\\(", "\\)"]
      ],
      displayMath: [
        ["$$", "$$"],
        ["\\[", "\\]"]
      ]
    }
  };
export default function MainSkeleton({level,numberOfQuestions,bg,helperarray,rememberArrayHelper,totalNeeded,totalcompressedQuestions}) {
    
    const[currentQuestion,setCurrentQuestion] = useState(0)
    const[finalArray,setFinalArray] = useState([])
    const[totalCorrect,setTotalCorrect] = useState([])
    const[remeberOption,setRememberOption] = useState([])

    const optionClicked = (option,i) => {
        helperarray[currentQuestion] = option.isCorrect
        setTotalCorrect(helperarray)
        for (let k = 0;k < rememberArrayHelper[currentQuestion].length ;k++){
            if (k===i){
                rememberArrayHelper[currentQuestion][k] =  option.uniID
                setRememberOption(rememberArrayHelper)
            }
            else{
                rememberArrayHelper[currentQuestion][k] ="notAttemted"
                setRememberOption(rememberArrayHelper)
            }
            
        }
        nextquiz()
        
    }

    const previousquiz = () => {
        if (currentQuestion !== 0){
            setCurrentQuestion(currentQuestion-1)
        }
        console.log("total crt :", totalCorrect)
        console.log("selected :", remeberOption)
        console.log("finalarray :", finalArray)

    }
    const nextquiz = () => {
        if (currentQuestion !== totalNeeded - 1){
            setCurrentQuestion(currentQuestion + 1)
        }
    }
    useEffect(() => {
        if(finalArray.length !== numberOfQuestions){
            var item =Math.floor(Math.random()*totalcompressedQuestions.length)
            if (finalArray.includes(totalcompressedQuestions[item])===false){
                setFinalArray([...finalArray,totalcompressedQuestions[item]])
                setTotalCorrect([...totalCorrect,"notAttemted"])
                setRememberOption([...remeberOption,["notAttemted","notAttemted","notAttemted","notAttemted"]])
            }
            else{
                setFinalArray([...finalArray])
            }
        }
      },[finalArray]);
    return (
        <>
            <div >
                <img className="questions-main-bg-image" src={bg} alt=" "/>
            </div>
            <div className="home-icon-skel">
            <Link to="/">
                <FaHome className="fahome-icon-skel" size="2rem" onClick={()=>console.log("icon da")}/>
            </Link>
            </div>
            <div className="interaction-main-div">
            <div className="level-div" >
                <h2>LEVEL : {level} </h2>
            </div>
            <div className="questions-main-div">
                    <div className="question-numbers-div">
                        <h2>Question {currentQuestion+1} of {finalArray.length}</h2>
                    </div>
                    <div className="question-test-div">
                        <h2>{currentQuestion + 1} &nbsp;.&nbsp; {finalArray.length === totalNeeded ? 
                            <MathJaxContext version={3} config={config}>
                                <MathJax inline dynamic>{finalArray[currentQuestion].questionText}</MathJax>
                            </MathJaxContext>
                                :""
                            } 
                        </h2>
                    </div>
                    <div className="four-options-div">
                        {finalArray.length === totalNeeded ? 
                            finalArray[currentQuestion].answerOptions.map(
                                (option,i)=>(
                                <Button key={option.answerText+i} outline={remeberOption[currentQuestion][i] !== option.uniID?true:false} secondary={remeberOption[currentQuestion][i] === option.uniID?true:false} className="opt-buttons" onClick={()=>optionClicked(option,i)} secondary>
                                     <MathJaxContext version={3} config={config}>
                                            <MathJax inline dynamic>{option.answerText}</MathJax>
                                    </MathJaxContext>
                                </Button>))
                        :""}
                    </div>
            </div>
            <div className="prev-next-button">
                <Button m1  dark lg className="btn" onClick={previousquiz}>
                    Previous
                </Button>
                {currentQuestion !== totalNeeded-1?
                    <Button m1  dark lg className="btn" onClick={nextquiz}>
                         Next
                    </Button> : 
                    <Link to={{
                        pathname:"/submit",
                        state:{
                            crt:totalCorrect,
                            final:finalArray,
                            rememberSelected:remeberOption,
                        }
                    }}>
                        <Button m1  danger lg className="btn" >
                            SUBMIT
                        </Button>
                    </Link>
                    
                    
                }
            </div>
            </div>
        </>
    )
}
