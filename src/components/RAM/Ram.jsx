import React, { Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom';
import RAM_Quiz from '../RAM/RAM_Quiz';
import RAM_Video from '../RAM/RAM_Video';
import RAM_Revision from '../RAM/RAM_Revision';

class Ram extends Component {
    render() {
        return (
            <div className="Ram container flex">
                <Router>
                        <nav className="green darken-3">
                            <div className="nav-wrapper">
                                <a className="brand-logo center">RAM & Storage</a>
                                <ul>
                                    <li>
                                        <NavLink 
                                            to="/RAM_Video" 
                                            activeClassName="selected">
                                            Video
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/RAM_Revision"
                                            activeClassName="selected">
                                            Info Sheet    
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink 
                                            to="/RAM_Quiz" 
                                            activeClassName="selected">
                                            Quiz
                                        </NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>        
                        <Switch>
                            <Route path="/RAM_Video">
                                <RAM_Video />
                            </Route>
                            <Route path="/RAM_Revision">
                                <RAM_Revision />
                            </Route>
                            <Route path="/RAM_Quiz">
                                <RAM_Quiz />
                            </Route>
                        </Switch>
                </Router>
            </div>
        )
    }
}

export default Ram;