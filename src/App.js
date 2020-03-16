import React from 'react';
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import store from "./store/index";
import LoginFormContainer from "./components/LoginFormContainer";
import SignupFormContainer from "./components/SignupFormContainer"

function App() {
  return (
    <Provider store={store}>
    <div>
     <p>Hello</p>
    </div>
    <Route exact path="/login" component={LoginFormContainer} />
    <Route exact path="/signup" component={SignupFormContainer} />
    </Provider>
  );
}

export default App;
