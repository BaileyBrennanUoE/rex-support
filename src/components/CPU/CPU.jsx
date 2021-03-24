import React, { Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom';
import CPU_Quiz from '../CPU/CPU_Quiz';
import CPU_Video from '../CPU/CPU_Video';
import CPU_Revision from '../CPU/CPU_Revision';

class CPU extends Component {
    render() {
        return (
            <div className="CPU container flex">
                <Router>
                        <nav className="green darken-3">
                            <div className="nav-wrapper">
                                <a className="brand-logo center">CPU</a>
                                <ul>
                                    <li>
                                        <NavLink 
                                            to="/CPU_Video" 
                                            activeClassName="selected">
                                            Video
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/CPU_Revision"
                                            activeClassName="selected">
                                            Info Sheet    
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            to="/CPU_Quiz" 
                                            activeClassName="selected">
                                            Quiz
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>        
                        <Switch>
                            <Route path="/CPU_Video">
                                <CPU_Video />
                            </Route>
                            <Route path="/CPU_Revision">
                                <CPU_Revision />
                            </Route>
                            <Route path="/CPU_Quiz">
                                <CPU_Quiz />
                            </Route>
                        </Switch>
                </Router>
            </div>
        )
    }
}

export default CPU;