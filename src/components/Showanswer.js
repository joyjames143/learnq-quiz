import React from 'react'
import { Button,} from 'styled-button-component';
import "../componentsCSS/Showanswer.css"

export default function Showanswer({qnsNum,totalQns,specificQns,userRememberArray}) {
    return (
        <div className="topmost-showanswer-questions-main-div">
            <div className="showanswer-questions-main-div">
                    <div className="showanswer-question-test-div">
                        
                        <h2> {qnsNum} . {specificQns.questionText} </h2>
                        <Button>{specificQns.difficulty}</Button>
                    </div>
                    <div className="showanswer-four-options-div">
                        {specificQns.answerOptions.map(
                                (option,i)=>(
                                <Button disabled key={option.answerText+i} success={option.isCorrect?true:false} danger={userRememberArray[i]!=="notAttemted" && userRememberArray[i] !== option.answerText?true:false } dark >
                                    {option.answerText}
                                </Button>))
                        }
                    </div>
            </div>
        </div>
    )
}
