import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css"
import Difficulty from './components/Difficulty';
import Easy from './components/Easy';
import Hard from './components/Hard';
import Medium from './components/Medium';
import Any from './components/Any';
import Submit from './components/Submit';

export default function App() {
    return (
        <div className='app'>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Difficulty/>
                    </Route>
                    <Route exact path="/easy">
                        <Easy/>
                    </Route>
                    <Route exact path="/medium">
                        <Medium />
                    </Route>
                    <Route exact path="/hard">
                        <Hard/>
                    </Route>
                    <Route exact path="/any">
                        <Any/>
                    </Route>
                    <Route exact path="/submit">
                        <Submit />
                    </Route>
                </Switch>
            </Router>
					
		</div>
    )
}
