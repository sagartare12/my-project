import React from 'react';
import Navbar from './Header/Navbar'
import Footer from './Footer/Footer'
import PharmaBookMain from './Components/PharmaBookMain'
import JobContents from './Components/JobsContents'
import AboutUs from './Components/AboutUs'
import {Route ,BrowserRouter as Router, Switch } from 'react-router-dom'
const MainRouter = () => {
    return (
       <Router>
           <Navbar />
           
                <Switch>
                     <Route path="/" exact component={JobContents} />
                    <Route path="/Home"  component={JobContents} />
                    <Route path="/Pharmacy"  component={PharmaBookMain} />
                    <Route path="/AboutUs" component={AboutUs} />
                </Switch>
                <Footer />
       </Router>
    );
}

export default MainRouter;
