import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect,
    useLocation,
} from 'react-router-dom';
import { About } from './About';
import { Main } from './Main';
import { NoMatch } from './NoMatch';
import './app.css';

export default function App() {
    return (
        <Router>
            <nav className="indigo darken-2">
                <div className="nav-wrapper">
                    <ul>
                        <li>
                            <Link to="/" className="pressing">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className="pressing">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/test-url" className="pressing">
                                Test URL
                            </Link>
                        </li>
                        <li>
                            <Link to="/ab/cd" className="pressing">
                                Ab/Cd
                            </Link>
                        </li>
                        <li>
                            <Link to="/aboutA" className="pressing">
                                AboutA
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/old-match">
                    <Redirect to="/will-match" />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
        </Router>
    );
}
