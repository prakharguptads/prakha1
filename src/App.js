import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Card } from 'reactstrap';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import { actions } from "react-redux-form";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import AboutUs from "./AboutusComponent";
import Skills from "./SkillsComponent";
import './App.css';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Switch, Route, Redirect, withRouter, BrowserRouter } from "react-router-dom";
import {
  
  postFeedback,
  
} from "./ActionCreator";
import { ANDROID } from './android';
import { MACHINE } from './machine';
import { WEB } from './web';
import { ConfigureStore } from "./ConfigureStore";
import { Provider } from "react-redux";




export class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      android: ANDROID,
      web: WEB,
      machine: MACHINE
    };
  }

  render() {
    const Homepage =() => {
      return(
        <Home />
      );
    }
    const Skillspage =() => {
      return(
        <Skills web={this.state.web.filter((web) => web.featured)[0]}
        machine={this.state.machine.filter((machine) => machine.featured)[0]}
        android={this.state.android.filter((android) => android.featured)[0]} />
      );
    }
    const Aboutuspage =() => {
      return(
        <AboutUs />
      );
    }
    const mapDispatchToProps = dispatch => ({
    resetFeedbackForm: () => {
      dispatch(actions.reset("feedback"));
    },
    
    postFeedback: (
      firstname,
      lastname,
      telnum,
      email,
      agree,
      contactType,
      message
    ) =>
      dispatch(
        postFeedback(
          firstname,
          lastname,
          telnum,
          email,
          agree,
          contactType,
          message
        )
      )
    });
    const store = ConfigureStore();
    return (

      

      
      <div className="App">
        <Provider store={store}>
<BrowserRouter>
<Header /> 
      <Switch>
      <Route path ="/home" component={Homepage} />
      <Route
                  exact
                  path="/contactus"
                  component={() => (
                    <Contact
                      resetFeedbackForm={this.props.resetFeedbackForm}
                      postFeedback={this.props.postFeedback}
                    />
                  )}
                />
      <Route path ="/skills" component={Skillspage} />
      <Route path ="/aboutus" component={Aboutuspage} />
      <Redirect to="/home" />
      </Switch>
        
        
        
          
          
        <Footer />
        
        
</BrowserRouter>
</Provider>
</div>
    );
  }
}
export default App;
