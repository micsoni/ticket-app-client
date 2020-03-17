import React from 'react';
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import store from "./store/index";
import LoginFormContainer from "./components/LoginFormContainer";
import SignupFormContainer from "./components/SignupFormContainer"
import Navbar from "./components/Navbar"
import EventsContainer from "./components/EventsContainer"
import EventDetails from "./components/EventDetails"

function App() {
  return (
    <Provider store={store}>
     <Navbar/>
      <Switch>
      <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/events" component={EventsContainer} />
    <Route exact path="/events/:id" component={EventDetails} />

      </Switch>
    
   
    </Provider>
  );
}

export default App;
