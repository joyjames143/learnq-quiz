import React from 'react'
import { Link } from "react-router-dom"
import { Button,} from 'styled-button-component';
import "../componentsCSS/Difficulty.css"
import mainBg from "../images/mainBg.jpg"


export default function Difficulty() {
    return (
        <div className="img-main-home">
            <div >
                <img className="main-bg-image" src={mainBg} alt=" "/>
            </div>
            <div className="home-page-main-div">
                <div>
                    <h1>GAME OF KNOWLEDGE</h1>
                </div>
            <div className="main-four-buttons-div-with-heading">
                    <h3>select your prefered level</h3>
                    <div className= "main-four-buttons-div">
                            <Link to="/easy">
                                    <Button m1 info lg className="btn">
                                        EASY
                                    </Button>
                            </Link>
                            <Link to="/medium">
                                    <Button m1 info lg className="btn">
                                        MEDIUM
                                    </Button>
                            </Link>
                            <Link to="/hard">
                                    <Button m1 info lg className="btn">
                                        HARD
                                    </Button>
                            </Link>
                            <Link to="/any">
                                    <Button m1 info lg className="btn">
                                        ANY
                                    </Button>
                            </Link>
                    </div>
            </div>
            
                
            </div>
        </div>
    )
}
