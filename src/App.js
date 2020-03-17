import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import store from "./store/index";
import LoginFormContainer from "./components/LoginFormContainer";
import SignupFormContainer from "./components/SignupFormContainer";
import Navbar from "./components/Navbar";
import EventCardsContainer from "./components/EventCardsContainer";
import EventDetailsContainer from "./components/EventDetailsContainer";
import TicketDetailsContainer from "./components/TicketDetailsContainer";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
        <Route exact path="/events" component={EventCardsContainer} />
        <Route path="/events/:id" component={EventDetailsContainer} />
        <Route path="/tickets/:id" component={TicketDetailsContainer} />
      </Switch>
    </Provider>
  );
}

export default App;
