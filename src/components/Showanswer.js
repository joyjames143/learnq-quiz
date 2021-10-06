import React from 'react'
import { Button,} from 'styled-button-component';
import "../componentsCSS/Showanswer.css"
import { MathJax, MathJaxContext } from "better-react-mathjax";

const config = {
    loader: { load: ["[tex]/html"] },
    tex: {
      packages: { "[+]": ["html"] },
      inlineMath: [
        ["$", "$"],
      ],
    }
  };

export default function Showanswer({qnsNum,totalQns,specificQns,userRememberArray}) {
    return (
        <div className="topmost-showanswer-questions-main-div">
            <div className="showanswer-questions-main-div">
                    <div className="showanswer-question-test-div">
                        
                        <h2> {qnsNum }<p>&nbsp;&nbsp;</p>
                        <MathJaxContext version={3} config={config}>
                                <MathJax inline dynamic>{specificQns.questionText}</MathJax>
                        </MathJaxContext>
                             </h2>
                        <Button className="SA-info-btn">{specificQns.difficulty}</Button>
                    </div>
                    <div className="showanswer-four-options-div">
                        {specificQns.answerOptions.map(
                                (option,i)=>(
                                <Button className="showanswer-individual-btn" disabled key={option.answerText+i} success={option.isCorrect?true:false} danger={userRememberArray[i]!=="notAttemted" && userRememberArray[i] !== option.answerText?true:false } dark >
                                    <MathJaxContext version={3} config={config}>
                                            <MathJax inline dynamic>{option.answerText}</MathJax>
                                    </MathJaxContext>
                                </Button>))
                        }
                    </div>
            </div>
        </div>
    )
}
