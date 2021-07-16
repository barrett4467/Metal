import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./components/NavBar";
import Landing from "./components/LandingPage";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import NoMatch from "./components/NoMatch";
import image from "./tree.jpg";

import { bubble as Menu } from "react-burger-menu";


function App() {
  return (
    <Menu width={"25px"} height={"45px"}>
      <a id="home" className="menu-item" href="/" component={Landing}>Home</a>
      
    </Menu>
    // <Router style={{backgroundImage: `url(${image})`}}>
    //   <div style={{backgroundImage: `url(${image})`}}>
    //     <NavBar />
    //     <Switch>
    //       <Route exact path="/" component={Landing} />
    //       <Route exact path="/About" component={About} />
    //       <Route exact path="/contact" component={Contact} />
    //       <Route exact path="/projects" component={Projects} />
    //       <Route component={NoMatch} />
    //     </Switch>
    //   </div>
    // </Router>
  );
}

export default App;
