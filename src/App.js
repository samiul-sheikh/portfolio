import React from "react";
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";
import Projects from "./Components/Projects/Projects/Projects";
import Blog from "./Components/Blog/Blog";
import ContactMe from "./Components/ContactMe/ContactMe";
import About from "./Components/About/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import SocialMedia from "./Components/ReUse/SocialMedia/SocialMedia";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/blog">
                    <Blog />
                </Route>
                <Route path="/contact">
                    <ContactMe />
                </Route>
                <Route path="/portfolio">
                    <Portfolio />
                </Route>
                <Route path="*">
                    <NoMatch />
                </Route>
            </Switch>
            <SocialMedia></SocialMedia>
        </Router>
    );
}

export default App;
