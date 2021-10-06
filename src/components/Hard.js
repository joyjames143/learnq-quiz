import {React} from 'react'
import {questions} from "./Questions"
import easyBg from "../images/easyBg.jpg"
import MainSkeleton from "./MainSkeleton.js"


let totalNeeded = 4
let totalcompressedQuestions = []
let helperarray = []
let rememberArrayHelper = []
const initillyCalled = async() => {
    for (let i =0;i<questions.length;i++){
        if (questions[i].difficulty === "HARD"){
            totalcompressedQuestions.push(questions[i])
        }    
    }
    for(let j=0;j<totalNeeded;j++){
        helperarray.push("notAttemted")
        rememberArrayHelper.push(["notAttemted","notAttemted","notAttemted","notAttemted"])
    }
} 
initillyCalled()

export default function Hard() {
    return (
        <>
            <MainSkeleton 
                level={"HARD"}
                numberOfQuestions = {totalNeeded}
                bg = {easyBg}
                helperarray={helperarray} 
                rememberArrayHelper={rememberArrayHelper} 
                totalNeeded={totalNeeded} 
                totalcompressedQuestions={totalcompressedQuestions}
            />
        </>
    )
}