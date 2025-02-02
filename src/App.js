import React from "react";
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom";
import store from "./store/index";

import LoginFormContainer from "./components/containers/LoginFormContainer";
import SignupFormContainer from "./components/containers/SignupFormContainer";
import Navbar from "./components/containers/Navbar";
import EventCardsContainer from "./components/containers/EventCardsContainer";
import TicketCardsContainer from "./components/containers/TicketCardsContainer";
import EventDetailsContainer from "./components/containers/EventDetailsContainer";
import TicketDetailsContainer from "./components/containers/TicketDetailsContainer";
import Homepage from "./components/containers/Homepage";
import ProfilePage from "./components/containers/ProfilePage";
import ErrorAlert from "./components/presentationals/ErrorAlert";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <ErrorAlert />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={LoginFormContainer} />
        <Route path="/signup" component={SignupFormContainer} />
        <Route path="/profile" component={ProfilePage} />
        <Route exact path="/events" component={EventCardsContainer} />
        <Route exact path="/tickets" component={TicketCardsContainer} />
        <Route path="/events/:id" component={EventDetailsContainer} />
        <Route path="/tickets/:id" component={TicketDetailsContainer} />
      </Switch>
    </Provider>
  );
}

export default App;
