import React from 'react';
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import store from "./store/index";
import LoginFormContainer from "./components/LoginFormContainer";
import SignupFormContainer from "./components/SignupFormContainer"
import Navbar from "./components/Navbar"

function App() {
  return (
    <Provider store={store}>
    <Navbar/>
    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
    </Provider>
  );
}

export default App;
